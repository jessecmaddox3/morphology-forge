/* Placement, adaptive practice and mastery for Morphology Forge.
 * Three initial probes look for unassisted evidence. Later practice mixes
 * familiar and harder material up to a moving ceiling. The 85% target is a
 * design heuristic, not a validated educational outcome.
 */
import { BASES, INFERENCES, RELATIONS } from './data.js';
const BASE_IDS = new Set(BASES.map(b => b.id));
const ITEM_IDS = new Set([
  ...BASES.flatMap(b => b.words.map(w => `build:${w.word}`)),
  ...INFERENCES.map(i => `infer:${i.word}`),
  ...RELATIONS.map(r => `relate:${r.a}`),
]);
const object = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const counter = v => Number.isSafeInteger(v) && v >= 0 && v <= 1000000 ? v : 0;

export const TARGET_ACCURACY = 0.85;
export const WINDOW = 6;          // rolling window the adaptation reads
export const PROBE_TIERS = [1, 2, 3];

export function createState(saved = {}) {
  const raw = object(saved) ? saved : {};
  const probeScore = (Array.isArray(raw.probeScore) ? raw.probeScore : [])
    .filter(p => object(p) && [1, 2, 3].includes(p.tier) && typeof p.correct === 'boolean')
    .slice(0, 3).map(p => ({tier:p.tier, correct:p.correct, hinted:p.hinted === true}));
  const demonstrated = new Map();
  for (const id of Object.keys(object(raw.demonstrated) ? raw.demonstrated : {}).sort()) {
    const kinds = raw.demonstrated[id];
    if (BASE_IDS.has(id) && Array.isArray(kinds)) demonstrated.set(id, new Set(kinds.filter(k => k === 'build' || k === 'infer')));
  }
  const answered = counter(raw.answered);
  return {
    tier: [1, 2, 3].includes(raw.tier) ? raw.tier : 1,
    placed: raw.placed === true || probeScore.length === 3,
    probeIndex: probeScore.length, probeScore,
    relief: raw.relief === true,
    recent: (Array.isArray(raw.recent) ? raw.recent : []).filter(v => typeof v === 'boolean').slice(-WINDOW),
    demonstrated,
    usedItems: new Set((Array.isArray(raw.usedItems) ? raw.usedItems : []).filter(id => ITEM_IDS.has(id))),
    answered, correct: Math.min(counter(raw.correct), answered),
  };
}

export function serialize(state) {
  return {
    tier: state.tier,
    placed: state.placed,
    probeIndex: state.probeIndex,
    probeScore: state.probeScore,
    relief: state.relief,
    recent: [...state.recent],
    demonstrated: Object.fromEntries(
      [...state.demonstrated].map(([k, v]) => [k, [...v]])),
    usedItems: [...state.usedItems],
    answered: state.answered,
    correct: state.correct,
  };
}

/** Mastery requires an unassisted build and inference for the same base. */
export function isMastered(state, baseId) {
  const kinds = state.demonstrated.get(baseId);
  return !!kinds?.has('build') && kinds.has('infer');
}

export function masteredCount(state) {
  let n = 0;
  for (const id of state.demonstrated.keys()) if (isMastered(state, id)) n += 1;
  return n;
}

export function accuracy(state) {
  if (!state.recent.length) return 1;
  return state.recent.filter(Boolean).length / state.recent.length;
}

/** The hardest probe tier answered correctly without a hint. */
export function highestCleared(state) {
  return state.probeScore.reduce((hi, p) => (p.correct && !p.hinted && p.tier > hi ? p.tier : hi), 0);
}

/** Placement rises through levels 1, 2 and 3, capped one step above the
 * hardest unassisted success. Later practice follows the adaptive ceiling,
 * with one easier round after a miss.
 */
export function nextTier(state) {
  if (!state.placed) {
    const wanted = PROBE_TIERS[Math.min(state.probeIndex, PROBE_TIERS.length - 1)];
    return Math.min(wanted, highestCleared(state) + 1);
  }
  // Immediate relief is separate from the rolling-window adjustment below.
  if (state.relief) return Math.max(1, state.tier - 1);
  return state.tier;
}

/** After three probes, set the ceiling from unassisted evidence. */
export function recordProbe(state, correct, tier, hinted = false) {
  state.probeScore.push({ tier, correct, hinted });
  state.probeIndex += 1;
  if (state.probeIndex < PROBE_TIERS.length) return;

  // These are editorial difficulty levels, not school-grade measurements.
  state.tier = Math.max(1, highestCleared(state));
  state.placed = true;
}

/** Adapt after each scored round once placement is done. */
export function recordAnswer(state, { correct, baseId, kind, hinted = false }) {
  // Record the capped probe tier before changing placement state.
  const servedTier = nextTier(state);

  correct = correct === true; hinted = hinted === true;
  state.answered = Math.min(1000000, state.answered + 1);
  if (correct) state.correct = Math.min(state.answered, state.correct + 1);

  if (correct && !hinted && BASE_IDS.has(baseId) && ['build', 'infer'].includes(kind)) {
    if (!state.demonstrated.has(baseId)) state.demonstrated.set(baseId, new Set());
    state.demonstrated.get(baseId).add(kind);
  }

  state.relief = !correct;

  if (!state.placed) {
    recordProbe(state, correct, servedTier, hinted);
    return;
  }

  // Hinted answers stay outside the adaptive window in either direction.
  if (hinted) return;

  state.recent.push(correct);
  if (state.recent.length > WINDOW) state.recent.shift();
  if (state.recent.length < WINDOW) return;

  const acc = accuracy(state);
  // Move one level when the full window is above 90% or below 60%.
  if (acc > 0.9 && state.tier < 3) {
    state.tier += 1;
    state.recent = [];
  } else if (acc < 0.6 && state.tier > 1) {
    state.tier -= 1;
    state.recent = [];
  }
}

/** Interleave available build, inference and relation rounds. */
export function pickRound(state, { bases, inferences, relations }, rng = Math.random) {
  const tier = nextTier(state);
  const fresh = (id) => !state.usedItems.has(id);

  // Placement uses the exact probe level; later practice mixes levels up to the ceiling.
  const match = state.placed ? (t) => t <= tier : (t) => t === tier;

  function available() {
  const buildPool = bases
    .filter((b) => match(b.tier) && !isMastered(state, b.id))
    .flatMap((b) => b.words.map((w) => ({ kind: 'build', base: b, word: w, id: `build:${w.word}` })))
    .filter((r) => fresh(r.id));

  const inferPool = inferences
    .filter((i) => match(i.tier))
    .map((i) => ({ kind: 'infer', item: i, id: `infer:${i.word}` }))
    .filter((r) => fresh(r.id));

  const relatePool = relations
    .filter((r) => match(r.tier))
    .map((r) => ({ kind: 'relate', item: r, id: `relate:${r.a}` }))
    .filter((r) => fresh(r.id));

  let pools = [buildPool, inferPool, relatePool].filter((p) => p.length);

  // Prefer build questions during placement when available. Level 3 uses inference and relations.
  if (!state.placed && buildPool.length) pools = [buildPool];

  return pools;
  }
  let pools = available();
  if (!pools.length) {
    state.usedItems.clear();
    pools = available();
  }
  if (!pools.length) throw new Error('No playable rounds are available at this level. Check the curriculum.');

  const pool = pools[Math.floor(rng() * pools.length)];
  const round = pool[Math.floor(rng() * pool.length)];
  state.usedItems.add(round.id);
  // The easier round that a miss bought has now been served. Spent here rather
  // than in recordAnswer so that it survives a reload taken between the two.
  state.relief = false;
  return round;
}

/** Shuffle a copy, preserving each option's authored answer identity. */
export function shuffled(values, rng = Math.random) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const value = rng();
    const j = Math.floor((Number.isFinite(value) ? Math.min(0.999999999999, Math.max(0, value)) : 0) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function shuffleChoices(item, rng = Math.random) {
  return shuffled(item.options.map((text, index) => ({text, index})), rng);
}
/** Build the chip tray with every real part and a few plausible decoys. */
export function trayFor(word, bases, rng = Math.random) {
  const real = word.parts;
  const others = bases.flatMap(b => b.words.flatMap(w => w.parts)).filter(p => !real.includes(p));
  const decoys = shuffled([...new Set(others)], rng).slice(0, Math.min(4, Math.max(2, real.length)));
  return shuffled([...real, ...decoys], rng);
}
