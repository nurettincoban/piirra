// Reading: short graded texts with audio, glossary, translation and comprehension questions.

import { t, L, levelName } from '../i18n.js';
import { settings, progress, markDone, count, logAnswer } from '../store.js';
import { shell, icon, esc, onLeave, $, $$, endScreen } from '../ui.js';
import { READINGS } from '../content.js';
import { sfx, speak, stopSpeech } from '../sound.js';

const tr = (o) => (settings.lang === 'tr' ? o.tr : o.en);

export default function read({ sub }) {
  const r = READINGS.find((x) => x.id === sub);
  if (r) return text(r);
  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('book-open-text')} ${t('m_read')}</span>
      <h1 class="page-title">${t('read_title')}</h1>
      <p class="lead">${t('read_lead')}</p>
    </div>
    ${[1, 2, 3].map((lv) => {
      const list = READINGS.filter((x) => x.lv === lv);
      return list.length ? `<section>
        <h2 class="section-title"><span class="tag lv${lv}" style="vertical-align:middle;margin-right:8px">${t('lv_short' + lv)}</span>${levelName(lv)}</h2>
        <div class="lesson-list" style="margin-top:14px">${list.map((x) => `
          <a class="lesson-item" href="#/read/${x.id}">
            <span class="li-icon">${icon(x.icon || 'book-open-text')}</span>
            <span><b lang="fi">${esc(x.title.fi)}</b><small>${esc(L(x.title))} · ${t('questions_n', { n: x.questions.length })}</small></span>
            ${progress['r:' + x.id]?.done ? `<span class="done-mark" title="${t('completed')}">${icon('circle-check')}</span>` : ''}
          </a>`).join('')}</div>
      </section>` : '';
    }).join('')}
  </div>`, { route: 'read' });
}

function text(r) {
  let showTr = false;
  let answers = [];
  const onKey = (e) => { if (e.key === 'Escape') location.hash = '#/read'; };
  document.addEventListener('keydown', onKey);
  onLeave(() => { document.removeEventListener('keydown', onKey); stopSpeech(); });

  function render() {
    const trans = settings.lang === 'tr' ? r.trans?.tr : r.trans?.en;
    const done = answers.length === r.questions.length;
    shell(`<div class="wrap">
      <div class="lesson page-head">
        <a class="back" href="#/read">${icon('arrow-left')} ${t('m_read')}</a>
        <div class="row" style="margin-top:14px"><span class="tag lv${r.lv}">${t('lv_short' + r.lv)} · ${levelName(r.lv)}</span></div>
        <h1 class="page-title" lang="fi">${esc(r.title.fi)}</h1>
        <p class="lead">${esc(L(r.title))}</p>
      </div>
      <div class="read-layout">
        <article class="lesson">
          <div class="row" style="margin-bottom:16px">
            <button class="btn btn-sm" data-play-all>${icon('volume-2')} ${t('listen_all')}</button>
            <button class="btn btn-sm btn-ghost" data-tr aria-pressed="${showTr}">${icon('languages')} ${t('show_translation')}</button>
          </div>
          <div class="read-text">${r.text.map((p, i) => `
            <div class="read-para">
              <button class="speak" data-say="${i}" aria-label="${t('listen_again')}">${icon('volume-2')}</button>
              <div><p lang="fi" class="fi-text">${esc(p)}</p>${showTr && trans?.[i] ? `<p class="read-tr">${esc(trans[i])}</p>` : ''}</div>
            </div>`).join('')}</div>
          <h2 class="section-title" style="margin-top:32px">${t('quiz')}</h2>
          <div class="stack" style="margin-top:14px">${r.questions.map((q, qi) => {
            const a = answers[qi];
            return `<div class="card read-q">
              <b>${qi + 1}. ${esc(tr(q.q))}</b>
              <div class="choices" style="grid-template-columns:1fr;margin-top:10px">${q.options.map((o, oi) => {
                const cls = a === undefined ? '' : oi === q.answer ? 'right' : oi === a ? 'wrong' : '';
                return `<button class="choice ${cls}" data-q="${qi}" data-o="${oi}" ${a !== undefined ? 'disabled' : ''} style="font-size:16px;padding:12px 14px">${esc(tr(o))}</button>`;
              }).join('')}</div>
            </div>`;
          }).join('')}</div>
          ${done ? `<div class="row" style="margin:24px 0"><button class="btn btn-primary btn-lg" data-finish>${t('finish')} ${icon('arrow-right')}</button></div>` : ''}
        </article>
        <aside class="card read-gloss">
          <div class="panel-label">${icon('book-a')} ${t('glossary')}</div>
          <div class="stack" style="gap:8px;margin-top:12px">${(r.gloss || []).map(([fi, en, trw], gi) => `
            <button class="gloss-row" data-gloss="${gi}"><span class="fi" lang="fi">${esc(fi)}</span><small>${esc(settings.lang === 'tr' ? trw : en)}</small></button>`).join('')}</div>
        </aside>
      </div>
    </div>`, { route: 'read' });

    $$('[data-say]').forEach((b) => b.addEventListener('click', () => speak(r.text[Number(b.dataset.say)])));
    $('[data-play-all]').addEventListener('click', () => speak(r.text.join(' ')));
    $('[data-tr]').addEventListener('click', () => { showTr = !showTr; keepScroll(render); });
    $$('[data-gloss]').forEach((b) => b.addEventListener('click', () => speak(r.gloss[Number(b.dataset.gloss)][0])));
    $$('[data-q]').forEach((b) => b.addEventListener('click', () => {
      const qi = Number(b.dataset.q), oi = Number(b.dataset.o);
      if (answers[qi] !== undefined) return;
      answers[qi] = oi;
      const ok = oi === r.questions[qi].answer;
      ok ? sfx.good() : sfx.wrong();
      logAnswer(ok);
      keepScroll(render);
    }));
    $('[data-finish]')?.addEventListener('click', finish);
  }

  function keepScroll(fn) { const y = window.scrollY; fn(); window.scrollTo(0, y); }

  function finish() {
    const correct = answers.filter((a, i) => a === r.questions[i].answer).length;
    if (correct >= Math.ceil(r.questions.length * 0.6)) markDone('r:' + r.id);
    count('readings');
    sfx.done();
    const idx = READINGS.indexOf(r);
    const next = READINGS[idx + 1];
    endScreen({
      route: 'read', title: t('end_read'), iconName: r.icon || 'book-open-text', back: '#/read',
      stats: [[`${correct}/${r.questions.length}`, t('end_correct')]],
      extra: next ? `<p><a class="btn btn-ghost" href="#/read/${next.id}"><span lang="fi">${esc(next.title.fi)}</span> ${icon('arrow-right')}</a></p>` : '',
      again: () => text(r),
    });
  }
  render();
}
