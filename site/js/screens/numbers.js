// Numbers: generated practice from 0 up to 9999.

import { t } from '../i18n.js';
import { settings, count, logAnswer } from '../store.js';
import { shell, icon, esc, onLeave, $, $$, check, fiKeys, bindFiKeys, endScreen, toast } from '../ui.js';
import { numberWord, NUMBER_TABLE } from '../finnish.js';
import { sfx, speak, canSpeak } from '../sound.js';

const RANGES = [20, 100, 1000, 9999];
let range = 100;
let kind = 'num_to_word';

export default function numbers() {
  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('binary')} ${t('m_numbers')}</span>
      <h1 class="page-title">${t('numbers_title')}</h1>
      <p class="lead">${t('numbers_lead')}</p>
    </div>
    <div class="split">
      <div class="card stack">
        <b>${t('range')}</b>
        <div class="seg" id="range">${RANGES.map((r) => `<button data-range="${r}" aria-pressed="${r === range}">0–${r}</button>`).join('')}</div>
        <b style="margin-top:8px">${t('practice')}</b>
        <div class="seg" id="kind" style="flex-wrap:wrap">${['num_to_word', 'word_to_num', 'num_listen'].map((k) => `<button data-kind="${k}" aria-pressed="${k === kind}">${t(k)}</button>`).join('')}</div>
        <div style="margin-top:8px"><button class="btn btn-primary btn-lg" id="go">${icon('play')} ${t('play')}</button></div>
      </div>
      <div class="card">
        <b>${t('num_table')}</b>
        <table class="conj-table" style="margin-top:8px"><tbody>${NUMBER_TABLE.map(([n, w]) => `<tr><td>${n}</td><td class="fi" lang="fi">${w} <button class="speak" data-say="${w}" style="width:30px;height:30px;float:right" aria-label="${w}">${icon('volume-2')}</button></td></tr>`).join('')}</tbody></table>
      </div>
    </div>
  </div>`, { route: 'numbers' });
  $$('[data-range]').forEach((b) => b.addEventListener('click', () => { range = Number(b.dataset.range); $$('[data-range]').forEach((x) => x.setAttribute('aria-pressed', x === b)); }));
  $$('[data-kind]').forEach((b) => b.addEventListener('click', () => { kind = b.dataset.kind; $$('[data-kind]').forEach((x) => x.setAttribute('aria-pressed', x === b)); }));
  $$('[data-say]').forEach((b) => b.addEventListener('click', () => speak(b.dataset.say)));
  $('#go').addEventListener('click', () => {
    if (kind === 'num_listen' && !canSpeak()) { toast(t('no_voice_toast')); return; }
    drill();
  });
}

function drill() {
  const used = new Set();
  const queue = [];
  while (queue.length < 10) {
    const n = Math.floor(Math.random() * (range + 1));
    if (!used.has(n) || used.size > range) { used.add(n); queue.push(n); }
  }
  const run = { i: 0, correct: 0, results: [] };
  let st;
  const onKey = (e) => { if (e.key === 'Escape') location.hash = '#/numbers'; };
  document.addEventListener('keydown', onKey);
  onLeave(() => document.removeEventListener('keydown', onKey));

  function render() {
    const n = queue[run.i];
    const word = numberWord(n);
    const done = st.result !== null;
    const prompt = kind === 'num_to_word' ? `<span style="font-size:clamp(56px,10vw,110px)">${n}</span>`
      : kind === 'word_to_num' ? `<span lang="fi" style="word-break:break-word">${esc(numberWord(n, { spaced: n >= 1000 }))}</span>`
      : `<button class="listen-orb" id="orb" style="width:140px" aria-label="${t('listen_again')}">${icon('volume-2')}</button>`;
    shell(`<div class="wrap" style="max-width:760px">
      <div class="game-top">
        <a class="back" href="#/numbers">${icon('arrow-left')} <span>${t('leave')}</span></a>
        <div class="progress-dots" aria-hidden="true">${queue.map((_, k) => `<i class="${k < run.i ? (run.results[k] ? 'ok' : 'miss') : k === run.i ? 'now' : ''}"></i>`).join('')}</div>
        <div class="round-info"><span>${t('round_of', { n: run.i + 1, total: queue.length })}</span></div>
      </div>
      <div class="sentence-card" style="text-align:center">
        <span class="eyebrow">${icon('binary')} ${t(kind)}</span>
        <div class="sentence" style="display:grid;place-items:center;min-height:140px">${prompt}</div>
        ${done ? `<div class="reveal ${st.result ? 'success' : 'miss'}" style="text-align:left">
            <div class="panel-label">${st.result ? icon('sparkles') + ' ' + t('correct') : icon('bookmark') + ' ' + t('remember')}</div>
            <div class="word" style="font-size:clamp(22px,3vw,30px);flex-wrap:wrap"><span>${n}</span><span class="fi" lang="fi" style="word-break:break-word">${esc(numberWord(n, { spaced: n >= 1000 }))}</span><button class="speak" data-say aria-label="${t('listen_again')}">${icon('volume-2')}</button></div>
            <div class="row" style="justify-content:flex-end"><button class="btn btn-primary" data-next>${run.i === queue.length - 1 ? t('finish') : t('next')} ${icon('arrow-right')} <span class="kbd">↵</span></button></div>
          </div>` : `<form class="answer" id="nf" autocomplete="off">
            <input id="nin" ${kind === 'num_to_word' ? `placeholder="${t('type_here')}" lang="fi"` : 'inputmode="numeric" placeholder="123"'} aria-label="${t('type_here')}" autocapitalize="off" spellcheck="false">
            <button class="btn btn-primary">${t('check')}</button></form>
            ${kind === 'num_to_word' ? `<div class="row" style="margin-top:10px">${fiKeys('nin')}</div>` : ''}
            <div class="row" style="justify-content:center;margin-top:12px"><button class="btn btn-ghost btn-sm" data-reveal>${icon('eye')} ${t('reveal')}</button></div>
            <div class="feedback" id="fb" role="status"></div>`}
      </div>
    </div>`, { route: 'numbers', game: true });
    bindFiKeys();
    const say = () => { const o = $('#orb'); o?.classList.add('playing'); speak(word, { onend: () => o?.classList.remove('playing') }); };
    $('#orb')?.addEventListener('click', say);
    $('[data-say]')?.addEventListener('click', () => speak(word));
    $('#nf')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = $('#nin').value.trim();
      if (!v) return;
      let ok;
      if (kind === 'num_to_word') {
        const res = check(v.replace(/\s+/g, ''), [word]);
        ok = res === 'exact' || res === 'umlaut' || res === 'near';
      } else ok = Number(v.replace(/\D/g, '')) === n && /\d/.test(v);
      if (ok) return finish(true);
      sfx.wrong();
      const i = $('#nin'); i.classList.remove('shake'); void i.offsetWidth; i.classList.add('shake');
      $('#fb').textContent = t('not_quite');
    });
    $('[data-reveal]')?.addEventListener('click', () => finish(false));
    $('[data-next]')?.addEventListener('click', () => { run.i++; run.i >= queue.length ? end() : start(); });
    if (done) $('[data-next]').focus({ preventScroll: true }); else $('#nin').focus({ preventScroll: true });
    if (!done && kind === 'num_listen' && !st.played) { st.played = true; setTimeout(say, 300); }
  }
  function finish(ok) {
    st.result = ok;
    run.results[run.i] = ok;
    if (ok) run.correct++;
    logAnswer(ok);
    ok ? sfx.good() : sfx.reveal();
    if (settings.autoSpeak && kind !== 'num_listen') setTimeout(() => speak(numberWord(queue[run.i])), 250);
    render();
  }
  function start() { st = { result: null }; render(); }
  function end() {
    sfx.done(); count('numberRuns');
    endScreen({ route: 'numbers', title: t('end_numbers'), iconName: 'binary', back: '#/numbers',
      stats: [[`${run.correct}/${queue.length}`, t('end_correct')]], again: drill });
  }
  start();
}
