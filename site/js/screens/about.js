import { t } from '../i18n.js';
import { shell, icon, REPO_URL } from '../ui.js';
import { totals } from '../content.js';

export default function about() {
  const n = totals();
  const k = (keys, label) => `<div class="setting"><span>${label}</span><span class="row" style="gap:6px">${keys.map((x) => `<span class="kbd">${x}</span>`).join('')}</span></div>`;
  shell(`<div class="wrap">
    <div class="page-head lesson">
      <span class="eyebrow">${icon('info')} ${t('about')}</span>
      <h1 class="page-title">${t('about_title')}</h1>
    </div>
    <article class="lesson">
      <p>${t('about_p1')}</p>
      <p>${t('about_p2')}</p>
      <p>${t('about_p3')}</p>
      <div class="stat-grid" style="margin:24px 0">
        <div class="stat"><strong>${n.words}</strong><span>${t('meta_words')}</span></div>
        <div class="stat"><strong>${n.sentences}</strong><span>${t('m_sentences')}</span></div>
        <div class="stat"><strong>${n.verbs}</strong><span>${t('m_verbs')}</span></div>
        <div class="stat"><strong>${n.dialogues}</strong><span>${t('m_talk')}</span></div>
        <div class="stat"><strong>${n.phrases}</strong><span>${t('m_phrases')}</span></div>
        <div class="stat"><strong>${n.grammar}</strong><span>${t('m_grammar')}</span></div>
      </div>
      <h2 class="section-title">${t('shortcuts')}</h2>
      <div class="settings" style="margin:14px 0 28px">
        ${k(['Enter'], t('sc_enter'))}${k(['Esc'], t('sc_esc'))}${k(['Space'], t('sc_space'))}${k(['Alt', 'H'], t('sc_hint'))}${k(['1', '2', '3', '4'], t('sc_num'))}
      </div>
      <h2 class="section-title">${t('about_license')}</h2>
      <p style="margin-top:10px">${t('about_license_p')}</p>
      <h2 class="section-title" style="margin-top:28px">${t('about_contrib')}</h2>
      <p style="margin-top:10px">${t('about_contrib_p')}</p>
      <p><a class="btn btn-primary" href="${REPO_URL}" target="_blank" rel="noopener">${icon('github')} GitHub</a></p>
    </article>
  </div>`, { route: 'about' });
}
