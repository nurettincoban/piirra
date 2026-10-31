// Word collection: every illustrated word with its learning state.

import { t, L, TOPICS } from '../i18n.js';
import { settings, progress, isKnown, setLearned } from '../store.js';
import { shell, icon, esc, $, $$, modal, normalize, reducedMotion } from '../ui.js';
import { artSvg, playDrawing } from '../art.js';
import { WORDS, WORD_BY_FI } from '../content.js';
import { speak } from '../sound.js';

const view = { status: 'all', lv: 0, topic: '', sort: 'topic', q: '' };

const statusOf = (w) => (!progress[w.key] ? 'new' : isKnown(w.key) ? 'known' : 'learning');

function when(due) {
  const d = Math.ceil((due - Date.now()) / 86400000);
  if (d <= 0) return t('today');
  return t('in_days', { n: d });
}

export default function words() {
  const met = WORDS.filter((w) => progress[w.key]).length;
  const known = WORDS.filter((w) => isKnown(w.key)).length;
  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('library')} ${t('met_n', { n: met })} · ${t('known_n', { n: known })} · ${WORDS.length}</span>
      <h1 class="page-title">${t('words_title')}</h1>
      <p class="lead">${t('words_lead')}</p>
    </div>
    <div class="toolbar">
      <label class="search">${icon('search')}<input id="q" type="search" value="${esc(view.q)}" placeholder="${t('search')}" aria-label="${t('search')}"></label>
      <select class="select" id="topic" aria-label="${t('all_topics')}">
        <option value="">${t('all_topics')}</option>
        ${Object.entries(TOPICS).filter(([k]) => WORDS.some((w) => w.topic === k)).map(([k, v]) => `<option value="${k}" ${view.topic === k ? 'selected' : ''}>${esc(L(v))}</option>`).join('')}
      </select>
      <select class="select" id="sort" aria-label="Sort">
        ${['topic', 'level', 'alpha'].map((s) => `<option value="${s}" ${view.sort === s ? 'selected' : ''}>${t('sort_' + s)}</option>`).join('')}
      </select>
    </div>
    <div class="toolbar chips">
      ${['all', 'learning', 'known', 'new'].map((s) => `<button class="chip" data-status="${s}" aria-pressed="${view.status === s}">${t('filter_' + s)}</button>`).join('')}
      <span style="width:12px"></span>
      ${[1, 2, 3].map((lv) => `<button class="chip" data-lv="${lv}" aria-pressed="${view.lv === lv}">${t('lv_short' + lv)}</button>`).join('')}
    </div>
    <div class="word-grid" id="grid"></div>
  </div>`, { route: 'words' });

  const grid = $('#grid');
  function draw() {
    const q = normalize(view.q);
    let list = WORDS.filter((w) =>
      (view.status === 'all' || statusOf(w) === view.status) &&
      (!view.lv || w.lv === view.lv) &&
      (!view.topic || w.topic === view.topic) &&
      (!q || (progress[w.key] && (normalize(w.fi).includes(q) || normalize(w.en).includes(q) || normalize(w.tr).includes(q)))));
    if (view.sort === 'alpha') list = [...list].sort((a, b) => a.fi.localeCompare(b.fi, 'fi'));
    else if (view.sort === 'level') list = [...list].sort((a, b) => a.lv - b.lv || a.fi.localeCompare(b.fi, 'fi'));
    else list = [...list].sort((a, b) => Object.keys(TOPICS).indexOf(a.topic) - Object.keys(TOPICS).indexOf(b.topic) || a.lv - b.lv);
    if (!list.length) { grid.innerHTML = `<div class="empty" style="grid-column:1/-1">${icon('search-x')}<p>${t('no_words')}</p><a class="btn btn-primary" href="#/play?mode=type">${t('cta_play')}</a></div>`; return; }
    grid.innerHTML = list.map((w) => {
      const p = progress[w.key];
      if (!p) return `<div class="word-tile locked" aria-label="?">${artSvg(w)}<b>?</b><small>${esc(L(TOPICS[w.topic]))}</small></div>`;
      return `<button class="word-tile" data-word="${esc(w.fi)}">
        ${p.learned ? `<span class="learned" title="${t('learned')}">${icon('circle-check')}</span>` : ''}
        <span class="lvl" aria-hidden="true">${[1, 2, 3, 4, 5].map((n) => `<i class="${(p.box || 0) >= n ? 'on' : ''}"></i>`).join('')}</span>
        ${artSvg(w)}<b class="fi" lang="fi">${esc(w.fi)}</b><small>${esc(L(w))}</small>
      </button>`;
    }).join('');
    $$('[data-word]', grid).forEach((b) => b.addEventListener('click', () => detail(WORD_BY_FI.get(b.dataset.word), draw)));
  }
  draw();
  $('#q').addEventListener('input', (e) => { view.q = e.target.value; draw(); });
  $('#topic').addEventListener('change', (e) => { view.topic = e.target.value; draw(); });
  $('#sort').addEventListener('change', (e) => { view.sort = e.target.value; draw(); });
  $$('[data-status]').forEach((b) => b.addEventListener('click', () => { view.status = b.dataset.status; $$('[data-status]').forEach((x) => x.setAttribute('aria-pressed', x === b)); draw(); }));
  $$('[data-lv]').forEach((b) => b.addEventListener('click', () => { const lv = Number(b.dataset.lv); view.lv = view.lv === lv ? 0 : lv; $$('[data-lv]').forEach((x) => x.setAttribute('aria-pressed', Number(x.dataset.lv) === view.lv)); draw(); }));
}

export function detail(w, after) {
  const p = progress[w.key] || {};
  const other = settings.lang === 'tr' ? `EN: ${w.en}` : `TR: ${w.tr}`;
  const d = modal(`
    <div class="modal-art" id="m-art">${artSvg(w, { label: w.en })}</div>
    <div class="row" style="gap:8px"><span class="tag lv${w.lv}">${t('lv_short' + w.lv)}</span><span class="tag">${esc(L(TOPICS[w.topic]))}</span></div>
    <div class="word" style="font:600 40px/1.1 var(--display);letter-spacing:-.04em;display:flex;align-items:center;gap:12px;margin:12px 0 2px"><span lang="fi">${esc(w.fi)}</span><button class="speak" data-say aria-label="${t('listen_again')}">${icon('volume-2')}</button></div>
    <div style="font-size:18px;color:var(--ink-2)">${esc(L(w))} <span class="muted" style="font-size:14px">· ${esc(other)}</span></div>
    ${w.ex ? `<div class="example-row" style="margin-top:16px"><button class="speak" data-say-ex aria-label="${t('listen_again')}">${icon('volume-2')}</button><span><span class="fi" lang="fi">${esc(w.ex[0])}</span><small>${esc(settings.lang === 'tr' ? w.ex[2] : w.ex[1])}</small></span></div>` : ''}
    <p class="muted" style="font-size:13px;margin:14px 0 0">${p.seen ? t('seen_times', { n: p.seen }) : ''}${p.due && !p.learned ? ' · ' + t('next_review', { when: when(p.due) }) : ''}</p>
    <div class="row between" style="margin-top:18px">
      <button class="btn btn-sm" data-learn>${icon(p.learned ? 'rotate-ccw' : 'check-check')} ${p.learned ? t('unmark_learned') : t('mark_learned')}</button>
      <a class="btn btn-primary btn-sm" href="#/play?mode=type&topic=${w.topic}&lv=${w.lv}">${icon('pencil-line')} ${t('practise_this')}</a>
    </div>`, after);
  if (!reducedMotion()) playDrawing(d.querySelector('#m-art'), 1600);
  d.querySelector('[data-say]').addEventListener('click', () => speak(w.fi));
  d.querySelector('[data-say-ex]')?.addEventListener('click', () => speak(w.ex[0]));
  d.querySelector('[data-learn]').addEventListener('click', () => { setLearned(w.key, !p.learned); d.close(); });
  d.querySelector('a.btn-primary').addEventListener('click', () => d.close());
}
