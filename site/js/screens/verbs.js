// Verb gym: conjugate a verb for a person and tense, then see the full table.

import { t, L } from '../i18n.js';
import { settings, review, count } from '../store.js';
import { shell, icon, esc, onLeave, $, $$, check, fiKeys, bindFiKeys, slots, bindSlots, endScreen, shuffle } from '../ui.js';
import { VERBS, activeLevels, inLevels } from '../content.js';
import { sfx, speak } from '../sound.js';

const PRONOUNS = ['minä', 'sinä', 'hän', 'me', 'te', 'he'];
const NEG = ['en', 'et', 'ei', 'emme', 'ette', 'eivät'];
let tenses = ['pres', 'past', 'neg'];

export function formOf(v, tense, p) {
  if (tense === 'pres') return v.pres[p];
  if (tense === 'past') return v.past[p];
  return `${NEG[p]} ${v.neg}`;
}

export function conjTable(v, tense, highlight = -1) {
  return `<table class="conj-table"><tbody>${PRONOUNS.map((pr, i) => `<tr class="${i === highlight ? 'target' : ''}"><td>${pr}</td><td class="fi" lang="fi">${esc(formOf(v, tense, i))}</td></tr>`).join('')}</tbody></table>`;
}

function buildQueue() {
  const pool = VERBS.filter((v) => inLevels(v, activeLevels()));
  return shuffle(pool).slice(0, 10).map((v) => ({ v, tense: tenses[Math.floor(Math.random() * tenses.length)], p: Math.floor(Math.random() * 6) }));
}

export default function verbs() {
  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('dumbbell')} ${t('m_verbs')}</span>
      <h1 class="page-title">${t('verbs_title')}</h1>
      <p class="lead">${t('m_verbs_d')}</p>
    </div>
    <div class="card stack" style="max-width:720px">
      <b>${t('tenses')}</b>
      <div class="chips" id="tenses">${['pres', 'past', 'neg'].map((x) => `<button class="chip" data-tense="${x}" aria-pressed="${tenses.includes(x)}">${t('tense_' + x)}</button>`).join('')}</div>
      <div><button class="btn btn-primary btn-lg" id="go">${icon('play')} ${t('play')}</button></div>
    </div>
    <section>
      <h2 class="section-title">${t('full_table')}</h2>
      <p class="section-sub">${VERBS.length} · ${t('tense_pres')} / ${t('tense_past')} / ${t('tense_neg')}</p>
      <div class="search" style="max-width:420px;margin-bottom:16px">${icon('search')}<input id="vq" placeholder="${t('search')}" aria-label="${t('search')}"></div>
      <div class="grid grid-3" id="verb-list"></div>
    </section>
  </div>`, { route: 'verbs' });

  $$('[data-tense]').forEach((b) => b.addEventListener('click', () => {
    const x = b.dataset.tense;
    if (tenses.includes(x)) { if (tenses.length > 1) tenses = tenses.filter((y) => y !== x); }
    else tenses.push(x);
    $$('[data-tense]').forEach((c) => c.setAttribute('aria-pressed', tenses.includes(c.dataset.tense)));
  }));
  $('#go').addEventListener('click', () => drill(buildQueue()));

  const list = $('#verb-list');
  const draw = (q = '') => {
    const nq = q.toLocaleLowerCase('fi').trim();
    list.innerHTML = VERBS.filter((v) => !nq || v.inf.includes(nq) || v.en.toLowerCase().includes(nq) || v.tr.toLocaleLowerCase('tr').includes(nq))
      .map((v) => `<details class="card" style="padding:16px 18px">
        <summary style="cursor:pointer;list-style:none;display:flex;align-items:center;gap:10px">
          <span class="fi" style="font-size:19px" lang="fi">${esc(v.inf)}</span><span class="muted" style="font-size:14px">${esc(L(v))}</span>
          <span class="tag lv${v.lv}" style="margin-left:auto">${t('lv_short' + v.lv)}</span>
        </summary>
        <div style="margin-top:12px"><span class="muted" style="font-size:13px">${t('verb_type', { n: v.type })}</span>
          <div class="split" style="gap:12px;margin-top:6px">
            <div><b style="font-size:13px">${t('tense_pres')}</b>${conjTable(v, 'pres')}</div>
            <div><b style="font-size:13px">${t('tense_past')}</b>${conjTable(v, 'past')}</div>
          </div>
          <div style="margin-top:10px"><b style="font-size:13px">${t('tense_neg')}</b> <span class="fi" lang="fi">en ${esc(v.neg)}, et ${esc(v.neg)}, ei ${esc(v.neg)}…</span></div>
        </div>
      </details>`).join('');
  };
  draw();
  $('#vq').addEventListener('input', (e) => draw(e.target.value));
}

function drill(queue) {
  const run = { queue, index: 0, correct: 0, combo: 0, best: 0, results: [] };
  let st;
  const onKey = (e) => { if (e.key === 'Escape') location.hash = '#/verbs'; };
  document.addEventListener('keydown', onKey);
  onLeave(() => document.removeEventListener('keydown', onKey));

  function render() {
    const { v, tense, p } = run.queue[run.index];
    const answer = formOf(v, tense, p);
    const done = st.result !== null;
    shell(`<div class="wrap">
      <div class="game-top">
        <a class="back" href="#/verbs">${icon('arrow-left')} <span>${t('leave')}</span></a>
        <div class="progress-dots" aria-hidden="true">${run.queue.map((_, i) => `<i class="${i < run.index ? (run.results[i] === 'miss' ? 'miss' : 'ok') : i === run.index ? 'now' : ''}"></i>`).join('')}</div>
        <div class="round-info"><span>${t('round_of', { n: run.index + 1, total: run.queue.length })}</span>${run.combo > 1 ? `<span class="combo">×${run.combo}</span>` : ''}</div>
      </div>
      <div class="split">
        <div class="sentence-card">
          <div class="row between"><span class="eyebrow">${icon('dumbbell')} ${t('conjugate')} · ${t('tense_' + tense)}</span><span class="tag lv${v.lv}">${t('verb_type', { n: v.type })}</span></div>
          <p class="sentence" lang="fi" style="margin-bottom:4px">${esc(v.inf)}</p>
          <p class="translation">${esc(L(v))}</p>
          <p class="sentence" style="font-size:clamp(24px,3vw,32px)"><span lang="fi">${PRONOUNS[p]}</span> <span class="gap ${done ? (st.result === 'miss' ? 'missed' : 'filled') : ''}">${done ? esc(answer) : '&nbsp;'}</span></p>
          <p class="muted" style="margin:-6px 0 18px">${esc(t('person')[p])}</p>
          ${done ? '' : `<form class="answer" id="vf" autocomplete="off">
            <input id="vin" placeholder="${t('type_here')}" aria-label="${t('type_here')}" autocapitalize="off" autocorrect="off" spellcheck="false" lang="fi">
            <button class="btn btn-primary">${t('check')}</button></form>
            <div class="row between" style="margin-top:10px">${fiKeys('vin')}<div class="tools">
              <button class="btn btn-soft btn-sm" data-letter>${icon('lightbulb')} ${t('hint_letter')}</button>
              <button class="btn btn-ghost btn-sm" data-reveal>${icon('eye')} ${t('reveal')}</button></div></div>
            <div style="margin-top:12px">${slots('v-slots')}</div>
            <div class="feedback" id="fb" role="status"></div>`}
        </div>
        <div>${done ? `<div class="reveal ${st.result === 'miss' ? 'miss' : 'success'}">
            <div class="panel-label">${st.result === 'miss' ? icon('bookmark') + ' ' + t('remember') : icon('sparkles') + ' ' + t('correct')}</div>
            <div class="word" style="font-size:30px"><span class="fi" lang="fi">${PRONOUNS[p]} ${esc(answer)}</span><button class="speak" data-say aria-label="${t('listen_again')}">${icon('volume-2')}</button></div>
            <div style="margin-top:12px">${conjTable(v, tense, p)}</div>
            <div class="row" style="justify-content:flex-end"><button class="btn btn-primary" data-next>${run.index === run.queue.length - 1 ? t('finish') : t('next')} ${icon('arrow-right')} <span class="kbd">↵</span></button></div>
          </div>` : `<div class="card"><div class="panel-label">${t('tense_pres')}</div><p class="muted" style="margin:6px 0 0">${PRONOUNS.slice(0, 3).map((pr, i) => `${pr} <b class="fi" lang="fi">${esc(i === p && tense === 'pres' ? '…' : v.pres[i])}</b>`).join(' · ')}</p></div>`}</div>
      </div>
    </div>`, { route: 'verbs', game: true });
    bindFiKeys();
    const updateSlots = bindSlots($('#vin'), answer, $('#v-slots'), { revealed: () => st.letters });
    $('#vf')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('#vin');
      const res = check(input.value, [answer, `${PRONOUNS[p]} ${answer}`]);
      if (res === 'empty') return;
      if (res === 'exact') return finish(st.letters ? 'helped' : 'good');
      if (res === 'near' || res === 'umlaut') return finish('helped');
      sfx.wrong();
      input.classList.remove('shake'); void input.offsetWidth; input.classList.add('shake');
      $('#fb').textContent = t('not_quite');
      input.select();
    });
    $('[data-letter]')?.addEventListener('click', () => { st.letters = Math.min(Array.from(answer).filter((c) => c !== ' ').length - 1, st.letters + 1); sfx.hint(); updateSlots(); $('#vin').focus(); });
    $('[data-reveal]')?.addEventListener('click', () => finish('miss'));
    $('[data-say]')?.addEventListener('click', () => speak(`${PRONOUNS[p]} ${answer}`));
    $('[data-next]')?.addEventListener('click', () => { run.index++; run.index >= run.queue.length ? end() : start(); });
    if (done) $('[data-next]').focus({ preventScroll: true }); else $('#vin').focus({ preventScroll: true });
  }
  function finish(result) {
    const { v, tense, p } = run.queue[run.index];
    st.result = result;
    run.results[run.index] = result;
    if (result !== 'miss') { run.correct++; run.combo++; run.best = Math.max(run.best, run.combo); } else run.combo = 0;
    review(`v:${v.inf}:${tense}`, result);
    result === 'miss' ? sfx.reveal() : sfx.good();
    if (settings.autoSpeak) setTimeout(() => speak(`${PRONOUNS[p]} ${formOf(v, tense, p)}`), 250);
    render();
  }
  function start() { st = { result: null, letters: 0 }; render(); }
  function end() {
    sfx.done(); count('verbRuns');
    endScreen({ route: 'verbs', title: t('end_verbs'), iconName: 'dumbbell', back: '#/verbs',
      stats: [[`${run.correct}/${run.queue.length}`, t('end_correct')], [`×${run.best}`, t('end_best')]],
      again: () => drill(buildQueue()) });
  }
  start();
}
