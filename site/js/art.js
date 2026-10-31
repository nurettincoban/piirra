// Renders word illustrations as SVG and animates them stroke by stroke.
// Art sources: "d:key" hand drawings (300×300), "l:name" Lucide icons (24×24), "c:#hex" colour swatches.

import { DRAWINGS } from '../data/drawings.js';
import { LUCIDE } from '../data/lucide.js';
import { esc } from './ui.js';

const attrs = (a) => Object.entries(a).map(([k, v]) => `${k}="${esc(v)}"`).join(' ');

// A soft paint blob, drawn as an outline first and then filled.
const BLOB = 'M150 52 C205 50 248 88 250 140 C252 196 214 246 152 248 C92 250 52 210 50 152 C48 96 92 54 150 52 Z';

export function artSvg(word, { cls = '', label = '' } = {}) {
  const art = word?.art || '';
  const kind = art.slice(0, 2);
  const key = art.slice(2);
  let body = '';
  if (kind === 'd:' && DRAWINGS[key]) {
    const strokes = DRAWINGS[key];
    body = strokes.map((d, i) => `<path data-stroke ${i === strokes.length - 1 && strokes.length > 2 ? 'class="accent"' : ''} d="${esc(d)}"/>`).join('');
  } else if (kind === 'l:' && LUCIDE[key]) {
    const nodes = LUCIDE[key];
    body = `<g class="lucide" transform="translate(30 30) scale(10)">${nodes.map(([tag, a], i) => `<${tag} data-stroke ${i === nodes.length - 1 && nodes.length > 2 ? 'class="accent"' : ''} ${attrs(a)}/>`).join('')}</g>`;
  } else if (kind === 'c:') {
    body = `<path class="swatch-fill" d="${BLOB}" fill="${esc(key)}" style="opacity:var(--fill,1)"/>
      <path data-stroke class="swatch" d="${BLOB}"/>
      <path data-stroke class="swatch-shine" d="M100 110 Q110 88 132 80"/>`;
  } else {
    body = `<path data-stroke d="M110 120 Q150 70 190 120 Q190 150 150 165 L150 190"/><path data-stroke class="accent" d="M150 222 l1 1"/>`;
  }
  return `<svg class="art ${cls}" viewBox="0 0 300 300" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'}>${body}</svg>`;
}

// Prepares every stroke inside `root` for progressive drawing and returns a function(fraction 0..1).
export function prepareDrawing(root) {
  const strokes = [...root.querySelectorAll('[data-stroke]')];
  const fill = root.querySelector('.swatch-fill');
  const lens = strokes.map((el) => {
    let n = 0;
    try { n = el.getTotalLength(); } catch { n = 0; }
    if (!n || !isFinite(n)) n = 1;
    el.style.strokeDasharray = `${n} ${n}`;
    el.style.strokeDashoffset = n;
    return n;
  });
  // Very short strokes (dots) still get a visible share of time.
  const weights = lens.map((n) => Math.max(n, 6));
  const total = weights.reduce((a, b) => a + b, 0);
  if (fill) fill.style.setProperty('--fill', 0);
  return function draw(fraction) {
    let budget = Math.max(0, Math.min(1, fraction)) * total;
    strokes.forEach((el, i) => {
      const w = weights[i];
      const part = Math.max(0, Math.min(1, budget / w));
      el.style.strokeDashoffset = lens[i] * (1 - part);
      budget -= w;
    });
    if (fill) fill.style.setProperty('--fill', Math.max(0, (fraction - 0.55) / 0.45));
  };
}

export function showComplete(root) {
  root.querySelectorAll('[data-stroke]').forEach((el) => { el.style.strokeDasharray = ''; el.style.strokeDashoffset = ''; });
  const fill = root.querySelector('.swatch-fill');
  if (fill) fill.style.setProperty('--fill', 1);
}

// Plays a drawing once over `ms` milliseconds (used for decorative drawings). Returns a cancel function.
export function playDrawing(root, ms = 3000, done) {
  const draw = prepareDrawing(root);
  const start = performance.now();
  let raf = 0;
  const frame = (now) => {
    const f = Math.min(1, (now - start) / ms);
    draw(ease(f));
    if (f < 1) raf = requestAnimationFrame(frame);
    else done?.();
  };
  raf = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(raf);
}

export const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
