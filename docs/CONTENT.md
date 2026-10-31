# Content guide

All learning content lives in `site/data/` as plain ES modules. No build step is needed: edit a file, reload the page.
Every learner-facing text has three languages: Finnish (`fi`), English (`en`) and Turkish (`tr`).

## Levels

| `lv` | Name (EN / TR)              | Roughly | Focus |
|------|-----------------------------|---------|-------|
| 1    | Beginner / Başlangıç        | A1      | everyday nouns, *olla*, basic present tense, the "in / on" cases |
| 2    | Elementary / Temel          | A2      | more cases, past tense, partitive, plural, questions, travel and services |
| 3    | Intermediate / Orta         | B1      | conditional, passive, perfect, abstract nouns, work, society, science |

## Topics

`animals, food, home, clothes, body, nature, weather, people, colors, shopping, city, transport, travel, work, school, tech, health, sport, hobbies, tools, science`

Display names live in `site/js/i18n.js` (`TOPICS`).

## `words-*.js` — illustrated vocabulary

```js
export const WORDS_A = [
  { fi: 'kissa', en: 'cat', tr: 'kedi', lv: 1, topic: 'animals', art: 'd:kissa',
    ex: ['Kissa nukkuu sohvalla.', 'The cat is sleeping on the sofa.', 'Kedi kanepede uyuyor.'] },
];
```

- `art` is required: `d:<key>` = hand drawing from `drawings.js`, `l:<icon-name>` = a Lucide icon, `c:#rrggbb` = a colour swatch (colours topic only).
- `fi` is the dictionary (nominative singular) form, lowercase. One word per picture; the picture must make the word guessable.
- `ex` is a natural, short example sentence at the word's level. Avoid the robotic "Tässä on X."
- Optional `alt: ['…']` lists other accepted Finnish answers (synonyms).

## `sentences.js` — fill the gap

```js
{ id: 's1-001', lv: 1, g: 'inessive', fi: 'Kissa on {talossa}.', base: 'talo', en: 'The cat is in the house.', tr: 'Kedi evin içinde.', alt: [] }
```

Exactly one `{answer}` per sentence. `base` is the dictionary form shown as an optional hint. `g` is a grammar lesson id from `grammar.js`.

## `verbs.js` — conjugation

```js
{ inf: 'puhua', en: 'to speak', tr: 'konuşmak', type: 1, lv: 1,
  pres: ['puhun', 'puhut', 'puhuu', 'puhumme', 'puhutte', 'puhuvat'],
  neg: 'puhu',
  past: ['puhuin', 'puhuit', 'puhui', 'puhuimme', 'puhuitte', 'puhuivat'] }
```

## `dialogues.js` — everyday conversations

```js
{ id: 'cafe', lv: 1, icon: 'coffee', title: { en: 'At the café', tr: 'Kafede' },
  steps: [
    { npc: 'Hei! Mitä saisi olla?', npcEn: 'Hi! What would you like?', npcTr: 'Merhaba! Ne alırsınız?',
      task: { en: 'Ask for a coffee, politely.', tr: 'Kibarca bir kahve iste.' },
      answers: ['yksi kahvi kiitos', 'kahvi kiitos', 'saisinko kahvin'], model: 'Yksi kahvi, kiitos.' },
  ] }
```

`answers` are compared after lowercasing and removing punctuation. List the natural variants.

## `readings.js` — short reading texts

```js
{ id: 'r1-morning', lv: 1, icon: 'sunrise',
  title: { fi: 'Aamu', en: 'Morning', tr: 'Sabah' },
  text: ['Herään kello seitsemän.', 'Juon kahvia keittiössä.'],                 // Finnish paragraphs
  trans: { en: ['I wake up at seven.', '…'], tr: ['Saat yedide uyanırım.', '…'] }, // same number of paragraphs
  gloss: [['herätä', 'to wake up', 'uyanmak'], ['keittiö', 'kitchen', 'mutfak']],   // 6–12 key words, dictionary form
  questions: [
    { q: { en: 'When does the narrator wake up?', tr: 'Anlatıcı ne zaman uyanıyor?' },
      options: [{ en: 'At seven', tr: 'Yedide' }, { en: 'At eight', tr: 'Sekizde' }, { en: 'At noon', tr: 'Öğlen' }],
      answer: 0 },
  ] }
```

Questions are asked in the learner's language about the Finnish text; 3–4 options, `answer` is the index of the correct option.

## `phrases.js`, `grammar.js`, `scenes.js`

See the headers of each file for their shape.

## Quality bar

- Finnish must be correct standard Finnish (*yleiskieli*). Prefer natural phrasing over literal translation.
- Turkish and English must be natural too, not word-for-word.
- Keep everything friendly and neutral. No brand names, no politics, nothing scary.
