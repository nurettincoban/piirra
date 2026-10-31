// Everything is stored locally in this browser (localStorage). There is no server and no account.

const KEY_SETTINGS = 'piirra:settings';
const KEY_PROGRESS = 'piirra:progress';
const KEY_STATS = 'piirra:stats';
const DAY = 86400000;

const DEFAULTS = {
  lang: (navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en',
  theme: 'auto',
  level: 1,
  mixLower: true,
  runLength: 8,
  drawSpeed: 1,
  sound: true,
  autoSpeak: true,
  rate: 0.9,
  voice: '',
  reduceMotion: false,
  bigText: false,
  showTranslations: true,
};

function read(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key) || 'null');
    return v && typeof v === 'object' ? v : fallback;
  } catch { return fallback; }
}
function write(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage full or blocked */ }
}

export const settings = { ...DEFAULTS, ...read(KEY_SETTINGS, {}) };
// Progress items keyed by kind:id, e.g. "w:kissa", "s:s1-004", "v:puhua:pres:2", "d:cafe", "g:inessive".
export const progress = read(KEY_PROGRESS, {});
export const stats = { days: {}, ms: 0, answers: 0, correct: 0, ...read(KEY_STATS, {}) };

export function saveSettings() { write(KEY_SETTINGS, settings); }
export function saveProgress() { write(KEY_PROGRESS, progress); }
export function saveStats() { write(KEY_STATS, stats); }

export function setSetting(key, value) {
  settings[key] = value;
  saveSettings();
}

// ---------- Spaced repetition (a small Leitner-style schedule) ----------
// box 0..5. Correct without help: box+1. With help: stays. Missed: box drops to 0 and is due in a few minutes.
const INTERVALS = [0, 1, 3, 7, 16, 35];

export function item(key) { return progress[key]; }

export function review(key, result) {
  // result: 'good' (unaided), 'helped' (with hint/choice), 'miss'
  const now = Date.now();
  const old = progress[key] || { box: 0, seen: 0, ok: 0, first: now };
  const next = { ...old, seen: old.seen + 1, last: now };
  if (result === 'good') { next.box = Math.min(5, old.box + 1); next.ok = old.ok + 1; }
  else if (result === 'helped') { next.box = Math.max(1, Math.min(old.box, 3)); next.ok = old.ok + 1; }
  else { next.box = 0; }
  next.due = result === 'miss' ? now + 5 * 60000 : now + INTERVALS[next.box] * DAY + (next.box === 0 ? 10 * 60000 : 0);
  progress[key] = next;
  saveProgress();
  logAnswer(result !== 'miss');
  return next;
}

export function setLearned(key, learned) {
  const now = Date.now();
  const old = progress[key] || { box: 0, seen: 0, ok: 0, first: now, due: now };
  progress[key] = { ...old, learned: !!learned, box: learned ? Math.max(old.box, 5) : Math.min(old.box, 3) };
  saveProgress();
}

export function markDone(key) {
  const old = progress[key] || { seen: 0, first: Date.now() };
  progress[key] = { ...old, done: true, seen: (old.seen || 0) + 1, last: Date.now() };
  saveProgress();
}

export const isKnown = (key) => { const p = progress[key]; return !!p && (p.learned || p.box >= 3); };
export const isDue = (key, now = Date.now()) => { const p = progress[key]; return !!p && !p.learned && p.due <= now; };

// ---------- Activity ----------
export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function logAnswer(ok) {
  const k = today();
  stats.days[k] = (stats.days[k] || 0) + 1;
  stats.answers++;
  if (ok) stats.correct++;
  saveStats();
}
let sessionStart = Date.now();
export function tickTime() {
  const now = Date.now();
  const delta = Math.min(now - sessionStart, 60000);
  sessionStart = now;
  if (document.visibilityState === 'visible') { stats.ms += delta; saveStats(); }
}
export function count(kind) { stats[kind] = (stats[kind] || 0) + 1; saveStats(); }

// ---------- Backup ----------
export function exportData() {
  return JSON.stringify({ app: 'piirra', version: 2, exported: new Date().toISOString(), settings, progress, stats }, null, 1);
}
export function importData(text) {
  const data = JSON.parse(text);
  if (!data || data.app !== 'piirra' || typeof data.progress !== 'object') throw new Error('bad file');
  for (const k of Object.keys(progress)) delete progress[k];
  Object.assign(progress, data.progress);
  if (data.stats) Object.assign(stats, data.stats);
  if (data.settings) Object.assign(settings, data.settings);
  saveProgress(); saveStats(); saveSettings();
}
export function resetAll() {
  for (const k of Object.keys(progress)) delete progress[k];
  stats.days = {}; stats.ms = 0; stats.answers = 0; stats.correct = 0;
  for (const k of Object.keys(stats)) if (!['days', 'ms', 'answers', 'correct'].includes(k)) delete stats[k];
  Object.assign(settings, DEFAULTS);
  try { ['piirra:settings', 'piirra:progress', 'piirra:stats'].forEach((k) => localStorage.removeItem(k)); } catch {}
}

// ---------- Migration from the first version (IndexedDB "piirra" + localStorage keys) ----------
export async function migrateLegacy() {
  try {
    if (localStorage.getItem('piirra:migrated')) return;
    localStorage.setItem('piirra:migrated', '1');
    let old = null;
    try { old = JSON.parse(localStorage.getItem('piirra-progress') || 'null'); } catch {}
    if (!old && 'indexedDB' in window) {
      old = await new Promise((resolve) => {
        const req = indexedDB.open('piirra', 1);
        req.onupgradeneeded = () => { req.transaction.abort(); resolve(null); };
        req.onerror = () => resolve(null);
        req.onsuccess = () => {
          try {
            const g = req.result.transaction('progress').objectStore('progress').get('words');
            g.onsuccess = () => resolve(g.result || null);
            g.onerror = () => resolve(null);
          } catch { resolve(null); }
        };
      });
    }
    if (old && typeof old === 'object') {
      for (const [fi, p] of Object.entries(old)) {
        if (progress['w:' + fi]) continue;
        progress['w:' + fi] = { box: Math.min(5, p.level || 0), seen: p.seen || 1, ok: p.correct || 0, due: p.due || Date.now(), first: Date.now(), learned: !!p.learned };
      }
      saveProgress();
    }
    const oldLang = localStorage.getItem('piirra-lang');
    if (oldLang && !localStorage.getItem(KEY_SETTINGS)) { settings.lang = oldLang; saveSettings(); }
  } catch { /* nothing to migrate */ }
}
