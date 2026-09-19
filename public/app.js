/* Morphology Forge: UI layer. Rules live in engine.js, persistence in storage.js. */

import {
  BASES, INFERENCES, RELATIONS, PREFIXES, SUFFIXES, WORD_PARTS, BASE_VARIANTS,
} from './data.js';
import * as E from './engine.js';
import * as S from './shared/progress.js';

async function main() {
await S.initProgress('morphology');

/* A hint is available from the first second now, on a button. This is only the
   fallback for a child who has stalled and has not thought to ask: research says
   30-60s of no progress, then a STRUCTURAL hint, never the answer. */
const HINT_DELAY_MS = 45000;

/* A right answer moves on by itself. Long enough to read the word sum it just
   taught, short enough that it never feels like waiting. A wrong answer does NOT
   auto-advance: the explanation has to survive being read slowly. */
const ADVANCE_MS = 2000;

const el = (id) => document.getElementById(id);

let state = E.createState(S.readLocal());
let round = null;
let assembled = [];
let hintTimer = null;
let advanceTimer = null;
let hintShown = false;
let streak = 0;
let roundFinished = false;
let lastCorrect = false;

function save() {
  S.writeLocal('morphology', E.serialize(state));
}

/** Meaning of one piece, or null if we genuinely do not know.
 *
 * Returning null matters. The gloss used to fall back to the base's meaning for
 * any unrecognised piece, so `e + ject` taught that `e` means throw. Teaching a
 * confidently wrong etymology is worse than teaching nothing, and to a child who
 * cannot yet check it, it is indistinguishable from the truth.
 */
function meaningOf(part, base, word) {
  if (word?.partMeanings?.[part]) return word.partMeanings[part];
  if (PREFIXES[part]) return PREFIXES[part];
  if (SUFFIXES[part]) return SUFFIXES[part];
  if (WORD_PARTS[part]) return WORD_PARTS[part];
  if (base && part === base.form) return base.meaning;
  if (BASE_VARIANTS[part]) {
    const root = BASES.find((b) => b.form === BASE_VARIANTS[part]);
    if (root) return root.meaning;
  }
  return null;
}

/** The base a root form belongs to, following spelling variants. */
function baseFor(form) {
  return BASES.find((b) => b.form === form)
    ?? BASES.find((b) => b.form === BASE_VARIANTS[form]);
}

/* ------------------------------------------------------------------ rounds */

function newRound() {
  clearTimeout(hintTimer);
  clearTimeout(advanceTimer);
  hintShown = false;
  roundFinished = false;
  lastCorrect = false;
  assembled = [];
  round = E.pickRound(state, { bases: BASES, inferences: INFERENCES, relations: RELATIONS });
  el('feedback').hidden = true;
  el('feedback').className = 'feedback';
  delete el('feedback').dataset.retried;
  el('hint').hidden = true;
  el('hint-btn').hidden = false;
  el('hint-btn').disabled = false;
  el('next').hidden = true;
  renderProgress();

  if (round.kind === 'build') renderBuild();
  else if (round.kind === 'infer') renderInfer();
  else renderRelate();

  hintTimer = setTimeout(showHint, HINT_DELAY_MS);
  el('prompt').focus();
}

/* Two labels: a chip that carries the theme, and the plain instruction after
 * it. The instruction is word for word what it was before the page took up
 * football, because a child should never have to decode a metaphor to find out
 * what he is being asked to do. */
function setKind(chip, plain) {
  el('prompt-kind').innerHTML =
    `<span class="kind-chip">${chip}</span><span class="kind-plain">${plain}</span>`;
}

function renderProgress() {
  const done = E.masteredCount(state);
  el('mastered').textContent = done;
  el('accuracy').textContent = state.answered
    ? `${Math.round((state.correct / state.answered) * 100)}%` : '0%';
  el('streak').textContent = streak;
  el('streak').parentElement.classList.toggle('hot', streak >= 3);
}

function renderBuild() {
  const { base, word } = round;
  setKind('Build-up play', 'Build the word');
  // The tier-1 bases are whole English words, where "build means build" is a
  // true sentence and a useless one. Say something worth reading instead.
  const rootHint = base.origin === 'English'
    ? 'Every piece here is either a whole word or an ending you know.'
    : `<b>${base.form}</b> means <b>${base.meaning}</b> <span class="origin">(${base.origin})</span>`;
  el('prompt').innerHTML =
    `<span class="clue">${word.clue}</span><span class="root-hint">${rootHint}</span>`;

  const tray = E.trayFor(word, BASES);
  el('answer-area').innerHTML =
    '<div class="sum" id="sum"><span class="sum-empty">tap the pieces in order</span></div>' +
    `<div class="tray">${tray.map((p) =>
      `<button class="chip" type="button" aria-pressed="false" data-part="${p}">${p}</button>`).join('')}</div>` +
    '<div class="row"><button class="ghost" type="button" id="clear">clear</button>' +
    '<button class="primary" type="button" id="check">check</button></div>';

  el('answer-area').querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      if (chip.classList.contains('used')) return;
      chip.classList.add('used');
      chip.setAttribute('aria-pressed','true');
      assembled.push(chip.dataset.part);
      paintSum();
    });
  });
  el('clear').addEventListener('click', resetSum);
  el('check').addEventListener('click', checkBuild);
  paintSum();
}

function paintSum() {
  const sum = el('sum');
  if (!assembled.length) {
    sum.innerHTML = '<span class="sum-empty">tap the pieces in order</span>';
    return;
  }
  sum.innerHTML = assembled.map((p) => `<span class="sum-part">${p}</span>`).join('<span class="plus">+</span>');
}

function resetSum() {
  assembled = [];
  el('answer-area').querySelectorAll('.chip.used').forEach((c) => {c.classList.remove('used');c.setAttribute('aria-pressed','false');});
  paintSum();
}

function checkBuild() {
  const { base, word } = round;
  const correct = assembled.join('') === word.parts.join('');
  if (!correct) {
    // Wrong assembly is not a scored failure the first time: clear it and let
    // him try again. Only the second miss counts, which keeps one fumbled tap
    // from reading as "you got it wrong".
    if (!el('feedback').dataset.retried) {
      el('feedback').dataset.retried = '1';
      el('feedback').className = 'feedback nudge';
      el('feedback').innerHTML = 'Not quite that order. Try again.';
      el('feedback').hidden = false;
      resetSum();
      return;
    }
  }
  delete el('feedback').dataset.retried;
  // Only gloss the pieces whose meaning we actually know; silence beats a
  // plausible invention.
  const gloss = word.parts
    .map((p) => [p, meaningOf(p, base, word)])
    .filter(([, m]) => m)
    .map(([p, m]) => `<i>${p}</i> = ${m}`)
    .join(' · ');
  finish(correct, base.id, 'build',
    `<b>${word.parts.join(' + ')} → ${word.word}</b>` +
    (gloss ? `<span class="gloss">${gloss}</span>` : '') + (word.spellingNote ? `<span class="why">${word.spellingNote}</span>` : ''),
    correct ? '' : buildWhy(word, base));
}

/** Why a mis-assembled word sum was wrong: read the pieces back in order. */
function buildWhy(word, base) {
  const parts = word.parts
    .map((p) => [p, meaningOf(p, base, word)])
    .filter(([, m]) => m)
    .map(([p, m]) => `<b>${p}</b> = ${m}`)
    .join(', ');
  return parts
    ? `Read it in the order the meaning runs: ${parts}. Put together in that order they say what the clue said.`
    : '';
}

function renderInfer() {
  const it = round.item;
  setKind('Through ball', 'What does it mean?');
  el('prompt').innerHTML =
    `<span class="clue">Use the word parts to work out <b>${it.word}</b>.</span>` +
    `<span class="root-hint"><b>${it.root}</b> means <b>${it.rootMeaning}</b>. Work it out.</span>`;
  el('answer-area').innerHTML = `<div class="choices">${E.shuffleChoices(it).map(({text, index}) =>
    `<button class="choice" type="button" data-i="${index}">${text}</button>`).join('')}</div>`;
  el('answer-area').querySelectorAll('.choice').forEach((b) => {
    b.addEventListener('click', () => {
      const baseId = baseFor(it.root)?.id ?? it.root;
      const correct = Number(b.dataset.i) === it.answer;
      if (!correct) b.classList.add('chosen-wrong');
      finish(correct, baseId, 'infer',
        `<b>${it.word}</b>: ${it.options[it.answer].toLowerCase()}`,
        correct ? '' : it.why);
    });
  });
}

function renderRelate() {
  const it = round.item;
  const family = it.mode === 'family';
  setKind('Offside call', family ? 'Real word family, or a trap?' : 'Real word sum, or a trap?');
  el('prompt').innerHTML = family
    ? `<span class="clue">Is <b>${it.a}</b> in the same word family as <b>${it.guess}</b>?</span><span class="root-hint">A historical relationship is different from a literal word sum.</span>`
    : `<span class="clue">Is <b>${it.a}</b> really built from <b>${it.guess}</b>?</span><span class="root-hint">Some of these look like word sums and are not.</span>`;
  el('answer-area').innerHTML =
    `<div class="choices two"><button class="choice" type="button" data-v="1">${family ? 'Yes, they are in the same word family' : 'Yes, that is its word sum'}</button>` +
    `<button class="choice" type="button" data-v="0">${family ? 'No, they only look related' : 'No, it just looks that way'}</button></div>`;
  el('answer-area').querySelectorAll('.choice').forEach((b) => {
    b.addEventListener('click', () => {
      const correct = (b.dataset.v === '1') === it.related;
      if (!correct) b.classList.add('chosen-wrong');
      // The note goes in the `why` slot rather than inline, because these notes
      // open with their own "Yes." or "Same trap.", and two verdicts running
      // into each other on one line reads as a contradiction.
      finish(correct, null, 'relate', '', it.note);
    });
  });
}

/* ------------------------------------------------------------------- hints */

/** The authored hint for this round: structural, and never the answer.
 *
 * Build rounds compose theirs from the base's family, which is why the family
 * lives on the base rather than on each of its words. The family words are
 * filtered against the word being asked about, so a hint can never hand over
 * the thing it is hinting at.
 */
function hintFor(r) {
  if (r.kind === 'build') {
    const first = r.word.parts[0];
    const m = meaningOf(first, r.base, r.word);
    return {
      text: m
        ? `Start with the piece that means “${m}”.`
        : `Start with <b>${r.base.form}</b> itself, then decide what goes around it.`,
      family: r.base.family ?? [],
      exclude: r.word.word,
    };
  }
  const it = r.item;
  const fallback = r.kind === 'infer'
    ? { text: `Take it apart first. Find <b>${it.root}</b> inside it, then read what is stuck to the front.`, family: [] }
    : { text: 'Ask yourself: is the leftover piece a real word or a real root? If it is neither, it is a trap.', family: [] };
  const h = it.hint ?? fallback;
  return { text: h.text, family: h.family ?? [], exclude: it.word ?? it.a };
}

function showHint() {
  if (hintShown || !round || roundFinished) return;
  hintShown = true;
  clearTimeout(hintTimer);

  const { text, family, exclude } = hintFor(round);
  const words = family.filter(([w]) => w.toLowerCase() !== String(exclude).toLowerCase());
  el('hint').innerHTML = `<p class="hint-text">${text}</p>` + (words.length
    ? `<ul class="hint-family">${words.map(([w, g]) =>
      `<li><b>${w}</b><span>${g}</span></li>`).join('')}</ul>` : '');
  el('hint').hidden = false;
  el('hint-btn').disabled = true;
}

/* ------------------------------------------------------------------- score */

function finish(correct, baseId, kind, explanation, why) {
  if (roundFinished || !round) return;
  roundFinished = true; lastCorrect = correct;
  clearTimeout(hintTimer);
  // Taking a hint keeps the answer out of the promotion window, so asking for
  // help can never push him into harder material than he asked for.
  E.recordAnswer(state, { correct, baseId, kind, hinted: hintShown });
  streak = correct ? streak + 1 : 0;
  save();

  const fb = el('feedback');
  fb.className = `feedback ${correct ? 'good' : 'bad'}`;
  fb.innerHTML = `<span class="verdict">${correct ? scored() : missed()}</span> ${explanation}`
    + (why ? `<span class="why">${why}</span>` : '');
  fb.hidden = false;
  el('hint-btn').hidden = true;
  el('answer-area').querySelectorAll('button').forEach((b) => { b.disabled = true; });
  renderProgress();

  el('next').hidden = false;
  el('next').focus();
  queueAdvance();

}

/* Variety, so the same word does not land every single time, and so a miss
 * sounds like a miss in a game rather than a mark in a book. Nothing here is
 * ever unkind: off the post is still a shot he took. */
const SCORED = ['Goal.', 'Back of the net.', 'Top corner.', 'Buried it.', 'That is in.'];
const MISSED = ['Off the post.', 'Saved.', 'Just wide.', 'Off the bar.'];

function scored() {
  if (streak >= 5) return 'Five straight.';
  if (streak === 3) return 'Hat-trick.';
  return SCORED[(state.correct - 1) % SCORED.length] ?? 'Goal.';
}
function missed() {
  return MISSED[state.answered % MISSED.length];
}

/* ------------------------------------------------------------------- boot */

function queueAdvance() {
  clearTimeout(advanceTimer);
  el('feedback').classList.remove('advancing');
  if (roundFinished && lastCorrect && S.getAutoAdvance()) {
    el('feedback').classList.add('advancing');
    advanceTimer = setTimeout(newRound, ADVANCE_MS);
  }
}
const autoAdvance=el('auto-advance');
autoAdvance.checked=S.getAutoAdvance();
autoAdvance.addEventListener('change',()=>{S.setAutoAdvance(autoAdvance.checked);queueAdvance();});
el('next').addEventListener('click',newRound);
el('hint-btn').addEventListener('click',showHint);
const cancel=()=>{clearTimeout(hintTimer);clearTimeout(advanceTimer);};
document.addEventListener('progress-retired',cancel);
document.addEventListener('progress-loaded',()=>{cancel();state=E.createState(S.readLocal());streak=0;autoAdvance.checked=S.getAutoAdvance();newRound();});
window.addEventListener('pagehide',cancel);
newRound();
}
main().catch(error=>{const p=document.createElement('p');p.setAttribute('role','alert');p.textContent=error.message;document.querySelector('.wrap').prepend(p);});
