// Offline support: precache the app, then serve from cache and refresh in the background.
const VERSION = 'piirra-v2.3.0';
const SHELL = [
  './', './index.html', './manifest.webmanifest', './css/style.css', './assets/icon.svg',
  './js/main.js', './js/i18n.js', './js/store.js', './js/ui.js', './js/art.js', './js/sound.js', './js/content.js', './js/finnish.js',
  './js/screens/home.js', './js/screens/learn.js', './js/screens/play.js', './js/screens/sentences.js', './js/screens/verbs.js',
  './js/screens/scenes.js', './js/screens/talk.js', './js/screens/phrases.js', './js/screens/numbers.js', './js/screens/grammar.js',
  './js/screens/words.js', './js/screens/progress.js', './js/screens/settings.js', './js/screens/about.js', './js/screens/read.js',
  './data/drawings.js', './data/lucide.js', './data/words-a.js', './data/words-b.js', './data/sentences.js', './data/verbs.js',
  './data/dialogues.js', './data/phrases.js', './data/scenes.js', './data/grammar.js', './data/readings.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  const fonts = url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com';
  if (!sameOrigin && !fonts) return;
  e.respondWith(caches.open(VERSION).then(async (cache) => {
    const cached = await cache.match(req, { ignoreSearch: sameOrigin });
    const network = fetch(req).then((res) => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    }).catch(() => cached);
    return cached || network;
  }));
});
