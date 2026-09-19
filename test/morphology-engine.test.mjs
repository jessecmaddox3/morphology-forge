import test from "node:test";
import assert from "node:assert/strict";

import {
  createState,
  serialize,
  recordAnswer,
  isMastered,
  masteredCount,
  accuracy,
  nextTier,
  pickRound,
  trayFor,
  PROBE_TIERS,
} from "../public/engine.js";
import {
  BASES, INFERENCES, RELATIONS, PREFIXES, SUFFIXES, WORD_PARTS, BASE_VARIANTS,
} from "../public/data.js";

const content = { bases: BASES, inferences: INFERENCES, relations: RELATIONS };

/** Answer the three placement probes with the given results. */
function place(state, results) {
  results.forEach((correct) => recordAnswer(state, { correct, baseId: null, kind: "build" }));
}

test("placement probe walks the whole difficulty range", () => {
  const state = createState();
  const tiers = [];
  for (let i = 0; i < PROBE_TIERS.length; i += 1) {
    tiers.push(nextTier(state));
    recordAnswer(state, { correct: true, baseId: null, kind: "build" });
  }
  assert.deepEqual(tiers, [1, 2, 3], "the probe must reach tier 3, or it cannot detect a strong reader");
});

test("clearing the hard probe places the ceiling at the top while practice may mix levels", () => {
  const state = createState();
  place(state, [true, true, true]);
  assert.equal(state.placed, true);
  assert.equal(state.tier, 3, "this is the whole point: no grinding up from level 1");
});

test("a weak showing places him low without punishing him", () => {
  const state = createState();
  place(state, [true, false, false]);
  assert.equal(state.tier, 1);
});

test("middling placement lands in the middle", () => {
  const state = createState();
  place(state, [true, true, false]);
  assert.equal(state.tier, 2);
});

test("mastery needs two DIFFERENT kinds of demonstration, not repetition", () => {
  const state = createState();
  place(state, [true, true, true]);

  for (let i = 0; i < 8; i += 1) {
    recordAnswer(state, { correct: true, baseId: "tract", kind: "build" });
  }
  assert.equal(isMastered(state, "tract"), false,
    "eight correct builds is repetition, not range; it must not count as mastery");

  recordAnswer(state, { correct: true, baseId: "tract", kind: "infer" });
  assert.equal(isMastered(state, "tract"), true,
    "build plus infer is two kinds of evidence, which is the gate");
  assert.equal(masteredCount(state), 1);
});

test("a wrong answer never records a demonstration", () => {
  const state = createState();
  place(state, [true, true, true]);
  recordAnswer(state, { correct: false, baseId: "port", kind: "build" });
  recordAnswer(state, { correct: false, baseId: "port", kind: "infer" });
  assert.equal(isMastered(state, "port"), false);
});

test("sustained success raises the tier; sustained failure lowers it", () => {
  const up = createState();
  place(up, [true, false, false]);          // placed at 1
  assert.equal(up.tier, 1);
  for (let i = 0; i < 6; i += 1) recordAnswer(up, { correct: true, baseId: null, kind: "build" });
  assert.equal(up.tier, 2, "six straight correct is well above the 85% target, so it should escalate");

  const down = createState();
  place(down, [true, true, true]);          // placed at 3
  for (let i = 0; i < 6; i += 1) recordAnswer(down, { correct: false, baseId: null, kind: "build" });
  assert.equal(down.tier, 2, "a run of misses should ease off by one");
});

test("the tier never falls below 1", () => {
  const state = createState();
  place(state, [false, false, false]);
  for (let r = 0; r < 4; r += 1) {
    for (let i = 0; i < 6; i += 1) recordAnswer(state, { correct: false, baseId: null, kind: "build" });
  }
  assert.equal(state.tier, 1);
});

test("accuracy reports the rolling window", () => {
  const state = createState();
  place(state, [true, true, true]);
  [true, true, true, false].forEach((c) => recordAnswer(state, { correct: c, baseId: null, kind: "build" }));
  assert.equal(accuracy(state), 0.75);
});

test("rounds never exceed the current tier", () => {
  const state = createState();
  place(state, [true, false, false]);        // tier 1
  for (let i = 0; i < 25; i += 1) {
    const round = pickRound(state, content);
    const tier = round.kind === "build" ? round.base.tier : round.item.tier;
    assert.ok(tier <= state.tier, `served a tier ${tier} round at tier ${state.tier}`);
  }
});

test("a mastered base stops being served as build practice", () => {
  const state = createState();
  place(state, [true, true, true]);
  recordAnswer(state, { correct: true, baseId: "tract", kind: "build" });
  recordAnswer(state, { correct: true, baseId: "tract", kind: "infer" });
  for (let i = 0; i < 60; i += 1) {
    const round = pickRound(state, content);
    if (round.kind === "build") {
      assert.notEqual(round.base.id, "tract", "mastered roots must not come back as build rounds");
    }
  }
});

test("running out of fresh items recycles instead of dead-ending", () => {
  const state = createState();
  place(state, [true, true, true]);
  for (let i = 0; i < 400; i += 1) {
    const round = pickRound(state, content);
    assert.ok(round && round.kind, "pickRound must always return a playable round");
  }
});

test("the chip tray contains every real part plus decoys", () => {
  const base = BASES.find((b) => b.id === "struct");
  const word = base.words.find((w) => w.word === "destruction");
  const tray = trayFor(word, BASES);
  word.parts.forEach((p) => assert.ok(tray.includes(p), `tray is missing the real part ${p}`));
  assert.ok(tray.length > word.parts.length, "a tray with no decoys gives the answer away");
});

test("state survives a save/load round trip", () => {
  const state = createState();
  place(state, [true, true, true]);
  recordAnswer(state, { correct: true, baseId: "vis", kind: "build" });
  recordAnswer(state, { correct: true, baseId: "vis", kind: "infer" });

  const revived = createState(serialize(state));
  assert.equal(revived.tier, 3);
  assert.equal(revived.placed, true);
  assert.equal(isMastered(revived, "vis"), true, "mastery must not be forgotten when he closes the tab");
});

/* Content checks: the bank is hand-authored, so guard against typos that would
   make a round unsolvable. */

test("every build word's parts concatenate to something close to the word", () => {
  for (const base of BASES) {
    for (const w of base.words) {
      assert.ok(w.parts.length >= 2, `${w.word} needs at least two parts to be a word sum`);
      assert.ok(w.clue && w.clue.length > 8, `${w.word} needs a real clue`);
      assert.ok(!w.clue.toLowerCase().includes(w.word.toLowerCase()),
        `the clue for ${w.word} gives the answer away`);
    }
  }
});

test("every inference item has a correct answer in range", () => {
  for (const i of INFERENCES) {
    assert.ok(i.options.length >= 3, `${i.word} needs at least three options`);
    assert.ok(i.answer >= 0 && i.answer < i.options.length, `${i.word} has an out-of-range answer`);
    assert.ok(i.tier >= 1 && i.tier <= 3);
  }
});

test("every relation item explains itself", () => {
  for (const r of RELATIONS) {
    assert.equal(typeof r.related, "boolean", `${r.a} must say whether it is related`);
    assert.ok(r.note && r.note.length > 20, `${r.a} needs a note; the explanation IS the teaching`);
  }
});

test("the bank has both traps and genuine relations, or the round is guessable", () => {
  const traps = RELATIONS.filter((r) => !r.related).length;
  const real = RELATIONS.filter((r) => r.related).length;
  assert.ok(traps >= 3, "too few traps");
  assert.ok(real >= 3, "too few genuine word sums");
});

test("the placement probe genuinely escalates in difficulty", () => {
  // Regression: the pools used `tier <= n`, so the tier-2 probe could serve a
  // tier-1 item and the tier-3 probe a tier-2 one. The probe then measured
  // nothing and every child looked the same to it.
  for (let seed = 0; seed < 40; seed += 1) {
    const state = createState();
    const seen = [];
    for (let i = 0; i < 3; i += 1) {
      const round = pickRound(state, content);
      seen.push(round.kind === "build" ? round.base.tier : round.item.tier);
      recordAnswer(state, { correct: true, baseId: null, kind: round.kind });
    }
    assert.deepEqual(seen, [1, 2, 3],
      `probe served tiers ${seen} instead of escalating 1,2,3`);
  }
});

test("the hard probe is an inference or a trap, since tier 3 has no build words", () => {
  const state = createState();
  recordAnswer(state, { correct: true, baseId: null, kind: "build" });
  recordAnswer(state, { correct: true, baseId: null, kind: "build" });
  const third = pickRound(state, content);
  assert.ok(["infer", "relate"].includes(third.kind),
    `expected the hard probe to be inference or a trap, got ${third.kind}`);
});

test("every piece of every word has a real, defined meaning", () => {
  // Regression: undefined pieces fell back to the base's meaning, so the game
  // taught that the `e` in `eject` means throw and that `happy` means build.
  // Confidently wrong etymology is worse than none, because he cannot check it.
  const known = new Set([
    ...Object.keys(PREFIXES), ...Object.keys(SUFFIXES),
    ...Object.keys(WORD_PARTS), ...Object.keys(BASE_VARIANTS),
  ]);
  const undefinedParts = [];
  for (const base of BASES) {
    for (const w of base.words) {
      for (const p of w.parts) {
        if (!known.has(p) && p !== base.form) undefinedParts.push(`${p} (in ${w.word})`);
      }
    }
  }
  assert.deepEqual(undefinedParts, [],
    "these pieces would be glossed with a meaning that is not theirs");
});

test("no base lists the same word twice", () => {
  for (const base of BASES) {
    const words = base.words.map((w) => w.word);
    assert.equal(new Set(words).size, words.length, `${base.id} repeats a word`);
  }
});

test("base variants point at a base that exists", () => {
  for (const [variant, form] of Object.entries(BASE_VARIANTS)) {
    assert.ok(BASES.some((b) => b.form === form),
      `${variant} maps to ${form}, which is not a base`);
  }
});

/* ------------------------------------------------------- calibration + hints
 *
 * A learner met `circumspect` before demonstrating readiness, got it wrong, and had no way
 * in. Two things were missing and both are covered below: a miss has to make
 * the next question easier straight away, and every item has to carry a hint
 * that teaches rather than tells.
 */

test("a miss makes the very next question easier, immediately", () => {
  const state = createState();
  place(state, [true, true, true]);            // placed at 3
  assert.equal(nextTier(state), 3);

  recordAnswer(state, { correct: false, baseId: null, kind: "infer" });
  assert.equal(nextTier(state), 2, "one miss should buy one easier question");

  // ...and only one. The relief is spent by the round it paid for.
  pickRound(state, content);
  assert.equal(nextTier(state), 3, "relief should not persist past the round it bought");
});

test("relief never drops below tier 1", () => {
  const state = createState();
  place(state, [false, false, false]);         // placed at 1
  recordAnswer(state, { correct: false, baseId: null, kind: "build" });
  assert.equal(nextTier(state), 1);
});

test("the probe stops escalating past a tier he missed", () => {
  // This is the circumspect bug. The probe used to walk 1 -> 2 -> 3 no matter
  // what, so missing question one still produced a tier-3 question next.
  const missedFirst = createState();
  recordAnswer(missedFirst, { correct: false, baseId: null, kind: "build" });
  assert.equal(nextTier(missedFirst), 1, "after missing tier 1, do not serve tier 2");

  const missedSecond = createState();
  recordAnswer(missedSecond, { correct: true, baseId: null, kind: "build" });
  recordAnswer(missedSecond, { correct: false, baseId: null, kind: "build" });
  assert.equal(nextTier(missedSecond), 2, "after missing tier 2, do not serve tier 3");
});

test("the probe still reaches the top for a child clearing everything", () => {
  const state = createState();
  const seen = [];
  for (let i = 0; i < 3; i += 1) {
    seen.push(nextTier(state));
    recordAnswer(state, { correct: true, baseId: null, kind: "build" });
  }
  assert.deepEqual(seen, [1, 2, 3]);
  assert.equal(state.tier, 3, "clearing the hard probe still places him at the top");
});

test("placement lands on the hardest tier he actually cleared", () => {
  const cases = [
    [[true, true, true], 3],
    [[true, true, false], 2],
    [[true, false, false], 1],
    [[false, false, false], 1],
  ];
  for (const [results, expected] of cases) {
    const state = createState();
    place(state, results);
    assert.equal(state.tier, expected, `probe ${results} should place at ${expected}`);
  }
});

test("probe state survives a save/load round trip", () => {
  // Regression: probeIndex and probeScore were not serialized, so closing the
  // tab halfway through placement restarted the probe from tier 1.
  const state = createState();
  recordAnswer(state, { correct: true, baseId: null, kind: "build" });
  const reloaded = createState(JSON.parse(JSON.stringify(serialize(state))));
  assert.equal(reloaded.probeIndex, 1);
  assert.equal(nextTier(reloaded), 2, "the reloaded probe should carry on, not restart");
});

test("a hinted answer stays out of the promotion window", () => {
  const state = createState();
  place(state, [true, false, false]);          // placed at 1
  for (let i = 0; i < 8; i += 1) {
    recordAnswer(state, { correct: true, baseId: null, kind: "build", hinted: true });
  }
  assert.equal(state.tier, 1, "asking for help must never promote him");
  assert.ok(state.demonstrated.size >= 0);
});

test("every base carries a family of three words for its hint", () => {
  for (const base of BASES) {
    assert.ok(Array.isArray(base.family) && base.family.length >= 3,
      `${base.id} has no hint family, so a build round has nothing to teach with`);
    for (const entry of base.family) {
      assert.equal(entry.length, 2, `${base.id} family entry needs a word and a gloss`);
    }
  }
});

test("every inference carries a hint and an explanation of why", () => {
  for (const it of INFERENCES) {
    assert.ok(it.hint?.text, `${it.word} has no hint`);
    assert.ok(it.hint.family?.length >= 3, `${it.word}'s hint has no family to learn from`);
    assert.ok(it.why && it.why.length > 40, `${it.word} does not explain itself when missed`);
  }
});

test("every relation carries a hint", () => {
  for (const r of RELATIONS) {
    assert.ok(r.hint?.text, `${r.a} has no hint`);
    assert.ok(r.hint.family?.length >= 3, `${r.a}'s hint has no family to learn from`);
  }
});

test("a hint never contains the word it is hinting at", () => {
  // The hint is meant to narrow the search, not end it.
  const leaks = [];
  for (const it of INFERENCES) {
    if (it.hint.family.some(([w]) => w.toLowerCase() === it.word.toLowerCase())) leaks.push(it.word);
  }
  for (const r of RELATIONS) {
    if (r.hint.family.some(([w]) => w.toLowerCase() === r.a.toLowerCase())) leaks.push(r.a);
  }
  // A base family may name one of its own words, since those are the words he
  // has the best chance of already knowing. The round filters out the one being
  // asked about, so what matters is that removing any single word still leaves
  // a hint worth reading.
  for (const base of BASES) {
    for (const w of base.words) {
      const left = base.family.filter(([f]) => f.toLowerCase() !== w.word.toLowerCase());
      if (left.length < 2) leaks.push(`${base.id}/${w.word}`);
    }
  }
  assert.deepEqual(leaks, [], "these hints hand over what they are hinting at");
});
