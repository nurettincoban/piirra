// Tiny synthesised sound effects and Finnish speech synthesis. No audio files are shipped.

import { settings } from './store.js';

let ctx = null;
function audio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(freq, start, dur, { type = 'sine', gain = 0.05, slide = 0 } = {}) {
  const a = audio();
  if (!a) return;
  const t0 = a.currentTime + start;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(a.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

export const sfx = {
  tap() { if (settings.sound) tone(660, 0, 0.06, { gain: 0.025 }); },
  good() { if (!settings.sound) return; tone(659, 0, 0.14); tone(880, 0.09, 0.22); tone(1319, 0.18, 0.28, { gain: 0.03 }); },
  near() { if (!settings.sound) return; tone(587, 0, 0.14); tone(740, 0.1, 0.2); },
  wrong() { if (settings.sound) tone(240, 0, 0.18, { type: 'triangle', gain: 0.045, slide: 0.8 }); },
  reveal() { if (settings.sound) tone(392, 0, 0.25, { type: 'triangle', gain: 0.035 }); },
  hint() { if (settings.sound) tone(988, 0, 0.08, { gain: 0.02 }); },
  done() { if (!settings.sound) return; [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.1, 0.3, { gain: 0.04 })); },
  flip() { if (settings.sound) tone(520, 0, 0.08, { type: 'triangle', gain: 0.02, slide: 1.4 }); },
};

// ---------- Speech ----------
let voices = [];
// Neural/online voices sound far more natural than the old built-in ones, so try them first.
export function voiceScore(v) {
  let s = 0;
  if (/natural|neural|online|premium|enhanced/i.test(v.name)) s += 4;
  if (/google/i.test(v.name)) s += 3;
  if (/siri|satu/i.test(v.name)) s += 2;
  if (/fi[-_]FI/i.test(v.lang)) s += 1;
  return s;
}
function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  voices = speechSynthesis.getVoices().filter((v) => /^fi(-|_|$)/i.test(v.lang)).sort((a, b) => voiceScore(b) - voiceScore(a));
}
let warned = false;
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
}

export function finnishVoices() { loadVoices(); return voices; }
export function canSpeak() { return 'speechSynthesis' in window && finnishVoices().length > 0; }

export function speak(text, { rate, onend } = {}) {
  if (!('speechSynthesis' in window) || !text) { onend?.(); return false; }
  const v = finnishVoices();
  if (!v.length) {
    // Without a Finnish voice the browser would read Finnish with an English voice — worse than silence.
    if (!warned) { warned = true; window.dispatchEvent(new CustomEvent('piirra:novoice')); }
    onend?.();
    return false;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'fi-FI';
  u.rate = rate ?? settings.rate;
  u.voice = v.find((x) => x.voiceURI === settings.voice) || v[0];
  if (onend) { u.onend = onend; u.onerror = onend; }
  speechSynthesis.speak(u);
  return !!u.voice;
}
export function stopSpeech() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
