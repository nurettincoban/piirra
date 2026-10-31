// Small DOM helpers shared by every screen.

import { LUCIDE } from '../data/lucide.js';
import { t, lang } from './i18n.js';
import { settings } from './store.js';

export const app = document.getElementById('app');
export const REPO_URL = 'https://github.com/nurettincoban/piirra';

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Lucide icon as inline SVG. Unknown names render an empty icon instead of throwing.
export function icon(name, cls = '') {
  const nodes = LUCIDE[name] || [];
  const inner = nodes.map(([tag, a]) => `<${tag} ${Object.entries(a).map(([k, v]) => `${k}="${v}"`).join(' ')}/>`).join('');
  return `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${inner}</svg>`;
}

// ---------- Page shell ----------
let teardown = null;
export function onLeave(fn) { teardown = fn; }
export function leave() { if (teardown) { try { teardown(); } catch {} teardown = null; } }

const NAV = [
  { href: '#/', key: 'nav_home', icon: 'pencil-line', match: (r) => r === '' },
  { href: '#/learn', key: 'nav_learn', icon: 'book-open', match: (r) => ['learn', 'grammar', 'phrases', 'talk', 'numbers', 'verbs', 'sentences', 'scenes'].includes(r) },
  { href: '#/words', key: 'nav_words', icon: 'library', match: (r) => r === 'words' },
  { href: '#/progress', key: 'nav_progress', icon: 'chart-no-axes-column', match: (r) => r === 'progress' },
];

export function shell(content, { route = '', game = false } = {}) {
  const navLinks = NAV.map((n) => `<a href="${n.href}" ${n.match(route) ? 'aria-current="page"' : ''}>${icon(n.icon)}<span>${t(n.key)}</span></a>`).join('');
  const themeIcon = settings.theme === 'dark' ? 'moon' : settings.theme === 'light' ? 'sun' : 'sun-moon';
  app.innerHTML = `
  <div class="app ${game ? 'game-mode' : ''}">
    <header class="top"><div class="wrap">
      <a class="brand" href="#/" aria-label="Piirrä">
        <span class="brand-mark">${icon('pencil')}</span><span>piirrä<span class="brand-dot">.</span></span>
      </a>
      <nav class="nav" aria-label="Main">${navLinks}</nav>
      <div class="top-tools">
        <button class="lang-btn" data-global="lang" aria-label="${t('toggle_lang')}">${icon('languages')}<b>${lang().toUpperCase()}</b></button>
        <button class="icon-btn" data-global="theme" aria-label="${t('toggle_theme')}" title="${t('theme')}: ${t('theme_' + settings.theme)}">${icon(themeIcon)}</button>
        <button class="icon-btn hide-sm" data-global="sound" aria-pressed="${!settings.sound}" aria-label="${t('toggle_sound')}">${icon(settings.sound ? 'volume-2' : 'volume-x')}</button>
        <a class="icon-btn" href="#/settings" aria-label="${t('settings')}">${icon('settings-2')}</a>
      </div>
    </div></header>
    <main id="main" class="view" tabindex="-1">${content}</main>
    <footer class="foot"><div class="wrap">
      <span>${t('foot_left')} · <a href="#/about">${t('about')}</a> · <a href="${REPO_URL}" target="_blank" rel="noopener">${t('source')}</a></span>
      <span>${t('foot_right')}</span>
    </div></footer>
    <nav class="tabbar" aria-label="Main">${navLinks}</nav>
  </div>`;
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export function on(sel, ev, fn, root = document) { $$(sel, root).forEach((el) => el.addEventListener(ev, fn)); }

export function toast(msg, ms = 2600) {
  document.querySelectorAll('.toast').forEach((n) => n.remove());
  const n = document.createElement('div');
  n.className = 'toast';
  n.setAttribute('role', 'status');
  n.innerHTML = msg;
  document.body.appendChild(n);
  setTimeout(() => n.remove(), ms);
  return n;
}

export function modal(html, onClose) {
  const d = document.createElement('dialog');
  d.className = 'modal';
  d.innerHTML = `<button class="icon-btn close" data-close aria-label="${t('close')}">${icon('x')}</button><div class="modal-body">${html}</div>`;
  document.body.appendChild(d);
  d.addEventListener('click', (e) => { if (e.target === d || e.target.closest('[data-close]')) d.close(); });
  d.addEventListener('close', () => { d.remove(); onClose?.(); });
  d.showModal();
  return d;
}

// ---------- Answers ----------
export function normalize(s) {
  return String(s || '').normalize('NFC').toLocaleLowerCase('fi').replace(/[.,!?;:"“”„«»¿¡]/g, '').replace(/[’`´]/g, "'").replace(/-/g, '').replace(/\s+/g, ' ').trim();
}
export function distance(a, b) {
  a = Array.from(a); b = Array.from(b);
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) {
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
  }
  return d[a.length][b.length];
}
// ä/ö typed as a/o is a very common keyboard problem — treat it as a near miss, not wrong.
const plain = (s) => s.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/å/g, 'a');
export function check(value, answers) {
  const v = normalize(value);
  if (!v) return 'empty';
  const list = answers.map(normalize);
  if (list.includes(v)) return 'exact';
  for (const a of list) {
    if (plain(a) === plain(v)) return 'umlaut';
    if (a.length >= 4 && distance(a, v) === 1) return 'near';
    if (a.length >= 9 && distance(a, v) === 2) return 'near';
  }
  return 'wrong';
}

export function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// Ä Ö Å buttons that type into an input — many keyboards don't have them.
export function fiKeys(target) {
  return `<div class="fi-keys" data-target="${target}">${['ä', 'ö', 'å'].map((c) => `<button type="button" data-key="${c}" aria-label="${c}">${c}</button>`).join('')}</div>`;
}
export function bindFiKeys(root = document) {
  $$('.fi-keys', root).forEach((box) => {
    const input = document.getElementById(box.dataset.target);
    box.addEventListener('mousedown', (e) => e.preventDefault());
    box.addEventListener('click', (e) => {
      const b = e.target.closest('[data-key]');
      if (!b || !input || input.disabled) return;
      const s = input.selectionStart ?? input.value.length, en = input.selectionEnd ?? s;
      input.value = input.value.slice(0, s) + b.dataset.key + input.value.slice(en);
      input.setSelectionRange(s + 1, s + 1);
      input.focus();
      input.dispatchEvent(new Event('input'));
    });
  });
}

// "**x**" → <b>x</b> (endings), "*x*" → <i>x</i> (Finnish examples), everything else escaped.
export function rich(s) {
  return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*([^*\s][^*]*?)\*/g, '<i lang="fi">$1</i>');
}

export function bar(value, total, color) {
  const p = total ? Math.round((value / total) * 100) : 0;
  return `<div class="bar" ${color ? `style="--c:${color}"` : ''}><i style="width:${p}%"></i></div>`;
}
export function ring(value, total) {
  const p = total ? Math.round((value / total) * 100) : 0;
  return `<div class="ring ${p >= 100 ? 'done' : ''}" style="--p:${p}"><span>${p >= 100 ? '✓' : p + '%'}</span></div>`;
}

export function download(name, text) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

export function reducedMotion() {
  return settings.reduceMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// End-of-run screen used by all modes.
export function endScreen({ route, title, iconName = 'sparkles', stats, extra = '', again, back = '#/' }) {
  shell(`<div class="wrap"><div class="end"><div class="end-box">
    <div class="end-icon">${icon(iconName)}</div>
    <h1 class="page-title">${title}</h1>
    <div class="end-stats">${stats.map(([v, l]) => `<div class="stat"><strong>${v}</strong><span>${l}</span></div>`).join('')}</div>
    ${extra}
    <div class="row" style="justify-content:center">
      <button class="btn btn-primary btn-lg" data-again>${icon('rotate-ccw')} ${t('again')}</button>
      <a class="btn btn-lg" href="${back}">${t('home')}</a>
    </div>
  </div></div></div>`, { route });
  $('[data-again]').addEventListener('click', () => { leave(); again(); });
  $('[data-again]').focus();
}
