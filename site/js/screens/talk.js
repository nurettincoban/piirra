// Everyday conversations: answer the other person in Finnish.

import { t, L, levelName } from '../i18n.js';
import { settings, progress, markDone, count } from '../store.js';
import { shell, icon, esc, onLeave, $, check, fiKeys, bindFiKeys, endScreen, rich } from '../ui.js';
import { DIALOGUES } from '../content.js';
import { sfx, speak } from '../sound.js';

const npcLine = (s) => (settings.lang === 'tr' ? s.npcTr : s.npcEn);

export default function talk({ sub }) {
  if (sub) {
    const d = DIALOGUES.find((x) => x.id === sub);
    if (d) return conversation(d);
  }
  const groups = [1, 2, 3].map((lv) => {
    const list = DIALOGUES.filter((d) => (d.lv || 1) === lv);
    if (!list.length) return '';
    return `<section>
      <h2 class="section-title"><span class="tag lv${lv}" style="vertical-align:middle;margin-right:8px">${t('lv_short' + lv)}</span>${levelName(lv)}</h2>
      <div class="lesson-list" style="margin-top:14px">${list.map((d) => `
        <a class="lesson-item" href="#/talk/${d.id}">
          <span class="li-icon">${icon(d.icon || 'message-circle')}</span>
          <span><b>${esc(L(d.title))}</b><small>${t('steps_n', { n: d.steps.length })}</small></span>
          ${progress['d:' + d.id]?.done ? `<span class="done-mark" title="${t('completed')}">${icon('circle-check')}</span>` : ''}
        </a>`).join('')}</div>
    </section>`;
  }).join('');
  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('messages-square')} ${t('m_talk')}</span>
      <h1 class="page-title">${t('talk_title')}</h1>
      <p class="lead">${t('talk_lead')}</p>
    </div>
    ${groups}
  </div>`, { route: 'talk' });
}

function conversation(d) {
  const run = { index: 0, correct: 0, history: [] };
  let st = { result: null, typed: '' };
  const onKey = (e) => { if (e.key === 'Escape') location.hash = '#/talk'; };
  document.addEventListener('keydown', onKey);
  onLeave(() => document.removeEventListener('keydown', onKey));

  function render() {
    const step = d.steps[run.index];
    const done = st.result !== null;
    const past = run.history.map((h) => `
      <div class="bubble npc"><span class="fi" lang="fi">${esc(h.step.npc)}</span><small>${esc(npcLine(h.step))}</small></div>
      <div class="bubble me ${h.ok ? '' : 'missed'}"><span class="fi" lang="fi">${esc(h.ok ? h.typed : h.step.model)}</span>${h.ok ? '' : `<small>${t('model_answer')}</small>`}</div>`).join('');
    shell(`<div class="wrap" style="max-width:820px">
      <div class="game-top">
        <a class="back" href="#/talk">${icon('arrow-left')} <span>${t('leave')}</span></a>
        <div class="progress-dots" aria-hidden="true">${d.steps.map((_, i) => `<i class="${i < run.index ? (run.history[i]?.ok ? 'ok' : 'miss') : i === run.index ? 'now' : ''}"></i>`).join('')}</div>
        <div class="round-info"><span class="tag lv${d.lv}">${t('lv_short' + d.lv)}</span></div>
      </div>
      <div class="row" style="gap:14px;margin:6px 0 10px">
        <span class="mc-icon" style="width:48px;height:48px;border-radius:14px;background:var(--sun);display:grid;place-items:center">${icon(d.icon || 'message-circle')}</span>
        <h1 class="section-title" style="margin:0">${esc(L(d.title))}</h1>
      </div>
      <div class="chat">
        ${past}
        <div class="bubble npc"><span class="fi" lang="fi">${esc(step.npc)}<button class="speak" data-say aria-label="${t('listen_again')}">${icon('volume-2')}</button></span><small>${esc(npcLine(step))}</small></div>
        ${done ? `<div class="bubble me ${st.result === 'miss' ? 'missed' : ''}"><span class="fi" lang="fi">${esc(st.result === 'miss' ? step.model : st.typed)}</span>
            <small>${st.result === 'miss' ? t('model_answer') : st.result === 'near' ? t('correct_typo') + ' · ' + esc(step.model) : t('correct')}</small></div>` : ''}
      </div>
      ${done ? `
        ${st.result !== 'miss' && step.model && st.result !== 'near' ? `<p class="muted" style="text-align:right;margin:-6px 0 12px">${t('model_answer')}: <span class="fi" lang="fi">${esc(step.model)}</span></p>` : ''}
        ${step.tip ? `<div class="tip">${icon('info')}<span>${rich(L(step.tip))}</span></div>` : ''}
        <div class="row" style="justify-content:flex-end;margin-top:16px"><button class="btn btn-primary btn-lg" data-next>${run.index === d.steps.length - 1 ? t('finish') : t('next')} ${icon('arrow-right')}</button></div>`
      : `<div class="task">${icon('message-circle-reply')}<span><span class="panel-label" style="margin-bottom:2px">${t('your_task')}</span>${esc(L(step.task))}</span></div>
        <form class="answer" id="tf" autocomplete="off" style="margin-top:14px">
          <input id="tin" placeholder="${t('your_reply')}" aria-label="${t('your_reply')}" autocapitalize="off" spellcheck="false" lang="fi">
          <button class="btn btn-primary">${icon('send-horizontal')} <span class="sr">${t('reply')}</span></button>
        </form>
        <div class="row between" style="margin-top:10px">${fiKeys('tin')}<button class="btn btn-ghost btn-sm" data-reveal>${icon('eye')} ${t('reveal')}</button></div>
        <div class="feedback" id="fb" role="status" style="margin-top:8px"></div>`}
    </div>`, { route: 'talk', game: true });
    bindFiKeys();
    $('[data-say]')?.addEventListener('click', () => speak(step.npc));
    $('#tf')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = $('#tin').value;
      const res = check(v, [...step.answers, step.model]);
      if (res === 'empty') return;
      if (res === 'wrong') {
        sfx.wrong();
        const i = $('#tin'); i.classList.remove('shake'); void i.offsetWidth; i.classList.add('shake');
        st.tries = (st.tries || 0) + 1;
        $('#fb').textContent = st.tries > 1 ? t('not_quite_n') : t('not_quite');
        return;
      }
      st.typed = v.trim();
      finish(res === 'exact' ? 'good' : 'near');
    });
    $('[data-reveal]')?.addEventListener('click', () => finish('miss'));
    $('[data-next]')?.addEventListener('click', () => {
      run.history.push({ step, ok: st.result !== 'miss', typed: st.typed });
      run.index++;
      if (run.index >= d.steps.length) return end();
      st = { result: null, typed: '' };
      render();
      if (settings.autoSpeak) speak(d.steps[run.index].npc);
    });
    if (done) $('[data-next]')?.focus({ preventScroll: true }); else $('#tin')?.focus({ preventScroll: true });
    const chat = document.querySelector('.chat');
    chat?.lastElementChild?.scrollIntoView({ block: 'nearest' });
  }
  function finish(result) {
    st.result = result;
    if (result !== 'miss') { run.correct++; sfx.good(); } else sfx.reveal();
    render();
  }
  function end() {
    sfx.done();
    count('talks');
    if (run.correct === d.steps.length) markDone('d:' + d.id);
    const idx = DIALOGUES.indexOf(d);
    const nextD = DIALOGUES[idx + 1];
    endScreen({
      route: 'talk', title: t('end_talk'), iconName: d.icon || 'messages-square', back: '#/talk',
      stats: [[`${run.correct}/${d.steps.length}`, t('end_correct')]],
      extra: nextD ? `<p><a class="btn btn-ghost" href="#/talk/${nextD.id}">${esc(L(nextD.title))} ${icon('arrow-right')}</a></p>` : '',
      again: () => conversation(d),
    });
  }
  render();
  if (settings.autoSpeak) setTimeout(() => speak(d.steps[0].npc), 300);
}
