// The drawing game. Modes: type (guess while it draws), choice (4 options), listen (hear & type), reverse (see translation).

import { t, L, TOPICS } from '../i18n.js';
import { settings, setSetting, review, setLearned, item, count } from '../store.js';
import { shell, icon, esc, onLeave, $, $$, checkDetail, missFeedback, diffHtml, shuffle, fiKeys, bindFiKeys, slots, bindSlots, endScreen, reducedMotion } from '../ui.js';
import { artSvg, prepareDrawing, showComplete } from '../art.js';
import { WORDS, activeLevels, inLevels, pickItems, distractors, dueWords } from '../content.js';
import { sfx, speak, canSpeak, finnishVoices } from '../sound.js';

const BASE_MS = 13000;
let run = null;
let round = null;
let raf = 0;
let lastFrame = 0;
let drawFn = null;

function buildPool(params) {
  if (params.review) return dueWords();
  let pool = WORDS;
  if (params.lv) pool = pool.filter((w) => w.lv === Number(params.lv));
  else pool = pool.filter((w) => inLevels(w, activeLevels()));
  if (params.topic) pool = pool.filter((w) => w.topic === params.topic);
  return pool;
}

export default function play({ params }) {
  const mode = ['type', 'choice', 'listen', 'reverse'].includes(params.mode) ? params.mode : 'type';
  const pool = buildPool(params);
  const queue = pickItems(pool, Math.max(4, Number(settings.runLength) || 8));
  if (!queue.length) {
    shell(`<div class="wrap"><div class="empty">${icon('party-popper')}<p>${t('all_learned')}</p><a class="btn btn-primary" href="#/learn">${t('nav_learn')}</a></div></div>`, { route: '' });
    return;
  }
  if (mode === 'listen' && !canSpeak()) {
    // Voices load asynchronously in some browsers; wait a moment before giving up.
    shell(`<div class="wrap"><div class="empty">${icon('ear')}<p>…</p></div></div>`, { route: '', game: true });
    const timer = setTimeout(() => {
      if (finnishVoices().length) return start(mode, queue, params);
      shell(`<div class="wrap"><div class="empty">${icon('volume-x')}<p style="max-width:460px;margin:0 auto 18px">${t('s_voice_none')}</p>
        <a class="btn btn-primary" href="#/play?mode=type">${t('m_draw')}</a></div></div>`, { route: '' });
    }, 900);
    onLeave(() => clearTimeout(timer));
    return;
  }
  start(mode, queue, params);
}

function start(mode, queue, params) {
  run = { mode, queue, params, index: 0, score: 0, combo: 0, best: 0, results: [] };
  count('runs');
  onLeave(() => { cancelAnimationFrame(raf); run = null; document.removeEventListener('keydown', onKey); });
  document.addEventListener('keydown', onKey);
  nextRound();
}

function nextRound() {
  cancelAnimationFrame(raf);
  if (!run) return;
  if (run.index >= run.queue.length) return finish();
  const w = run.queue[run.index];
  round = { word: w, elapsed: 0, speed: 1, paused: false, revealed: false, letters: 0, meaning: false, attempts: 0, helped: false, outcome: null };
  if (run.mode === 'choice') round.options = shuffle([w, ...distractors(w, 3)]);
  renderRound();
}

const title = () => ({ type: t('what_is_this'), choice: t('which_word'), listen: t('hear_type'), reverse: t('in_finnish') }[run.mode]);

function renderRound() {
  const w = round.word;
  const dots = run.queue.map((_, i) => `<i class="${i < run.index ? (run.results[i] === 'miss' ? 'miss' : 'ok') : i === run.index ? 'now' : ''}"></i>`).join('');
  let stage = '';
  if (run.mode === 'listen') {
    stage = `<button class="listen-orb" id="orb" aria-label="${t('listen_again')}">${icon('volume-2')}</button>
      <div class="stage-tools"><div class="group">
        <button class="icon-btn" data-act="say" aria-label="${t('listen_again')}" title="${t('listen_again')}">${icon('rotate-ccw')}</button>
        <button class="icon-btn" data-act="slow" aria-label="${t('slow')}" title="${t('slow')}">${icon('snail')}</button>
      </div></div>`;
  } else if (run.mode === 'reverse') {
    stage = `<div class="paper" id="paper"><div style="text-align:center;padding:20px" id="reverse-card">
        <div class="eyebrow" style="justify-content:center">${esc(TOPICS[w.topic] ? L(TOPICS[w.topic]) : '')}</div>
        <div class="serif" style="font-size:clamp(40px,6vw,64px);line-height:1.05;margin-top:10px;color:var(--ink)">${esc(L(w))}</div>
      </div></div>`;
  } else {
    stage = `<div class="timer" aria-hidden="true"><i id="timer"></i></div>
      <div class="paper" id="paper">${artSvg(w)}</div>
      <div class="stage-tools"><div class="group">
        <button class="icon-btn" data-act="pause" aria-pressed="false" aria-label="${t('pause')}" title="${t('pause')} (Space)">${icon('pause')}</button>
        <button class="icon-btn" data-act="faster" aria-pressed="false" aria-label="${t('faster')}" title="${t('faster')}">${icon('fast-forward')}</button>
      </div></div>`;
  }

  const input = run.mode === 'choice'
    ? `<div class="choices" id="choices">${round.options.map((o, i) => `<button class="choice" data-choice="${esc(o.fi)}"><span class="fi">${esc(o.fi)}</span><span class="kbd">${i + 1}</span></button>`).join('')}</div>`
    : `<form class="answer" id="guess-form" autocomplete="off">
        <input id="guess" name="guess" placeholder="${t('type_here')}" aria-label="${t('type_here')}" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="go" lang="fi">
        <button class="btn btn-primary" type="submit">${t('guess')}</button>
      </form>
      ${slots('slots')}
      ${fiKeys('guess')}`;

  shell(`<div class="wrap">
    <div class="game-top">
      <a class="back" href="#/">${icon('arrow-left')} <span>${t('leave')}</span></a>
      <div class="progress-dots" aria-hidden="true">${dots}</div>
      <div class="round-info">
        <span>${t('round_of', { n: run.index + 1, total: run.queue.length })}</span>
        ${run.combo > 1 ? `<span class="combo">×${run.combo}</span>` : ''}
        <span class="score-pill">${icon('star')} <span id="score">${run.score}</span></span>
      </div>
    </div>
    <div class="play">
      <div class="stage" id="stage">${stage}</div>
      <div class="panel" id="panel">
        <div>
          <div class="panel-label">${icon(run.mode === 'listen' ? 'ear' : run.mode === 'choice' ? 'list-checks' : 'pencil-line')} ${t('m_' + (run.mode === 'type' ? 'draw' : run.mode))}</div>
          <h1 class="prompt-title">${title()}</h1>
        </div>
        ${!settings.seenPlayTip && run.mode !== 'choice' ? `<div class="tip" id="first-tip" style="margin:0">${icon('info')}<span><b>${t('tip_title')}</b><br>${t('tip_play')}
          <br><button class="btn btn-sm" data-tip-ok style="margin-top:8px">${t('got_it')}</button></span></div>` : ''}
        ${input}
        <div class="hint-line" id="hint-line" aria-live="polite"></div>
        <div class="feedback" id="feedback" role="status"></div>
        <div class="tools" id="tools">
          ${run.mode !== 'choice' ? `<button class="btn btn-soft btn-sm" data-act="letter">${icon('lightbulb')} ${t('hint_letter')}</button>` : ''}
          ${run.mode !== 'reverse' ? `<button class="btn btn-soft btn-sm" data-act="meaning">${icon('languages')} ${t('hint_meaning')}</button>` : ''}
          <button class="btn btn-ghost btn-sm" data-act="reveal">${icon('eye')} ${t('reveal')}</button>
        </div>
        <div id="reveal-slot"></div>
      </div>
    </div>
  </div>`, { route: '', game: true });

  bindFiKeys();
  round.updateSlots = bindSlots($('#guess'), w.fi, $('#slots'), { revealed: () => round.letters });
  $('#guess-form')?.addEventListener('submit', onGuess);
  $('#guess')?.addEventListener('input', () => { $('#feedback').textContent = ''; $('#guess').classList.remove('shake'); });
  $$('[data-choice]').forEach((b) => b.addEventListener('click', () => onChoice(b)));
  $$('[data-act]').forEach((b) => b.addEventListener('click', () => act(b.dataset.act, b)));
  $('#orb')?.addEventListener('click', () => say());
  $('[data-tip-ok]')?.addEventListener('click', () => { setSetting('seenPlayTip', true); $('#first-tip')?.remove(); $('#guess')?.focus(); });

  if (run.mode === 'type' || run.mode === 'choice') {
    drawFn = prepareDrawing($('#paper'));
    if (reducedMotion()) round.speed = 2.2;
    lastFrame = performance.now();
    raf = requestAnimationFrame(tick);
  }
  if (run.mode === 'listen') setTimeout(() => say(), 350);
  if (run.mode === 'choice') $('[data-choice]')?.focus({ preventScroll: true });
  else $('#guess')?.focus({ preventScroll: true });
}

function tick(now) {
  if (!run || round.revealed) return;
  const dt = Math.min(now - lastFrame, 100);
  lastFrame = now;
  if (!round.paused) round.elapsed += dt * round.speed * (Number(settings.drawSpeed) || 1);
  const f = Math.min(1, round.elapsed / BASE_MS);
  drawFn?.(f);
  const bar = $('#timer');
  if (bar) bar.style.width = (f * 100) + '%';
  // The drawing finishes but the round never times out — take your time.
  if (f < 1) raf = requestAnimationFrame(tick);
}

function say(slow = false) {
  const orb = $('#orb');
  orb?.classList.add('playing');
  speak(round.word.fi, { rate: slow ? 0.55 : settings.rate, onend: () => orb?.classList.remove('playing') });
  setTimeout(() => orb?.classList.remove('playing'), 2500);
}

function act(what, btn) {
  if (!round) return;
  if (what === 'pause') {
    round.paused = !round.paused;
    btn.setAttribute('aria-pressed', round.paused);
    btn.innerHTML = icon(round.paused ? 'play' : 'pause');
    btn.setAttribute('aria-label', round.paused ? t('resume') : t('pause'));
  }
  if (what === 'faster') {
    round.speed = round.speed > 1 ? 1 : 3;
    btn.setAttribute('aria-pressed', round.speed > 1);
  }
  if (what === 'say') say();
  if (what === 'slow') say(true);
  if (what === 'letter' || what === 'meaning') hint(what);
  if (what === 'reveal') reveal(false);
}

function hint(kind) {
  if (round.revealed) return;
  const chars = Array.from(round.word.fi);
  if (kind === 'meaning') round.meaning = true;
  else round.letters = Math.min(Math.max(1, chars.length - 1), round.letters + 1);
  round.helped = true;
  sfx.hint();
  renderHints();
  $('#guess')?.focus({ preventScroll: true });
}

function renderHints() {
  const line = $('#hint-line');
  if (!line) return;
  // Revealed letters appear inside the letter slots; this line only carries the meaning hint.
  round.updateSlots?.();
  line.innerHTML = round.meaning ? `<span class="meaning">${icon('languages')} ${esc(L(round.word))}</span>` : '';
}

function answersOf(w) { return [w.fi, ...(w.alt || [])]; }

function onGuess(e) {
  e.preventDefault();
  if (round.revealed) return;
  const input = $('#guess');
  const res = checkDetail(input.value, answersOf(round.word));
  if (res.kind === 'empty') return;
  if (res.kind === 'exact') return reveal(true);
  if (res.kind === 'near' || res.kind === 'umlaut') {
    // A small slip still shows you knew the word: accepted, with the spelling highlighted.
    return reveal(true, { kind: res.kind, typed: input.value.trim(), target: res.target });
  }
  round.attempts++;
  const close = missFeedback($('#feedback'), res, input.value, round.updateSlots);
  if (close) sfx.near(); else sfx.wrong();
  if (!close) { input.classList.remove('shake'); void input.offsetWidth; input.classList.add('shake'); }
  input.select();
}

function onChoice(btn) {
  if (round.revealed) return;
  const ok = btn.dataset.choice === round.word.fi;
  if (ok) { btn.classList.add('right'); reveal(true); }
  else {
    btn.classList.add('wrong');
    $$('[data-choice]').forEach((b) => { if (b.dataset.choice === round.word.fi) b.classList.add('right'); });
    reveal(false);
  }
  $$('[data-choice]').forEach((b) => (b.disabled = true));
}

function reveal(correct, typo = null) {
  if (round.revealed) return;
  round.revealed = true;
  cancelAnimationFrame(raf);
  const w = round.word;
  const paper = $('#paper');
  if (run.mode === 'reverse' || run.mode === 'listen') {
    const stage = $('#stage');
    stage.innerHTML = `<div class="paper" id="paper">${artSvg(w)}</div>`;
    showComplete($('#paper'));
  } else if (paper) showComplete(paper);
  const bar = $('#timer'); if (bar) bar.style.width = '100%';

  const fraction = Math.min(1, round.elapsed / BASE_MS);
  let result = 'miss', points = 0;
  if (correct) {
    const speedBonus = run.mode === 'type' ? 1 - fraction * 0.7 : 0.75;
    run.combo++;
    run.best = Math.max(run.best, run.combo);
    points = Math.round((60 + 140 * speedBonus) * (1 + Math.min(run.combo - 1, 5) * 0.1) * (round.helped ? 0.6 : 1));
    result = round.helped || run.mode === 'choice' ? 'helped' : 'good';
  } else run.combo = 0;
  run.score += points;
  run.results[run.index] = result;
  review(w.key, result);

  if (correct) { typo ? sfx.near() : sfx.good(); celebrate(points); } else sfx.reveal();
  if (settings.autoSpeak) setTimeout(() => speak(w.fi), correct ? 450 : 200);

  $('#score').textContent = run.score;
  $('#tools').remove();
  $('.fi-keys')?.remove();
  $('#feedback').textContent = '';
  $('#hint-line').innerHTML = '';
  const input = $('#guess');
  if (input) { input.disabled = true; if (!correct || typo) input.value = input.value; }
  const last = run.index === run.queue.length - 1;
  const learned = !!item(w.key)?.learned;
  $('#reveal-slot').innerHTML = `<div class="reveal ${correct ? 'success' : 'miss'}">
    <div class="panel-label">${correct ? icon('sparkles') + ' ' + (typo ? t('correct_typo') : t('correct')) : icon('bookmark') + ' ' + t('remember')}</div>
    <div class="word"><span class="fi" lang="fi">${esc(w.fi)}</span><button class="speak" data-say aria-label="${t('listen_again')}">${icon('volume-2')}</button></div>
    <div class="trans">${esc(L(w))}</div>
    ${typo ? `<div class="typo-note">${t('you_wrote')}: <s>${esc(typo.typed)}</s> → ${diffHtml(typo.typed, typo.target)}<span class="muted" style="flex-basis:100%;font-size:13px">${t(typo.kind === 'umlaut' ? 'umlaut_ok' : 'typo_ok')}</span></div>` : ''}
    ${w.ex ? `<div class="example"><span class="fi" lang="fi">${esc(w.ex[0])}</span><small>${esc(settings.lang === 'tr' ? w.ex[2] : w.ex[1])}</small></div>` : ''}
    <div class="row between">
      <button class="btn btn-ghost btn-sm" data-learn aria-pressed="${learned}">${icon(learned ? 'rotate-ccw' : 'check-check')} ${learned ? t('unmark_learned') : t('mark_learned')}</button>
      <button class="btn btn-primary" data-next>${last ? t('finish') : t('next')} ${icon('arrow-right')} <span class="kbd">↵</span></button>
    </div>
  </div>`;
  $('[data-say]').addEventListener('click', () => speak(w.fi));
  $('[data-learn]').addEventListener('click', (e) => {
    const b = e.currentTarget;
    const now = !(b.getAttribute('aria-pressed') === 'true');
    setLearned(w.key, now);
    b.setAttribute('aria-pressed', now);
    b.innerHTML = `${icon(now ? 'rotate-ccw' : 'check-check')} ${now ? t('unmark_learned') : t('mark_learned')}`;
  });
  $('[data-next]').addEventListener('click', () => { run.index++; nextRound(); });
  $('[data-next]').focus({ preventScroll: true });
  if (window.innerWidth < 900) $('#reveal-slot').scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
}

function celebrate(points) {
  const stage = $('#stage');
  if (!stage || reducedMotion()) return;
  stage.classList.add('celebrate');
  const b = document.createElement('div');
  b.className = 'burst';
  b.setAttribute('aria-hidden', 'true');
  const sparks = [[-110, -90], [120, -80], [-90, 70], [100, 90], [0, -130]].map(([x, y]) => `<span style="--x:${x}px;--y:${y}px">✦</span>`).join('');
  b.innerHTML = `${sparks}<b>+${points}</b>`;
  stage.appendChild(b);
  setTimeout(() => { b.remove(); stage.classList.remove('celebrate'); }, 1200);
}

function onKey(e) {
  if (!run || !round) return;
  const inInput = e.target.matches?.('input, textarea');
  if (e.key === 'Escape') { location.hash = '#/'; return; }
  if (round.revealed) return;
  if (run.mode === 'choice' && /^[1-4]$/.test(e.key)) {
    const b = $$('[data-choice]')[Number(e.key) - 1];
    if (b) { e.preventDefault(); onChoice(b); }
    return;
  }
  if (e.key === ' ' && !inInput && (run.mode === 'type' || run.mode === 'choice')) {
    e.preventDefault();
    const b = $('[data-act="pause"]'); if (b) act('pause', b);
  }
  if (e.altKey && (e.key === 'h' || e.key === 'H')) { e.preventDefault(); if (run.mode !== 'choice') hint('letter'); }
}

function finish() {
  cancelAnimationFrame(raf);
  const r = run;
  const correct = r.results.filter((x) => x !== 'miss').length;
  sfx.done();
  const words = r.queue.map((w, i) => `<div class="end-word ${r.results[i] === 'miss' ? 'miss' : ''}">${artSvg(w)}<span><b class="fi">${esc(w.fi)}</b><small>${esc(L(w))}</small></span></div>`).join('');
  const params = new URLSearchParams(Object.entries(r.params).filter(([k]) => k !== 'mode'));
  endScreen({
    route: '',
    title: t('end_title'),
    iconName: 'sparkles',
    stats: [[`${correct}/${r.queue.length}`, t('end_correct')], [r.score, t('end_points')], [`×${r.best}`, t('end_best')]],
    extra: `<h2 class="section-title" style="margin-top:6px">${t('end_words')}</h2><div class="end-words">${words}</div>`,
    again: () => { const p = r.params; play({ params: { ...p, mode: r.mode } }); },
    back: params.get('topic') ? '#/learn' : '#/',
  });
}
