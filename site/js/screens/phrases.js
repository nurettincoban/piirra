// Phrasebook: browse by category, tap to hear, practise with flip cards.

import { t, L } from '../i18n.js';
import { settings, review, count } from '../store.js';
import { shell, icon, esc, onLeave, $, $$, endScreen } from '../ui.js';
import { PHRASES, PHRASE_CATS, pickItems } from '../content.js';
import { sfx, speak } from '../sound.js';

let filter = 'all';
const pkey = (p) => 'p:' + p.fi;
const tr = (p) => (settings.lang === 'tr' ? p.tr : p.en);

export default function phrases({ sub }) {
  if (sub && (PHRASE_CATS[sub] || sub === 'all')) return cards(sub);
  const cats = Object.keys(PHRASE_CATS).filter((c) => PHRASES.some((p) => p.cat === c));
  const list = PHRASES.filter((p) => filter === 'all' || p.cat === filter);
  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('book-a')} ${t('m_phrases')}</span>
      <h1 class="page-title">${t('phrases_title')}</h1>
      <p class="lead">${t('phrases_lead')}</p>
    </div>
    <div class="grid grid-4" style="margin-bottom:28px">${cats.map((c) => `
      <a class="lesson-item" href="#/phrases/${c}"><span class="li-icon">${icon(PHRASE_CATS[c].icon || 'message-circle')}</span>
      <span><b>${esc(L(PHRASE_CATS[c]))}</b><small>${t('flashcards')} · ${PHRASES.filter((p) => p.cat === c).length}</small></span></a>`).join('')}</div>
    <div class="toolbar chips" id="cats">
      <button class="chip" data-cat="all" aria-pressed="${filter === 'all'}">${t('filter_all')}</button>
      ${cats.map((c) => `<button class="chip" data-cat="${c}" aria-pressed="${filter === c}">${esc(L(PHRASE_CATS[c]))}</button>`).join('')}
    </div>
    <div class="phrase-list">${list.map((p, i) => `
      <div class="phrase">
        <button class="speak" data-say="${i}" aria-label="${t('listen_again')}">${icon('volume-2')}</button>
        <span><span class="fi" lang="fi">${esc(p.fi)}</span><small>${esc(tr(p))}</small></span>
        <span class="tag lv${p.lv || 1}">${t('lv_short' + (p.lv || 1))}</span>
      </div>`).join('')}</div>
  </div>`, { route: 'phrases' });
  $$('[data-cat]').forEach((b) => b.addEventListener('click', () => { filter = b.dataset.cat; phrases({}); }));
  $$('[data-say]').forEach((b) => b.addEventListener('click', () => speak(list[Number(b.dataset.say)].fi)));
}

function cards(cat) {
  const pool = PHRASES.filter((p) => cat === 'all' || p.cat === cat);
  const deck = pickItems(pool, Math.min(12, pool.length), pkey, { preferNew: 0.6 });
  let i = 0, flipped = false, known = 0;
  // Front side shows the learner's language; recall the Finnish, then flip.
  const onKey = (e) => {
    if (e.key === 'Escape') location.hash = '#/phrases';
    // Buttons already react to Space/Enter on their own.
    if ((e.key === ' ' || e.key === 'Enter') && !e.target.closest('button, a, input')) { e.preventDefault(); flip(); }
  };
  document.addEventListener('keydown', onKey);
  onLeave(() => document.removeEventListener('keydown', onKey));
  function flip() { flipped = !flipped; sfx.flip(); $('.flashcard')?.classList.toggle('flipped', flipped); if (flipped) speak(deck[i].fi); render(true); }
  function render(keepCard) {
    const p = deck[i];
    if (keepCard) {
      $('#card-actions').innerHTML = actions();
      bind();
      return;
    }
    shell(`<div class="wrap" style="max-width:720px">
      <div class="game-top">
        <a class="back" href="#/phrases">${icon('arrow-left')} <span>${t('leave')}</span></a>
        <div class="progress-dots" aria-hidden="true">${deck.map((_, k) => `<i class="${k < i ? 'ok' : k === i ? 'now' : ''}"></i>`).join('')}</div>
        <div class="round-info"><span>${t('round_of', { n: i + 1, total: deck.length })}</span></div>
      </div>
      <div class="eyebrow" style="justify-content:center;width:100%;margin:10px 0">${icon(PHRASE_CATS[p.cat]?.icon || 'book-a')} ${esc(L(PHRASE_CATS[p.cat] || {}))}</div>
      <button class="flashcard" id="card" aria-label="${t('flip')}">
        <span class="inner">
          <span class="face">${esc(tr(p))}<small>${t('flip')}</small></span>
          <span class="face back-face"><span lang="fi">${esc(p.fi)}</span></span>
        </span>
      </button>
      <div id="card-actions" class="row" style="justify-content:center;margin-top:18px">${actions()}</div>
    </div>`, { route: 'phrases', game: true });
    $('#card').addEventListener('click', flip);
    bind();
  }
  function actions() {
    return flipped
      ? `<button class="btn btn-lg" data-again>${icon('rotate-ccw')} ${t('again_later')}</button>
         <button class="btn btn-soft btn-lg" data-say aria-label="${t('listen_again')}">${icon('volume-2')}</button>
         <button class="btn btn-primary btn-lg" data-knew>${icon('check')} ${t('knew_it')}</button>`
      : `<button class="btn btn-primary btn-lg" data-flip>${icon('refresh-cw')} ${t('flip')} <span class="kbd">Space</span></button>`;
  }
  function bind() {
    $('[data-flip]')?.addEventListener('click', flip);
    $('[data-say]')?.addEventListener('click', () => speak(deck[i].fi));
    $('[data-knew]')?.addEventListener('click', () => answer('good'));
    $('[data-again]')?.addEventListener('click', () => answer('miss'));
  }
  function answer(result) {
    review(pkey(deck[i]), result);
    if (result === 'good') { known++; sfx.good(); } else sfx.tap();
    i++; flipped = false;
    if (i >= deck.length) {
      sfx.done(); count('phraseRuns');
      return endScreen({ route: 'phrases', title: t('end_sent'), iconName: 'book-a', back: '#/phrases',
        stats: [[`${known}/${deck.length}`, t('knew_it')]], again: () => cards(cat) });
    }
    render();
  }
  render();
}
