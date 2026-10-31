import { t, L, TOPICS, levelName } from '../i18n.js';
import { settings, isKnown } from '../store.js';
import { shell, icon, esc, ring } from '../ui.js';
import { artSvg } from '../art.js';
import { topicsFor } from '../content.js';
import { levelCards, bindLevelCards, modeCards } from './home.js';

function units(level) {
  return topicsFor(level).map(({ topic, words }) => {
    const known = words.filter((w) => isKnown(w.key)).length;
    const cover = words.find((w) => w.art.startsWith('d:')) || words[0];
    const tint = TOPICS[topic]?.tint || 'sage';
    return `<a class="unit" href="#/play?mode=type&topic=${topic}&lv=${level}" style="text-decoration:none">
      <span class="unit-art" style="background:var(--${tint === 'peach' ? 'accent-soft' : tint})">${artSvg(cover)}</span>
      <span class="unit-body"><b>${esc(L(TOPICS[topic]))}</b><small>${t('words_n', { n: words.length })} · ${t('unit_progress', { n: known, total: words.length })}</small>
        <span class="muted" style="font-size:13px" lang="fi">${words.slice(0, 4).map((w) => esc(w.fi)).join(' · ')}…</span></span>
      ${ring(known, words.length)}
    </a>`;
  }).join('');
}

export default function learn({ route }) {
  const lv = settings.level;
  shell(`<div class="wrap">
    <div class="page-head">
      <span class="eyebrow">${icon('map')} ${t('lv_short' + lv)} · ${levelName(lv)}</span>
      <h1 class="page-title">${t('learn_title')}</h1>
      <p class="lead">${t('learn_lead')}</p>
    </div>
    <section>${levelCards()}</section>
    <section>
      <h2 class="section-title">${t('units')}</h2>
      <p class="section-sub">${levelName(lv)} · ${t('lv_short' + lv)}</p>
      <div class="units" id="units">${units(lv)}</div>
    </section>
    <section>
      <h2 class="section-title">${t('practice')}</h2>
      <p class="section-sub">${t('ways_sub')}</p>
      ${modeCards()}
    </section>
  </div>`, { route: 'learn' });
  bindLevelCards(() => learn({ route }));
}
