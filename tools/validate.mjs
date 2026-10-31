// Content checks run in CI: node tools/validate.mjs
import { DRAWINGS } from '../site/data/drawings.js';
import { LUCIDE } from '../site/data/lucide.js';
import { WORDS_A } from '../site/data/words-a.js';
import { WORDS_B } from '../site/data/words-b.js';
import { SENTENCES } from '../site/data/sentences.js';
import { VERBS } from '../site/data/verbs.js';
import { DIALOGUES } from '../site/data/dialogues.js';
import { PHRASES, PHRASE_CATS } from '../site/data/phrases.js';
import { SCENES } from '../site/data/scenes.js';
import { GRAMMAR } from '../site/data/grammar.js';
const READINGS = await import('../site/data/readings.js').then((m) => m.READINGS).catch(() => []);

const errors = [];
const fail = (msg) => errors.push(msg);
const gaps = (s) => (String(s).match(/\{[^}]+\}/g) || []).length;
const norm = (s) => String(s).toLocaleLowerCase('fi').replace(/[.,!?;:"“”]/g, '').replace(/-/g, '').replace(/\s+/g, ' ').trim();
const lv = (x, where) => { if (![1, 2, 3].includes(x.lv)) fail(`${where}: lv must be 1, 2 or 3`); };

const words = [...WORDS_A, ...WORDS_B];
const fi = new Set(), art = new Set();
for (const w of words) {
  const where = `word ${w.fi}`;
  if (!w.fi || !w.en || !w.tr) fail(`${where}: missing fi/en/tr`);
  if (w.fi !== w.fi.toLocaleLowerCase('fi')) fail(`${where}: fi must be lowercase`);
  if (fi.has(w.fi)) fail(`${where}: duplicate word`);
  if (art.has(w.art)) fail(`${where}: picture ${w.art} already used`);
  fi.add(w.fi); art.add(w.art);
  lv(w, where);
  const [kind, key] = [w.art?.slice(0, 2), w.art?.slice(2)];
  if (kind === 'd:' && !DRAWINGS[key]) fail(`${where}: unknown drawing ${key}`);
  else if (kind === 'l:' && !LUCIDE[key]) fail(`${where}: icon ${key} missing from lucide.js (run tools/build_icons.py)`);
  else if (kind === 'c:' && !/^#[0-9a-f]{6}$/i.test(key)) fail(`${where}: bad colour ${key}`);
  else if (!['d:', 'l:', 'c:'].includes(kind)) fail(`${where}: bad art ${w.art}`);
  if (w.ex && w.ex.length !== 3) fail(`${where}: ex needs [fi, en, tr]`);
}

const grammarIds = new Set(GRAMMAR.map((g) => g.id));
const ids = new Set();
for (const s of SENTENCES) {
  const where = `sentence ${s.id}`;
  if (ids.has(s.id)) fail(`${where}: duplicate id`);
  ids.add(s.id);
  if (gaps(s.fi) !== 1) fail(`${where}: needs exactly one {gap}`);
  if (!s.en || !s.tr) fail(`${where}: missing translation`);
  if (!grammarIds.has(s.g)) fail(`${where}: unknown grammar id ${s.g}`);
  lv(s, where);
}

for (const v of VERBS) {
  if (v.pres?.length !== 6 || v.past?.length !== 6 || !v.neg) fail(`verb ${v.inf}: needs 6 present, 6 past and neg`);
  lv(v, `verb ${v.inf}`);
}

for (const g of GRAMMAR) {
  const where = `grammar ${g.id}`;
  if (!g.title?.en || !g.title?.tr || !g.body?.en?.length || !g.body?.tr?.length) fail(`${where}: missing title/body in en or tr`);
  if (g.icon && !LUCIDE[g.icon]) fail(`${where}: icon ${g.icon} missing`);
  (g.quiz || []).forEach((q, i) => { if (gaps(q.fi) !== 1) fail(`${where} quiz ${i}: needs exactly one {gap}`); });
  lv(g, where);
}

for (const d of DIALOGUES) {
  const where = `dialogue ${d.id}`;
  if (d.icon && !LUCIDE[d.icon]) fail(`${where}: icon ${d.icon} missing`);
  d.steps.forEach((s, i) => {
    if (!s.npc || !s.npcEn || !s.npcTr || !s.task?.en || !s.task?.tr) fail(`${where} step ${i}: missing text`);
    if (!s.answers?.map(norm).includes(norm(s.model))) fail(`${where} step ${i}: model answer is not accepted`);
  });
  lv(d, where);
}

for (const p of PHRASES) {
  if (!p.fi || !p.en || !p.tr) fail(`phrase ${p.fi}: missing text`);
  if (!PHRASE_CATS[p.cat]) fail(`phrase ${p.fi}: unknown category ${p.cat}`);
}
for (const [k, c] of Object.entries(PHRASE_CATS)) if (c.icon && !LUCIDE[c.icon]) fail(`phrase category ${k}: icon missing`);

for (const s of SCENES) {
  const where = `scene ${s.id}`;
  if (gaps(s.fi) !== 1) fail(`${where}: needs exactly one {gap}`);
  for (const item of s.items) if (!fi.has(item)) fail(`${where}: no picture for ${item}`);
}

const readIds = new Set();
for (const r of READINGS) {
  const where = `reading ${r.id}`;
  if (readIds.has(r.id)) fail(`${where}: duplicate id`);
  readIds.add(r.id);
  if (!r.title?.fi || !r.title?.en || !r.title?.tr) fail(`${where}: missing title`);
  if (r.icon && !LUCIDE[r.icon]) fail(`${where}: icon ${r.icon} missing from lucide.js`);
  if (r.trans?.en?.length !== r.text.length || r.trans?.tr?.length !== r.text.length) fail(`${where}: translation paragraphs do not match`);
  r.questions.forEach((q, i) => { if (!(q.answer >= 0 && q.answer < q.options.length)) fail(`${where} question ${i}: bad answer index`); });
  lv(r, where);
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) found.`);
  process.exit(1);
}
console.log(`OK — ${words.length} words, ${SENTENCES.length} sentences, ${VERBS.length} verbs, ${GRAMMAR.length} lessons, ${DIALOGUES.length} dialogues, ${PHRASES.length} phrases, ${SCENES.length} scenes, ${READINGS.length} readings.`);
