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
  { href: '#/learn', key: 'nav_learn', icon: 'book-open', match: (r) => ['learn', 'grammar', 'phrases', 'talk', 'numbers', 'verbs', 'sentences', 'scenes', 'read'].includes(r) },
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
      <span class="foot-ai">${icon('sparkles')} ${t('ai_note')} <a href="${REPO_URL}/issues/new" target="_blank" rel="noopener">${t('report')}</a></span>
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
// Kinds: exact · umlaut (ä/ö typed as a/o) · near (a small slip, accepted) · close (not accepted, but almost) · wrong.
// One wrong, missing, extra or swapped letter is never "wrong" for words of three letters or more.
export function checkDetail(value, answers) {
  const v = normalize(value);
  if (!v) return { kind: 'empty' };
  let best = null;
  for (const raw of answers.filter(Boolean)) {
    const a = normalize(raw);
    if (a === v) return { kind: 'exact', target: raw };
    const d = plain(a) === plain(v) ? 0.5 : distance(a, v);
    if (!best || d < best.d) best = { raw, a, d };
  }
  if (!best) return { kind: 'wrong' };
  const n = Array.from(best.a).length;
  const { d } = best;
  let kind = 'wrong';
  if (d === 0.5) kind = 'umlaut';
  else if ((d === 1 && n >= 3) || (d === 2 && n >= 9) || (d === 3 && n >= 20)) kind = 'near';
  else if ((d === 1) || (d === 2 && n >= 4) || (d === 3 && n >= 10) || (d <= 6 && n >= 20)) kind = 'close';
  return { kind, target: best.raw, distance: d };
}
export function check(value, answers) { return checkDetail(value, answers).kind; }

// Shows the right spelling with the letters you missed highlighted, and letters you added struck out.
export function diffHtml(typed, target) {
  const a = Array.from(String(typed).trim().toLocaleLowerCase('fi'));
  const b = Array.from(String(target));
  const bl = b.map((c) => c.toLocaleLowerCase('fi'));
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) {
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === bl[j - 1] ? 0 : 1));
  }
  const out = [];
  let i = a.length, j = b.length;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && d[i][j] === d[i - 1][j - 1] + (a[i - 1] === bl[j - 1] ? 0 : 1)) {
      out.unshift(a[i - 1] === bl[j - 1] ? esc(b[j - 1]) : `<mark>${esc(b[j - 1])}</mark>`); i--; j--;
    } else if (j > 0 && d[i][j] === d[i][j - 1] + 1) { out.unshift(`<mark>${esc(b[j - 1])}</mark>`); j--; }
    else { out.unshift(`<del>${esc(a[i - 1])}</del>`); i--; }
  }
  return `<span class="diff" lang="fi">${out.join('')}</span>`;
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

// ---------- Letter slots: show how many letters the answer has and fill them while typing ----------
const isLetter = (c) => /[\p{L}\p{N}]/u.test(c);
export function slots(id) { return `<div class="slots" id="${id}" aria-live="off"></div>`; }
export function bindSlots(input, answer, box, { revealed = () => 0, approx = false } = {}) {
  if (!input || !box || !answer) return () => {};
  const chars = Array.from(answer);
  const total = chars.filter(isLetter).length;
  const letters = chars.filter(isLetter).map((c) => c.toLocaleLowerCase('fi'));
  // update({ mark: true }) after a wrong guess colours each typed letter: green = right letter in the right place.
  const update = (opts) => {
    const mark = !!opts?.mark;
    const typed = Array.from(input.value).filter(isLetter);
    const shown = revealed();
    let k = 0;
    const cells = chars.map((c) => {
      if (!isLetter(c)) return c === ' ' ? '<i class="slot-space"></i>' : `<i class="slot-mark">${esc(c)}</i>`;
      const tc = typed[k];
      const hint = k < shown ? c : '';
      const state = mark && tc ? (tc.toLocaleLowerCase('fi') === letters[k] ? 'ok' : 'no') : '';
      k++;
      return `<span class="slot ${tc ? 'on' : hint ? 'hint' : ''} ${state}">${esc(tc || hint)}</span>`;
    });
    // Group each word so long answers wrap between words, not inside them.
    const words = cells.join('').split('<i class="slot-space"></i>').map((w) => `<span class="slot-word">${w}</span>`).join('');
    box.classList.toggle('over', typed.length > total);
    box.innerHTML = `${words}<span class="slot-count">${approx ? '≈ ' : ''}${typed.length}/${total} ${t('letters')}</span>`;
    box.setAttribute('aria-label', `${total} ${t('letters')}`);
  };
  input.addEventListener('input', () => update());
  update();
  return update;
}

// Shared feedback after a guess that was not accepted. Returns true when it was "close".
export function missFeedback(el, res, value, update) {
  const close = res.kind === 'close';
  update?.({ mark: true });
  if (!el) return close;
  el.className = 'feedback ' + (close ? 'close' : '');
  const typed = Array.from(value).filter(isLetter);
  const target = Array.from(res.target || '').filter(isLetter).map((c) => c.toLocaleLowerCase('fi'));
  const right = typed.filter((c, i) => c.toLocaleLowerCase('fi') === target[i]).length;
  el.innerHTML = close
    ? `${icon('sparkle')} ${t('close_miss')}`
    : `${t('not_quite')}${right ? ` <span class="muted">· ${t('letters_right', { n: right })}</span>` : ''}`;
  return close;
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
