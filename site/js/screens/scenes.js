// Little scenes: two drawings and a sentence about how they relate.

import { t } from '../i18n.js';
import { settings } from '../store.js';
import { icon, $$, reducedMotion } from '../ui.js';
import { artSvg, playDrawing } from '../art.js';
import { SCENES, WORD_BY_FI, activeLevels, inLevels, pickItems } from '../content.js';
import { gapRunner } from './sentences.js';

export default function scenes({ params }) {
  const pool = SCENES.filter((s) => inLevels(s, activeLevels()) && s.items.every((fi) => WORD_BY_FI.has(fi)));
  // Scenes use the same gap format as sentences: { fi: '… {answer} …' }.
  const items = pickItems(pool, 6, (x) => 'c:' + x.id, { preferNew: 0.6 }).map((s) => ({ ...s, fi: s.fi.includes('{') ? s.fi : s.fi }));
  gapRunner({
    items, route: 'scenes', back: '#/learn',
    eyebrow: t('m_scenes'),
    keyOf: (x) => 'c:' + x.id,
    endTitle: t('end_scene'), endIcon: 'images', onCountKind: 'sceneRuns',
    visual: (x) => `<div class="scene-art" aria-hidden="true">
        <div class="paper">${artSvg(WORD_BY_FI.get(x.items[0]))}</div>
        <span class="plus">${icon('plus')}</span>
        <div class="paper">${artSvg(WORD_BY_FI.get(x.items[1]))}</div>
      </div>`,
    onAfterRender: (x, state) => {
      if (state.animated || reducedMotion()) return;
      state.animated = true;
      $$('.scene-art .paper').forEach((p, i) => setTimeout(() => playDrawing(p, 1800), i * 700));
    },
    againFn: () => scenes({ params }),
  });
}
