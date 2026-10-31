import { t, levelName } from '../i18n.js';
import { settings, setSetting } from '../store.js';
import { shell, icon, esc, $, $$, toast } from '../ui.js';
import { finnishVoices, speak, sfx, voiceScore } from '../sound.js';
import { applyPrefs } from '../main.js';

const seg = (key, options) => `<div class="seg" role="group">${options.map(([v, label]) => `<button data-set="${key}" data-val="${v}" aria-pressed="${String(settings[key]) === String(v)}">${label}</button>`).join('')}</div>`;
const sw = (key) => `<button class="switch" role="switch" data-toggle="${key}" aria-checked="${!!settings[key]}" aria-label="${key}"></button>`;
const row = (title, sub, control) => `<div class="setting"><span><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span>${control}</div>`;

export default function settingsScreen() {
  const voices = finnishVoices();
  shell(`<div class="wrap">
    <div class="page-head"><span class="eyebrow">${icon('settings-2')} ${t('settings')}</span><h1 class="page-title">${t('settings')}</h1></div>
    <div class="settings">
      <h2 class="section-title">${t('s_general')}</h2>
      ${row(t('language'), '', seg('lang', [['en', 'English'], ['tr', 'Türkçe']]))}
      ${row(t('theme'), '', seg('theme', [['auto', icon('sun-moon') + t('theme_auto')], ['light', icon('sun') + t('theme_light')], ['dark', icon('moon') + t('theme_dark')]]))}

      <h2 class="section-title" style="margin-top:20px">${t('s_learning')}</h2>
      ${row(t('s_level'), '', seg('level', [1, 2, 3].map((l) => [l, `${t('lv_short' + l)} · ${levelName(l)}`])))}
      ${row(t('mix_lower'), t('mix_lower_sub'), sw('mixLower'))}
      ${row(t('s_run'), t('s_run_sub'), seg('runLength', [[5, '5'], [8, '8'], [12, '12'], [16, '16']]))}
      ${row(t('s_speed'), t('s_speed_sub'), seg('drawSpeed', [[0.6, t('speed_slow')], [1, t('speed_normal')], [1.6, t('speed_fast')]]))}
      ${row(t('s_translations'), t('s_translations_sub'), sw('showTranslations'))}

      <h2 class="section-title" style="margin-top:20px">${t('s_sound')}</h2>
      ${row(t('s_sound_fx'), t('s_sound_fx_sub'), sw('sound'))}
      ${row(t('s_auto_speak'), t('s_auto_speak_sub'), sw('autoSpeak'))}
      ${row(t('s_rate'), '', `<span class="row"><input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="${settings.rate}" aria-label="${t('s_rate')}"><button class="btn btn-sm" id="test">${icon('volume-2')} ${t('s_test_voice')}</button></span>`)}
      ${row(t('s_voice'), (voices.length ? '' : t('s_voice_none') + ' ') + t('s_voice_tip'), voices.length ? `<select class="select" id="voice">${voices.map((v) => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === settings.voice ? 'selected' : ''}>${voiceScore(v) >= 3 ? '★ ' : ''}${esc(v.name)}</option>`).join('')}</select>` : icon('volume-x'))}

      <h2 class="section-title" style="margin-top:20px">${t('s_comfort')}</h2>
      ${row(t('s_motion'), t('s_motion_sub'), sw('reduceMotion'))}
      ${row(t('s_big'), t('s_big_sub'), sw('bigText'))}
    </div>
  </div>`, { route: 'settings' });

  $$('[data-set]').forEach((b) => b.addEventListener('click', () => {
    const key = b.dataset.set;
    const raw = b.dataset.val;
    const val = ['level', 'runLength', 'drawSpeed'].includes(key) ? Number(raw) : raw;
    setSetting(key, val);
    sfx.tap();
    applyPrefs();
    if (key === 'lang') return settingsScreen();
    $$(`[data-set="${key}"]`).forEach((x) => x.setAttribute('aria-pressed', x.dataset.val === raw));
    if (key === 'theme') { const tb = $('[data-global="theme"]'); if (tb) tb.innerHTML = icon(val === 'dark' ? 'moon' : val === 'light' ? 'sun' : 'sun-moon'); }
  }));
  $$('[data-toggle]').forEach((b) => b.addEventListener('click', () => {
    const key = b.dataset.toggle;
    setSetting(key, !settings[key]);
    b.setAttribute('aria-checked', settings[key]);
    applyPrefs();
    sfx.tap();
  }));
  $('#rate').addEventListener('change', (e) => setSetting('rate', Number(e.target.value)));
  $('#test').addEventListener('click', () => { if (!speak('Hyvää päivää! Mitä kuuluu?')) toast(t('no_voice_toast')); });
  $('#voice')?.addEventListener('change', (e) => { setSetting('voice', e.target.value); speak('Hei!'); });
}
