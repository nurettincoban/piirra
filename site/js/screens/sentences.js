// Sentence lab: fill one gap with the right form. Also reused by grammar quizzes and scenes.

import { t, L, levelName } from '../i18n.js';
import { settings, review, count } from '../store.js';
import { shell, icon, esc, onLeave, $, $$, checkDetail, missFeedback, diffHtml, fiKeys, bindFiKeys, slots, bindSlots, endScreen, normalize } from '../ui.js';
import { SENTENCES, GRAMMAR_BY_ID, activeLevels, inLevels, pickItems } from '../content.js';
import { sfx, speak } from '../sound.js';

export const answerOf = (x) => (x.fi.match(/\{([^}]+)\}/) || [])[1] || '';
export const fullSentence = (x) => x.fi.replace(/[{}]/g, '');

// Besides the gap word itself, accept the learner typing it together with neighbouring words
// ("minä olen", "olen väsynyt") or the whole sentence.
function accepted(x, answer) {
  const forms = [answer, ...(x.alt || [])];
  const [before, after = ''] = x.fi.split(/\{[^}]+\}/);
  const pre = before.trim().split(/\s+/).filter(Boolean);
  const post = after.trim().split(/\s+/).filter(Boolean);
  const out = [...forms];
  for (const f of forms) {
    for (let i = 0; i <= pre.length; i++) for (let j = 0; j <= post.length; j++) {
      if (i === pre.length && j === 0) continue;
      out.push([...pre.slice(i), f, ...post.slice(0, j)].join(' '));
    }
  }
  return out;
}

// A generic gap-fill runner. `opts.visual(item)` can return extra HTML above the sentence.
export function gapRunner({ items, route, back, titleHtml, eyebrow, keyOf, endTitle, endIcon = 'text-cursor-input', visual, onAfterRender, onCountKind = 'sentences', againFn, onEnd }) {
  const run = { items, index: 0, correct: 0, combo: 0, best: 0, results: [] };
  let state = null;

  function onKey(e) { if (e.key === 'Escape') location.hash = back; }
  document.addEventListener('keydown', onKey);
  onLeave(() => document.removeEventListener('keydown', onKey));

  function render() {
    const x = run.items[run.index];
    const answer = answerOf(x);
    const [before, after] = x.fi.split(/\{[^}]+\}/);
    const done = state.result !== null;
    const gapText = done ? esc(answer) : '&nbsp;';
    const g = GRAMMAR_BY_ID.get(x.g);
    const showBase = x.base && normalize(x.base) !== normalize(answer);
    const tr = settings.lang === 'tr' ? x.tr : x.en;
    const showTr = settings.showTranslations || state.tr;
    shell(`<div class="wrap">
      <div class="game-top">
        <a class="back" href="${back}">${icon('arrow-left')} <span>${t('leave')}</span></a>
        <div class="progress-dots" aria-hidden="true">${run.items.map((_, i) => `<i class="${i < run.index ? (run.results[i] === 'miss' ? 'miss' : 'ok') : i === run.index ? 'now' : ''}"></i>`).join('')}</div>
        <div class="round-info"><span>${t('round_of', { n: run.index + 1, total: run.items.length })}</span>${run.combo > 1 ? `<span class="combo">×${run.combo}</span>` : ''}</div>
      </div>
      ${visual ? visual(x) : ''}
      <div class="sentence-card" style="${visual ? 'margin-top:16px' : ''}">
        <div class="row between">
          <span class="eyebrow">${icon('text-cursor-input')} ${eyebrow || t('fill_gap')}</span>
          ${x.lv ? `<span class="tag lv${x.lv}">${t('lv_short' + x.lv)}</span>` : ''}
        </div>
        <p class="sentence" lang="fi">${esc(before)}<span class="gap ${done ? (state.result === 'miss' ? 'missed' : 'filled') : ''}">${gapText}</span>${esc(after || '')}
          ${done ? `<button class="speak" data-say aria-label="${t('listen_again')}" style="vertical-align:middle">${icon('volume-2')}</button>` : ''}</p>
        <p class="translation">${showTr ? esc(tr) : `<button class="btn btn-ghost btn-sm" data-tr>${icon('languages')} ${t('show_translation')}</button>`}</p>
        ${done ? resultHtml(x, answer, g) : `
        <form class="answer" id="gap-form" autocomplete="off">
          <input id="gap" placeholder="${t('type_here')}" aria-label="${t('type_here')}" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="go" lang="fi">
          <button class="btn btn-primary" type="submit">${t('check')}</button>
        </form>
        <div style="margin-top:12px">${slots('gap-slots')}</div>
        <div class="row between" style="margin-top:10px">${fiKeys('gap')}
          <div class="tools">
            ${showBase ? `<button class="btn btn-soft btn-sm" data-base ${state.base ? 'disabled' : ''}>${icon('book-a')} ${state.base ? `<span class="fi" lang="fi">${esc(x.base)}</span>` : t('hint_base')}</button>` : ''}
            <button class="btn btn-soft btn-sm" data-letter>${icon('lightbulb')} ${t('hint_letter')}</button>
            <button class="btn btn-ghost btn-sm" data-reveal>${icon('eye')} ${t('reveal')}</button>
          </div>
        </div>
        <div class="feedback" id="feedback" role="status" style="margin-top:10px"></div>`}
      </div>
    </div>`, { route, game: true });

    bindFiKeys();
    const updateSlots = bindSlots($('#gap'), answer, $('#gap-slots'), { revealed: () => state.letters });
    $('[data-tr]')?.addEventListener('click', () => { state.tr = true; keepInput(render); });
    $('[data-base]')?.addEventListener('click', () => { state.base = true; state.helped = true; sfx.hint(); keepInput(render); });
    $('[data-letter]')?.addEventListener('click', () => { state.letters = Math.min(Array.from(answer).length - 1, state.letters + 1); state.helped = true; sfx.hint(); keepInput(render); });
    $('[data-reveal]')?.addEventListener('click', () => finish('miss'));
    $('[data-say]')?.addEventListener('click', () => speak(fullSentence(x)));
    $('#gap-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('#gap');
      const res = checkDetail(input.value, accepted(x, answer));
      if (res.kind === 'empty') return;
      if (res.kind === 'exact') return finish('good');
      if (res.kind === 'near' || res.kind === 'umlaut') { state.typo = { kind: res.kind, typed: input.value.trim(), target: res.target }; return finish('good'); }
      state.tries++;
      const close = missFeedback($('#feedback'), res, input.value, updateSlots);
      if (close) sfx.near(); else { sfx.wrong(); input.classList.remove('shake'); void input.offsetWidth; input.classList.add('shake'); }
      input.select();
    });
    $('#gap')?.addEventListener('input', () => { $('#feedback').textContent = ''; });
    $('[data-next]')?.addEventListener('click', next);
    if (done) $('[data-next]')?.focus({ preventScroll: true }); else $('#gap')?.focus({ preventScroll: true });
    onAfterRender?.(x, state);
  }

  function keepInput(fn) { const v = $('#gap')?.value || ''; fn(); const i = $('#gap'); if (i) { i.value = v; i.focus(); i.dispatchEvent(new Event('input')); } }

  function resultHtml(x, answer, g) {
    const good = state.result !== 'miss';
    return `<div class="reveal ${good ? 'success' : 'miss'}">
      <div class="panel-label">${good ? icon('sparkles') + ' ' + (state.typo ? t('correct_typo') : t('correct')) : icon('bookmark') + ' ' + t('remember')}</div>
      <div class="word" style="font-size:30px"><span class="fi" lang="fi">${esc(answer)}</span>${x.base && normalize(x.base) !== normalize(answer) ? `<span class="muted" style="font-size:16px;font-family:var(--font);letter-spacing:0">← ${esc(x.base)}</span>` : ''}</div>
      ${state.typo ? `<div class="typo-note">${t('you_wrote')}: <s>${esc(state.typo.typed)}</s> → ${diffHtml(state.typo.typed, state.typo.target)}<span class="muted" style="flex-basis:100%;font-size:13px">${t(state.typo.kind === 'umlaut' ? 'umlaut_ok' : 'typo_ok')}</span></div>` : ''}
      <div class="row between">
        ${g ? `<a class="btn btn-ghost btn-sm" href="#/grammar/${g.id}">${icon('graduation-cap')} ${esc(L(g.title))}</a>` : '<span></span>'}
        <button class="btn btn-primary" data-next>${run.index === run.items.length - 1 ? t('finish') : t('next')} ${icon('arrow-right')} <span class="kbd">↵</span></button>
      </div>
    </div>`;
  }

  function finish(result) {
    if (state.result !== null) return;
    if (result === 'good' && state.helped) result = 'helped';
    state.result = result;
    const x = run.items[run.index];
    run.results[run.index] = result;
    if (result !== 'miss') { run.correct++; run.combo++; run.best = Math.max(run.best, run.combo); } else run.combo = 0;
    const key = keyOf?.(x);
    if (key) review(key, result);
    result === 'good' ? sfx.good() : result === 'helped' ? sfx.near() : sfx.reveal();
    if (settings.autoSpeak) setTimeout(() => speak(fullSentence(x)), 300);
    render();
  }

  function next() {
    run.index++;
    if (run.index >= run.items.length) return end();
    start();
  }
  function start() { state = { result: null, letters: 0, base: false, helped: false, tries: 0, tr: false, typo: '' }; render(); }

  function end() {
    sfx.done();
    count(onCountKind);
    onEnd?.(run);
    endScreen({
      route, title: endTitle, iconName: endIcon, back,
      stats: [[`${run.correct}/${run.items.length}`, t('end_correct')], [`×${run.best}`, t('end_best')], [Math.round((run.correct / run.items.length) * 100) + '%', t('end_accuracy')]],
      extra: `<div class="end-words">${run.items.map((x, i) => `<div class="end-word ${run.results[i] === 'miss' ? 'miss' : ''}" style="padding-left:14px"><span><b class="fi" lang="fi">${esc(fullSentence(x))}</b><small>${esc(settings.lang === 'tr' ? x.tr : x.en)}</small></span></div>`).join('')}</div>`,
      again: againFn,
    });
  }

  start();
}

export default function sentences({ params }) {
  const lv = params.lv ? [Number(params.lv)] : activeLevels();
  let pool = SENTENCES.filter((x) => inLevels(x, lv));
  if (params.g) pool = SENTENCES.filter((x) => x.g === params.g);
  const items = pickItems(pool, 8, (x) => 's:' + x.id, { preferNew: 0.6 });
  if (!items.length) {
    shell(`<div class="wrap"><div class="empty">${icon('inbox')}<p>${t('no_items')}</p><a class="btn" href="#/learn">${t('nav_learn')}</a></div></div>`, { route: 'sentences' });
    return;
  }
  gapRunner({
    items, route: 'sentences', back: '#/learn',
    eyebrow: `${t('m_sentences')} · ${levelName(settings.level)}`,
    keyOf: (x) => 's:' + x.id,
    endTitle: t('end_sent'),
    againFn: () => sentences({ params }),
  });
}
