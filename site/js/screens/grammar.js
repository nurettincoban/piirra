// Pocket grammar: short lessons with examples and a mini quiz.

import { t, L, levelName } from '../i18n.js';
import { settings, progress, markDone } from '../store.js';
import { shell, icon, esc, $, $$, rich, shuffle } from '../ui.js';
import { GRAMMAR, GRAMMAR_BY_ID, SENTENCES, activeLevels, pickItems } from '../content.js';
import { speak } from '../sound.js';
import { gapRunner } from './sentences.js';

export default function grammar({ sub, params }) {
  const lesson = GRAMMAR_BY_ID.get(sub);
  if (lesson && params.quiz) return quiz(lesson);
  if (lesson) return page(lesson);
  if (params.mix) return workout();
  const done = GRAMMAR.filter((g) => progress['g:' + g.id]?.done).length;
  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('graduation-cap')} ${t('m_grammar')} · ${done}/${GRAMMAR.length}</span>
      <h1 class="page-title">${t('grammar_title')}</h1>
      <p class="lead">${t('grammar_lead')}</p>
    </div>
    <a class="mode-card featured" href="#/grammar?mix=1" style="max-width:640px;min-height:0">
      <span class="mc-icon">${icon('shuffle')}</span>
      <h3>${t('g_workout')}</h3>
      <p>${t('g_workout_d')}</p>
      <span class="mc-meta"><span>${t('lv_short' + settings.level)} · ${levelName(settings.level)}</span><span class="mc-arrow">${icon('arrow-up-right')}</span></span>
    </a>
    ${[1, 2, 3].map((lv) => {
      const list = GRAMMAR.filter((g) => g.lv === lv);
      return list.length ? `<section>
        <h2 class="section-title"><span class="tag lv${lv}" style="vertical-align:middle;margin-right:8px">${t('lv_short' + lv)}</span>${levelName(lv)}</h2>
        <div class="lesson-list" style="margin-top:14px">${list.map((g) => `
          <a class="lesson-item" href="#/grammar/${g.id}">
            <span class="li-icon">${icon(g.icon || 'book-open')}</span>
            <span><b>${esc(L(g.title))}</b><small>${esc(L(g.summary))}</small></span>
            ${progress['g:' + g.id]?.done ? `<span class="done-mark" title="${t('lesson_done')}">${icon('circle-check')}</span>` : ''}
          </a>`).join('')}</div>
      </section>` : '';
    }).join('')}
  </div>`, { route: 'grammar' });
}

function page(g) {
  const i = GRAMMAR.indexOf(g);
  const prev = GRAMMAR[i - 1], next = GRAMMAR[i + 1];
  const lang = settings.lang === 'tr' ? 'tr' : 'en';
  const related = SENTENCES.filter((s) => s.g === g.id).length;
  const head = g.table?.head?.[lang] || g.table?.head?.en || [];
  shell(`<div class="wrap">
    <div class="page-head lesson">
      <a class="back" href="#/grammar">${icon('arrow-left')} ${t('m_grammar')}</a>
      <div class="row" style="margin-top:14px"><span class="tag lv${g.lv}">${t('lv_short' + g.lv)} · ${levelName(g.lv)}</span>
        ${progress['g:' + g.id]?.done ? `<span class="tag" style="color:var(--good)">${icon('check')} ${t('lesson_done')}</span>` : ''}</div>
      <h1 class="page-title">${esc(L(g.title))}</h1>
      <p class="lead">${esc(L(g.summary))}</p>
    </div>
    <article class="lesson">
      ${(g.body?.[lang] || g.body?.en || []).map((p) => `<p>${rich(p)}</p>`).join('')}
      ${g.table?.rows?.length ? `<table class="lesson-table"><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>${g.table.rows.map((r) => `<tr>${r.map((c) => `<td lang="fi">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''}
      ${g.examples?.length ? `<h2 class="section-title" style="margin-top:28px">${t('examples')}</h2>
        <div class="examples">${g.examples.map((e, k) => `<div class="example-row"><button class="speak" data-say="${k}" aria-label="${t('listen_again')}">${icon('volume-2')}</button>
          <span><span class="fi" lang="fi">${esc(e[0])}</span><small>${esc(lang === 'tr' ? e[2] : e[1])}</small></span></div>`).join('')}</div>` : ''}
      <div class="row" style="margin:28px 0">
        ${g.quiz?.length ? `<a class="btn btn-primary btn-lg" href="#/grammar/${g.id}?quiz=1">${icon('pencil-line')} ${t('start_quiz')}</a>` : ''}
        ${related ? `<a class="btn btn-lg" href="#/sentences?g=${g.id}">${icon('text-cursor-input')} ${t('m_sentences')} · ${related}</a>` : ''}
      </div>
      <div class="row between" style="border-top:1px solid var(--line);padding-top:20px">
        ${prev ? `<a class="btn btn-ghost" href="#/grammar/${prev.id}">${icon('arrow-left')} ${esc(L(prev.title))}</a>` : '<span></span>'}
        ${next ? `<a class="btn btn-ghost" href="#/grammar/${next.id}">${esc(L(next.title))} ${icon('arrow-right')}</a>` : ''}
      </div>
    </article>
  </div>`, { route: 'grammar' });
  $$('[data-say]').forEach((b) => b.addEventListener('click', () => speak(g.examples[Number(b.dataset.say)][0])));
  if (!g.quiz?.length) markDone('g:' + g.id);
}

// Mixed practice across every lesson of the active levels: lesson quizzes + tagged sentences.
function workout() {
  const levels = activeLevels();
  const quizItems = GRAMMAR.filter((g) => levels.includes(g.lv)).flatMap((g) => (g.quiz || []).map((q, k) => ({ ...q, id: g.id + '-' + k, g: g.id, lv: g.lv })));
  const sentenceItems = pickItems(SENTENCES.filter((s) => levels.includes(s.lv)), 6, (x) => 's:' + x.id, { preferNew: 0.5 });
  const items = shuffle([...shuffle(quizItems).slice(0, 6), ...sentenceItems]);
  gapRunner({
    items, route: 'grammar', back: '#/grammar',
    eyebrow: t('g_workout'),
    keyOf: (x) => (x.id.startsWith('s') && /^s\d-/.test(x.id) ? 's:' + x.id : null),
    endTitle: t('end_sent'), endIcon: 'graduation-cap', onCountKind: 'quizzes',
    againFn: workout,
  });
}

function quiz(g) {
  const items = g.quiz.map((q, k) => ({ ...q, id: g.id + '-' + k, g: g.id, lv: g.lv }));
  gapRunner({
    items, route: 'grammar', back: '#/grammar/' + g.id,
    eyebrow: `${t('quiz')} · ${L(g.title)}`,
    endTitle: t('lesson_done'), endIcon: 'graduation-cap', onCountKind: 'quizzes',
    onEnd: (run) => { if (run.correct >= Math.ceil(run.items.length * 0.6)) markDone('g:' + g.id); },
    againFn: () => quiz(g),
  });
}
