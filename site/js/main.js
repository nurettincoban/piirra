// Entry point: hash router, global controls, offline support.

import { settings, setSetting, migrateLegacy, tickTime } from './store.js';
import { t } from './i18n.js';
import { app, leave, toast, icon, $ } from './ui.js';
import { sfx, stopSpeech } from './sound.js';

import home from './screens/home.js';
import learn from './screens/learn.js';
import play from './screens/play.js';
import sentences from './screens/sentences.js';
import verbs from './screens/verbs.js';
import scenes from './screens/scenes.js';
import talk from './screens/talk.js';
import phrases from './screens/phrases.js';
import numbers from './screens/numbers.js';
import grammar from './screens/grammar.js';
import words from './screens/words.js';
import progressScreen from './screens/progress.js';
import settingsScreen from './screens/settings.js';
import about from './screens/about.js';

const ROUTES = {
  '': home, learn, play, sentences, verbs, scenes, talk, phrases, numbers, grammar, words,
  progress: progressScreen, settings: settingsScreen, about,
};

export function parseHash() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [path, query = ''] = raw.split('?');
  const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
  return { route: parts[0] || '', sub: parts[1] || '', params: Object.fromEntries(new URLSearchParams(query)) };
}

let current = '';
function render() {
  const { route, sub, params } = parseHash();
  const screen = ROUTES[route] || home;
  leave();
  stopSpeech();
  const changedPage = current !== location.hash;
  current = location.hash;
  screen({ route: ROUTES[route] ? route : '', sub, params });
  if (changedPage) {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }
}
export function rerender() { current = ''; render(); }

function applyPrefs() {
  const root = document.documentElement;
  if (settings.theme === 'auto') delete root.dataset.theme; else root.dataset.theme = settings.theme;
  root.lang = settings.lang;
  root.classList.toggle('reduce-motion', !!settings.reduceMotion);
  root.classList.toggle('big-text', !!settings.bigText);
  const dark = settings.theme === 'dark' || (settings.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', dark ? '#111916' : '#f5f2ea'));
  document.title = settings.lang === 'tr' ? 'Piirrä — çizerek Fince öğren' : 'Piirrä — learn Finnish, one drawing at a time';
  const skip = document.querySelector('.skip');
  if (skip) skip.textContent = t('skip');
}
export { applyPrefs };

// Header buttons available on every page.
app.addEventListener('click', (e) => {
  const b = e.target.closest('[data-global]');
  if (!b) return;
  const what = b.dataset.global;
  if (what === 'lang') setSetting('lang', settings.lang === 'tr' ? 'en' : 'tr');
  if (what === 'theme') {
    const order = ['auto', 'light', 'dark'];
    setSetting('theme', order[(order.indexOf(settings.theme) + 1) % 3]);
    toast(`${t('theme')}: ${t('theme_' + settings.theme)}`, 1400);
  }
  if (what === 'sound') { setSetting('sound', !settings.sound); sfx.tap(); }
  applyPrefs();
  // Re-render in place; screens keep their state in module scope where it matters.
  const focusSel = `[data-global="${what}"]`;
  window.dispatchEvent(new CustomEvent('piirra:prefs', { detail: what }));
  requestAnimationFrame(() => $(focusSel)?.focus());
});

matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyPrefs);
window.addEventListener('hashchange', render);
window.addEventListener('piirra:prefs', (e) => {
  if (e.detail === 'sound') {
    // Update the button only, so a running round is not restarted.
    const b = $('[data-global="sound"]');
    if (b) { b.setAttribute('aria-pressed', String(!settings.sound)); b.innerHTML = icon(settings.sound ? 'volume-2' : 'volume-x'); }
    return;
  }
  if (e.detail === 'theme' && location.hash.indexOf('settings') < 0) {
    const b = $('[data-global="theme"]');
    if (b) b.innerHTML = icon(settings.theme === 'dark' ? 'moon' : settings.theme === 'light' ? 'sun' : 'sun-moon');
    return;
  }
  rerender();
});
window.addEventListener('piirra:novoice', () => {
  const n = toast(`${t('no_voice_toast')} <a href="#/settings" style="margin-left:8px;color:inherit">${t('settings')} →</a>`, 6000);
  n.querySelector('a')?.addEventListener('click', () => n.remove());
});
setInterval(tickTime, 15000);
document.addEventListener('visibilitychange', tickTime);

applyPrefs();
// Never let the one-time migration block the first render.
Promise.race([migrateLegacy(), new Promise((r) => setTimeout(r, 800))]).finally(render);

// Offline support. The service worker caches the app shell and content.
// Skipped on localhost so edits show up immediately while developing.
const isDev = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
if (isDev && 'serviceWorker' in navigator) navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
if ('serviceWorker' in navigator && location.protocol !== 'file:' && !isDev) {
  navigator.serviceWorker.register('./sw.js').then((reg) => {
    reg.addEventListener('updatefound', () => {
      const nw = reg.installing;
      nw?.addEventListener('statechange', () => {
        if (nw.state === 'installed' && navigator.serviceWorker.controller) {
          const n = toast(`${t('update_ready')} <button class="btn btn-sm" style="margin-left:10px">${t('reload')}</button>`, 15000);
          n.querySelector('button')?.addEventListener('click', () => location.reload());
        }
      });
    });
  }).catch(() => {});
}
