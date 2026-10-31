// Progress: calm statistics, activity calendar and backup tools.

import { t, L, TOPICS, levelName } from '../i18n.js';
import { progress, stats, isKnown, exportData, importData, resetAll, today } from '../store.js';
import { shell, icon, $, bar, toast, download } from '../ui.js';
import { WORDS, SENTENCES, GRAMMAR, levelStats } from '../content.js';
import { rerender, applyPrefs } from '../main.js';

function heatmap() {
  const cells = [];
  const end = new Date();
  // Start on the Monday 19 weeks before this week.
  const start = new Date(end);
  start.setDate(end.getDate() - ((end.getDay() + 6) % 7) - 19 * 7);
  const max = Math.max(1, ...Object.values(stats.days || {}));
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const v = stats.days?.[k] || 0;
    const l = v ? Math.min(4, 1 + Math.floor((v / max) * 3.99)) : 0;
    cells.push(`<i data-l="${l}" title="${k}: ${v}"></i>`);
  }
  return `<div class="heat" aria-label="${t('activity')}">${cells.join('')}</div>`;
}

export default function progressScreen() {
  const met = WORDS.filter((w) => progress[w.key]).length;
  const known = WORDS.filter((w) => isKnown(w.key)).length;
  const sentencesSolved = SENTENCES.filter((s) => (progress['s:' + s.id]?.ok || 0) > 0).length;
  const lessons = GRAMMAR.filter((g) => progress['g:' + g.id]?.done).length;
  const days = Object.keys(stats.days || {}).length;
  const acc = stats.answers ? Math.round((stats.correct / stats.answers) * 100) + '%' : '—';
  const topicRows = Object.entries(TOPICS).map(([k, v]) => {
    const list = WORDS.filter((w) => w.topic === k);
    if (!list.length) return '';
    const kn = list.filter((w) => isKnown(w.key)).length;
    return `<div><div class="row between" style="font-size:14px;font-weight:600;margin-bottom:6px"><span>${L(v)}</span><span class="muted">${kn}/${list.length}</span></div>${bar(kn, list.length)}</div>`;
  }).join('');

  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('chart-no-axes-column')} ${t('nav_progress')}</span>
      <h1 class="page-title">${t('progress_title')}</h1>
      <p class="lead">${t('progress_lead')}</p>
    </div>
    <div class="stat-grid">
      <div class="stat"><strong>${met}</strong><span>${t('st_words')}</span></div>
      <div class="stat"><strong>${known}</strong><span>${t('st_known')}</span></div>
      <div class="stat"><strong>${sentencesSolved}</strong><span>${t('st_sentences')}</span></div>
      <div class="stat"><strong>${stats.talks || 0}</strong><span>${t('st_talks')}</span></div>
      <div class="stat"><strong>${lessons}</strong><span>${t('st_lessons')}</span></div>
      <div class="stat"><strong>${days}</strong><span>${t('st_days')}</span></div>
      <div class="stat"><strong>${Math.round((stats.ms || 0) / 60000)}</strong><span>${t('st_minutes')}</span></div>
      <div class="stat"><strong>${acc}</strong><span>${t('st_accuracy')}</span></div>
    </div>
    <section>
      <h2 class="section-title">${t('activity')}</h2>
      <p class="section-sub">${t('activity_sub')}</p>
      <div class="card">${heatmap()}</div>
    </section>
    <section class="split">
      <div>
        <h2 class="section-title">${t('by_level')}</h2>
        <div class="card level-rows" style="margin-top:14px">${[1, 2, 3].map((lv) => {
          const s = levelStats(lv);
          return `<div class="level-row lv${lv}"><div class="row between"><span><span class="tag lv${lv}">${t('lv_short' + lv)}</span> ${levelName(lv)}</span><span class="muted">${s.known}/${s.total}</span></div>${bar(s.known, s.total, `var(--lv${lv})`)}</div>`;
        }).join('')}</div>
      </div>
      <div>
        <h2 class="section-title">${t('by_topic')}</h2>
        <div class="card stack" style="margin-top:14px;max-height:420px;overflow:auto">${topicRows}</div>
      </div>
    </section>
    <section>
      <h2 class="section-title">${t('backup')}</h2>
      <p class="section-sub">${t('backup_sub')}</p>
      <div class="row">
        <button class="btn" id="export">${icon('download')} ${t('export')}</button>
        <label class="btn" style="cursor:pointer">${icon('upload')} ${t('import')}<input type="file" id="import" accept="application/json,.json" class="sr"></label>
        <button class="btn btn-ghost btn-danger" id="reset">${icon('trash-2')} ${t('reset')}</button>
      </div>
    </section>
  </div>`, { route: 'progress' });

  $('#export').addEventListener('click', () => download(`piirra-progress-${today()}.json`, exportData()));
  $('#import').addEventListener('change', async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    try { importData(await f.text()); applyPrefs(); rerender(); toast(t('import_ok')); }
    catch { toast(t('import_bad')); }
  });
  $('#reset').addEventListener('click', () => {
    if (!confirm(t('reset_confirm'))) return;
    resetAll(); applyPrefs(); rerender(); toast(t('reset_ok'));
  });
}
