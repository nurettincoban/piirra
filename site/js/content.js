// Loads all bundled content and offers small selectors over it.

import { WORDS_A } from '../data/words-a.js';
import { WORDS_B } from '../data/words-b.js';
import { SENTENCES } from '../data/sentences.js';
import { VERBS } from '../data/verbs.js';
import { DIALOGUES } from '../data/dialogues.js';
import { PHRASES, PHRASE_CATS } from '../data/phrases.js';
import { SCENES } from '../data/scenes.js';
import { GRAMMAR } from '../data/grammar.js';
import { TOPICS } from './i18n.js';
import { settings, progress, isKnown, isDue, item } from './store.js';
import { shuffle } from './ui.js';

// One word per picture and one picture per word, so every drawing has a single answer.
const seen = new Set();
const seenArt = new Set();
export const WORDS = [...WORDS_A, ...WORDS_B].filter((w) => {
  if (!w || !w.fi || !w.art || seen.has(w.fi) || seenArt.has(w.art)) return false;
  seen.add(w.fi);
  seenArt.add(w.art);
  return true;
}).map((w) => ({ ...w, key: 'w:' + w.fi, lv: w.lv || 1, topic: TOPICS[w.topic] ? w.topic : 'tools', ex: w.ex || null }));

export const WORD_BY_FI = new Map(WORDS.map((w) => [w.fi, w]));
export { SENTENCES, VERBS, DIALOGUES, PHRASES, PHRASE_CATS, SCENES, GRAMMAR };
export const GRAMMAR_BY_ID = new Map(GRAMMAR.map((g) => [g.id, g]));

// Levels included in practice for the chosen level.
export function activeLevels(level = settings.level) {
  return settings.mixLower ? [1, 2, 3].filter((l) => l <= level) : [level];
}
export const inLevels = (x, levels = activeLevels()) => levels.includes(x.lv || 1);

export function topicsFor(level) {
  const map = new Map();
  for (const w of WORDS) if (w.lv === level) {
    if (!map.has(w.topic)) map.set(w.topic, []);
    map.get(w.topic).push(w);
  }
  return [...map.entries()].sort((a, b) => b[1].length - a[1].length).map(([topic, words]) => ({ topic, words }));
}

export function levelStats(level) {
  const list = WORDS.filter((w) => w.lv === level);
  return { total: list.length, known: list.filter((w) => isKnown(w.key)).length, met: list.filter((w) => progress[w.key]).length };
}

export function dueWords() {
  const now = Date.now();
  return WORDS.filter((w) => isDue(w.key, now));
}

// Spaced-repetition aware selection: due first, then new, then the least-recently seen.
export function pickItems(pool, count, keyOf = (x) => x.key, { preferNew = 0.5 } = {}) {
  const now = Date.now();
  const eligible = pool.filter((x) => !item(keyOf(x))?.learned);
  const due = shuffle(eligible.filter((x) => isDue(keyOf(x), now)));
  const fresh = shuffle(eligible.filter((x) => !item(keyOf(x))));
  const later = eligible.filter((x) => item(keyOf(x)) && !isDue(keyOf(x), now)).sort((a, b) => (item(keyOf(a)).due || 0) - (item(keyOf(b)).due || 0));
  const out = [];
  // Mix: up to half the run from due items, the rest new, topped up with upcoming reviews.
  const dueTake = Math.min(due.length, Math.max(Math.ceil(count * (1 - preferNew)), count - fresh.length));
  out.push(...due.slice(0, dueTake));
  out.push(...fresh.slice(0, count - out.length));
  out.push(...due.slice(dueTake, dueTake + count - out.length));
  out.push(...later.slice(0, count - out.length));
  return shuffle(out);
}

// Distractors for multiple choice: prefer the same topic and level, similar length.
export function distractors(word, n = 3) {
  const others = WORDS.filter((w) => w.fi !== word.fi);
  const score = (w) => (w.topic === word.topic ? 0 : 2) + Math.abs(w.lv - word.lv) + Math.abs(w.fi.length - word.fi.length) * 0.15 + Math.random() * 1.6;
  return others.map((w) => [score(w), w]).sort((a, b) => a[0] - b[0]).slice(0, n).map((x) => x[1]);
}

export function totals() {
  return {
    words: WORDS.length,
    sentences: SENTENCES.length,
    dialogues: DIALOGUES.length,
    phrases: PHRASES.length,
    verbs: VERBS.length,
    grammar: GRAMMAR.length,
    scenes: SCENES.length,
  };
}
