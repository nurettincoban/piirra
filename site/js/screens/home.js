import { t, L, levelName } from '../i18n.js';
import { settings, setSetting, progress } from '../store.js';
import { shell, icon, onLeave, $, $$, bar, toast, reducedMotion } from '../ui.js';
import { artSvg, playDrawing, showComplete } from '../art.js';
import { WORDS, SENTENCES, DIALOGUES, VERBS, GRAMMAR, PHRASES, SCENES, levelStats, dueWords } from '../content.js';
import { sfx } from '../sound.js';

const SHOWCASE = ['kissa', 'aurinko', 'omena', 'polkupyörä', 'kahvi', 'kukka', 'vene', 'lintu', 'sateenvarjo', 'jäätelö', 'talo', 'kuu'];

export function modeCards(extraClass = '') {
  const due = dueWords().length;
  const cards = [
    { href: '#/play?mode=type', icon: 'pencil-line', title: 'm_draw', desc: 'm_draw_d', meta: t('words_n', { n: WORDS.length }), tint: 'sage', featured: true },
    { href: '#/play?mode=choice', icon: 'list-checks', title: 'm_choice', desc: 'm_choice_d', meta: t('words_n', { n: WORDS.length }), tint: 'sky' },
    { href: '#/play?mode=listen', icon: 'ear', title: 'm_listen', desc: 'm_listen_d', meta: t('words_n', { n: WORDS.length }), tint: 'plum' },
    { href: '#/play?mode=reverse', icon: 'repeat', title: 'm_reverse', desc: 'm_reverse_d', meta: t('words_n', { n: WORDS.length }), tint: 'sun' },
    { href: '#/sentences', icon: 'text-cursor-input', title: 'm_sentences', desc: 'm_sentences_d', meta: t('items', { n: SENTENCES.length }), tint: 'peach' },
    { href: '#/verbs', icon: 'dumbbell', title: 'm_verbs', desc: 'm_verbs_d', meta: t('items', { n: VERBS.length }), tint: 'sage' },
    { href: '#/scenes', icon: 'images', title: 'm_scenes', desc: 'm_scenes_d', meta: t('items', { n: SCENES.length }), tint: 'sky' },
    { href: '#/talk', icon: 'messages-square', title: 'm_talk', desc: 'm_talk_d', meta: t('items', { n: DIALOGUES.length }), tint: 'sun' },
    { href: '#/phrases', icon: 'book-a', title: 'm_phrases', desc: 'm_phrases_d', meta: t('items', { n: PHRASES.length }), tint: 'plum' },
    { href: '#/numbers', icon: 'binary', title: 'm_numbers', desc: 'm_numbers_d', meta: '0 – 9999', tint: 'peach' },
    { href: '#/grammar', icon: 'graduation-cap', title: 'm_grammar', desc: 'm_grammar_d', meta: t('lessons_n', { n: GRAMMAR.length }), tint: 'sage' },
  ];
  if (due) cards.splice(1, 0, { href: '#/play?mode=type&review=1', icon: 'history', title: 'm_review', desc: 'm_review_d', meta: t('due_n', { n: due }), tint: 'peach' });
  return `<div class="grid grid-4 ${extraClass}">${cards.map((c) => `
    <a class="mode-card tint-${c.tint} ${c.featured ? 'featured' : ''}" href="${c.href}">
      <span class="mc-icon">${icon(c.icon)}</span>
      <h3>${t(c.title)}</h3>
      <p>${t(c.desc)}</p>
      <span class="mc-meta"><span>${c.meta}</span><span class="mc-arrow">${icon('arrow-up-right')}</span></span>
    </a>`).join('')}</div>`;
}

export function levelCards() {
  return `<div class="level-cards" role="radiogroup" aria-label="${t('choose_level')}">${[1, 2, 3].map((lv) => {
    const s = levelStats(lv);
    return `<button class="level-card lv${lv}" role="radio" aria-checked="${settings.level === lv}" aria-pressed="${settings.level === lv}" data-level="${lv}">
      <span class="lv-top"><span class="lv-badge">${t('lv_short' + lv)}</span><span class="check">${icon('check')}</span></span>
      <h3>${levelName(lv)}</h3>
      <p>${t('lv' + lv + '_desc')}</p>
      <span>${bar(s.known, s.total)}<span class="bar-label"><span>${t('words_learned', { n: s.known, total: s.total })}</span><span>${s.total ? Math.round((s.known / s.total) * 100) : 0}%</span></span></span>
    </button>`;
  }).join('')}</div>`;
}

export function bindLevelCards(after) {
  $$('[data-level]').forEach((b) => b.addEventListener('click', () => {
    setSetting('level', Number(b.dataset.level));
    sfx.tap();
    $$('[data-level]').forEach((x) => { const on = Number(x.dataset.level) === settings.level; x.setAttribute('aria-pressed', on); x.setAttribute('aria-checked', on); });
    toast(t('level_set', { name: levelName(settings.level) }), 1400);
    after?.();
  }));
}

export default function home() {
  const found = WORDS.filter((w) => progress[w.key]).length;
  const due = dueWords().length;
  const first = WORDS.find((w) => w.fi === 'kissa') || WORDS[0];
  shell(`<div class="wrap">
    <section class="hero">
      <div>
        <span class="eyebrow">${icon('sparkle')} ${t('hero_eyebrow')}</span>
        <h1>${t('hero_title')}</h1>
        <p class="lead">${t('hero_lead')}</p>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="#/play?mode=type">${icon('pencil-line')} ${t('cta_play')}</a>
          ${due ? `<a class="btn btn-lg" href="#/play?mode=type&review=1">${icon('history')} ${t('m_review')} · ${due}</a>` : `<a class="btn btn-lg btn-ghost" href="#/learn">${t('cta_learn')} ${icon('arrow-right')}</a>`}
        </div>
        <div class="hero-meta">
          <div><strong>${WORDS.length}</strong>${t('meta_words')}</div>
          <div><strong>${SENTENCES.length + DIALOGUES.length + PHRASES.length}</strong>${t('meta_sentences')}</div>
          <div><strong>${found}</strong>${t('meta_found')}</div>
        </div>
      </div>
      <div class="sketchbook" aria-hidden="true">
        <svg class="doodle d1" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
        <svg class="doodle d2" viewBox="0 0 24 24"><path d="M12 3l2.5 6 6.5.5-5 4.2 1.6 6.3L12 16.6 6.4 20l1.6-6.3-5-4.2 6.5-.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/></svg>
        <svg class="doodle d3" viewBox="0 0 48 16"><path d="M2 8q5-7 10 0t10 0 10 0 10 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
        <div class="paper" id="hero-paper">${artSvg(first)}</div>
        <div class="float-note" id="hero-note">${t('new_word')}<b class="fi">${first.fi}</b>${L(first)}</div>
      </div>
    </section>

    <section>
      <h2 class="section-title">${t('choose_level')}</h2>
      <p class="section-sub">${t('choose_level_sub')}</p>
      ${levelCards()}
    </section>

    <section>
      <h2 class="section-title">${t('ways_to_play')}</h2>
      <p class="section-sub">${t('ways_sub')}</p>
      ${modeCards()}
    </section>
  </div>`, { route: '' });

  bindLevelCards();

  // Hero: keep drawing new words in a gentle loop.
  const paper = $('#hero-paper');
  const note = $('#hero-note');
  if (reducedMotion()) { showComplete(paper); return; }
  const pool = SHOWCASE.map((fi) => WORDS.find((w) => w.fi === fi)).filter(Boolean);
  let i = 0, cancel = null, timer = 0, alive = true;
  const next = () => {
    if (!alive) return;
    const w = pool[i++ % pool.length] || first;
    paper.innerHTML = artSvg(w);
    note.classList.add('hide');
    cancel = playDrawing(paper, 2600, () => {
      if (!alive) return;
      note.innerHTML = `${t('new_word')}<b class="fi">${w.fi}</b>${L(w)}`;
      note.classList.remove('hide');
      timer = setTimeout(next, 2600);
    });
  };
  next();
  onLeave(() => { alive = false; cancel?.(); clearTimeout(timer); });
}
