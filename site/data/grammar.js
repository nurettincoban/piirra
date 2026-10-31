// Pocket grammar — short lessons shown in the app, one per grammar point.
// Shape:
// { id, lv, icon (Lucide name),
//   title: { en, tr }, summary: { en, tr },
//   body: { en: [paragraphs], tr: [paragraphs] },     // **x** renders bold
//   table?: { head: { en: [...], tr: [...] }, rows: [[fi, fi, ...], ...] },
//   examples: [[fi, en, tr], ...],
//   quiz: [{ fi: 'with one {answer}', base, en, tr }, ...] }
// Sentence ids in sentences.js point at these ids through their `g` field.

export const GRAMMAR = [
  // ───────────────────────── Level 1 ─────────────────────────
  {
    id: 'alphabet-sounds', lv: 1, icon: 'audio-lines',
    title: { en: 'Sounds and spelling', tr: 'Sesler ve yazım' },
    summary: { en: 'Finnish is read exactly as it is written.', tr: 'Fince tam yazıldığı gibi okunur.' },
    body: {
      en: [
        'Good news: one letter = one sound, and every letter is pronounced. Once you know the sounds, you can read any word aloud.',
        '**ä** is an open "a" as in English *cat*. **ö** is like German ö (French *peu*), and **y** is like German ü. The **r** is rolled, and **h** is always heard, even in the middle of a word (*vihta*).',
        'Length matters! A double letter is held twice as long, and it changes the meaning: **tuli** (fire) vs **tuuli** (wind), **mato** (worm) vs **matto** (rug), **kuka** (who) vs **kukka** (flower).',
        'Stress is always on the **first syllable**: *HEL-sin-ki*, *PU-he-lin*. Keep the rest of the word even and relaxed.'
      ],
      tr: [
        'İyi haber: her harf tek bir sese karşılık gelir ve hepsi okunur. Sesleri öğrendiğinde her kelimeyi rahatça sesli okuyabilirsin.',
        '**ä**, açık bir "e" sesidir; İngilizce *cat* kelimesindeki gibi. **ö** Türkçedeki ö ile, **y** ise Türkçedeki **ü** ile hemen hemen aynıdır. **r** Türkçedekinden daha güçlü, dil ucu titretilerek okunur; **h** ise kelimenin ortasında da duyulur (*vihta*).',
        'Uzunluk çok önemli! Çift yazılan harf iki kat uzun söylenir ve anlamı değiştirir: **tuli** (ateş) – **tuuli** (rüzgâr), **mato** (solucan) – **matto** (halı), **kuka** (kim) – **kukka** (çiçek).',
        'Vurgu her zaman **ilk hecededir**: *HEL-sin-ki*, *PU-he-lin*. Kelimenin geri kalanını düz ve rahat söyle.'
      ]
    },
    table: {
      head: { en: ['Short', 'Long'], tr: ['Kısa', 'Uzun'] },
      rows: [['tuli', 'tuuli'], ['mato', 'matto'], ['kuka', 'kukka'], ['tapan', 'tapaan'], ['kansa', 'kanssa'], ['muta', 'mutta']]
    },
    examples: [
      ['Tuli ja tuuli.', 'Fire and wind.', 'Ateş ve rüzgâr.'],
      ['Matossa on mato.', 'There is a worm in the rug.', 'Halıda bir solucan var.'],
      ['Kuka osti kukan?', 'Who bought the flower?', 'Çiçeği kim aldı?'],
      ['Hyvää yötä!', 'Good night!', 'İyi geceler!']
    ],
    quiz: []
  },
  {
    id: 'vowel-harmony', lv: 1, icon: 'palette',
    title: { en: 'Vowel harmony', tr: 'Ünlü uyumu' },
    summary: { en: 'Endings come in a/o/u or ä/ö/y versions.', tr: 'Ekler a/o/u ya da ä/ö/y biçiminde gelir.' },
    body: {
      en: [
        'Finnish vowels form teams. Back vowels: **a o u**. Front vowels: **ä ö y**. **e** and **i** are neutral and can live with either team.',
        'A native Finnish word never mixes the two teams, and endings follow the word. If the word has **a, o or u**, use the back ending (**-ssa**, **-lla**, **-ko**). Otherwise use the front one (**-ssä**, **-llä**, **-kö**).',
        'In compound words, the **last part** decides: *kylpy + huone* → *kylpyhuoneessa*, because *huone* has o and u.'
      ],
      tr: [
        'Türkçe konuşan biri için bu tanıdık bir kural! Fincede de ünlüler takım kurar. Kalın ünlüler: **a o u**. İnce ünlüler: **ä ö y**. **e** ve **i** nötrdür, iki takımla da kullanılabilir.',
        'Fince kökenli bir kelimede iki takım karışmaz, ekler de kelimeye uyar. Kelimede **a, o ya da u** varsa kalın ek gelir (**-ssa**, **-lla**, **-ko**); yoksa ince ek (**-ssä**, **-llä**, **-kö**). Tıpkı Türkçedeki *evde / okulda* gibi.',
        'Birleşik kelimelerde **son parça** belirler: *kylpy + huone* → *kylpyhuoneessa*, çünkü *huone* kelimesinde o ve u var.'
      ]
    },
    table: {
      head: { en: ['Word', 'Inside'], tr: ['Kelime', 'İçinde'] },
      rows: [['talo', 'talossa'], ['koulu', 'koulussa'], ['juna', 'junassa'], ['metsä', 'metsässä'], ['kylä', 'kylässä'], ['kirje', 'kirjeessä']]
    },
    examples: [
      ['Olen junassa.', 'I\'m on the train.', 'Trendeyim.'],
      ['Lapset leikkivät metsässä.', 'The children are playing in the forest.', 'Çocuklar ormanda oynuyor.'],
      ['Puhutko suomea? – Ymmärrätkö?', 'Do you speak Finnish? – Do you understand?', 'Fince konuşuyor musun? – Anlıyor musun?']
    ],
    quiz: [
      { fi: 'Olen {koulussa}.', base: 'koulu', en: 'I\'m at school.', tr: 'Okuldayım.' },
      { fi: 'Kävelemme {metsässä}.', base: 'metsä', en: 'We are walking in the forest.', tr: 'Ormanda yürüyoruz.' },
      { fi: 'Asumme pienessä {kylässä}.', base: 'kylä', en: 'We live in a small village.', tr: 'Küçük bir köyde yaşıyoruz.' },
      { fi: 'Istun {junassa}.', base: 'juna', en: 'I\'m sitting on the train.', tr: 'Trende oturuyorum.' },
      { fi: 'Pyyhe on {kylpyhuoneessa}.', base: 'kylpyhuone', en: 'The towel is in the bathroom.', tr: 'Havlu banyoda.' },
      { fi: 'Pöytä on {olohuoneessa}.', base: 'olohuone', en: 'The table is in the living room.', tr: 'Masa oturma odasında.' },
      { fi: '{Tiedätkö}, missä asema on?', base: 'tietää', en: 'Do you know where the station is?', tr: 'İstasyonun nerede olduğunu biliyor musun?' },
      { fi: 'Olen {mökillä}.', base: 'mökki', en: 'I\'m at the summer cottage.', tr: 'Yazlıktayım.' },
      { fi: 'Asun {kerrostalossa}.', base: 'kerrostalo', en: 'I live in a block of flats.', tr: 'Apartmanda oturuyorum.' },
      { fi: 'Pidän {jäätelöstä}.', base: 'jäätelö', en: 'I like ice cream.', tr: 'Dondurmayı severim.' }
    ]
  },
  {
    id: 'olla', lv: 1, icon: 'equal',
    title: { en: 'To be: olla', tr: 'Olmak: olla' },
    summary: { en: 'The most important verb: olen, olet, on…', tr: 'En önemli fiil: olen, olet, on…' },
    body: {
      en: [
        '**olla** means "to be". It is slightly irregular, so it\'s worth learning by heart.',
        'Because the verb ending already shows the person, you can drop *minä* and *sinä*: **Olen** opettaja = I am a teacher. With *hän* and *he*, keep the pronoun.',
        'Finnish has no verb "to have". Instead you say "at me is": **Minulla on** koira = I have a dog.'
      ],
      tr: [
        '**olla** "olmak" demektir. Biraz düzensizdir, o yüzden ezberlemeye değer.',
        'Türkçede *öğretmenim* deriz; Fincede ayrı bir fiil kullanılır: **Olen** opettaja. Fiil sonu kişiyi gösterdiği için *minä* ve *sinä* atılabilir. *hän* ve *he* ile zamir kalır.',
        'Fincede "sahip olmak" fiili yoktur. Türkçedeki *Bende köpek var* yapısının aynısı kullanılır: **Minulla on** koira.'
      ]
    },
    table: {
      head: { en: ['Person', 'olla'], tr: ['Kişi', 'olla'] },
      rows: [['minä', 'olen'], ['sinä', 'olet'], ['hän', 'on'], ['me', 'olemme'], ['te', 'olette'], ['he', 'ovat']]
    },
    examples: [
      ['Olen Turkista.', 'I\'m from Turkey.', 'Türkiye\'denim.'],
      ['Hän on lääkäri.', 'She is a doctor.', 'O bir doktor.'],
      ['Olemme kotona.', 'We are at home.', 'Evdeyiz.'],
      ['Minulla on kaksi lasta.', 'I have two children.', 'İki çocuğum var.']
    ],
    quiz: [
      { fi: 'Minä {olen} opiskelija.', base: 'olla', en: 'I am a student.', tr: 'Ben öğrenciyim.' },
      { fi: 'Sinä {olet} kotona.', base: 'olla', en: 'You are at home.', tr: 'Sen evdesin.' },
      { fi: 'Me {olemme} Suomessa.', base: 'olla', en: 'We are in Finland.', tr: 'Finlandiya\'dayız.' },
      { fi: 'Lapset {ovat} koulussa.', base: 'olla', en: 'The children are at school.', tr: 'Çocuklar okulda.' },
      { fi: 'Te {olette} myöhässä.', base: 'olla', en: 'You are late.', tr: 'Geç kaldınız.' },
      { fi: 'Tämä kirja {on} hyvä.', base: 'olla', en: 'This book is good.', tr: 'Bu kitap güzel.' },
      { fi: 'Minulla {on} kaksi veljeä.', base: 'olla', en: 'I have two brothers.', tr: 'İki erkek kardeşim var.' },
      { fi: 'He {ovat} Turusta.', base: 'olla', en: 'They are from Turku.', tr: 'Onlar Turkulu.' },
      { fi: 'Minä {olen} väsynyt.', base: 'olla', en: 'I am tired.', tr: 'Yorgunum.' },
      { fi: 'Kahvi {on} kuumaa.', base: 'olla', en: 'The coffee is hot.', tr: 'Kahve sıcak.' }
    ]
  },
  {
    id: 'present-type1', lv: 1, icon: 'play',
    title: { en: 'Present tense: type 1', tr: 'Şimdiki zaman: 1. tip' },
    summary: { en: 'Verbs like puhua, asua, lukea.', tr: 'puhua, asua, lukea gibi fiiller.' },
    body: {
      en: [
        'Type 1 verbs end in **two vowels**: *puhua, asua, ostaa, lukea*. This is the biggest group.',
        'Drop the last **-a/-ä** and add the personal ending: **-n, -t**, (long vowel), **-mme, -tte, -vat**. For *hän*, just double the last vowel: *puhu* → *puhuu*.',
        'Watch out: some verbs soften their consonant in the minä/sinä/me/te forms: *lukea* → *luen*, but *hän lukee*, *he lukevat*. (See consonant gradation later.)'
      ],
      tr: [
        '1. tip fiiller **iki ünlüyle** biter: *puhua, asua, ostaa, lukea*. En büyük gruptur.',
        'Sondaki **-a/-ä** düşer ve kişi eki gelir: **-n, -t**, (uzun ünlü), **-mme, -tte, -vat**. Türkçedeki *-ım, -sın, -ız* ekleri gibi düşün. *hän* için son ünlü uzatılır: *puhu* → *puhuu*.',
        'Dikkat: bazı fiillerde minä/sinä/me/te biçimlerinde ünsüz yumuşar: *lukea* → *luen*, ama *hän lukee*, *he lukevat*. (Ünsüz değişimi konusuna sonra bakacağız.)'
      ]
    },
    table: {
      head: { en: ['Person', 'puhua (speak)'], tr: ['Kişi', 'puhua (konuşmak)'] },
      rows: [['minä', 'puhun'], ['sinä', 'puhut'], ['hän', 'puhuu'], ['me', 'puhumme'], ['te', 'puhutte'], ['he', 'puhuvat']]
    },
    examples: [
      ['Puhun vähän suomea.', 'I speak a little Finnish.', 'Biraz Fince konuşuyorum.'],
      ['Missä sinä asut?', 'Where do you live?', 'Nerede oturuyorsun?'],
      ['Hän lukee lehteä.', 'He is reading a newspaper.', 'Gazete okuyor.']
    ],
    quiz: [
      { fi: 'Minä {puhun} suomea.', base: 'puhua', en: 'I speak Finnish.', tr: 'Fince konuşuyorum.' },
      { fi: 'Hän {asuu} Tampereella.', base: 'asua', en: 'She lives in Tampere.', tr: 'Tampere\'de yaşıyor.' },
      { fi: 'Me {ostamme} leipää.', base: 'ostaa', en: 'We are buying bread.', tr: 'Ekmek alıyoruz.' },
      { fi: 'Sinä {luet} kirjaa.', base: 'lukea', en: 'You are reading a book.', tr: 'Kitap okuyorsun.' },
      { fi: 'He {kirjoittavat} kirjettä.', base: 'kirjoittaa', en: 'They are writing a letter.', tr: 'Mektup yazıyorlar.' },
      { fi: 'Te {kysytte} paljon.', base: 'kysyä', en: 'You ask a lot.', tr: 'Çok soru soruyorsunuz.' },
      { fi: 'Hän {lukee} lehteä.', base: 'lukea', en: 'He is reading the newspaper.', tr: 'Gazete okuyor.' },
      { fi: 'He {puhuvat} englantia.', base: 'puhua', en: 'They speak English.', tr: 'İngilizce konuşuyorlar.' },
      { fi: 'Me {kirjoitamme} viestiä.', base: 'kirjoittaa', en: 'We are writing a message.', tr: 'Mesaj yazıyoruz.' },
      { fi: 'Mitä sinä {ostat}?', base: 'ostaa', en: 'What are you buying?', tr: 'Ne alıyorsun?' }
    ]
  },
  {
    id: 'present-type2', lv: 1, icon: 'repeat',
    title: { en: 'Present tense: type 2', tr: 'Şimdiki zaman: 2. tip' },
    summary: { en: 'Verbs ending in -da/-dä: syödä, juoda.', tr: '-da/-dä ile biten fiiller: syödä, juoda.' },
    body: {
      en: [
        'Type 2 verbs end in **-da/-dä**: *syödä* (eat), *juoda* (drink), *saada* (get), *voida* (can), *käydä* (visit).',
        'Drop **-da/-dä** and add the endings. The *hän* form gets **no extra vowel**: *hän syö, juo, saa*.',
        'Two common verbs are irregular: **tehdä** (do, make) → *teen, teet, tekee, teemme, teette, tekevät*, and **nähdä** (see) → *näen, näet, näkee…*'
      ],
      tr: [
        '2. tip fiiller **-da/-dä** ile biter: *syödä* (yemek), *juoda* (içmek), *saada* (almak), *voida* (-ebilmek), *käydä* (uğramak).',
        '**-da/-dä** düşer, kişi ekleri gelir. *hän* biçimine **ünlü eklenmez**: *hän syö, juo, saa*.',
        'Sık kullanılan iki fiil düzensizdir: **tehdä** (yapmak) → *teen, teet, tekee, teemme, teette, tekevät* ve **nähdä** (görmek) → *näen, näet, näkee…*'
      ]
    },
    table: {
      head: { en: ['Person', 'syödä (eat)'], tr: ['Kişi', 'syödä (yemek)'] },
      rows: [['minä', 'syön'], ['sinä', 'syöt'], ['hän', 'syö'], ['me', 'syömme'], ['te', 'syötte'], ['he', 'syövät']]
    },
    examples: [
      ['Juon aamulla teetä.', 'I drink tea in the morning.', 'Sabahları çay içerim.'],
      ['Voitko auttaa?', 'Can you help?', 'Yardım edebilir misin?'],
      ['Mitä teet huomenna?', 'What are you doing tomorrow?', 'Yarın ne yapıyorsun?']
    ],
    quiz: [
      { fi: 'Minä {syön} aamupalaa.', base: 'syödä', en: 'I\'m eating breakfast.', tr: 'Kahvaltı yapıyorum.' },
      { fi: 'Hän {juo} kahvia.', base: 'juoda', en: 'He drinks coffee.', tr: 'Kahve içiyor.' },
      { fi: 'Me {saamme} lahjan.', base: 'saada', en: 'We get a present.', tr: 'Bir hediye alıyoruz.' },
      { fi: 'He {käyvät} kaupassa.', base: 'käydä', en: 'They go to the shop.', tr: 'Markete gidiyorlar.' },
      { fi: 'Mitä sinä {teet}?', base: 'tehdä', en: 'What are you doing?', tr: 'Ne yapıyorsun?' },
      { fi: 'Minä {näen} meren.', base: 'nähdä', en: 'I can see the sea.', tr: 'Denizi görüyorum.' },
      { fi: 'Te {syötte} paljon.', base: 'syödä', en: 'You eat a lot.', tr: 'Çok yiyorsunuz.' },
      { fi: 'Sinä {juot} teetä.', base: 'juoda', en: 'You drink tea.', tr: 'Çay içiyorsun.' },
      { fi: 'He {tekevät} töitä.', base: 'tehdä', en: 'They are working.', tr: 'Çalışıyorlar.' },
      { fi: 'Me {voimme} auttaa.', base: 'voida', en: 'We can help.', tr: 'Yardım edebiliriz.' }
    ]
  },
  {
    id: 'present-type3', lv: 1, icon: 'rotate-cw',
    title: { en: 'Present tense: type 3', tr: 'Şimdiki zaman: 3. tip' },
    summary: { en: 'tulla, mennä, nousta, opiskella.', tr: 'tulla, mennä, nousta, opiskella.' },
    body: {
      en: [
        'Type 3 verbs end in a consonant + **-a/-ä**: **-la, -na, -ra, -sta**. Examples: *tulla* (come), *mennä* (go), *nousta* (rise), *opiskella* (study).',
        'Remove the last two letters and add **e**: *tulla* → *tule-*, *mennä* → *mene-*, *nousta* → *nouse-*. Then add the endings. For *hän*, double the e: *tulee*.',
        'In longer verbs the consonant often gets **stronger**: *kuunnella* → *kuuntelen*, *ajatella* → *ajattelen*.'
      ],
      tr: [
        '3. tip fiiller ünsüz + **-a/-ä** ile biter: **-la, -na, -ra, -sta**. Örnekler: *tulla* (gelmek), *mennä* (gitmek), *nousta* (kalkmak), *opiskella* (okumak, öğrenim görmek).',
        'Son iki harfi at ve **e** ekle: *tulla* → *tule-*, *mennä* → *mene-*, *nousta* → *nouse-*. Sonra kişi eklerini getir. *hän* için e uzar: *tulee*.',
        'Uzun fiillerde ünsüz çoğu zaman **güçlenir**: *kuunnella* → *kuuntelen*, *ajatella* → *ajattelen*.'
      ]
    },
    table: {
      head: { en: ['Person', 'tulla (come)'], tr: ['Kişi', 'tulla (gelmek)'] },
      rows: [['minä', 'tulen'], ['sinä', 'tulet'], ['hän', 'tulee'], ['me', 'tulemme'], ['te', 'tulette'], ['he', 'tulevat']]
    },
    examples: [
      ['Tulen heti!', 'I\'m coming right away!', 'Hemen geliyorum!'],
      ['Menemme elokuviin.', 'We are going to the cinema.', 'Sinemaya gidiyoruz.'],
      ['Opiskelen suomea.', 'I\'m studying Finnish.', 'Fince öğreniyorum.']
    ],
    quiz: [
      { fi: 'Minä {tulen} kotiin.', base: 'tulla', en: 'I\'m coming home.', tr: 'Eve geliyorum.' },
      { fi: 'Hän {menee} töihin.', base: 'mennä', en: 'She goes to work.', tr: 'İşe gidiyor.' },
      { fi: 'Me {opiskelemme} suomea.', base: 'opiskella', en: 'We study Finnish.', tr: 'Fince öğreniyoruz.' },
      { fi: 'Sinä {nouset} aikaisin.', base: 'nousta', en: 'You get up early.', tr: 'Erken kalkıyorsun.' },
      { fi: 'He {kuuntelevat} musiikkia.', base: 'kuunnella', en: 'They are listening to music.', tr: 'Müzik dinliyorlar.' },
      { fi: 'Te {pesette} kädet.', base: 'pestä', en: 'You wash your hands.', tr: 'Ellerinizi yıkıyorsunuz.' },
      { fi: 'Minä {menen} nukkumaan.', base: 'mennä', en: 'I\'m going to bed.', tr: 'Yatmaya gidiyorum.' },
      { fi: 'He {tulevat} huomenna.', base: 'tulla', en: 'They are coming tomorrow.', tr: 'Yarın geliyorlar.' },
      { fi: 'Me {kävelemme} puistossa.', base: 'kävellä', en: 'We are walking in the park.', tr: 'Parkta yürüyoruz.' },
      { fi: 'Hän {pesee} astiat.', base: 'pestä', en: 'He washes the dishes.', tr: 'Bulaşıkları yıkıyor.' }
    ]
  },
  {
    id: 'present-type4-6', lv: 1, icon: 'layers',
    title: { en: 'Present tense: types 4–6', tr: 'Şimdiki zaman: 4–6. tipler' },
    summary: { en: 'haluta, tarvita, vanheta.', tr: 'haluta, tarvita, vanheta.' },
    body: {
      en: [
        '**Type 4** ends in a vowel + **-ta/-tä** (*haluta, pelata, avata, tavata*). Replace **-ta/-tä** with **-a/-ä** to get the stem (*halua-, pelaa-*) and add the endings: **haluan**, *pelaan*. For *hän*, double the last vowel (*hän haluaa*), unless the stem already ends in a long vowel: *hän pelaa*.',
        'Type 4 verbs often get a **stronger** consonant: *tavata* → **tapaan**, *hypätä* → *hyppään*.',
        '**Type 5** ends in **-ita/-itä** and adds **-tse-**: *tarvita* → **tarvitsen**, *valita* → *valitsen*.',
        '**Type 6** ends in **-eta/-etä** and adds **-ne-**: *vanheta* → **vanhenen**. It is rare and usually means "to become": *lämmetä* = get warmer.'
      ],
      tr: [
        '**4. tip** ünlü + **-ta/-tä** ile biter (*haluta, pelata, avata, tavata*). **-ta/-tä** yerine **-a/-ä** gelir, böylece gövde oluşur (*halua-, pelaa-*), sonra kişi ekleri eklenir: **haluan**, *pelaan*. *hän* için son ünlü uzatılır (*hän haluaa*); gövde zaten uzun ünlüyle bitiyorsa bir şey eklenmez: *hän pelaa*.',
        '4. tip fiillerde ünsüz çoğu zaman **güçlenir**: *tavata* → **tapaan**, *hypätä* → *hyppään*.',
        '**5. tip** **-ita/-itä** ile biter ve **-tse-** alır: *tarvita* → **tarvitsen**, *valita* → *valitsen*.',
        '**6. tip** **-eta/-etä** ile biter ve **-ne-** alır: *vanheta* → **vanhenen**. Seyrektir ve genelde "-laşmak, -leşmek" anlamı taşır: *lämmetä* = ısınmak.'
      ]
    },
    table: {
      head: { en: ['Infinitive', 'minä', 'hän'], tr: ['Mastar', 'minä', 'hän'] },
      rows: [['haluta', 'haluan', 'haluaa'], ['pelata', 'pelaan', 'pelaa'], ['tavata', 'tapaan', 'tapaa'], ['tarvita', 'tarvitsen', 'tarvitsee'], ['valita', 'valitsen', 'valitsee'], ['vanheta', 'vanhenen', 'vanhenee']]
    },
    examples: [
      ['Haluan oppia suomea.', 'I want to learn Finnish.', 'Fince öğrenmek istiyorum.'],
      ['Tarvitsetko apua?', 'Do you need help?', 'Yardıma ihtiyacın var mı?'],
      ['Ilma lämpenee keväällä.', 'The weather gets warmer in spring.', 'İlkbaharda hava ısınır.']
    ],
    quiz: [
      { fi: 'Minä {haluan} kahvia.', base: 'haluta', en: 'I want coffee.', tr: 'Kahve istiyorum.' },
      { fi: 'Hän {pelaa} jalkapalloa.', base: 'pelata', en: 'He plays football.', tr: 'Futbol oynuyor.' },
      { fi: 'Me {tapaamme} huomenna.', base: 'tavata', en: 'We\'ll meet tomorrow.', tr: 'Yarın buluşuyoruz.' },
      { fi: 'Sinä {tarvitset} sateenvarjon.', base: 'tarvita', en: 'You need an umbrella.', tr: 'Şemsiyeye ihtiyacın var.' },
      { fi: 'He {avaavat} oven.', base: 'avata', en: 'They open the door.', tr: 'Kapıyı açıyorlar.' },
      { fi: 'Mitä sinä {valitset}?', base: 'valita', en: 'What do you choose?', tr: 'Neyi seçiyorsun?' },
      { fi: 'Hän {haluaa} jäätelöä.', base: 'haluta', en: 'She wants ice cream.', tr: 'Dondurma istiyor.' },
      { fi: 'Sinä {osaat} suomea hyvin.', base: 'osata', en: 'You know Finnish well.', tr: 'Finceyi iyi biliyorsun.' },
      { fi: 'Minä {tapaan} ystäväni kahvilassa.', base: 'tavata', en: 'I\'m meeting my friend at the café.', tr: 'Arkadaşımla kafede buluşuyorum.' },
      { fi: 'Te {tarvitsette} apua.', base: 'tarvita', en: 'You need help.', tr: 'Yardıma ihtiyacınız var.' }
    ]
  },
  {
    id: 'negative', lv: 1, icon: 'ban',
    title: { en: 'Saying no: en, et, ei', tr: 'Olumsuzluk: en, et, ei' },
    summary: { en: 'The negative is a verb of its own.', tr: 'Olumsuzluk kendi başına bir fiildir.' },
    body: {
      en: [
        'In Finnish, "not" is a verb that takes the personal ending: **en, et, ei, emme, ette, eivät**.',
        'The main verb loses its ending. Easy trick: take the *minä* form and drop **-n**: *puhun* → **en puhu**, *olen* → **en ole**, *luen* → **en lue**.',
        'The main verb stays the same for every person: *en tule, et tule, he eivät tule*. Objects in negative sentences are always in the partitive: *En juo kahvia*.'
      ],
      tr: [
        'Türkçede olumsuzluk fiile eklenen *-me/-ma* ekiyle yapılır. Fincede ise "değil" ayrı bir fiildir ve kişi eki o fiile gelir: **en, et, ei, emme, ette, eivät**.',
        'Asıl fiil ekini kaybeder. Kolay yol: *minä* biçimini al, **-n** harfini at: *puhun* → **en puhu**, *olen* → **en ole**, *luen* → **en lue**.',
        'Asıl fiil her kişide aynı kalır: *en tule, et tule, he eivät tule*. Olumsuz cümlelerde nesne her zaman partitif hâldedir: *En juo kahvia*.'
      ]
    },
    table: {
      head: { en: ['Person', 'Negative'], tr: ['Kişi', 'Olumsuz'] },
      rows: [['minä', 'en puhu'], ['sinä', 'et puhu'], ['hän', 'ei puhu'], ['me', 'emme puhu'], ['te', 'ette puhu'], ['he', 'eivät puhu']]
    },
    examples: [
      ['En ymmärrä.', 'I don\'t understand.', 'Anlamıyorum.'],
      ['Hän ei ole kotona.', 'She is not at home.', 'Evde değil.'],
      ['Emme asu täällä.', 'We don\'t live here.', 'Burada oturmuyoruz.']
    ],
    quiz: [
      { fi: 'Minä {en} puhu ranskaa.', base: 'ei', en: 'I don\'t speak French.', tr: 'Fransızca konuşmuyorum.' },
      { fi: 'Hän ei {tule} tänään.', base: 'tulla', en: 'He isn\'t coming today.', tr: 'Bugün gelmiyor.' },
      { fi: 'Me {emme} asu täällä.', base: 'ei', en: 'We don\'t live here.', tr: 'Burada oturmuyoruz.' },
      { fi: 'Sinä et {syö} lihaa.', base: 'syödä', en: 'You don\'t eat meat.', tr: 'Et yemiyorsun.' },
      { fi: 'He {eivät} ole kotona.', base: 'ei', en: 'They are not at home.', tr: 'Evde değiller.' },
      { fi: 'En {ymmärrä} tätä.', base: 'ymmärtää', en: 'I don\'t understand this.', tr: 'Bunu anlamıyorum.' },
      { fi: 'Te {ette} ole myöhässä.', base: 'ei', en: 'You are not late.', tr: 'Geç kalmadınız.' },
      { fi: 'Hän {ei} tiedä vastausta.', base: 'ei', en: 'She doesn\'t know the answer.', tr: 'Cevabı bilmiyor.' },
      { fi: 'Minä en {juo} kahvia.', base: 'juoda', en: 'I don\'t drink coffee.', tr: 'Kahve içmem.' },
      { fi: 'He eivät {puhu} englantia.', base: 'puhua', en: 'They don\'t speak English.', tr: 'İngilizce konuşmuyorlar.' }
    ]
  },
  {
    id: 'questions-ko', lv: 1, icon: 'circle-help',
    title: { en: 'Yes/no questions: -ko / -kö', tr: 'Evet/hayır soruları: -ko / -kö' },
    summary: { en: 'Put the verb first and add -ko/-kö.', tr: 'Fiili başa al, -ko/-kö ekle.' },
    body: {
      en: [
        'To make a yes/no question, move the verb to the front and attach **-ko** or **-kö** (vowel harmony!): *Sinä puhut* → **Puhutko** sinä?',
        'Finns usually answer by repeating the verb: *Puhutko suomea?* – **Puhun.** / **En puhu.** *Kyllä* (yes) and *ei* (no) also work.',
        'Questions with a question word (*mikä, missä, kuka, milloin*) don\'t need -ko: *Missä asut?*'
      ],
      tr: [
        'Bu ek Türkçedeki **mi** soru ekine çok benzer! Fiil başa alınır ve **-ko** ya da **-kö** eklenir (ünlü uyumu burada da var): *Sinä puhut* → **Puhutko** sinä?',
        'Türkçede *mi* ayrı yazılır, Fincede ise kelimeye bitişik yazılır. Cevap verirken genelde fiil tekrarlanır: *Puhutko suomea?* – **Puhun.** / **En puhu.** *Kyllä* (evet) ve *ei* (hayır) de olur.',
        'Soru kelimesi olan sorularda (*mikä, missä, kuka, milloin*) -ko kullanılmaz: *Missä asut?*'
      ]
    },
    table: {
      head: { en: ['Statement', 'Question'], tr: ['Cümle', 'Soru'] },
      rows: [['Sinä puhut.', 'Puhutko?'], ['Hän on kotona.', 'Onko hän kotona?'], ['Te asutte täällä.', 'Asutteko täällä?'], ['Se on hyvä.', 'Onko se hyvä?'], ['Sinä tulet.', 'Tuletko?'], ['Hän syö.', 'Syökö hän?']]
    },
    examples: [
      ['Puhutko englantia? – Puhun.', 'Do you speak English? – Yes, I do.', 'İngilizce konuşuyor musun? – Konuşuyorum.'],
      ['Onko täällä vessa?', 'Is there a toilet here?', 'Burada tuvalet var mı?'],
      ['Saanko kysyä?', 'May I ask?', 'Bir şey sorabilir miyim?']
    ],
    quiz: [
      { fi: '{Puhutko} sinä suomea?', base: 'puhua', en: 'Do you speak Finnish?', tr: 'Fince konuşuyor musun?' },
      { fi: '{Onko} tämä sinun?', base: 'olla', en: 'Is this yours?', tr: 'Bu senin mi?' },
      { fi: '{Tuletko} huomenna?', base: 'tulla', en: 'Are you coming tomorrow?', tr: 'Yarın geliyor musun?' },
      { fi: '{Asutteko} te Turussa?', base: 'asua', en: 'Do you live in Turku?', tr: 'Turku\'da mı oturuyorsunuz?' },
      { fi: '{Syökö} hän lihaa?', base: 'syödä', en: 'Does she eat meat?', tr: 'O et yiyor mu?' },
      { fi: '{Ymmärrätkö} minua?', base: 'ymmärtää', en: 'Do you understand me?', tr: 'Beni anlıyor musun?' },
      { fi: '{Oletko} sinä kotona?', base: 'olla', en: 'Are you at home?', tr: 'Evde misin?' },
      { fi: '{Haluatko} kahvia?', base: 'haluta', en: 'Do you want some coffee?', tr: 'Kahve ister misin?' },
      { fi: '{Tunnetko} hänet?', base: 'tuntea', en: 'Do you know him?', tr: 'Onu tanıyor musun?' },
      { fi: '{Menevätkö} he kauppaan?', base: 'mennä', en: 'Are they going to the shop?', tr: 'Markete gidiyorlar mı?' }
    ]
  },
  {
    id: 'inessive', lv: 1, icon: 'house',
    title: { en: 'Inside: -ssa / -ssä', tr: 'İçinde: -ssa / -ssä' },
    summary: { en: 'Where? In a place: talossa, Helsingissä.', tr: 'Nerede? Bir yerin içinde: talossa, Helsingissä.' },
    body: {
      en: [
        'The ending **-ssa/-ssä** means "in". It answers the question **Missä?** (Where?).',
        'Add it to the word\'s stem. The stem is often the basic form (*talo* → *talossa*), but some words change: *huone* → *huoneessa*, *Suomi* → *Suomessa*.',
        'Consonants may soften: *kauppa* → *kaupassa*, *Helsinki* → *Helsingissä*. Tip: if you know the genitive (*kaupan*), drop the **-n** and add **-ssa**.'
      ],
      tr: [
        '**-ssa/-ssä** eki "içinde, -de/-da" demektir ve **Missä?** (Nerede?) sorusuna cevap verir. Türkçedeki *evde, okulda* ekinin karşılığıdır.',
        'Ek kelimenin gövdesine gelir. Gövde çoğu zaman temel hâldir (*talo* → *talossa*), ama bazı kelimeler değişir: *huone* → *huoneessa*, *Suomi* → *Suomessa*.',
        'Ünsüz yumuşayabilir: *kauppa* → *kaupassa*, *Helsinki* → *Helsingissä* (Türkçedeki *kitap → kitabı* gibi). İpucu: genitif biçimini biliyorsan (*kaupan*), **-n** harfini at ve **-ssa** ekle.'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Inside'], tr: ['Temel hâl', 'İçinde'] },
      rows: [['talo', 'talossa'], ['metsä', 'metsässä'], ['koulu', 'koulussa'], ['huone', 'huoneessa'], ['Suomi', 'Suomessa'], ['kauppa', 'kaupassa'], ['Helsinki', 'Helsingissä']]
    },
    examples: [
      ['Kissa on talossa.', 'The cat is in the house.', 'Kedi evin içinde.'],
      ['Asun Suomessa.', 'I live in Finland.', 'Finlandiya\'da yaşıyorum.'],
      ['Missä olet? – Olen kaupassa.', 'Where are you? – I\'m at the shop.', 'Neredesin? – Marketteyim.']
    ],
    quiz: [
      { fi: 'Asun {Helsingissä}.', base: 'Helsinki', en: 'I live in Helsinki.', tr: 'Helsinki\'de yaşıyorum.' },
      { fi: 'Kissa on {laatikossa}.', base: 'laatikko', en: 'The cat is in the box.', tr: 'Kedi kutunun içinde.' },
      { fi: 'Maito on {jääkaapissa}.', base: 'jääkaappi', en: 'The milk is in the fridge.', tr: 'Süt buzdolabında.' },
      { fi: 'Asumme {Suomessa}.', base: 'Suomi', en: 'We live in Finland.', tr: 'Finlandiya\'da yaşıyoruz.' },
      { fi: 'Hän on {kaupassa}.', base: 'kauppa', en: 'She is at the shop.', tr: 'Markette.' },
      { fi: 'Avaimet ovat {laukussa}.', base: 'laukku', en: 'The keys are in the bag.', tr: 'Anahtarlar çantada.' },
      { fi: 'Olen {kirjastossa}.', base: 'kirjasto', en: 'I\'m in the library.', tr: 'Kütüphanedeyim.' },
      { fi: 'Asun {Turussa}.', base: 'Turku', en: 'I live in Turku.', tr: 'Turku\'da oturuyorum.' },
      { fi: 'Kahvi on {kupissa}.', base: 'kuppi', en: 'The coffee is in the cup.', tr: 'Kahve fincanda.' },
      { fi: 'Hän työskentelee {sairaalassa}.', base: 'sairaala', en: 'She works in a hospital.', tr: 'Hastanede çalışıyor.' }
    ]
  },
  {
    id: 'elative', lv: 1, icon: 'log-out',
    title: { en: 'Out of: -sta / -stä', tr: 'İçinden: -sta / -stä' },
    summary: { en: 'Where from? Out of a place: talosta.', tr: 'Nereden? Bir yerin içinden: talosta.' },
    body: {
      en: [
        'The ending **-sta/-stä** means "out of, from (inside)". It answers **Mistä?** (Where from?). It uses the same stem as -ssa: *kauppa* → *kaupassa* → **kaupasta**.',
        'Say where you are from with it: *Olen kotoisin Turkista.*',
        'It also means "about" and appears with some verbs: *puhua elokuvasta* (talk about a film), *pitää kahvista* (like coffee).'
      ],
      tr: [
        '**-sta/-stä** eki "içinden, -den/-dan" demektir ve **Mistä?** (Nereden?) sorusuna cevap verir. -ssa ile aynı gövdeyi kullanır: *kauppa* → *kaupassa* → **kaupasta**.',
        'Nereli olduğunu söylerken de kullanılır: *Olen kotoisin Turkista.* (Türkiye\'denim.)',
        'Ayrıca "hakkında" anlamı taşır ve bazı fiillerle gelir: *puhua elokuvasta* (film hakkında konuşmak), *pitää kahvista* (kahveyi sevmek). Türkçede *kahveden hoşlanmak* dediğimiz gibi!'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Out of'], tr: ['Temel hâl', 'İçinden'] },
      rows: [['talo', 'talosta'], ['metsä', 'metsästä'], ['koulu', 'koulusta'], ['huone', 'huoneesta'], ['Turkki', 'Turkista'], ['kauppa', 'kaupasta'], ['Helsinki', 'Helsingistä']]
    },
    examples: [
      ['Tulen kaupasta.', 'I\'m coming from the shop.', 'Marketten geliyorum.'],
      ['Mistä olet kotoisin?', 'Where are you from?', 'Nerelisin?'],
      ['Pidän suklaasta.', 'I like chocolate.', 'Çikolatayı severim.']
    ],
    quiz: [
      { fi: 'Tulen {kaupasta}.', base: 'kauppa', en: 'I\'m coming from the shop.', tr: 'Marketten geliyorum.' },
      { fi: 'Hän ottaa maidon {jääkaapista}.', base: 'jääkaappi', en: 'She takes the milk out of the fridge.', tr: 'Sütü buzdolabından alıyor.' },
      { fi: 'Olen kotoisin {Turkista}.', base: 'Turkki', en: 'I\'m from Turkey.', tr: 'Türkiye\'denim.' },
      { fi: 'Pidän {kahvista}.', base: 'kahvi', en: 'I like coffee.', tr: 'Kahveyi severim.' },
      { fi: 'Puhumme {elokuvasta}.', base: 'elokuva', en: 'We are talking about the film.', tr: 'Film hakkında konuşuyoruz.' },
      { fi: 'Lähden {koulusta} kolmelta.', base: 'koulu', en: 'I leave school at three.', tr: 'Okuldan saat üçte çıkıyorum.' },
      { fi: 'Hän tulee {kirjastosta}.', base: 'kirjasto', en: 'She is coming from the library.', tr: 'Kütüphaneden geliyor.' },
      { fi: 'Otan kirjan {laukusta}.', base: 'laukku', en: 'I take the book out of the bag.', tr: 'Kitabı çantadan çıkarıyorum.' },
      { fi: 'Tämä kirje on {Suomesta}.', base: 'Suomi', en: 'This letter is from Finland.', tr: 'Bu mektup Finlandiya\'dan.' },
      { fi: 'Pidän {musiikista}.', base: 'musiikki', en: 'I like music.', tr: 'Müziği severim.' }
    ]
  },
  {
    id: 'illative', lv: 1, icon: 'log-in',
    title: { en: 'Into: taloon, kauppaan', tr: 'İçine: taloon, kauppaan' },
    summary: { en: 'Where to? Into a place.', tr: 'Nereye? Bir yerin içine.' },
    body: {
      en: [
        'The illative means "into, to" and answers **Mihin?** (Where to?). Basic rule: **repeat the last vowel + n**: *talo* → **taloon**, *koulu* → **kouluun**.',
        'Words that end in **-e** usually take **-eeseen**: *huone* → **huoneeseen**. Short words with a long vowel take **-h + vowel + n**: *maa* → **maahan**, *työ* → *työhön*.',
        'Good news: the illative keeps the **strong** consonant: *kauppa* → **kauppaan** (not *kaupaan*), *Helsinki* → **Helsinkiin**.'
      ],
      tr: [
        'İllatif "içine, -e/-a" demektir ve **Mihin?** (Nereye?) sorusuna cevap verir; Türkçedeki *eve, okula* ekine karşılık gelir. Temel kural: **son ünlüyü tekrarla + n**: *talo* → **taloon**, *koulu* → **kouluun**.',
        '**-e** ile biten kelimeler genelde **-eeseen** alır: *huone* → **huoneeseen**. Uzun ünlülü kısa kelimeler **-h + ünlü + n** alır: *maa* → **maahan**, *työ* → *työhön*.',
        'Güzel haber: illatifte ünsüz **güçlü** kalır: *kauppa* → **kauppaan** (*kaupaan* değil), *Helsinki* → **Helsinkiin**.'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Into'], tr: ['Temel hâl', 'İçine'] },
      rows: [['talo', 'taloon'], ['metsä', 'metsään'], ['kauppa', 'kauppaan'], ['Helsinki', 'Helsinkiin'], ['Suomi', 'Suomeen'], ['huone', 'huoneeseen'], ['maa', 'maahan']]
    },
    examples: [
      ['Menen kauppaan.', 'I\'m going to the shop.', 'Markete gidiyorum.'],
      ['Tule sisään!', 'Come in!', 'İçeri gel!'],
      ['Muutin Suomeen viime vuonna.', 'I moved to Finland last year.', 'Geçen yıl Finlandiya\'ya taşındım.']
    ],
    quiz: [
      { fi: 'Menen {kauppaan}.', base: 'kauppa', en: 'I\'m going to the shop.', tr: 'Markete gidiyorum.' },
      { fi: 'Muutamme {Suomeen}.', base: 'Suomi', en: 'We are moving to Finland.', tr: 'Finlandiya\'ya taşınıyoruz.' },
      { fi: 'Laita maito {jääkaappiin}.', base: 'jääkaappi', en: 'Put the milk in the fridge.', tr: 'Sütü buzdolabına koy.' },
      { fi: 'Hän menee {huoneeseen}.', base: 'huone', en: 'He goes into the room.', tr: 'Odaya giriyor.' },
      { fi: 'Matkustan {Turkkiin}.', base: 'Turkki', en: 'I\'m travelling to Turkey.', tr: 'Türkiye\'ye gidiyorum.' },
      { fi: 'Kissa hyppää {laatikkoon}.', base: 'laatikko', en: 'The cat jumps into the box.', tr: 'Kedi kutuya atlıyor.' },
      { fi: 'Menen {kouluun}.', base: 'koulu', en: 'I\'m going to school.', tr: 'Okula gidiyorum.' },
      { fi: 'Laitan kirjan {laukkuun}.', base: 'laukku', en: 'I put the book in the bag.', tr: 'Kitabı çantaya koyuyorum.' },
      { fi: 'Tule {saunaan}!', base: 'sauna', en: 'Come to the sauna!', tr: 'Saunaya gel!' },
      { fi: 'He muuttavat {Helsinkiin}.', base: 'Helsinki', en: 'They are moving to Helsinki.', tr: 'Helsinki\'ye taşınıyorlar.' }
    ]
  },
  {
    id: 'adessive', lv: 1, icon: 'map-pin',
    title: { en: 'On, at: -lla / -llä', tr: 'Üstünde: -lla / -llä' },
    summary: { en: 'On a surface, at a place, by bus — and "I have".', tr: 'Bir yüzeyde, bir yerde, otobüsle — ve "bende var".' },
    body: {
      en: [
        '**-lla/-llä** means "on" (a surface) or "at" (an open place): *pöydällä* (on the table), *torilla* (at the market), *asemalla* (at the station).',
        'It also means "by, with" for tools and vehicles: **bussilla** (by bus), and is used for seasons and parts of the day: *kesällä* (in summer), *illalla* (in the evening).',
        'And it is how Finns say "have": **Minulla on** auto = I have a car (literally "at me is a car").'
      ],
      tr: [
        '**-lla/-llä** "üstünde" (bir yüzeyde) ya da açık bir yerde "-de/-da" demektir: *pöydällä* (masada, masanın üstünde), *torilla* (pazar yerinde), *asemalla* (istasyonda).',
        'Araç ve gereçler için "ile" anlamı taşır: **bussilla** (otobüsle). Mevsimler ve günün bölümleri için de kullanılır: *kesällä* (yazın), *illalla* (akşamleyin).',
        'Ve sahiplik böyle anlatılır: **Minulla on** auto = Bende araba var / Arabam var. Türkçedeki *bende var* yapısının birebir aynısı!'
      ]
    },
    table: {
      head: { en: ['Basic form', 'On / at'], tr: ['Temel hâl', 'Üstünde / -de'] },
      rows: [['pöytä', 'pöydällä'], ['tori', 'torilla'], ['asema', 'asemalla'], ['bussi', 'bussilla'], ['kesä', 'kesällä'], ['minä', 'minulla'], ['sinä', 'sinulla']]
    },
    examples: [
      ['Kirja on pöydällä.', 'The book is on the table.', 'Kitap masanın üstünde.'],
      ['Minulla on kaksi siskoa.', 'I have two sisters.', 'İki kız kardeşim var.'],
      ['Menen töihin pyörällä.', 'I go to work by bike.', 'İşe bisikletle gidiyorum.']
    ],
    quiz: [
      { fi: 'Kirja on {pöydällä}.', base: 'pöytä', en: 'The book is on the table.', tr: 'Kitap masanın üstünde.' },
      { fi: '{Minulla} on koira.', base: 'minä', en: 'I have a dog.', tr: 'Bir köpeğim var.' },
      { fi: 'Menen töihin {bussilla}.', base: 'bussi', en: 'I go to work by bus.', tr: 'İşe otobüsle gidiyorum.' },
      { fi: 'Odotan {asemalla}.', base: 'asema', en: 'I\'m waiting at the station.', tr: 'İstasyonda bekliyorum.' },
      { fi: '{Kesällä} on lämmin.', base: 'kesä', en: 'It\'s warm in summer.', tr: 'Yazın hava sıcak olur.' },
      { fi: 'Onko {sinulla} aikaa?', base: 'sinä', en: 'Do you have time?', tr: 'Vaktin var mı?' },
      { fi: 'Onko {teillä} lapsia?', base: 'te', en: 'Do you have children?', tr: 'Çocuğunuz var mı?' },
      { fi: 'Matkustan {junalla}.', base: 'juna', en: 'I travel by train.', tr: 'Trenle seyahat ediyorum.' },
      { fi: 'Kuppi on {hyllyllä}.', base: 'hylly', en: 'The cup is on the shelf.', tr: 'Fincan rafta.' },
      { fi: '{Aamulla} juon kahvia.', base: 'aamu', en: 'In the morning I drink coffee.', tr: 'Sabahları kahve içerim.' }
    ]
  },
  {
    id: 'ablative', lv: 1, icon: 'arrow-up-from-line',
    title: { en: 'Off, from: -lta / -ltä', tr: 'Üstünden, -den: -lta / -ltä' },
    summary: { en: 'Off a surface, from a person.', tr: 'Bir yüzeyin üstünden, birinden.' },
    body: {
      en: [
        '**-lta/-ltä** is the "from" partner of -lla: off a surface (*pöydältä*), or from a place that uses -lla (*torilla* → *torilta*).',
        'Use it for getting something **from a person**: *Sain kirjeen ystävältä* (I got a letter from a friend), *Kysy opettajalta!* (Ask the teacher!).',
        'Also with senses: *Ruoka maistuu hyvältä* (The food tastes good), *Se näyttää hyvältä* (It looks good).'
      ],
      tr: [
        '**-lta/-ltä**, -lla ekinin "-den/-dan" karşılığıdır: bir yüzeyin üstünden (*pöydältä*) ya da -lla alan bir yerden (*torilla* → *torilta*).',
        '**Birinden** bir şey alırken kullanılır: *Sain kirjeen ystävältä* (Arkadaşımdan mektup aldım), *Kysy opettajalta!* (Öğretmene sor!). Dikkat: Türkçede *öğretmene sorulur*, Fincede *öğretmenden* sorulur.',
        'Duyularla da gelir: *Ruoka maistuu hyvältä* (Yemeğin tadı güzel), *Se näyttää hyvältä* (Güzel görünüyor).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Off / from'], tr: ['Temel hâl', 'Üstünden / -den'] },
      rows: [['pöytä', 'pöydältä'], ['tori', 'torilta'], ['asema', 'asemalta'], ['ystävä', 'ystävältä'], ['lattia', 'lattialta'], ['minä', 'minulta'], ['hyvä', 'hyvältä']]
    },
    examples: [
      ['Ota kuppi pöydältä.', 'Take the cup off the table.', 'Fincanı masadan al.'],
      ['Sain lahjan isältä.', 'I got a present from Dad.', 'Babamdan bir hediye aldım.'],
      ['Tämä tuoksuu hyvältä!', 'This smells good!', 'Bu çok güzel kokuyor!']
    ],
    quiz: [
      { fi: 'Otan kirjan {pöydältä}.', base: 'pöytä', en: 'I take the book off the table.', tr: 'Kitabı masadan alıyorum.' },
      { fi: 'Sain lahjan {ystävältä}.', base: 'ystävä', en: 'I got a present from a friend.', tr: 'Bir arkadaşımdan hediye aldım.' },
      { fi: 'Tulen {torilta}.', base: 'tori', en: 'I\'m coming from the market square.', tr: 'Pazar yerinden geliyorum.' },
      { fi: 'Ruoka maistuu {hyvältä}.', base: 'hyvä', en: 'The food tastes good.', tr: 'Yemeğin tadı güzel.' },
      { fi: 'Kysy {opettajalta}!', base: 'opettaja', en: 'Ask the teacher!', tr: 'Öğretmene sor!' },
      { fi: 'Voinko lainata {sinulta} kynää?', base: 'sinä', en: 'Can I borrow a pen from you?', tr: 'Senden bir kalem ödünç alabilir miyim?' },
      { fi: 'Sain kirjeen {äidiltä}.', base: 'äiti', en: 'I got a letter from Mum.', tr: 'Annemden bir mektup aldım.' },
      { fi: 'Otan kupin {hyllyltä}.', base: 'hylly', en: 'I take the cup off the shelf.', tr: 'Fincanı raftan alıyorum.' },
      { fi: 'Kysyn {häneltä}.', base: 'hän', en: 'I\'ll ask him.', tr: 'Ona soracağım.' },
      { fi: 'Hän tulee {asemalta}.', base: 'asema', en: 'He is coming from the station.', tr: 'İstasyondan geliyor.' }
    ]
  },
  {
    id: 'allative', lv: 1, icon: 'arrow-down-to-line',
    title: { en: 'Onto, to: -lle', tr: 'Üstüne, -e: -lle' },
    summary: { en: 'Onto a surface, to a person.', tr: 'Bir yüzeyin üstüne, birine.' },
    body: {
      en: [
        '**-lle** means "onto" (*pöydälle*) or "to" a place that uses -lla (*torilla* → *torille*). It has no vowel harmony: always **-lle**.',
        'It marks the person who **receives** something: *Annan kukan äidille* (I give a flower to Mum), *Soitan sinulle* (I\'ll call you).'
      ],
      tr: [
        '**-lle** "üstüne" (*pöydälle* = masanın üstüne) ya da -lla alan bir yere "-e/-a" demektir (*torilla* → *torille*). Ünlü uyumu yoktur, hep **-lle** olur.',
        'Bir şeyi **alan kişiyi** gösterir, Türkçedeki yönelme hâli gibi: *Annan kukan äidille* (Anneme çiçek veriyorum), *Soitan sinulle* (Seni arayacağım — Fincede "sana telefon ederim" denir).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Onto / to'], tr: ['Temel hâl', 'Üstüne / -e'] },
      rows: [['pöytä', 'pöydälle'], ['tori', 'torille'], ['asema', 'asemalle'], ['ystävä', 'ystävälle'], ['äiti', 'äidille'], ['minä', 'minulle'], ['hän', 'hänelle']]
    },
    examples: [
      ['Laita lautaset pöydälle.', 'Put the plates on the table.', 'Tabakları masaya koy.'],
      ['Kirjoitan ystävälle.', 'I\'m writing to a friend.', 'Bir arkadaşıma yazıyorum.'],
      ['Anna minulle vettä, kiitos.', 'Give me some water, please.', 'Bana biraz su ver, lütfen.']
    ],
    quiz: [
      { fi: 'Laita kuppi {pöydälle}.', base: 'pöytä', en: 'Put the cup on the table.', tr: 'Fincanı masaya koy.' },
      { fi: 'Annan kukan {äidille}.', base: 'äiti', en: 'I give a flower to Mum.', tr: 'Anneme çiçek veriyorum.' },
      { fi: 'Soitan {sinulle} illalla.', base: 'sinä', en: 'I\'ll call you in the evening.', tr: 'Akşam seni ararım.' },
      { fi: 'Menemme {torille}.', base: 'tori', en: 'We are going to the market square.', tr: 'Pazar yerine gidiyoruz.' },
      { fi: 'Kerro {hänelle} terveisiä.', base: 'hän', en: 'Say hello to him from me.', tr: 'Ona selamımı söyle.' },
      { fi: 'Kirjoitan viestin {opettajalle}.', base: 'opettaja', en: 'I\'m writing a message to the teacher.', tr: 'Öğretmene mesaj yazıyorum.' },
      { fi: 'Annan lahjan {ystävälle}.', base: 'ystävä', en: 'I give the present to a friend.', tr: 'Hediyeyi bir arkadaşıma veriyorum.' },
      { fi: 'Laita kirja {hyllylle}.', base: 'hylly', en: 'Put the book on the shelf.', tr: 'Kitabı rafa koy.' },
      { fi: 'Menemme {asemalle}.', base: 'asema', en: 'We are going to the station.', tr: 'İstasyona gidiyoruz.' },
      { fi: 'Kerron sen {teille} huomenna.', base: 'te', en: 'I\'ll tell you tomorrow.', tr: 'Yarın size anlatırım.' }
    ]
  },
  {
    id: 'genitive-possession', lv: 1, icon: 'key',
    title: { en: 'Whose? The genitive -n', tr: 'Kimin? Genitif -n' },
    summary: { en: 'Matin kirja = Matti\'s book.', tr: 'Matin kirja = Matti\'nin kitabı.' },
    body: {
      en: [
        'Add **-n** to show who owns something: *Matti* → **Matin** kirja (Matti\'s book), *talo* → **talon** ovi (the door of the house).',
        'The genitive shows the word\'s real stem, which the other cases use too: *kauppa* → *kaupan*, *huone* → *huoneen*, *Suomi* → *Suomen*.',
        'Pronouns: **minun, sinun, hänen, meidän, teidän, heidän**. Many place words also need the genitive: *talon edessä* (in front of the house).'
      ],
      tr: [
        'Bir şeyin kime ait olduğunu göstermek için **-n** eklenir: *Matti* → **Matin** kirja (Matti\'nin kitabı), *talo* → **talon** ovi (evin kapısı).',
        'Türkçede hem sahip hem de sahip olunan ek alır (*evin kapı-sı*); Fincede sadece sahibe **-n** gelir.',
        'Genitif kelimenin gerçek gövdesini gösterir ve diğer hâller de bu gövdeyi kullanır: *kauppa* → *kaupan*, *huone* → *huoneen*. Zamirler: **minun, sinun, hänen, meidän, teidän, heidän**. Yer bildiren pek çok kelime de genitifle gelir: *talon edessä* (evin önünde).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Whose?'], tr: ['Temel hâl', 'Kimin?'] },
      rows: [['Matti', 'Matin'], ['talo', 'talon'], ['kauppa', 'kaupan'], ['Suomi', 'Suomen'], ['huone', 'huoneen'], ['minä', 'minun'], ['hän', 'hänen']]
    },
    examples: [
      ['Tämä on Annan puhelin.', 'This is Anna\'s phone.', 'Bu Anna\'nın telefonu.'],
      ['Suomen lippu on sininen ja valkoinen.', 'The Finnish flag is blue and white.', 'Finlandiya bayrağı mavi beyazdır.'],
      ['Odotan sinua kaupan edessä.', 'I\'ll wait for you in front of the shop.', 'Seni marketin önünde bekliyorum.']
    ],
    quiz: [
      { fi: 'Tämä on {Annan} auto.', base: 'Anna', en: 'This is Anna\'s car.', tr: 'Bu Anna\'nın arabası.' },
      { fi: 'Missä on {talon} avain?', base: 'talo', en: 'Where is the house key?', tr: 'Evin anahtarı nerede?' },
      { fi: '{Suomen} pääkaupunki on Helsinki.', base: 'Suomi', en: 'The capital of Finland is Helsinki.', tr: 'Finlandiya\'nın başkenti Helsinki\'dir.' },
      { fi: 'Tämä on {minun} laukkuni.', base: 'minä', en: 'This is my bag.', tr: 'Bu benim çantam.' },
      { fi: 'Kissa istuu {oven} edessä.', base: 'ovi', en: 'The cat is sitting in front of the door.', tr: 'Kedi kapının önünde oturuyor.' },
      { fi: '{Kaupan} ovi on auki.', base: 'kauppa', en: 'The shop door is open.', tr: 'Marketin kapısı açık.' },
      { fi: 'Tämä on {Pekan} kirja.', base: 'Pekka', en: 'This is Pekka\'s book.', tr: 'Bu Pekka\'nın kitabı.' },
      { fi: 'Mikä on {sinun} nimesi?', base: 'sinä', en: 'What is your name?', tr: 'Senin adın ne?' },
      { fi: '{Koiran} nimi on Musti.', base: 'koira', en: 'The dog\'s name is Musti.', tr: 'Köpeğin adı Musti.' },
      { fi: 'Missä on {opettajan} huone?', base: 'opettaja', en: 'Where is the teacher\'s room?', tr: 'Öğretmenin odası nerede?' }
    ]
  },
  {
    id: 'numbers-basic', lv: 1, icon: 'hash',
    title: { en: 'Numbers', tr: 'Sayılar' },
    summary: { en: 'yksi, kaksi, kolme… and the noun after them.', tr: 'yksi, kaksi, kolme… ve arkalarındaki isim.' },
    body: {
      en: [
        '0–10: *nolla, yksi, kaksi, kolme, neljä, viisi, kuusi, seitsemän, kahdeksan, yhdeksän, kymmenen*.',
        '11–19 add **-toista**: *yksitoista, kaksitoista…* Tens add **-kymmentä**: *kaksikymmentä* (20), *kolmekymmentäviisi* (35). 100 = *sata*, 1000 = *tuhat*.',
        'After any number from 2 up, the noun is **singular** in the **partitive**: *kaksi kissaa*, *kolme omenaa*, *viisi euroa*.'
      ],
      tr: [
        '0–10: *nolla, yksi, kaksi, kolme, neljä, viisi, kuusi, seitsemän, kahdeksan, yhdeksän, kymmenen*.',
        '11–19 arası **-toista** alır: *yksitoista, kaksitoista…* Onluklar **-kymmentä** alır: *kaksikymmentä* (20), *kolmekymmentäviisi* (35). 100 = *sata*, 1000 = *tuhat*.',
        'Türkçede olduğu gibi sayıdan sonra isim **tekil** kalır (*iki kedi*). Ama Fincede 2 ve üstündeki sayılardan sonra isim **partitif** hâl alır: *kaksi kissaa*, *kolme omenaa*, *viisi euroa*.'
      ]
    },
    table: {
      head: { en: ['Number', 'Finnish'], tr: ['Sayı', 'Fince'] },
      rows: [['1, 2, 3', 'yksi, kaksi, kolme'], ['4, 5, 6', 'neljä, viisi, kuusi'], ['7, 8, 9', 'seitsemän, kahdeksan, yhdeksän'], ['10', 'kymmenen'], ['11, 12', 'yksitoista, kaksitoista'], ['20, 30', 'kaksikymmentä, kolmekymmentä'], ['100', 'sata'], ['1000', 'tuhat']]
    },
    examples: [
      ['Minulla on kaksi veljeä.', 'I have two brothers.', 'İki erkek kardeşim var.'],
      ['Kahvi maksaa kolme euroa.', 'The coffee costs three euros.', 'Kahve üç euro.'],
      ['Olen kaksikymmentäviisi vuotta vanha.', 'I\'m twenty-five years old.', 'Yirmi beş yaşındayım.']
    ],
    quiz: [
      { fi: 'Minulla on kaksi {kissaa}.', base: 'kissa', en: 'I have two cats.', tr: 'İki kedim var.' },
      { fi: 'Ostan kolme {omenaa}.', base: 'omena', en: 'I\'m buying three apples.', tr: 'Üç elma alıyorum.' },
      { fi: 'Luokassa on {kymmenen} oppilasta.', base: '10', en: 'There are ten pupils in the class.', tr: 'Sınıfta on öğrenci var.' },
      { fi: 'Kahvi maksaa {kolme} euroa.', base: '3', en: 'The coffee costs three euros.', tr: 'Kahve üç euro.' },
      { fi: 'Meillä on kaksi {autoa}.', base: 'auto', en: 'We have two cars.', tr: 'İki arabamız var.' },
      { fi: 'Talossa on {seitsemän} huonetta.', base: '7', en: 'The house has seven rooms.', tr: 'Evde yedi oda var.' },
      { fi: 'Minulla on kolme {lasta}.', base: 'lapsi', en: 'I have three children.', tr: 'Üç çocuğum var.' },
      { fi: 'Puistossa on viisi {koiraa}.', base: 'koira', en: 'There are five dogs in the park.', tr: 'Parkta beş köpek var.' },
      { fi: 'Kaksi plus kaksi on {neljä}.', base: '4', en: 'Two plus two is four.', tr: 'İki artı iki dört eder.' },
      { fi: 'Vuodessa on {kaksitoista} kuukautta.', base: '12', en: 'There are twelve months in a year.', tr: 'Bir yılda on iki ay var.' }
    ]
  },
  {
    id: 'plural-nominative', lv: 1, icon: 'copy',
    title: { en: 'Plural: -t', tr: 'Çoğul: -t' },
    summary: { en: 'talo → talot, kissa → kissat.', tr: 'talo → talot, kissa → kissat.' },
    body: {
      en: [
        'The basic plural ending is **-t**, added to the same stem as the genitive: *talo* → **talot**, *kauppa* (*kaupan*) → **kaupat**, *huone* (*huoneen*) → **huoneet**.',
        'Use it for the subject when you mean specific things: **Kissat** nukkuvat (The cats are sleeping). The verb is plural too.',
        'Remember: after numbers there is no plural: *kaksi kissaa*, not *kaksi kissat*.'
      ],
      tr: [
        'Temel çoğul eki **-t**\'dir ve genitifle aynı gövdeye eklenir: *talo* → **talot**, *kauppa* (*kaupan*) → **kaupat**, *huone* (*huoneen*) → **huoneet**. Türkçedeki *-ler/-lar* gibi düşün.',
        'Belirli şeylerden söz ederken özne için kullanılır: **Kissat** nukkuvat (Kediler uyuyor). Fiil de çoğul olur.',
        'Unutma: sayılardan sonra çoğul kullanılmaz (Türkçede de öyle!): *kaksi kissaa*, *kaksi kissat* değil.'
      ]
    },
    table: {
      head: { en: ['Singular', 'Plural'], tr: ['Tekil', 'Çoğul'] },
      rows: [['talo', 'talot'], ['kissa', 'kissat'], ['kauppa', 'kaupat'], ['huone', 'huoneet'], ['lapsi', 'lapset'], ['kieli', 'kielet'], ['ystävä', 'ystävät']]
    },
    examples: [
      ['Lapset ovat koulussa.', 'The children are at school.', 'Çocuklar okulda.'],
      ['Missä kengät ovat?', 'Where are the shoes?', 'Ayakkabılar nerede?'],
      ['Kaupat ovat kiinni.', 'The shops are closed.', 'Dükkânlar kapalı.']
    ],
    quiz: [
      { fi: '{Lapset} leikkivät pihalla.', base: 'lapsi', en: 'The children are playing in the yard.', tr: 'Çocuklar bahçede oynuyor.' },
      { fi: '{Kissat} nukkuvat sohvalla.', base: 'kissa', en: 'The cats are sleeping on the sofa.', tr: 'Kediler kanepede uyuyor.' },
      { fi: '{Kaupat} ovat kiinni sunnuntaina.', base: 'kauppa', en: 'The shops are closed on Sunday.', tr: 'Dükkânlar pazar günü kapalı.' },
      { fi: 'Nämä {kirjat} ovat uusia.', base: 'kirja', en: 'These books are new.', tr: 'Bu kitaplar yeni.' },
      { fi: '{Ystävät} tulevat illalla.', base: 'ystävä', en: 'The friends are coming in the evening.', tr: 'Arkadaşlar akşam geliyor.' },
      { fi: '{Huoneet} ovat isoja.', base: 'huone', en: 'The rooms are big.', tr: 'Odalar büyük.' },
      { fi: '{Kukat} ovat kauniita.', base: 'kukka', en: 'The flowers are beautiful.', tr: 'Çiçekler çok güzel.' },
      { fi: 'Missä {avaimet} ovat?', base: 'avain', en: 'Where are the keys?', tr: 'Anahtarlar nerede?' },
      { fi: '{Koirat} haukkuvat.', base: 'koira', en: 'The dogs are barking.', tr: 'Köpekler havlıyor.' },
      { fi: 'Nämä {kengät} ovat liian pienet.', base: 'kenkä', en: 'These shoes are too small.', tr: 'Bu ayakkabılar çok küçük.' }
    ]
  },

  // ───────────────────────── Level 2 ─────────────────────────
  {
    id: 'partitive', lv: 2, icon: 'chart-pie',
    title: { en: 'The partitive: some, part of', tr: 'Partitif: biraz, bir kısmı' },
    summary: { en: 'kahvia, vettä, taloa — the most common case.', tr: 'kahvia, vettä, taloa — en sık kullanılan hâl.' },
    body: {
      en: [
        'The partitive is everywhere. Use it for **amounts** of things you can\'t count (*Juon kahvia*), **after numbers** (*kaksi kissaa*), in **negative** sentences (*En osta autoa*) and for **unfinished** actions (*Luen kirjaa* = I\'m reading a book).',
        'Some verbs always take it: *rakastaa* (love), *odottaa* (wait for), *auttaa* (help), *ajatella* (think about).',
        'Endings: short words ending in a single vowel take **-a/-ä** (*talo* → *taloa*). Words ending in a long vowel or consonant take **-ta/-tä** (*maa* → *maata*, *puhelin* → *puhelinta*). Words in **-e** take **-tta/-ttä** (*huone* → *huonetta*).'
      ],
      tr: [
        'Partitif her yerdedir. Sayılamayan şeylerin **miktarı** için (*Juon kahvia* = Kahve içiyorum), **sayılardan sonra** (*kaksi kissaa*), **olumsuz** cümlelerde (*En osta autoa*) ve **bitmemiş** eylemlerde (*Luen kirjaa* = Kitap okuyorum) kullanılır.',
        'Türkçe ipucu: *Su içiyorum* (belirsiz, eksiz nesne) ≈ partitif; *Suyu içtim* (-ı belirtme hâli, bütün ve belirli) ≈ Fincedeki tam nesne. Bazı fiiller hep partitif ister: *rakastaa* (sevmek), *odottaa* (beklemek), *auttaa* (yardım etmek).',
        'Ekler: tek ünlüyle biten kısa kelimeler **-a/-ä** alır (*talo* → *taloa*). Uzun ünlü ya da ünsüzle bitenler **-ta/-tä** alır (*maa* → *maata*, *puhelin* → *puhelinta*). **-e** ile bitenler **-tta/-ttä** alır (*huone* → *huonetta*).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Partitive'], tr: ['Temel hâl', 'Partitif'] },
      rows: [['talo', 'taloa'], ['kissa', 'kissaa'], ['kahvi', 'kahvia'], ['maa', 'maata'], ['puhelin', 'puhelinta'], ['huone', 'huonetta'], ['vesi', 'vettä']]
    },
    examples: [
      ['Haluatko teetä vai kahvia?', 'Would you like tea or coffee?', 'Çay mı istersin, kahve mi?'],
      ['Odotan bussia.', 'I\'m waiting for the bus.', 'Otobüs bekliyorum.'],
      ['Meillä ei ole autoa.', 'We don\'t have a car.', 'Arabamız yok.'],
      ['Pöydällä on leipää.', 'There is some bread on the table.', 'Masada biraz ekmek var.']
    ],
    quiz: [
      { fi: 'Kupissa on {kahvia}.', base: 'kahvi', en: 'There is coffee in the cup.', tr: 'Fincanda kahve var.' },
      { fi: 'Ostan vähän {maitoa}.', base: 'maito', en: 'I\'m buying some milk.', tr: 'Biraz süt alıyorum.' },
      { fi: 'Odotan {bussia}.', base: 'bussi', en: 'I\'m waiting for the bus.', tr: 'Otobüs bekliyorum.' },
      { fi: 'En syö {lihaa}.', base: 'liha', en: 'I don\'t eat meat.', tr: 'Et yemem.' },
      { fi: 'Juon paljon {vettä}.', base: 'vesi', en: 'I drink a lot of water.', tr: 'Çok su içerim.' },
      { fi: 'Rakastan {sinua}.', base: 'sinä', en: 'I love you.', tr: 'Seni seviyorum.' },
      { fi: 'Juotko {teetä}?', base: 'tee', en: 'Do you drink tea?', tr: 'Çay içer misin?' },
      { fi: 'Otan vähän {leipää}.', base: 'leipä', en: 'I\'ll take a little bread.', tr: 'Biraz ekmek alayım.' },
      { fi: 'Minulla ei ole {autoa}.', base: 'auto', en: 'I don\'t have a car.', tr: 'Arabam yok.' },
      { fi: 'Lasissa on {mehua}.', base: 'mehu', en: 'There is juice in the glass.', tr: 'Bardakta meyve suyu var.' }
    ]
  },
  {
    id: 'partitive-plural', lv: 2, icon: 'package-open',
    title: { en: 'Partitive plural: kirjoja, omenoita', tr: 'Çoğul partitif: kirjoja, omenoita' },
    summary: { en: 'Some (indefinite) things in the plural.', tr: 'Çoğulda belirsiz miktar: birkaç, birtakım.' },
    body: {
      en: [
        'Use the partitive plural for an **indefinite number** of countable things: *Pöydällä on kirjoja* (There are books on the table), *Syön omenoita* (I eat apples).',
        'It is plural marker **i** + **-a/-ä**, which becomes **-ja/-jä** after a vowel: *talo* → **taloja**. Words in **-e**, most words of three or more syllables and one-syllable words take **-ita/-itä**: *huone* → **huoneita**, *omena* → **omenoita**, *maa* → **maita**.',
        'Rules of thumb for 2-syllable words in **-a**: if the first vowel is **o** or **u**, the a drops (*koira* → *koiria*); otherwise it becomes **o** (*kissa* → *kissoja*). **-ä** simply drops (*metsä* → *metsiä*). New words in -i take **-eja** (*banaani* → *banaaneja*).'
      ],
      tr: [
        'Sayılabilen şeylerin **belirsiz bir miktarı** için kullanılır: *Pöydällä on kirjoja* (Masada kitaplar var), *Syön omenoita* (Elma yerim). Türkçedeki eksiz *Elma yerim* ya da *Masada kitaplar var* gibi.',
        'Çoğul işareti **i** + **-a/-ä** birleşir; ünlüden sonra **-ja/-jä** olur: *talo* → **taloja**. **-e** ile bitenler, üç ve daha fazla heceli kelimelerin çoğu ve tek heceli kelimeler **-ita/-itä** alır: *huone* → **huoneita**, *omena* → **omenoita**, *maa* → **maita**.',
        '**-a** ile biten iki heceli kelimeler için pratik kural: ilk ünlü **o** ya da **u** ise a düşer (*koira* → *koiria*); değilse **o** olur (*kissa* → *kissoja*). **-ä** sadece düşer (*metsä* → *metsiä*). -i ile biten yeni kelimeler **-eja** alır (*banaani* → *banaaneja*).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Partitive plural'], tr: ['Temel hâl', 'Çoğul partitif'] },
      rows: [['talo', 'taloja'], ['kissa', 'kissoja'], ['koira', 'koiria'], ['metsä', 'metsiä'], ['huone', 'huoneita'], ['maa', 'maita'], ['banaani', 'banaaneja'], ['lapsi', 'lapsia']]
    },
    examples: [
      ['Kaupassa on tuoreita mansikoita.', 'There are fresh strawberries in the shop.', 'Markette taze çilek var.'],
      ['Pidätkö koirista?', 'Do you like dogs?', 'Köpekleri sever misin?'],
      ['Minulla ei ole lapsia.', 'I don\'t have children.', 'Çocuğum yok.']
    ],
    quiz: [
      { fi: 'Pöydällä on {kirjoja}.', base: 'kirja', en: 'There are books on the table.', tr: 'Masada kitaplar var.' },
      { fi: 'Syön joka päivä {omenoita}.', base: 'omena', en: 'I eat apples every day.', tr: 'Her gün elma yerim.' },
      { fi: 'Meillä ei ole {lapsia}.', base: 'lapsi', en: 'We don\'t have children.', tr: 'Çocuğumuz yok.' },
      { fi: 'Puistossa on {koiria}.', base: 'koira', en: 'There are dogs in the park.', tr: 'Parkta köpekler var.' },
      { fi: 'Kaupassa on {banaaneja}.', base: 'banaani', en: 'There are bananas in the shop.', tr: 'Markette muz var.' },
      { fi: 'Täällä on paljon {puita}.', base: 'puu', en: 'There are lots of trees here.', tr: 'Burada çok ağaç var.' },
      { fi: 'Puutarhassa on paljon {kukkia}.', base: 'kukka', en: 'There are lots of flowers in the garden.', tr: 'Bahçede bir sürü çiçek var.' },
      { fi: 'Minulla on hyviä {ystäviä}.', base: 'ystävä', en: 'I have good friends.', tr: 'İyi arkadaşlarım var.' },
      { fi: 'Kaupassa ei ole {tomaatteja}.', base: 'tomaatti', en: 'There are no tomatoes in the shop.', tr: 'Markette domates yok.' },
      { fi: 'Taivaalla on {pilviä}.', base: 'pilvi', en: 'There are clouds in the sky.', tr: 'Gökyüzünde bulutlar var.' }
    ]
  },
  {
    id: 'past-tense', lv: 2, icon: 'history',
    title: { en: 'Past tense: -i-', tr: 'Geçmiş zaman: -i-' },
    summary: { en: 'puhun → puhuin, olen → olin.', tr: 'puhun → puhuin, olen → olin.' },
    body: {
      en: [
        'The simple past adds **-i-** before the personal ending: *puhun* → **puhuin**, *puhuit, puhui, puhuimme, puhuitte, puhuivat*. The *hän* form has no ending: *hän puhui*.',
        'The i changes the stem a little: **e** drops (*tulen* → *tulin*), long vowels shorten (*saan* → *sain*, *syön* → *söin*, *juon* → *join*). In 2-syllable verbs **a** drops if the first vowel is o/u (*ostan* → *ostin*), otherwise it becomes **o** (*annan* → *annoin*).',
        'Types 4 and 5 get **-si-**: *haluan* → **halusin**, *tarvitsen* → *tarvitsin*. Some -tää verbs too: *tiedän* → *tiesin*, *ymmärrän* → *ymmärsin*.'
      ],
      tr: [
        'Basit geçmiş zaman (Türkçedeki *-di*) kişi ekinden önce **-i-** ekler: *puhun* → **puhuin**, *puhuit, puhui, puhuimme, puhuitte, puhuivat*. *hän* biçiminde kişi eki yoktur: *hän puhui*.',
        'Bu i gövdeyi biraz değiştirir: **e** düşer (*tulen* → *tulin*), uzun ünlüler kısalır (*saan* → *sain*, *syön* → *söin*, *juon* → *join*). İki heceli fiillerde ilk ünlü o/u ise **a** düşer (*ostan* → *ostin*), değilse **o** olur (*annan* → *annoin*).',
        '4. ve 5. tip fiiller **-si-** alır: *haluan* → **halusin**, *tarvitsen* → *tarvitsin*. Bazı -tää fiilleri de öyle: *tiedän* → *tiesin*, *ymmärrän* → *ymmärsin*.'
      ]
    },
    table: {
      head: { en: ['Infinitive', 'Present', 'Past'], tr: ['Mastar', 'Şimdiki', 'Geçmiş'] },
      rows: [['puhua', 'puhun', 'puhuin'], ['ostaa', 'ostan', 'ostin'], ['antaa', 'annan', 'annoin'], ['syödä', 'syön', 'söin'], ['tulla', 'tulen', 'tulin'], ['haluta', 'haluan', 'halusin'], ['tietää', 'tiedän', 'tiesin'], ['olla', 'olen', 'olin']]
    },
    examples: [
      ['Eilen satoi koko päivän.', 'Yesterday it rained all day.', 'Dün bütün gün yağmur yağdı.'],
      ['Asuin ennen Ankarassa.', 'I used to live in Ankara.', 'Eskiden Ankara\'da yaşıyordum.'],
      ['Mitä teit viikonloppuna?', 'What did you do at the weekend?', 'Hafta sonu ne yaptın?']
    ],
    quiz: [
      { fi: 'Eilen {puhuin} opettajan kanssa.', base: 'puhua', en: 'Yesterday I talked with the teacher.', tr: 'Dün öğretmenle konuştum.' },
      { fi: 'Hän {joi} kahvia aamulla.', base: 'juoda', en: 'He drank coffee in the morning.', tr: 'Sabah kahve içti.' },
      { fi: 'Me {olimme} Lapissa viime viikolla.', base: 'olla', en: 'We were in Lapland last week.', tr: 'Geçen hafta Laponya\'daydık.' },
      { fi: 'He {söivät} pizzaa.', base: 'syödä', en: 'They ate pizza.', tr: 'Pizza yediler.' },
      { fi: 'Sinä {tulit} myöhään.', base: 'tulla', en: 'You came late.', tr: 'Geç geldin.' },
      { fi: 'Minä {halusin} uuden puhelimen.', base: 'haluta', en: 'I wanted a new phone.', tr: 'Yeni bir telefon istedim.' },
      { fi: 'Ennen minä {asuin} Turussa.', base: 'asua', en: 'I used to live in Turku.', tr: 'Eskiden Turku\'da oturuyordum.' },
      { fi: 'Eilen me {menimme} elokuviin.', base: 'mennä', en: 'Yesterday we went to the cinema.', tr: 'Dün sinemaya gittik.' },
      { fi: 'Hän {osti} uuden auton viime viikolla.', base: 'ostaa', en: 'He bought a new car last week.', tr: 'Geçen hafta yeni bir araba aldı.' },
      { fi: 'Te {teitte} eilen hyvää työtä.', base: 'tehdä', en: 'You did good work yesterday.', tr: 'Dün iyi iş çıkardınız.' }
    ]
  },
  {
    id: 'past-negative', lv: 2, icon: 'circle-x',
    title: { en: 'Past negative: en puhunut', tr: 'Geçmişte olumsuz: en puhunut' },
    summary: { en: 'ei + -nut/-nyt (plural -neet).', tr: 'ei + -nut/-nyt (çoğulda -neet).' },
    body: {
      en: [
        'The past negative is **en, et, ei…** + the past participle: **-nut/-nyt** in the singular, **-neet** in the plural: *en puhunut*, *emme puhuneet*.',
        'Form the participle from the infinitive: *puhua* → *puhunut*, *syödä* → *syönyt*, *haluta* → *halunnut*. In type 3 the **n** copies the consonant before it: *tulla* → **tullut**, *nousta* → **noussut**, *mennä* → *mennyt*.',
        'The same participle is used in the perfect tense (*olen puhunut*), so it pays off twice!'
      ],
      tr: [
        'Geçmişte olumsuzluk **en, et, ei…** + geçmiş ortaç ile yapılır: tekilde **-nut/-nyt**, çoğulda **-neet**: *en puhunut* (konuşmadım), *emme puhuneet* (konuşmadık).',
        'Ortaç mastardan yapılır: *puhua* → *puhunut*, *syödä* → *syönyt*, *haluta* → *halunnut*. 3. tipte **n**, önündeki ünsüze benzer: *tulla* → **tullut**, *nousta* → **noussut**, *mennä* → *mennyt*.',
        'Aynı ortaç -miş\'li geçmişe benzeyen perfekt zamanda da kullanılır (*olen puhunut*), yani bir kez öğren, iki kez kullan!'
      ]
    },
    table: {
      head: { en: ['Infinitive', 'Singular', 'Plural'], tr: ['Mastar', 'Tekil', 'Çoğul'] },
      rows: [['puhua', 'en puhunut', 'emme puhuneet'], ['syödä', 'en syönyt', 'emme syöneet'], ['tulla', 'en tullut', 'emme tulleet'], ['mennä', 'en mennyt', 'emme menneet'], ['nousta', 'en noussut', 'emme nousseet'], ['haluta', 'en halunnut', 'emme halunneet'], ['olla', 'en ollut', 'emme olleet']]
    },
    examples: [
      ['En nukkunut hyvin.', 'I didn\'t sleep well.', 'İyi uyumadım.'],
      ['Hän ei ollut töissä.', 'She wasn\'t at work.', 'İşte değildi.'],
      ['Emme menneet ulos, koska satoi.', 'We didn\'t go out because it was raining.', 'Yağmur yağdığı için dışarı çıkmadık.']
    ],
    quiz: [
      { fi: 'En {nähnyt} sinua eilen.', base: 'nähdä', en: 'I didn\'t see you yesterday.', tr: 'Dün seni görmedim.' },
      { fi: 'Hän ei {tullut} juhliin.', base: 'tulla', en: 'He didn\'t come to the party.', tr: 'Partiye gelmedi.' },
      { fi: 'Emme {ostaneet} mitään.', base: 'ostaa', en: 'We didn\'t buy anything.', tr: 'Hiçbir şey almadık.' },
      { fi: 'Et {ollut} kotona.', base: 'olla', en: 'You weren\'t at home.', tr: 'Evde değildin.' },
      { fi: 'He eivät {syöneet} aamupalaa.', base: 'syödä', en: 'They didn\'t eat breakfast.', tr: 'Kahvaltı yapmadılar.' },
      { fi: 'Minä en {ymmärtänyt} kysymystä.', base: 'ymmärtää', en: 'I didn\'t understand the question.', tr: 'Soruyu anlamadım.' },
      { fi: 'Eilen en {käynyt} kaupassa.', base: 'käydä', en: 'I didn\'t go to the shop yesterday.', tr: 'Dün markete gitmedim.' },
      { fi: 'Satoi, joten emme {menneet} ulos.', base: 'mennä', en: 'It was raining, so we didn\'t go out.', tr: 'Yağmur yağıyordu, o yüzden dışarı çıkmadık.' },
      { fi: 'Hän ei {puhunut} eilen mitään.', base: 'puhua', en: 'He didn\'t say anything yesterday.', tr: 'Dün hiçbir şey konuşmadı.' },
      { fi: 'Ette {tehneet} läksyjä viime viikolla.', base: 'tehdä', en: 'You didn\'t do your homework last week.', tr: 'Geçen hafta ödevlerinizi yapmadınız.' }
    ]
  },
  {
    id: 'object-case', lv: 2, icon: 'target',
    title: { en: 'The object: auton or autoa?', tr: 'Nesne: auton mu, autoa mı?' },
    summary: { en: 'Whole and finished → -n; partial or ongoing → partitive.', tr: 'Bütün ve bitmiş → -n; kısmi ya da süren → partitif.' },
    body: {
      en: [
        'A Finnish object is either **total** or **partitive**. Total (ending **-n** in the singular, **-t** in the plural) means the whole thing and a finished result: *Ostin auton* (I bought a car), *Söin omenat* (I ate the apples).',
        'Partitive means part of it, an ongoing action, or a negative sentence: *Luen kirjaa* (I\'m reading a book), *En ostanut autoa*.',
        'The total object has **no -n** in commands, passive and "must" sentences: *Osta auto!*, *Minun täytyy ostaa auto*. Personal pronouns take **-t**: *minut, sinut, hänet, meidät, teidät, heidät*.'
      ],
      tr: [
        'Fincede nesne ya **tam** ya da **partitif**tir. Tam nesne (tekilde **-n**, çoğulda **-t**) şeyin bütününü ve bitmiş bir sonucu gösterir: *Ostin auton* (Arabayı aldım), *Söin omenat* (Elmaları yedim). Türkçedeki belirtme eki *-ı/-i* ile karşılaştır.',
        'Partitif ise bir kısmı, devam eden bir eylemi ya da olumsuz bir cümleyi gösterir: *Luen kirjaa* (Kitap okuyorum, okumaya devam ediyorum), *En ostanut autoa* (Araba almadım).',
        'Emir, edilgen ve "zorunda olmak" cümlelerinde tam nesne **-n almaz**: *Osta auto!*, *Minun täytyy ostaa auto*. Kişi zamirleri **-t** alır: *minut, sinut, hänet, meidät, teidät, heidät*.'
      ]
    },
    table: {
      head: { en: ['Partitive', 'Total'], tr: ['Partitif', 'Tam nesne'] },
      rows: [['luen kirjaa', 'luen kirjan'], ['juon kahvia', 'juon kahvin'], ['en osta autoa', 'ostan auton'], ['syön omenoita', 'syön omenat'], ['odotan sinua', 'näen sinut'], ['rakennan taloa', 'rakennan talon']]
    },
    examples: [
      ['Kirjoitin kirjeen.', 'I wrote a letter (it\'s done).', 'Mektubu yazdım (bitti).'],
      ['Kirjoitin kirjettä koko illan.', 'I was writing a letter all evening.', 'Bütün akşam mektup yazdım (bitmedi).'],
      ['Haen sinut asemalta.', 'I\'ll pick you up from the station.', 'Seni istasyondan alırım.']
    ],
    quiz: [
      { fi: 'Ostin uuden {auton}.', base: 'auto', en: 'I bought a new car.', tr: 'Yeni bir araba aldım.' },
      { fi: 'Luen {kirjaa} juuri nyt.', base: 'kirja', en: 'I\'m reading a book right now.', tr: 'Şu anda kitap okuyorum.' },
      { fi: 'En löydä {avainta}.', base: 'avain', en: 'I can\'t find the key.', tr: 'Anahtarı bulamıyorum.' },
      { fi: 'Söin kaikki {omenat}.', base: 'omena', en: 'I ate all the apples.', tr: 'Bütün elmaları yedim.' },
      { fi: 'Näin {sinut} kaupassa.', base: 'sinä', en: 'I saw you in the shop.', tr: 'Seni markette gördüm.' },
      { fi: 'Avaa {ikkuna}, kiitos!', base: 'ikkuna', en: 'Open the window, please!', tr: 'Pencereyi aç, lütfen!' },
      { fi: 'Söin koko {omenan}.', base: 'omena', en: 'I ate the whole apple.', tr: 'Elmanın hepsini yedim.' },
      { fi: 'En osta {autoa}.', base: 'auto', en: 'I won\'t buy a car.', tr: 'Araba almayacağım.' },
      { fi: 'Sulje {ovi}, kiitos!', base: 'ovi', en: 'Close the door, please!', tr: 'Kapıyı kapat, lütfen!' },
      { fi: 'Kutsuin {heidät} juhliin.', base: 'he', en: 'I invited them to the party.', tr: 'Onları partiye davet ettim.' }
    ]
  },
  {
    id: 'plural-cases', lv: 2, icon: 'users',
    title: { en: 'Plural with cases: -i-', tr: 'Hâl ekleriyle çoğul: -i-' },
    summary: { en: 'taloissa, kaupoista, lasten…', tr: 'taloissa, kaupoista, lasten…' },
    body: {
      en: [
        'In the plural, the cases use the marker **-i-** instead of -t: *talo* → *talo-i-ssa* = **taloissa** (in the houses).',
        'Easy trick: take the partitive plural and drop the last **-a/-ja/-ta**: *taloja* → *taloi-*, *kauppoja* → *kaupoi-*, *huoneita* → *huonei-*. Then add the ending: *taloissa, kaupoista, huoneille*.',
        'Two irregular endings: genitive plural **-en / -den / -jen** (*talojen, huoneiden, lasten*) and illative plural **-in / -hin / -siin** (*taloihin, maihin, huoneisiin*).'
      ],
      tr: [
        'Çoğulda hâl ekleri -t yerine **-i-** işaretini kullanır: *talo* → *talo-i-ssa* = **taloissa** (evlerde). Türkçedeki *ev-ler-de* gibi, önce çoğul sonra hâl eki.',
        'Kolay yol: çoğul partitifi al ve sondaki **-a/-ja/-ta** kısmını at: *taloja* → *taloi-*, *kauppoja* → *kaupoi-*, *huoneita* → *huonei-*. Sonra eki ekle: *taloissa, kaupoista, huoneille*.',
        'İki düzensiz ek var: çoğul genitif **-en / -den / -jen** (*talojen, huoneiden, lasten*) ve çoğul illatif **-in / -hin / -siin** (*taloihin, maihin, huoneisiin*).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Plural stem', 'In (plural)'], tr: ['Temel hâl', 'Çoğul gövde', 'İçinde (çoğul)'] },
      rows: [['talo', 'taloi-', 'taloissa'], ['kissa', 'kissoi-', 'kissoissa'], ['koira', 'koiri-', 'koirissa'], ['metsä', 'metsi-', 'metsissä'], ['huone', 'huonei-', 'huoneissa'], ['maa', 'mai-', 'maissa'], ['kauppa', 'kaupoi-', 'kaupoissa']]
    },
    examples: [
      ['Asuimme monissa maissa.', 'We lived in many countries.', 'Birçok ülkede yaşadık.'],
      ['Lasten huone on yläkerrassa.', 'The children\'s room is upstairs.', 'Çocukların odası üst katta.'],
      ['Pidän vanhoista elokuvista.', 'I like old films.', 'Eski filmleri severim.']
    ],
    quiz: [
      { fi: 'Lapset leikkivät {puistoissa}.', base: 'puisto', en: 'Children play in the parks.', tr: 'Çocuklar parklarda oynar.' },
      { fi: 'Kävin monissa {kaupoissa}.', base: 'kauppa', en: 'I went to many shops.', tr: 'Birçok dükkâna uğradım.' },
      { fi: 'Pidän {koirista}.', base: 'koira', en: 'I like dogs.', tr: 'Köpekleri severim.' },
      { fi: 'Annan ruokaa {linnuille}.', base: 'lintu', en: 'I give food to the birds.', tr: 'Kuşlara yem veriyorum.' },
      { fi: '{Lasten} huone on siisti.', base: 'lapsi', en: 'The children\'s room is tidy.', tr: 'Çocukların odası düzenli.' },
      { fi: 'Kerron {lapsille} tarinan.', base: 'lapsi', en: 'I tell the children a story.', tr: 'Çocuklara bir hikâye anlatıyorum.' },
      { fi: 'Kaikkien {talojen} katot ovat punaisia.', base: 'talo', en: 'The roofs of all the houses are red.', tr: 'Bütün evlerin çatıları kırmızı.' },
      { fi: 'Opettaja puhuu kaikille {oppilaille}.', base: 'oppilas', en: 'The teacher is talking to all the pupils.', tr: 'Öğretmen bütün öğrencilerle konuşuyor.' },
      { fi: 'Monissa {järvissä} on kaloja.', base: 'järvi', en: 'There are fish in many lakes.', tr: 'Birçok gölde balık var.' },
      { fi: 'Sain lahjoja monilta {ystäviltä}.', base: 'ystävä', en: 'I got presents from many friends.', tr: 'Birçok arkadaşımdan hediye aldım.' }
    ]
  },
  {
    id: 'comparative', lv: 2, icon: 'trending-up',
    title: { en: 'Bigger, better: -mpi', tr: 'Daha büyük, daha iyi: -mpi' },
    summary: { en: 'iso → isompi, hyvä → parempi.', tr: 'iso → isompi, hyvä → parempi.' },
    body: {
      en: [
        'Add **-mpi** to the adjective stem: *iso* → **isompi**, *nopea* → **nopeampi**, *kallis* (*kalliin*) → **kalliimpi**.',
        'In 2-syllable words, final **-a/-ä** becomes **e**: *vanha* → **vanhempi**, *halpa* → **halvempi**, *pitkä* → **pidempi**. Irregular: *hyvä* → **parempi**.',
        '"Than" is **kuin**: *Juna on nopeampi kuin bussi*. You can also put the compared thing in the partitive, before the adjective: *bussia nopeampi*, *minua vanhempi*.'
      ],
      tr: [
        'Sıfat gövdesine **-mpi** eklenir; Türkçedeki *daha* gibi: *iso* → **isompi** (daha büyük), *nopea* → **nopeampi**, *kallis* (*kalliin*) → **kalliimpi**.',
        'İki heceli kelimelerde sondaki **-a/-ä**, **e** olur: *vanha* → **vanhempi**, *halpa* → **halvempi**, *pitkä* → **pidempi**. Düzensiz: *hyvä* → **parempi**.',
        '"-den daha" için **kuin** kullanılır: *Juna on nopeampi kuin bussi* (Tren otobüsten daha hızlı). Türkçedeki *-den* gibi bir hâl eki de kullanılabilir; bu durumda karşılaştırılan şey partitif olur ve sıfattan önce gelir: *minua vanhempi* = benden büyük.'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Comparative'], tr: ['Temel hâl', 'Karşılaştırma'] },
      rows: [['iso', 'isompi'], ['pieni', 'pienempi'], ['vanha', 'vanhempi'], ['halpa', 'halvempi'], ['kallis', 'kalliimpi'], ['nopea', 'nopeampi'], ['pitkä', 'pidempi'], ['hyvä', 'parempi']]
    },
    examples: [
      ['Tänään on lämpimämpi kuin eilen.', 'Today is warmer than yesterday.', 'Bugün dünden daha sıcak.'],
      ['Siskoni on minua vanhempi.', 'My sister is older than me.', 'Ablam benden büyük.'],
      ['Onko teillä isompaa kokoa?', 'Do you have a bigger size?', 'Daha büyük bedeniniz var mı?']
    ],
    quiz: [
      { fi: 'Juna on {nopeampi} kuin bussi.', base: 'nopea', en: 'The train is faster than the bus.', tr: 'Tren otobüsten daha hızlı.' },
      { fi: 'Tämä takki on {halvempi}.', base: 'halpa', en: 'This coat is cheaper.', tr: 'Bu mont daha ucuz.' },
      { fi: 'Veljeni on {vanhempi} kuin minä.', base: 'vanha', en: 'My brother is older than me.', tr: 'Ağabeyim benden büyük.' },
      { fi: 'Sää on tänään {parempi} kuin eilen.', base: 'hyvä', en: 'The weather is better today than yesterday.', tr: 'Hava bugün dünden daha iyi.' },
      { fi: 'Kesä on {lämpimämpi} kuin talvi.', base: 'lämmin', en: 'Summer is warmer than winter.', tr: 'Yaz kıştan daha sıcak.' },
      { fi: 'Kissa on {pienempi} kuin koira.', base: 'pieni', en: 'The cat is smaller than the dog.', tr: 'Kedi köpekten daha küçük.' },
      { fi: 'Turku on {vanhempi} kuin Helsinki.', base: 'vanha', en: 'Turku is older than Helsinki.', tr: 'Turku, Helsinki\'den daha eski.' },
      { fi: 'Lentolippu on {kalliimpi} kuin junalippu.', base: 'kallis', en: 'A plane ticket is more expensive than a train ticket.', tr: 'Uçak bileti tren biletinden daha pahalı.' },
      { fi: 'Tämä tie on {lyhyempi} kuin se toinen.', base: 'lyhyt', en: 'This road is shorter than the other one.', tr: 'Bu yol öbüründen daha kısa.' },
      { fi: 'Tämä tehtävä on {helpompi} kuin edellinen.', base: 'helppo', en: 'This exercise is easier than the previous one.', tr: 'Bu alıştırma bir öncekinden daha kolay.' }
    ]
  },
  {
    id: 'superlative', lv: 2, icon: 'trophy',
    title: { en: 'The biggest, the best: -in', tr: 'En büyük, en iyi: -in' },
    summary: { en: 'iso → isoin, hyvä → paras.', tr: 'iso → isoin, hyvä → paras.' },
    body: {
      en: [
        'Add **-in** to the stem. Final **-o, -u, -y, -ö** stay (*iso* → **isoin**), while **-a, -ä, -e, -i** drop (*vanha* → **vanhin**, *pieni* → **pienin**, *nopea* → **nopein**).',
        'Irregular ones to know: *hyvä* → **paras**, *pitkä* → **pisin**, *kaunis* → **kaunein**.',
        'In other cases the stem is **-imma-/-impa-**: *isoimmassa kaupungissa*, *Ostan halvimman lipun*. For extra emphasis say **kaikkein**: *kaikkein paras*.'
      ],
      tr: [
        'Gövdeye **-in** eklenir; Türkçedeki *en* gibi. Sondaki **-o, -u, -y, -ö** kalır (*iso* → **isoin**), **-a, -ä, -e, -i** düşer (*vanha* → **vanhin**, *pieni* → **pienin**, *nopea* → **nopein**).',
        'Bilinmesi gereken düzensizler: *hyvä* → **paras**, *pitkä* → **pisin**, *kaunis* → **kaunein**.',
        'Diğer hâllerde gövde **-imma-/-impa-** olur: *isoimmassa kaupungissa* (en büyük şehirde), *Ostan halvimman lipun* (En ucuz bileti alıyorum). Daha da vurgulamak için **kaikkein**: *kaikkein paras* (hepsinin en iyisi).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'Superlative'], tr: ['Temel hâl', 'En üstünlük'] },
      rows: [['iso', 'isoin'], ['pieni', 'pienin'], ['vanha', 'vanhin'], ['halpa', 'halvin'], ['nopea', 'nopein'], ['kaunis', 'kaunein'], ['pitkä', 'pisin'], ['hyvä', 'paras']]
    },
    examples: [
      ['Tämä on paras kahvila.', 'This is the best café.', 'Burası en iyi kafe.'],
      ['Kesäkuun päivät ovat vuoden pisimmät.', 'The days in June are the longest of the year.', 'Haziran günleri yılın en uzun günleridir.'],
      ['Kuka on luokan nuorin?', 'Who is the youngest in the class?', 'Sınıfın en küçüğü kim?']
    ],
    quiz: [
      { fi: 'Tämä on kaupungin {vanhin} talo.', base: 'vanha', en: 'This is the oldest house in town.', tr: 'Bu, şehrin en eski evi.' },
      { fi: 'Hän on luokan {paras} oppilas.', base: 'hyvä', en: 'She is the best pupil in the class.', tr: 'Sınıfın en iyi öğrencisi o.' },
      { fi: 'Mikä on Suomen {pisin} joki?', base: 'pitkä', en: 'What is the longest river in Finland?', tr: 'Finlandiya\'nın en uzun nehri hangisi?' },
      { fi: 'Hän on perheen {nuorin} lapsi.', base: 'nuori', en: 'He is the youngest child in the family.', tr: 'O, ailenin en küçük çocuğu.' },
      { fi: 'Tämä on {kaunein} paikka.', base: 'kaunis', en: 'This is the most beautiful place.', tr: 'Burası en güzel yer.' },
      { fi: 'Ostan {halvimman} lipun.', base: 'halpa', en: 'I\'ll buy the cheapest ticket.', tr: 'En ucuz bileti alacağım.' },
      { fi: 'Tämä on kaupungin {korkein} rakennus.', base: 'korkea', en: 'This is the tallest building in the city.', tr: 'Bu, şehrin en yüksek binası.' },
      { fi: 'Mikä on maailman {suurin} maa?', base: 'suuri', en: 'What is the largest country in the world?', tr: 'Dünyanın en büyük ülkesi hangisi?' },
      { fi: 'Tammikuu on vuoden {kylmin} kuukausi.', base: 'kylmä', en: 'January is the coldest month of the year.', tr: 'Ocak, yılın en soğuk ayıdır.' },
      { fi: 'Hän on joukkueen {nopein} pelaaja.', base: 'nopea', en: 'She is the fastest player on the team.', tr: 'Takımın en hızlı oyuncusu o.' }
    ]
  },
  {
    id: 'possessive-suffix', lv: 2, icon: 'user',
    title: { en: 'My, your: -ni, -si…', tr: 'Benim, senin: -ni, -si…' },
    summary: { en: 'kirjani = my book, kotisi = your home.', tr: 'kirjani = kitabım, kotisi = evin.' },
    body: {
      en: [
        'Finnish shows the owner with a suffix: **-ni** (my), **-si** (your), **-nsa/-nsä** (his/her/their), **-mme** (our), **-nne** (your, plural).',
        'With *minun, sinun, meidän, teidän* the pronoun is optional: *(minun) kirjani*. With *hän* it is needed: *hänen kirjansa*. *Kirjansa* alone means "his/her own book".',
        'The suffix goes **after** the case ending, and a final -n or -t drops: *talossani* (in my house), *kirjani* (my book / my books). In everyday speech people often just say *mun kirja*.'
      ],
      tr: [
        'Türkçe konuşanlar için müjde: Fincede de iyelik ekleri var! **-ni** (-ım), **-si** (-ın), **-nsa/-nsä** (-ı, onun/onların), **-mme** (-ımız), **-nne** (-ınız).',
        '*minun, sinun, meidän, teidän* ile zamir isteğe bağlıdır: *(minun) kirjani* = (benim) kitabım. *hän* ile zamir gerekir: *hänen kirjansa*. Yalnızca *kirjansa* "kendi kitabı" demektir.',
        'Ek, Türkçenin tersine, hâl ekinden **sonra** gelir: *talossani* (evimde; kelimesi kelimesine "evde-m"). Sondaki -n ya da -t düşer: *kirjani* (kitabım / kitaplarım). Günlük konuşmada sık sık *mun kirja* denir.'
      ]
    },
    table: {
      head: { en: ['Owner', 'Suffix', 'Example'], tr: ['Sahip', 'Ek', 'Örnek'] },
      rows: [['minun', '-ni', 'kirjani'], ['sinun', '-si', 'kirjasi'], ['hänen', '-nsa/-nsä', 'kirjansa'], ['meidän', '-mme', 'kirjamme'], ['teidän', '-nne', 'kirjanne'], ['heidän', '-nsa/-nsä', 'kirjansa']]
    },
    examples: [
      ['Mikä sinun nimesi on?', 'What is your name?', 'Adın ne?'],
      ['Asun perheeni kanssa.', 'I live with my family.', 'Ailemle yaşıyorum.'],
      ['Unohdin puhelimeni kotiin.', 'I forgot my phone at home.', 'Telefonumu evde unuttum.']
    ],
    quiz: [
      { fi: 'Missä on minun {avaimeni}?', base: 'avain', en: 'Where is my key?', tr: 'Anahtarım nerede?' },
      { fi: 'Mikä {nimesi} on?', base: 'nimi', en: 'What is your name?', tr: 'Adın ne?' },
      { fi: 'Meidän {kotimme} on lähellä.', base: 'koti', en: 'Our home is near.', tr: 'Evimiz yakında.' },
      { fi: 'Onko tämä teidän {autonne}?', base: 'auto', en: 'Is this your car?', tr: 'Bu sizin arabanız mı?' },
      { fi: 'Hänen {äitinsä} on opettaja.', base: 'äiti', en: 'His mother is a teacher.', tr: 'Annesi öğretmen.' },
      { fi: 'Olen {huoneessani}.', base: 'huone', en: 'I\'m in my room.', tr: 'Odamdayım.' },
      { fi: 'Onko tämä sinun {laukkusi}?', base: 'laukku', en: 'Is this your bag?', tr: 'Bu senin çantan mı?' },
      { fi: 'Heidän {talonsa} on iso.', base: 'talo', en: 'Their house is big.', tr: 'Onların evi büyük.' },
      { fi: 'Meidän {opettajamme} on mukava.', base: 'opettaja', en: 'Our teacher is nice.', tr: 'Öğretmenimiz çok iyi.' },
      { fi: 'Soitan illalla {veljelleni}.', base: 'veli', en: 'I\'ll call my brother in the evening.', tr: 'Akşam kardeşimi arayacağım.' }
    ]
  },
  {
    id: 'imperative', lv: 2, icon: 'megaphone',
    title: { en: 'Commands: Tule! Tulkaa!', tr: 'Emir: Tule! Tulkaa!' },
    summary: { en: 'Telling one or more people to do something.', tr: 'Bir ya da birkaç kişiye bir şey yaptırmak.' },
    body: {
      en: [
        'To one person (*sinä*): take the *minä* form and drop **-n**: *tulen* → **Tule!**, *puhun* → **Puhu!**, *avaan* → **Avaa!**',
        'To several people, or politely: add **-kaa/-kää** to the infinitive stem: **Tulkaa!**, **Puhukaa!**, **Syökää!**, **Olkaa hyvä!**',
        'Don\'t: **Älä** + sinä form (*Älä tule!*), **Älkää** + **-ko/-kö** (*Älkää tulko!*). For polite requests Finns often prefer a question: *Voisitko auttaa?*'
      ],
      tr: [
        'Tek kişiye (*sinä*): *minä* biçimini al, **-n** harfini at: *tulen* → **Tule!** (Gel!), *puhun* → **Puhu!**, *avaan* → **Avaa!**',
        'Birden fazla kişiye ya da kibarca: mastar gövdesine **-kaa/-kää** ekle, Türkçedeki *-in/-iniz* gibi: **Tulkaa!** (Gelin!), **Puhukaa!**, **Syökää!**, **Olkaa hyvä!** (Buyurun!)',
        'Olumsuz: **Älä** + sinä biçimi (*Älä tule!* = Gelme!), **Älkää** + **-ko/-kö** (*Älkää tulko!* = Gelmeyin!). Kibar ricalarda Finler genelde soru kullanır: *Voisitko auttaa?* (Yardım edebilir misin?)'
      ]
    },
    table: {
      head: { en: ['Infinitive', 'sinä', 'te', 'Don\'t!'], tr: ['Mastar', 'sinä', 'te', 'Yapma!'] },
      rows: [['puhua', 'puhu', 'puhukaa', 'älä puhu'], ['tulla', 'tule', 'tulkaa', 'älä tule'], ['syödä', 'syö', 'syökää', 'älä syö'], ['mennä', 'mene', 'menkää', 'älä mene'], ['olla', 'ole', 'olkaa', 'älä ole'], ['tehdä', 'tee', 'tehkää', 'älä tee'], ['ottaa', 'ota', 'ottakaa', 'älä ota']]
    },
    examples: [
      ['Ole hyvä!', 'Here you are! / You\'re welcome!', 'Buyur! / Rica ederim!'],
      ['Älä huoli!', 'Don\'t worry!', 'Merak etme!'],
      ['Tulkaa sisään!', 'Come in! (to several people)', 'İçeri buyurun!']
    ],
    quiz: [
      { fi: '{Tule} tänne, Liisa!', base: 'tulla', en: 'Come here, Liisa!', tr: 'Buraya gel, Liisa!' },
      { fi: '{Istukaa}, olkaa hyvä.', base: 'istua', en: 'Please sit down.', tr: 'Oturun lütfen.' },
      { fi: 'Älä {unohda} avaimia!', base: 'unohtaa', en: 'Don\'t forget the keys!', tr: 'Anahtarları unutma!' },
      { fi: 'Matti, {syö} lisää!', base: 'syödä', en: 'Matti, eat some more!', tr: 'Matti, biraz daha ye!' },
      { fi: 'Älkää {puhuko} niin kovaa.', base: 'puhua', en: 'Don\'t talk so loudly.', tr: 'O kadar yüksek sesle konuşmayın.' },
      { fi: 'Pekka, {avaa} ikkuna, kiitos.', base: 'avata', en: 'Pekka, open the window, please.', tr: 'Pekka, pencereyi aç lütfen.' },
      { fi: 'Liisa, {odota} hetki!', base: 'odottaa', en: 'Liisa, wait a moment!', tr: 'Liisa, bir dakika bekle!' },
      { fi: 'Lapset, {tulkaa} syömään!', base: 'tulla', en: 'Children, come and eat!', tr: 'Çocuklar, yemeğe gelin!' },
      { fi: 'Älä {mene} sinne!', base: 'mennä', en: 'Don\'t go there!', tr: 'Oraya gitme!' },
      { fi: '{Kirjoittakaa} nimenne tähän, olkaa hyvä.', base: 'kirjoittaa', en: 'Please write your names here.', tr: 'Lütfen adlarınızı buraya yazın.' }
    ]
  },
  {
    id: 'necessity-taytyy', lv: 2, icon: 'triangle-alert',
    title: { en: 'Must: minun täytyy', tr: 'Zorunluluk: minun täytyy' },
    summary: { en: 'Who must? Use the genitive.', tr: 'Kim zorunda? Genitif kullanılır.' },
    body: {
      en: [
        '"I must go" is **Minun täytyy mennä**. The person is in the **genitive** (*minun, sinun, Matin*) and *täytyy* never changes. **pitää** works the same way: *Minun pitää lähteä*.',
        '"Don\'t have to" uses *tarvita*: **Sinun ei tarvitse** tulla. "Must not" is different: **Täällä ei saa** tupakoida (Smoking is not allowed here).',
        'The object has no -n here: *Minun täytyy ostaa auto*.'
      ],
      tr: [
        '"Gitmeliyim" Fincede **Minun täytyy mennä** olur. Kişi **genitif**tir (*minun, sinun, Matin*) ve *täytyy* hiç değişmez. Türkçedeki *benim gitmem lazım* yapısına çok benzer! **pitää** de aynı şekilde kullanılır: *Minun pitää lähteä*.',
        '"Gerek yok" için *tarvita* kullanılır: **Sinun ei tarvitse** tulla (Gelmene gerek yok). "Yasak" farklıdır: **Täällä ei saa** tupakoida (Burada sigara içilmez).',
        'Bu yapıda nesne -n almaz: *Minun täytyy ostaa auto* (Araba almam lazım).'
      ]
    },
    table: {
      head: { en: ['Person', 'Must go'], tr: ['Kişi', 'Gitmesi lazım'] },
      rows: [['minä', 'minun täytyy mennä'], ['sinä', 'sinun täytyy mennä'], ['hän', 'hänen täytyy mennä'], ['me', 'meidän täytyy mennä'], ['te', 'teidän täytyy mennä'], ['he', 'heidän täytyy mennä']]
    },
    examples: [
      ['Minun täytyy herätä aikaisin.', 'I have to wake up early.', 'Erken kalkmam lazım.'],
      ['Sinun ei tarvitse maksaa.', 'You don\'t have to pay.', 'Ödemene gerek yok.'],
      ['Täällä ei saa pysäköidä.', 'Parking is not allowed here.', 'Buraya park etmek yasak.']
    ],
    quiz: [
      { fi: '{Minun} täytyy mennä nyt.', base: 'minä', en: 'I have to go now.', tr: 'Şimdi gitmem lazım.' },
      { fi: '{Sinun} täytyy levätä.', base: 'sinä', en: 'You must rest.', tr: 'Dinlenmen lazım.' },
      { fi: '{Meidän} pitää herätä aikaisin.', base: 'me', en: 'We have to get up early.', tr: 'Erken kalkmamız gerek.' },
      { fi: 'Sinun ei {tarvitse} maksaa.', base: 'tarvita', en: 'You don\'t have to pay.', tr: 'Ödemene gerek yok.' },
      { fi: '{Matin} täytyy tehdä läksyt.', base: 'Matti', en: 'Matti has to do his homework.', tr: 'Matti\'nin ödevlerini yapması lazım.' },
      { fi: '{Hänen} täytyy ostaa uusi puhelin.', base: 'hän', en: 'She has to buy a new phone.', tr: 'Yeni bir telefon alması lazım.' },
      { fi: '{Teidän} täytyy odottaa.', base: 'te', en: 'You have to wait.', tr: 'Beklemeniz gerekiyor.' },
      { fi: '{Heidän} pitää lähteä.', base: 'he', en: 'They have to leave.', tr: 'Gitmeleri lazım.' },
      { fi: '{Lasten} täytyy mennä nukkumaan.', base: 'lapsi', en: 'The children have to go to bed.', tr: 'Çocukların yatmaya gitmesi gerekiyor.' },
      { fi: '{Äidin} täytyy tehdä töitä huomenna.', base: 'äiti', en: 'Mum has to work tomorrow.', tr: 'Annemin yarın çalışması gerekiyor.' }
    ]
  },
  {
    id: 'essive-translative', lv: 2, icon: 'repeat-2',
    title: { en: 'As and into: -na, -ksi', tr: 'Olarak ve -e dönüşmek: -na, -ksi' },
    summary: { en: 'opettajana = as a teacher, suomeksi = in Finnish.', tr: 'opettajana = öğretmen olarak, suomeksi = Fince olarak.' },
    body: {
      en: [
        'The essive **-na/-nä** is a role or temporary state: *Työskentelen opettajana* (I work as a teacher), *lapsena* (as a child). It also marks days: *maanantaina* (on Monday).',
        'The translative **-ksi** is a change: *Hän tuli iloiseksi* (She became happy), *Sää muuttui kylmäksi*. It also gives languages: **suomeksi** (in Finnish), *englanniksi*.',
        'Both use the genitive stem: *iloinen* (*iloisen*) → *iloisena, iloiseksi*.'
      ],
      tr: [
        'Essif **-na/-nä** bir rol ya da geçici bir durumu gösterir; Türkçedeki *olarak* ya da *-ken* gibi: *Työskentelen opettajana* (Öğretmen olarak çalışıyorum), *lapsena* (çocukken). Günler için de kullanılır: *maanantaina* (pazartesi günü).',
        'Translatif **-ksi** bir değişimi gösterir: *Hän tuli iloiseksi* (Sevindi, "mutlu oldu"), *Sää muuttui kylmäksi* (Hava soğudu). Diller için de kullanılır, Türkçedeki *-ce* gibi: **suomeksi** (Fince), *englanniksi* (İngilizce).',
        'İkisi de genitif gövdeyi kullanır: *iloinen* (*iloisen*) → *iloisena, iloiseksi*.'
      ]
    },
    table: {
      head: { en: ['Basic form', 'As (-na)', 'Into (-ksi)'], tr: ['Temel hâl', 'Olarak (-na)', 'Dönüşüm (-ksi)'] },
      rows: [['opettaja', 'opettajana', 'opettajaksi'], ['lapsi', 'lapsena', 'lapseksi'], ['lääkäri', 'lääkärinä', 'lääkäriksi'], ['iloinen', 'iloisena', 'iloiseksi'], ['sairas', 'sairaana', 'sairaaksi'], ['kylmä', 'kylmänä', 'kylmäksi']]
    },
    examples: [
      ['Mitä tämä on suomeksi?', 'What is this in Finnish?', 'Bunun Fincesi ne?'],
      ['Lapsena asuin maalla.', 'As a child I lived in the countryside.', 'Çocukken köyde yaşıyordum.'],
      ['Hän haluaa tulla lääkäriksi.', 'She wants to become a doctor.', 'Doktor olmak istiyor.']
    ],
    quiz: [
      { fi: 'Työskentelen {opettajana}.', base: 'opettaja', en: 'I work as a teacher.', tr: 'Öğretmen olarak çalışıyorum.' },
      { fi: 'Mitä tämä on {suomeksi}?', base: 'suomi', en: 'What is this in Finnish?', tr: 'Bunun Fincesi ne?' },
      { fi: '{Lapsena} asuin Turussa.', base: 'lapsi', en: 'As a child I lived in Turku.', tr: 'Çocukken Turku\'da yaşıyordum.' },
      { fi: 'Hän opiskelee {lääkäriksi}.', base: 'lääkäri', en: 'He is studying to become a doctor.', tr: 'Doktor olmak için okuyor.' },
      { fi: 'Tapaamme {maanantaina}.', base: 'maanantai', en: 'We\'ll meet on Monday.', tr: 'Pazartesi buluşuyoruz.' },
      { fi: 'Sää muuttui {kylmäksi}.', base: 'kylmä', en: 'The weather turned cold.', tr: 'Hava soğudu.' },
      { fi: 'Hän työskentelee {kokkina}.', base: 'kokki', en: 'He works as a cook.', tr: 'Aşçı olarak çalışıyor.' },
      { fi: 'Mitä tämä on {englanniksi}?', base: 'englanti', en: 'What is this in English?', tr: 'Bu İngilizcede ne demek?' },
      { fi: 'Hän tuli {iloiseksi}.', base: 'iloinen', en: 'She became happy.', tr: 'Sevindi.' },
      { fi: '{Nuorena} hän asui Ruotsissa.', base: 'nuori', en: 'As a young man he lived in Sweden.', tr: 'Gençken İsveç\'te yaşadı.' }
    ]
  },
  {
    id: 'time-expressions', lv: 2, icon: 'clock',
    title: { en: 'When? Time expressions', tr: 'Ne zaman? Zaman ifadeleri' },
    summary: { en: 'maanantaina, tammikuussa, kesällä, kahdelta…', tr: 'maanantaina, tammikuussa, kesällä, kahdelta…' },
    body: {
      en: [
        'Each time word has its own case. Days: **-na** (*maanantaina*). Months: **-ssa** (*tammikuussa*). Seasons and parts of the day: **-lla** (*kesällä, syksyllä, aamulla, illalla*; note the stem change in *talvella* and *keväällä*).',
        'Clock times: *kello kolme* (three o\'clock); "at three" is often **kolmelta**. Duration needs no word for "for": *kaksi tuntia* (for two hours), *viikon* (for a week).',
        'Useful: *viikko sitten* (a week ago), *viikon päästä* (in a week), *joka päivä* (every day), *tällä viikolla* (this week), *viime vuonna* (last year), *ensi kuussa* (next month).'
      ],
      tr: [
        'Her zaman kelimesinin kendi hâli vardır. Günler: **-na** (*maanantaina* = pazartesi günü). Aylar: **-ssa** (*tammikuussa* = ocakta). Mevsimler ve günün bölümleri: **-lla** (*kesällä, syksyllä, aamulla, illalla*; *talvella* ve *keväällä* biçimlerindeki gövde değişimine dikkat).',
        'Saat: *kello kolme* (saat üç); "saat üçte" çoğu zaman **kolmelta** olur. Süre için "boyunca" gibi ayrı bir kelime gerekmez: *kaksi tuntia* (iki saat boyunca), *viikon* (bir hafta boyunca).',
        'İşe yarar ifadeler: *viikko sitten* (bir hafta önce), *viikon päästä* (bir hafta sonra), *joka päivä* (her gün), *tällä viikolla* (bu hafta), *viime vuonna* (geçen yıl), *ensi kuussa* (gelecek ay).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'When?'], tr: ['Temel hâl', 'Ne zaman?'] },
      rows: [['maanantai', 'maanantaina'], ['tammikuu', 'tammikuussa'], ['kesä', 'kesällä'], ['talvi', 'talvella'], ['aamu', 'aamulla'], ['ilta', 'illalla'], ['ensi viikko', 'ensi viikolla'], ['viime vuosi', 'viime vuonna']]
    },
    examples: [
      ['Nähdään perjantaina!', 'See you on Friday!', 'Cuma günü görüşürüz!'],
      ['Synnyin kesäkuussa.', 'I was born in June.', 'Haziranda doğdum.'],
      ['Olen asunut täällä kolme vuotta.', 'I\'ve lived here for three years.', 'Üç yıldır burada yaşıyorum.']
    ],
    quiz: [
      { fi: 'Tulen {maanantaina}.', base: 'maanantai', en: 'I\'ll come on Monday.', tr: 'Pazartesi geleceğim.' },
      { fi: 'Syntymäpäiväni on {toukokuussa}.', base: 'toukokuu', en: 'My birthday is in May.', tr: 'Doğum günüm mayısta.' },
      { fi: '{Talvella} on kylmä.', base: 'talvi', en: 'It\'s cold in winter.', tr: 'Kışın hava soğuk.' },
      { fi: 'Nähdään {illalla}!', base: 'ilta', en: 'See you in the evening!', tr: 'Akşam görüşürüz!' },
      { fi: 'Asuin Suomessa kaksi {vuotta}.', base: 'vuosi', en: 'I lived in Finland for two years.', tr: 'İki yıl Finlandiya\'da yaşadım.' },
      { fi: 'Juna lähtee {kahdelta}.', base: 'kaksi', en: 'The train leaves at two.', tr: 'Tren saat ikide kalkıyor.' },
      { fi: 'Lähden lomalle {heinäkuussa}.', base: 'heinäkuu', en: 'I\'m going on holiday in July.', tr: 'Temmuzda tatile çıkıyorum.' },
      { fi: '{Keväällä} kukat kukkivat.', base: 'kevät', en: 'In spring the flowers bloom.', tr: 'İlkbaharda çiçekler açar.' },
      { fi: 'Herään {aamulla} aikaisin.', base: 'aamu', en: 'I wake up early in the morning.', tr: 'Sabah erken uyanırım.' },
      { fi: 'Nähdään ensi {viikolla}!', base: 'viikko', en: 'See you next week!', tr: 'Gelecek hafta görüşürüz!' }
    ]
  },

  // ───────────────────────── Level 3 ─────────────────────────
  {
    id: 'consonant-gradation', lv: 3, icon: 'shuffle',
    title: { en: 'Consonant gradation', tr: 'Ünsüz değişimi' },
    summary: { en: 'kauppa → kaupassa, katu → kadulla.', tr: 'kauppa → kaupassa, katu → kadulla.' },
    body: {
      en: [
        'The consonants **k, p, t** in the last syllable often change: **kk → k, pp → p, tt → t, k → – (or v/j), p → v, t → d, nk → ng, mp → mm, lt → ll, nt → nn, rt → rr**.',
        'Rule of thumb: the **weak** form appears when the last syllable becomes closed, usually before **-n, -t, -ssa, -lla, -sta**: *kauppa* → *kaupan, kaupassa*. The illative and partitive keep the strong form: *kauppaan, kauppaa*.',
        'Verbs: type 1 is weak in *minä/sinä/me/te* (*luen*, but *hän lukee*). In types 3–4 and in nouns ending in **-e** it goes the **other way**: *tavata* → *tapaan*, *sade* → *sateen*.'
      ],
      tr: [
        'Son hecedeki **k, p, t** ünsüzleri sık sık değişir: **kk → k, pp → p, tt → t, k → – (ya da v/j), p → v, t → d, nk → ng, mp → mm, lt → ll, nt → nn, rt → rr**.',
        'Bu sana yabancı değil: Türkçede de *kitap → kitabı, ağaç → ağacı, renk → rengi* deriz. Fincede **zayıf** biçim, son hece kapandığında ortaya çıkar; genelde **-n, -t, -ssa, -lla, -sta** eklerinden önce: *kauppa* → *kaupan, kaupassa*. İllatif ve partitif güçlü biçimi korur: *kauppaan, kauppaa*.',
        'Fiillerde 1. tip *minä/sinä/me/te* biçimlerinde zayıflar (*luen*, ama *hän lukee*). 3–4. tiplerde ve **-e** ile biten isimlerde değişim **ters yönde** olur: *tavata* → *tapaan*, *sade* → *sateen*.'
      ]
    },
    table: {
      head: { en: ['Strong', 'Weak'], tr: ['Güçlü', 'Zayıf'] },
      rows: [['kauppa', 'kaupan'], ['tyttö', 'tytön'], ['katu', 'kadun'], ['pöytä', 'pöydän'], ['jalka', 'jalan'], ['kenkä', 'kengän'], ['ranta', 'rannan'], ['ilta', 'illan']]
    },
    examples: [
      ['Asun tällä kadulla.', 'I live on this street.', 'Bu sokakta oturuyorum.'],
      ['Ostin kengät kaupasta.', 'I bought the shoes at the shop.', 'Ayakkabıları mağazadan aldım.'],
      ['Tapaan hänet huomenna.', 'I\'ll meet him tomorrow.', 'Onunla yarın buluşacağım.']
    ],
    quiz: [
      { fi: 'Asun tämän {kadun} varrella.', base: 'katu', en: 'I live on this street.', tr: 'Bu caddenin üzerinde oturuyorum.' },
      { fi: 'Istumme {rannalla}.', base: 'ranta', en: 'We are sitting on the beach.', tr: 'Sahilde oturuyoruz.' },
      { fi: 'Minä {luen} kirjaa.', base: 'lukea', en: 'I\'m reading a book.', tr: 'Kitap okuyorum.' },
      { fi: 'Hän {tapaa} ystävänsä illalla.', base: 'tavata', en: 'She meets her friend in the evening.', tr: 'Akşam arkadaşıyla buluşuyor.' },
      { fi: 'Tämä on {tytön} pyörä.', base: 'tyttö', en: 'This is the girl\'s bike.', tr: 'Bu kızın bisikleti.' },
      { fi: 'Odotan sinua {kaupan} edessä.', base: 'kauppa', en: 'I\'ll wait for you in front of the shop.', tr: 'Seni marketin önünde bekliyorum.' },
      { fi: 'Hän istuu {pöydän} ääressä.', base: 'pöytä', en: 'He is sitting at the table.', tr: 'Masada oturuyor.' },
      { fi: 'Me {otamme} taksin.', base: 'ottaa', en: 'We\'ll take a taxi.', tr: 'Taksiye bineceğiz.' },
      { fi: '{Kengässä} on reikä.', base: 'kenkä', en: 'There is a hole in the shoe.', tr: 'Ayakkabıda bir delik var.' },
      { fi: 'Minä {pelkään} koiria.', base: 'pelätä', en: 'I\'m afraid of dogs.', tr: 'Köpeklerden korkarım.' }
    ]
  },
  {
    id: 'conditional', lv: 3, icon: 'cloud-sun',
    title: { en: 'Would: -isi-', tr: 'Şart ve dilek: -isi-' },
    summary: { en: 'Haluaisin… Voisitko…? Jos minulla olisi…', tr: 'Haluaisin… Voisitko…? Jos minulla olisi…' },
    body: {
      en: [
        'The conditional adds **-isi-** before the personal ending: *puhuisin, puhuisit, puhuisi, puhuisimme, puhuisitte, puhuisivat*. It uses the **strong** stem: *lukea* → *lukisin*.',
        'Stem changes: **e** and **i** drop (*tulla* → *tulisin*, *oppia* → *oppisin*), long vowels shorten (*saada* → *saisin*, *syödä* → *söisin*). Type 4: *haluta* → **haluaisin**; type 5: *tarvitsisin*. *olla* → **olisin**.',
        'Use it to be **polite** (*Haluaisin kahvin*, *Voisitko auttaa?*) and for **imagined** situations: *Jos minulla olisi aikaa, matkustaisin*. In such imagined situations the *jos* (if) clause takes the conditional too.'
      ],
      tr: [
        'Şart kipi kişi ekinden önce **-isi-** ekler: *puhuisin, puhuisit, puhuisi, puhuisimme, puhuisitte, puhuisivat*. **Güçlü** gövdeyi kullanır: *lukea* → *lukisin*.',
        'Gövde değişimleri: **e** ve **i** düşer (*tulla* → *tulisin*, *oppia* → *oppisin*), uzun ünlüler kısalır (*saada* → *saisin*, *syödä* → *söisin*). 4. tip: *haluta* → **haluaisin**; 5. tip: *tarvitsisin*. *olla* → **olisin**.',
        '**Kibar** olmak için (*Haluaisin kahvin* = Bir kahve rica ediyorum, *Voisitko auttaa?* = Yardım eder misin?) ve **hayalî** durumlar için kullanılır: *Jos minulla olisi aikaa, matkustaisin* (Vaktim olsa seyahat ederdim). Türkçedeki *-se* ve *-irdi* ikisi de bu tek kiple karşılanır.'
      ]
    },
    table: {
      head: { en: ['Infinitive', 'minä', 'hän'], tr: ['Mastar', 'minä', 'hän'] },
      rows: [['olla', 'olisin', 'olisi'], ['puhua', 'puhuisin', 'puhuisi'], ['tulla', 'tulisin', 'tulisi'], ['syödä', 'söisin', 'söisi'], ['haluta', 'haluaisin', 'haluaisi'], ['voida', 'voisin', 'voisi'], ['lukea', 'lukisin', 'lukisi']]
    },
    examples: [
      ['Haluaisin varata pöydän.', 'I\'d like to book a table.', 'Bir masa ayırtmak istiyorum.'],
      ['Mitä tekisit, jos voittaisit lotossa?', 'What would you do if you won the lottery?', 'Piyango çıksa ne yapardın?'],
      ['Olisi kiva nähdä taas.', 'It would be nice to see each other again.', 'Yine görüşsek güzel olur.']
    ],
    quiz: [
      { fi: '{Haluaisin} kupin teetä.', base: 'haluta', en: 'I\'d like a cup of tea.', tr: 'Bir fincan çay rica ediyorum.' },
      { fi: '{Voisitko} auttaa minua?', base: 'voida', en: 'Could you help me?', tr: 'Bana yardım edebilir misin?' },
      { fi: 'Jos minulla {olisi} rahaa, ostaisin talon.', base: 'olla', en: 'If I had money, I would buy a house.', tr: 'Param olsa bir ev alırdım.' },
      { fi: 'Mitä sinä {tekisit}?', base: 'tehdä', en: 'What would you do?', tr: 'Sen ne yapardın?' },
      { fi: 'Me {matkustaisimme} Japaniin.', base: 'matkustaa', en: 'We would travel to Japan.', tr: 'Japonya\'ya giderdik.' },
      { fi: 'Hän {söisi} mielellään jäätelöä.', base: 'syödä', en: 'She would gladly eat ice cream.', tr: 'Seve seve dondurma yerdi.' },
      { fi: 'Minä {menisin} kotiin, jos voisin.', base: 'mennä', en: 'I would go home if I could.', tr: 'Yapabilsem eve giderdim.' },
      { fi: 'Olisi kiva, jos {tulisit}.', base: 'tulla', en: 'It would be nice if you came.', tr: 'Gelsen çok güzel olurdu.' },
      { fi: 'Jos heillä olisi rahaa, he {ostaisivat} uuden auton.', base: 'ostaa', en: 'If they had money, they would buy a new car.', tr: 'Paraları olsa yeni bir araba alırlardı.' },
      { fi: 'Jos olisin sinä, en {tekisi} niin.', base: 'tehdä', en: 'If I were you, I wouldn\'t do that.', tr: 'Senin yerinde olsam öyle yapmazdım.' }
    ]
  },
  {
    id: 'conditional-past', lv: 3, icon: 'undo-2',
    title: { en: 'Would have: olisin tullut', tr: '-seydi / -irdi: olisin tullut' },
    summary: { en: 'Things that could have happened but didn\'t.', tr: 'Olabilecekken olmayan şeyler.' },
    body: {
      en: [
        'Use the conditional of *olla* + the past participle: **olisin tullut** (I would have come). In the plural the participle is **-neet**: *olisimme tulleet*.',
        'It is used for missed chances and regrets: *Jos olisin tiennyt, olisin tullut* (If I had known, I would have come). Both halves use the same form.',
        'Negative: **en olisi** + participle: *En olisi uskonut!* (I wouldn\'t have believed it!)'
      ],
      tr: [
        '*olla* fiilinin şart kipi + geçmiş ortaç: **olisin tullut** (gelirdim / gelmiş olurdum). Çoğulda ortaç **-neet** olur: *olisimme tulleet*.',
        'Kaçan fırsatlar ve pişmanlıklar için kullanılır: *Jos olisin tiennyt, olisin tullut* = Bilseydim gelirdim. Türkçedeki *-seydi … -irdi* kalıbının birebir karşılığı; Fincede iki taraf da aynı biçimi alır.',
        'Olumsuz: **en olisi** + ortaç: *En olisi uskonut!* (İnanmazdım!)'
      ]
    },
    table: {
      head: { en: ['Person', 'Would have come'], tr: ['Kişi', 'Gelirdi'] },
      rows: [['minä', 'olisin tullut'], ['sinä', 'olisit tullut'], ['hän', 'olisi tullut'], ['me', 'olisimme tulleet'], ['te', 'olisitte tulleet'], ['he', 'olisivat tulleet']]
    },
    examples: [
      ['Olisin soittanut, mutta puhelin oli rikki.', 'I would have called, but the phone was broken.', 'Arardım ama telefon bozuktu.'],
      ['Jos olisit kysynyt, olisin auttanut.', 'If you had asked, I would have helped.', 'Sorsaydın yardım ederdim.'],
      ['Emme olisi ehtineet junaan.', 'We wouldn\'t have made it to the train.', 'Trene yetişemezdik.']
    ],
    quiz: [
      { fi: 'Jos olisin tiennyt, {olisin} tullut.', base: 'olla', en: 'If I had known, I would have come.', tr: 'Bilseydim gelirdim.' },
      { fi: 'Olisimme {ostaneet} talon.', base: 'ostaa', en: 'We would have bought the house.', tr: 'Evi alırdık.' },
      { fi: 'Hän olisi {voittanut}.', base: 'voittaa', en: 'He would have won.', tr: 'Kazanırdı.' },
      { fi: 'Jos olisit {soittanut}, olisin auttanut.', base: 'soittaa', en: 'If you had called, I would have helped.', tr: 'Arasaydın yardım ederdim.' },
      { fi: 'He {olisivat} lähteneet aikaisemmin.', base: 'olla', en: 'They would have left earlier.', tr: 'Daha erken çıkarlardı.' },
      { fi: 'En olisi {uskonut}!', base: 'uskoa', en: 'I wouldn\'t have believed it!', tr: 'İnanmazdım!' },
      { fi: 'Jos olisin herännyt ajoissa, en olisi {myöhästynyt}.', base: 'myöhästyä', en: 'If I had woken up on time, I wouldn\'t have been late.', tr: 'Zamanında uyansaydım geç kalmazdım.' },
      { fi: 'Olisimme {tulleet}, mutta auto hajosi.', base: 'tulla', en: 'We would have come, but the car broke down.', tr: 'Gelirdik ama araba bozuldu.' },
      { fi: 'Jos sinä {olisit} tullut, olisit nähnyt hänet.', base: 'olla', en: 'If you had come, you would have seen him.', tr: 'Gelseydin onu görürdün.' },
      { fi: 'Hän ei olisi {tehnyt} niin.', base: 'tehdä', en: 'She wouldn\'t have done that.', tr: 'O öyle yapmazdı.' }
    ]
  },
  {
    id: 'passive-present', lv: 3, icon: 'users-round',
    title: { en: 'Passive: puhutaan', tr: 'Edilgen: puhutaan' },
    summary: { en: 'What people do, or what is done: Suomessa puhutaan suomea.', tr: 'İnsanların yaptığı ya da yapılan şey: Suomessa puhutaan suomea.' },
    body: {
      en: [
        'The Finnish passive says that **someone** does something, without saying who: *Suomessa puhutaan suomea* (Finnish is spoken in Finland). It has only one form for everybody.',
        'Types 2–6: add **-an/-än** to the infinitive: *syödä* → **syödään**, *tulla* → **tullaan**, *haluta* → **halutaan**. Type 1: weak stem + **-taan/-tään**, and a/ä becomes e: *puhua* → **puhutaan**, *lukea* → *luetaan*, *ostaa* → *ostetaan*.',
        'Negative: **ei** + the form without -an: *ei puhuta*, *ei syödä*. In everyday speech the passive also means "we" and "let\'s": **Mennään!** (Let\'s go!), *Me mennään* (We go).'
      ],
      tr: [
        'Fince edilgen, eylemi **birilerinin** yaptığını söyler ama kim olduğunu söylemez: *Suomessa puhutaan suomea* (Finlandiya\'da Fince konuşulur). Türkçedeki *konuşulur, yapılır* gibi. Herkes için tek biçimi vardır.',
        '2–6. tipler: mastara **-an/-än** eklenir: *syödä* → **syödään**, *tulla* → **tullaan**, *haluta* → **halutaan**. 1. tip: zayıf gövde + **-taan/-tään**, a/ä da e olur: *puhua* → **puhutaan**, *lukea* → *luetaan*, *ostaa* → *ostetaan*.',
        'Olumsuz: **ei** + -an\'sız biçim: *ei puhuta*, *ei syödä*. Günlük konuşmada edilgen "biz" ve "hadi" anlamında da kullanılır: **Mennään!** (Hadi gidelim!), *Me mennään* (Biz gidiyoruz).'
      ]
    },
    table: {
      head: { en: ['Infinitive', 'Passive', 'Negative'], tr: ['Mastar', 'Edilgen', 'Olumsuz'] },
      rows: [['puhua', 'puhutaan', 'ei puhuta'], ['ostaa', 'ostetaan', 'ei osteta'], ['lukea', 'luetaan', 'ei lueta'], ['syödä', 'syödään', 'ei syödä'], ['tulla', 'tullaan', 'ei tulla'], ['mennä', 'mennään', 'ei mennä'], ['haluta', 'halutaan', 'ei haluta']]
    },
    examples: [
      ['Suomessa juodaan paljon kahvia.', 'People drink a lot of coffee in Finland.', 'Finlandiya\'da çok kahve içilir.'],
      ['Mennään kotiin!', 'Let\'s go home!', 'Hadi eve gidelim!'],
      ['Täällä ei uida.', 'No swimming here.', 'Burada yüzülmez.']
    ],
    quiz: [
      { fi: 'Suomessa {puhutaan} suomea ja ruotsia.', base: 'puhua', en: 'Finnish and Swedish are spoken in Finland.', tr: 'Finlandiya\'da Fince ve İsveççe konuşulur.' },
      { fi: 'Missä {myydään} lippuja?', base: 'myydä', en: 'Where are tickets sold?', tr: 'Bilet nerede satılıyor?' },
      { fi: '{Mennään} kahville!', base: 'mennä', en: 'Let\'s go for a coffee!', tr: 'Hadi kahve içmeye gidelim!' },
      { fi: 'Kirjasto {avataan} kymmeneltä.', base: 'avata', en: 'The library opens at ten.', tr: 'Kütüphane saat onda açılır.' },
      { fi: 'Täällä ei {polteta}.', base: 'polttaa', en: 'No smoking here.', tr: 'Burada sigara içilmez.' },
      { fi: 'Mitä tänään {tehdään}?', base: 'tehdä', en: 'What shall we do today?', tr: 'Bugün ne yapıyoruz?' },
      { fi: 'Suomessa {juodaan} paljon kahvia.', base: 'juoda', en: 'People drink a lot of coffee in Finland.', tr: 'Finlandiya\'da çok kahve içilir.' },
      { fi: 'Koulussa {opitaan} uusia asioita.', base: 'oppia', en: 'At school you learn new things.', tr: 'Okulda yeni şeyler öğrenilir.' },
      { fi: '{Syödään} yhdessä!', base: 'syödä', en: 'Let\'s eat together!', tr: 'Hadi birlikte yiyelim!' },
      { fi: 'Kirjastossa ei {puhuta} kovalla äänellä.', base: 'puhua', en: 'You don\'t talk loudly in the library.', tr: 'Kütüphanede yüksek sesle konuşulmaz.' }
    ]
  },
  {
    id: 'passive-past', lv: 3, icon: 'archive',
    title: { en: 'Past passive: puhuttiin', tr: 'Geçmiş edilgen: puhuttiin' },
    summary: { en: 'What was done: Talo rakennettiin vuonna 1920.', tr: 'Ne yapıldı: Talo rakennettiin vuonna 1920.' },
    body: {
      en: [
        'Start from the present passive and change the ending: **-taan → -ttiin**, **-daan/-laan/-naan → -tiin**: *puhutaan* → **puhuttiin**, *syödään* → **syötiin**, *tullaan* → **tultiin**, *mennään* → *mentiin*.',
        'Negative: **ei** + **-ttu/-tu**: *ei puhuttu*, *ei syöty*, *ei tultu*. This -ttu form is also an adjective: *avattu ovi* (an opened door).',
        'It is very common in news and history: *Kirkko rakennettiin 1600-luvulla* (The church was built in the 17th century).'
      ],
      tr: [
        'Şimdiki edilgenden başla ve eki değiştir: **-taan → -ttiin**, **-daan/-laan/-naan → -tiin**: *puhutaan* → **puhuttiin** (konuşuldu), *syödään* → **syötiin**, *tullaan* → **tultiin**, *mennään* → *mentiin*.',
        'Olumsuz: **ei** + **-ttu/-tu**: *ei puhuttu*, *ei syöty*, *ei tultu*. Bu -ttu biçimi sıfat olarak da kullanılır: *avattu ovi* (açılmış kapı).',
        'Haberlerde ve tarih anlatımında çok sık geçer: *Kirkko rakennettiin 1600-luvulla* (Kilise 17. yüzyılda inşa edildi).'
      ]
    },
    table: {
      head: { en: ['Infinitive', 'Past passive', 'Negative'], tr: ['Mastar', 'Geçmiş edilgen', 'Olumsuz'] },
      rows: [['puhua', 'puhuttiin', 'ei puhuttu'], ['ostaa', 'ostettiin', 'ei ostettu'], ['syödä', 'syötiin', 'ei syöty'], ['tulla', 'tultiin', 'ei tultu'], ['mennä', 'mentiin', 'ei menty'], ['haluta', 'haluttiin', 'ei haluttu'], ['tehdä', 'tehtiin', 'ei tehty']]
    },
    examples: [
      ['Talo rakennettiin vuonna 1920.', 'The house was built in 1920.', 'Ev 1920 yılında yapıldı.'],
      ['Illalla syötiin ja laulettiin.', 'In the evening there was eating and singing.', 'Akşam yenildi, şarkılar söylendi.'],
      ['Asiasta ei puhuttu.', 'The matter wasn\'t talked about.', 'Bu konu konuşulmadı.']
    ],
    quiz: [
      { fi: 'Talo {rakennettiin} vuonna 1920.', base: 'rakentaa', en: 'The house was built in 1920.', tr: 'Ev 1920 yılında yapıldı.' },
      { fi: 'Juhlissa {tanssittiin} koko yö.', base: 'tanssia', en: 'At the party people danced all night.', tr: 'Partide bütün gece dans edildi.' },
      { fi: 'Ovi {avattiin} kello yhdeksän.', base: 'avata', en: 'The door was opened at nine.', tr: 'Kapı saat dokuzda açıldı.' },
      { fi: 'Kokouksessa ei {päätetty} mitään.', base: 'päättää', en: 'Nothing was decided at the meeting.', tr: 'Toplantıda hiçbir karar alınmadı.' },
      { fi: 'Ennen {asuttiin} maalla.', base: 'asua', en: 'In the old days people lived in the countryside.', tr: 'Eskiden kırsalda yaşanırdı.' },
      { fi: 'Ikkuna {rikottiin} eilen.', base: 'rikkoa', en: 'The window was broken yesterday.', tr: 'Pencere dün kırıldı.' },
      { fi: 'Kirje {lähetettiin} eilen.', base: 'lähettää', en: 'The letter was sent yesterday.', tr: 'Mektup dün gönderildi.' },
      { fi: 'Eilen {syötiin} kakkua.', base: 'syödä', en: 'Yesterday we had cake.', tr: 'Dün pasta yendi.' },
      { fi: 'Torilla {myytiin} mansikoita.', base: 'myydä', en: 'Strawberries were sold at the market.', tr: 'Pazarda çilek satıldı.' },
      { fi: 'Asiasta ei {puhuttu} kokouksessa.', base: 'puhua', en: 'The matter wasn\'t discussed at the meeting.', tr: 'Toplantıda bu konudan bahsedilmedi.' }
    ]
  },
  {
    id: 'perfect', lv: 3, icon: 'check-check',
    title: { en: 'Perfect: olen asunut', tr: 'Perfekt: olen asunut' },
    summary: { en: 'Have done: experience and things up to now.', tr: 'Yapmış olmak: deneyim ve şimdiye kadar olanlar.' },
    body: {
      en: [
        'The perfect is the present of *olla* + the past participle: **olen asunut**, *olet asunut, on asunut*, **olemme asuneet**, *olette asuneet, ovat asuneet*.',
        'Use it for **experience** (*Oletko käynyt Lapissa?* — Have you been to Lapland?), for things that **continue until now** (*Olen asunut täällä kaksi vuotta*), and for results that matter now (*Hän on lähtenyt*).',
        'Negative: **en ole** + participle: *En ole koskaan nähnyt lunta* (I have never seen snow).'
      ],
      tr: [
        'Perfekt, *olla* fiilinin şimdiki zamanı + geçmiş ortaçtır: **olen asunut**, *olet asunut, on asunut*, **olemme asuneet**, *olette asuneet, ovat asuneet*.',
        '**Deneyim** için (*Oletko käynyt Lapissa?* — Hiç Laponya\'ya gittin mi?), **şimdiye kadar süren** şeyler için (*Olen asunut täällä kaksi vuotta* — İki yıldır burada yaşıyorum) ve etkisi hâlâ süren sonuçlar için (*Hän on lähtenyt* — Gitmiş) kullanılır.',
        'Türkçe ipucu: Türkçede *-dır* ile söylenen *iki yıldır yaşıyorum* Fincede perfektle söylenir. Olumsuz: **en ole** + ortaç: *En ole koskaan nähnyt lunta* (Hiç kar görmedim).'
      ]
    },
    table: {
      head: { en: ['Person', 'Perfect (eat)'], tr: ['Kişi', 'Perfekt (yemek)'] },
      rows: [['minä', 'olen syönyt'], ['sinä', 'olet syönyt'], ['hän', 'on syönyt'], ['me', 'olemme syöneet'], ['te', 'olette syöneet'], ['he', 'ovat syöneet']]
    },
    examples: [
      ['Oletko koskaan käynyt saunassa?', 'Have you ever been to a sauna?', 'Hiç saunaya girdin mi?'],
      ['Olen opiskellut suomea vuoden.', 'I have studied Finnish for a year.', 'Bir yıldır Fince öğreniyorum.'],
      ['Bussi on jo mennyt.', 'The bus has already gone.', 'Otobüs çoktan gitmiş.']
    ],
    quiz: [
      { fi: 'Olen {asunut} täällä viisi vuotta.', base: 'asua', en: 'I have lived here for five years.', tr: 'Beş yıldır burada yaşıyorum.' },
      { fi: 'Oletko {käynyt} Lapissa?', base: 'käydä', en: 'Have you been to Lapland?', tr: 'Hiç Laponya\'ya gittin mi?' },
      { fi: 'Emme ole {nähneet} sitä elokuvaa.', base: 'nähdä', en: 'We haven\'t seen that film.', tr: 'O filmi görmedik.' },
      { fi: 'Hän {on} jo lähtenyt.', base: 'olla', en: 'She has already left.', tr: 'O çoktan gitti.' },
      { fi: 'He ovat {oppineet} paljon.', base: 'oppia', en: 'They have learned a lot.', tr: 'Çok şey öğrendiler.' },
      { fi: 'En ole koskaan {syönyt} poronlihaa.', base: 'syödä', en: 'I have never eaten reindeer meat.', tr: 'Hiç ren geyiği eti yemedim.' },
      { fi: 'Oletko {lukenut} tämän kirjan?', base: 'lukea', en: 'Have you read this book?', tr: 'Bu kitabı okudun mu?' },
      { fi: 'Olen {ollut} Suomessa kaksi vuotta.', base: 'olla', en: 'I have been in Finland for two years.', tr: 'İki yıldır Finlandiya\'dayım.' },
      { fi: 'Me {olemme} jo syöneet.', base: 'olla', en: 'We have already eaten.', tr: 'Biz çoktan yedik.' },
      { fi: 'Hän ei ole vielä {tullut}.', base: 'tulla', en: 'He hasn\'t come yet.', tr: 'Henüz gelmedi.' }
    ]
  },
  {
    id: 'pluperfect', lv: 3, icon: 'hourglass',
    title: { en: 'Pluperfect: olin syönyt', tr: '-mıştı: olin syönyt' },
    summary: { en: 'Had done: before another past event.', tr: 'Yapmıştı: geçmişteki başka bir olaydan önce.' },
    body: {
      en: [
        'The pluperfect is the past of *olla* + the past participle: **olin syönyt**, *olit syönyt, oli syönyt*, **olimme syöneet**, *olitte syöneet, olivat syöneet*.',
        'Use it for something that happened **before** another past event: *Kun tulin kotiin, muut olivat jo syöneet* (When I got home, the others had already eaten).',
        'Negative: **en ollut** + participle: *En ollut koskaan nähnyt lunta ennen sitä talvea.*'
      ],
      tr: [
        'Pluperfekt, *olla* fiilinin geçmiş zamanı + geçmiş ortaçtır: **olin syönyt**, *olit syönyt, oli syönyt*, **olimme syöneet**, *olitte syöneet, olivat syöneet*.',
        'Geçmişteki başka bir olaydan **önce** olan şeyler için kullanılır; Türkçedeki *-mıştı* gibi: *Kun tulin kotiin, muut olivat jo syöneet* (Eve geldiğimde diğerleri çoktan yemişti).',
        'Olumsuz: **en ollut** + ortaç: *En ollut koskaan nähnyt lunta ennen sitä talvea* (O kıştan önce hiç kar görmemiştim).'
      ]
    },
    table: {
      head: { en: ['Person', 'Pluperfect (leave)'], tr: ['Kişi', '-mıştı (gitmek)'] },
      rows: [['minä', 'olin lähtenyt'], ['sinä', 'olit lähtenyt'], ['hän', 'oli lähtenyt'], ['me', 'olimme lähteneet'], ['te', 'olitte lähteneet'], ['he', 'olivat lähteneet']]
    },
    examples: [
      ['Kun tulin asemalle, juna oli jo lähtenyt.', 'When I got to the station, the train had already left.', 'İstasyona vardığımda tren çoktan kalkmıştı.'],
      ['Hän oli unohtanut avaimensa.', 'He had forgotten his keys.', 'Anahtarlarını unutmuştu.'],
      ['Emme olleet tavanneet aiemmin.', 'We hadn\'t met before.', 'Daha önce tanışmamıştık.']
    ],
    quiz: [
      { fi: 'Kun tulin, juna oli jo {lähtenyt}.', base: 'lähteä', en: 'When I came, the train had already left.', tr: 'Geldiğimde tren çoktan kalkmıştı.' },
      { fi: 'Olimme {syöneet} ennen elokuvaa.', base: 'syödä', en: 'We had eaten before the film.', tr: 'Filmden önce yemek yemiştik.' },
      { fi: 'Hän {oli} unohtanut avaimensa.', base: 'olla', en: 'She had forgotten her keys.', tr: 'Anahtarlarını unutmuştu.' },
      { fi: 'En ollut koskaan {nähnyt} lunta.', base: 'nähdä', en: 'I had never seen snow.', tr: 'Hiç kar görmemiştim.' },
      { fi: 'He olivat {asuneet} Oulussa ennen muuttoa.', base: 'asua', en: 'They had lived in Oulu before the move.', tr: 'Taşınmadan önce Oulu\'da yaşamışlardı.' },
      { fi: 'Olin juuri {herännyt}, kun puhelin soi.', base: 'herätä', en: 'I had just woken up when the phone rang.', tr: 'Telefon çaldığında daha yeni uyanmıştım.' },
      { fi: 'Hän oli jo {mennyt} nukkumaan, kun soitin.', base: 'mennä', en: 'He had already gone to bed when I called.', tr: 'Aradığımda çoktan yatmıştı.' },
      { fi: 'Me {olimme} jo syöneet, kun vieraat tulivat.', base: 'olla', en: 'We had already eaten when the guests arrived.', tr: 'Misafirler geldiğinde biz çoktan yemiştik.' },
      { fi: 'Olin {unohtanut} lompakkoni kotiin.', base: 'unohtaa', en: 'I had left my wallet at home.', tr: 'Cüzdanımı evde unutmuştum.' },
      { fi: 'En ollut koskaan ennen {käynyt} Lapissa.', base: 'käydä', en: 'I had never been to Lapland before.', tr: 'Daha önce hiç Laponya\'ya gitmemiştim.' }
    ]
  },
  {
    id: 'relative-pronoun', lv: 3, icon: 'link',
    title: { en: 'Who, which: joka', tr: 'Ki, -en: joka' },
    summary: { en: 'Mies, joka asuu tuossa… = The man who lives there…', tr: 'Mies, joka asuu tuossa… = Orada oturan adam…' },
    body: {
      en: [
        '**joka** (plural **jotka**) means "who, which, that". It takes the case its own clause needs: *talo, **jossa** asun* (the house I live in), *kirja, **jonka** ostin* (the book I bought).',
        'Always put a **comma** before it. Common forms: *joka, jonka, jota, jossa, josta, johon, jolla, jolle*; plural *jotka, joiden, joita, joissa…*',
        'Use **mikä** after *kaikki, se, jotain*, a superlative, or a whole sentence: *Kaikki, mitä hän sanoi, oli totta*. *Hän voitti, mikä oli yllätys.*'
      ],
      tr: [
        '**joka** (çoğulu **jotka**) "ki, -en, -dığı" anlamına gelir. Kendi yan cümlesinin istediği hâl ekini alır: *talo, **jossa** asun* (oturduğum ev), *kirja, **jonka** ostin* (aldığım kitap).',
        'Türkçede bunu genelde ortaçla söyleriz (*oturan adam*, *aldığım kitap*); Fincede ise ismin arkasından virgül ve *joka* gelir. Sık biçimler: *joka, jonka, jota, jossa, josta, johon, jolla, jolle*; çoğul *jotka, joiden, joita, joissa…*',
        '*kaikki, se, jotain*, en üstünlük sıfatları ya da bütün bir cümleden sonra **mikä** kullanılır: *Kaikki, mitä hän sanoi, oli totta* (Söylediği her şey doğruydu). *Hän voitti, mikä oli yllätys* (Kazandı, ki bu bir sürprizdi).'
      ]
    },
    table: {
      head: { en: ['Singular', 'Plural'], tr: ['Tekil', 'Çoğul'] },
      rows: [['joka', 'jotka'], ['jonka', 'joiden'], ['jota', 'joita'], ['jossa', 'joissa'], ['josta', 'joista'], ['johon', 'joihin'], ['jolla', 'joilla'], ['jolle', 'joille']]
    },
    examples: [
      ['Tunnetko naisen, joka istuu tuolla?', 'Do you know the woman who is sitting over there?', 'Şurada oturan kadını tanıyor musun?'],
      ['Tämä on kahvila, josta pidän eniten.', 'This is the café I like the most.', 'En sevdiğim kafe burası.'],
      ['Ystävät, joiden kanssa matkustin, asuvat Oulussa.', 'The friends I travelled with live in Oulu.', 'Birlikte seyahat ettiğim arkadaşlar Oulu\'da yaşıyor.']
    ],
    quiz: [
      { fi: 'Mies, {joka} asuu tuossa, on lääkäri.', base: 'joka', en: 'The man who lives there is a doctor.', tr: 'Orada oturan adam doktor.' },
      { fi: 'Talo, {jossa} asun, on vanha.', base: 'joka', en: 'The house I live in is old.', tr: 'Oturduğum ev eski.' },
      { fi: 'Kirja, {jonka} ostin, on hyvä.', base: 'joka', en: 'The book I bought is good.', tr: 'Aldığım kitap güzel.' },
      { fi: 'Ystävät, {jotka} tulivat, olivat iloisia.', base: 'joka', en: 'The friends who came were happy.', tr: 'Gelen arkadaşlar mutluydu.' },
      { fi: 'Tämä on kaupunki, {josta} pidän eniten.', base: 'joka', en: 'This is the city I like the most.', tr: 'En sevdiğim şehir bu.' },
      { fi: 'Ei kaikki ole kultaa, {mikä} kiiltää.', base: 'mikä', en: 'All that glitters is not gold.', tr: 'Her parlayan altın değildir.' },
      { fi: 'Nainen, {jota} odotan, on myöhässä.', base: 'joka', en: 'The woman I\'m waiting for is late.', tr: 'Beklediğim kadın geç kaldı.' },
      { fi: 'Lapset, {joiden} kanssa leikin, asuvat naapurissa.', base: 'joka', en: 'The children I play with live next door.', tr: 'Birlikte oynadığım çocuklar yan evde oturuyor.' },
      { fi: 'Kaupunki, {johon} muutimme, on pieni.', base: 'joka', en: 'The town we moved to is small.', tr: 'Taşındığımız şehir küçük.' },
      { fi: 'Ystävä, {jolle} soitin, ei vastannut.', base: 'joka', en: 'The friend I called didn\'t answer.', tr: 'Aradığım arkadaş cevap vermedi.' }
    ]
  },
  {
    id: 'participles', lv: 3, icon: 'workflow',
    title: { en: 'Participles: nukkuva lapsi', tr: 'Ortaçlar: nukkuva lapsi' },
    summary: { en: 'Verb forms that work like adjectives.', tr: 'Sıfat gibi çalışan fiil biçimleri.' },
    body: {
      en: [
        'Participles turn a verb into an adjective and can replace a *joka* clause: *lapsi, joka nukkuu* = **nukkuva lapsi** (a sleeping child).',
        'The four main ones: **-va/-vä** (doing: *nukkuva*), **-nut/-nyt** (having done: *väsynyt*, *kasvanut*), **-ttava/-tava** (to be done: *luettava kirja*), **-ttu/-tu** (done: *avattu ovi*).',
        'The agent participle **-ma/-mä** says who did it, with the doer in the genitive: *äidin tekemä kakku* (a cake made by Mum). Participles inflect like adjectives: *nukkuvaa lasta*.'
      ],
      tr: [
        'Ortaçlar fiili sıfata çevirir ve *joka* cümlesinin yerine geçebilir: *lapsi, joka nukkuu* = **nukkuva lapsi** (uyuyan çocuk). Türkçede bunları her gün kullanıyoruz!',
        'Dört temel ortaç: **-va/-vä** (-en/-an: *nukkuva* = uyuyan), **-nut/-nyt** (-miş: *väsynyt* = yorulmuş, *kasvanut* = büyümüş), **-ttava/-tava** (-ecek, yapılması gereken: *luettava kirja* = okunacak kitap), **-ttu/-tu** (-ilmiş: *avattu ovi* = açılmış kapı).',
        'Fail ortacı **-ma/-mä** eylemi kimin yaptığını söyler; yapan genitif alır: *äidin tekemä kakku* = annemin yaptığı kek (Türkçedeki *-dığı* gibi). Ortaçlar sıfat gibi çekimlenir: *nukkuvaa lasta*.'
      ]
    },
    table: {
      head: { en: ['Participle', 'Example'], tr: ['Ortaç', 'Örnek'] },
      rows: [['-va / -vä', 'nukkuva lapsi'], ['-nut / -nyt', 'väsynyt mies'], ['-ttava / -tava', 'luettava kirja'], ['-ttu / -tu', 'avattu ovi'], ['-ma / -mä', 'äidin tekemä kakku']]
    },
    examples: [
      ['Älä herätä nukkuvaa lasta.', 'Don\'t wake the sleeping child.', 'Uyuyan çocuğu uyandırma.'],
      ['Tämä on isäni rakentama mökki.', 'This is the cottage my father built.', 'Bu, babamın yaptığı yazlık.'],
      ['Minulla on paljon tehtävää.', 'I have a lot to do.', 'Yapacak çok işim var.']
    ],
    quiz: [
      { fi: 'Tämä on äidin {tekemä} kakku.', base: 'tehdä', en: 'This is a cake Mum made.', tr: 'Bu annemin yaptığı kek.' },
      { fi: 'Ovi on {avattu}.', base: 'avata', en: 'The door has been opened.', tr: 'Kapı açılmış.' },
      { fi: 'Minulla on paljon {luettavaa}.', base: 'lukea', en: 'I have a lot to read.', tr: 'Okuyacak çok şeyim var.' },
      { fi: 'Hän on hyvin {väsynyt}.', base: 'väsyä', en: 'She is very tired.', tr: 'Çok yorgun.' },
      { fi: '{Puhuva} papukaija on hauska.', base: 'puhua', en: 'A talking parrot is fun.', tr: 'Konuşan papağan eğlencelidir.' },
      { fi: 'Älä herätä {nukkuvaa} lasta.', base: 'nukkua', en: 'Don\'t wake the sleeping child.', tr: 'Uyuyan çocuğu uyandırma.' },
      { fi: 'Ostin {käytetyn} auton.', base: 'käyttää', en: 'I bought a used car.', tr: 'İkinci el bir araba aldım.' },
      { fi: '{Itkevä} lapsi etsii äitiään.', base: 'itkeä', en: 'The crying child is looking for his mother.', tr: 'Ağlayan çocuk annesini arıyor.' },
      { fi: 'Minulla on paljon {tehtävää}.', base: 'tehdä', en: 'I have a lot to do.', tr: 'Yapacak çok işim var.' },
      { fi: 'Tämä on isän {rakentama} talo.', base: 'rakentaa', en: 'This is the house Dad built.', tr: 'Bu, babamın yaptığı ev.' }
    ]
  },
  {
    id: 'infinitive-forms', lv: 3, icon: 'puzzle',
    title: { en: 'Infinitive forms: syömään, syömässä', tr: 'Mastar biçimleri: syömään, syömässä' },
    summary: { en: 'Going to do, being in the middle of, without doing.', tr: 'Yapmaya gitmek, yapmakta olmak, yapmadan.' },
    body: {
      en: [
        'The basic infinitive follows verbs like *haluta, voida, osata, täytyy*: *Haluan syödä*.',
        'The **-ma-** infinitive takes case endings, built on the *he* stem (*syövät* → *syö-ma-*): **-maan** after verbs of movement and *oppia* (*Menen syömään* — I go to eat, *Opin uimaan*), **-massa** for being in the middle of or away doing (*Olen syömässä*), **-masta** for coming from doing (*Tulen syömästä*), **-matta** = without (*lähti syömättä*).',
        'The form **-essa/-essä** means "while": *Syödessä ei puhuta* (One doesn\'t talk while eating).'
      ],
      tr: [
        'Temel mastar *haluta, voida, osata, täytyy* gibi fiillerden sonra gelir: *Haluan syödä* (Yemek istiyorum).',
        '**-ma-** mastarı hâl eki alır ve *he* gövdesinden yapılır (*syövät* → *syö-ma-*). Türkçe ile birebir: **-maan** = -meye (*Menen syömään* = yemeye gidiyorum, *Opin uimaan* = yüzmeyi öğrendim), **-massa** = -mekte, -meye gitmiş (*Olen syömässä* = yemek yiyorum / yemekteyim), **-masta** = -mekten (*Tulen syömästä* = yemekten geliyorum), **-matta** = -meden (*lähti syömättä* = yemeden çıktı).',
        '**-essa/-essä** biçimi "-ken" demektir: *Syödessä ei puhuta* (Yemek yerken konuşulmaz).'
      ]
    },
    table: {
      head: { en: ['Form', 'Example'], tr: ['Biçim', 'Örnek'] },
      rows: [['syödä', 'haluan syödä'], ['syömään', 'menen syömään'], ['syömässä', 'olen syömässä'], ['syömästä', 'tulen syömästä'], ['syömättä', 'lähdin syömättä'], ['syödessä', 'syödessä ei puhuta']]
    },
    examples: [
      ['Lähdetkö uimaan?', 'Are you coming swimming?', 'Yüzmeye geliyor musun?'],
      ['Isä on kaupassa ostamassa ruokaa.', 'Dad is at the shop buying food.', 'Babam markette yiyecek alıyor.'],
      ['Hän lähti sanomatta mitään.', 'He left without saying anything.', 'Hiçbir şey demeden gitti.']
    ],
    quiz: [
      { fi: 'Menen {uimaan}.', base: 'uida', en: 'I\'m going swimming.', tr: 'Yüzmeye gidiyorum.' },
      { fi: 'Olen {lukemassa} kirjaa.', base: 'lukea', en: 'I\'m in the middle of reading a book.', tr: 'Kitap okuyorum.' },
      { fi: 'Hän tuli {kävelemästä}.', base: 'kävellä', en: 'She came back from a walk.', tr: 'Yürüyüşten döndü.' },
      { fi: 'Lähdin {syömättä} aamupalaa.', base: 'syödä', en: 'I left without eating breakfast.', tr: 'Kahvaltı etmeden çıktım.' },
      { fi: 'Opin {ajamaan} autoa.', base: 'ajaa', en: 'I learned to drive a car.', tr: 'Araba kullanmayı öğrendim.' },
      { fi: 'Tule {katsomaan}!', base: 'katsoa', en: 'Come and see!', tr: 'Gel de bak!' },
      { fi: 'Lähden {ostamaan} leipää.', base: 'ostaa', en: 'I\'m off to buy bread.', tr: 'Ekmek almaya gidiyorum.' },
      { fi: 'Hän on {nukkumassa}.', base: 'nukkua', en: 'He is sleeping.', tr: 'Uyuyor.' },
      { fi: 'Tulen juuri {uimasta}.', base: 'uida', en: 'I\'ve just come from swimming.', tr: 'Yüzmeden yeni geliyorum.' },
      { fi: 'Hän lähti {sanomatta} mitään.', base: 'sanoa', en: 'She left without saying anything.', tr: 'Hiçbir şey söylemeden gitti.' }
    ]
  },
  {
    id: 'potential', lv: 3, icon: 'sparkles',
    title: { en: 'Probably: the potential -ne-', tr: 'Muhtemelen: potansiyel -ne-' },
    summary: { en: 'Juna tullee = The train will probably come.', tr: 'Juna tullee = Tren muhtemelen gelir.' },
    body: {
      en: [
        'The potential mood adds **-ne-** and means "probably, likely": *Hän tullee huomenna* (He will probably come tomorrow). It belongs to formal and written Finnish: news, reports, official texts.',
        'Forms: *puhua* → **puhunee**, *syödä* → **syönee**. In type 3 the n copies the consonant: *tulla* → **tullee**, *nousta* → **noussee**. Type 4: *haluta* → *halunnee*. The verb *olla* is special: **lienee**.',
        'In speech, Finns simply say **varmaan** or **luultavasti** + present: *Hän tulee varmaan huomenna*. Learn to recognise the potential rather than to use it.'
      ],
      tr: [
        'Potansiyel kip **-ne-** ekler ve "muhtemelen" demektir: *Hän tullee huomenna* (Yarın muhtemelen gelir). Resmî ve yazılı Fincededir: haberler, raporlar, resmî metinler. Türkçedeki *gelse gerek* ya da *gelecektir* tonuna yakındır.',
        'Biçimler: *puhua* → **puhunee**, *syödä* → **syönee**. 3. tipte n, önceki ünsüze benzer: *tulla* → **tullee**, *nousta* → **noussee**. 4. tip: *haluta* → *halunnee*. *olla* fiili özeldir: **lienee**.',
        'Konuşmada Finler sadece **varmaan** ya da **luultavasti** + şimdiki zaman kullanır: *Hän tulee varmaan huomenna*. Bu kipi kullanmaktan çok tanımayı öğren.'
      ]
    },
    table: {
      head: { en: ['Infinitive', 'Potential (hän)'], tr: ['Mastar', 'Potansiyel (hän)'] },
      rows: [['olla', 'lienee'], ['puhua', 'puhunee'], ['syödä', 'syönee'], ['tulla', 'tullee'], ['mennä', 'mennee'], ['nousta', 'noussee'], ['haluta', 'halunnee']]
    },
    examples: [
      ['Hinnat noussevat ensi vuonna.', 'Prices will probably rise next year.', 'Fiyatlar gelecek yıl muhtemelen artacak.'],
      ['Lienet kuullut uutisen.', 'You have probably heard the news.', 'Haberi duymuşsundur.'],
      ['Sää ei liene huomenna parempi.', 'The weather probably won\'t be better tomorrow.', 'Hava yarın pek daha iyi olmayacak gibi.']
    ],
    quiz: [
      { fi: 'Hän {lienee} kotona.', base: 'olla', en: 'He is probably at home.', tr: 'Muhtemelen evdedir.' },
      { fi: 'Juna {tullee} pian.', base: 'tulla', en: 'The train will probably come soon.', tr: 'Tren muhtemelen birazdan gelir.' },
      { fi: 'Hinta {noussee} ensi vuonna.', base: 'nousta', en: 'The price will probably rise next year.', tr: 'Fiyat gelecek yıl muhtemelen artacak.' },
      { fi: 'Kokous {kestänee} tunnin.', base: 'kestää', en: 'The meeting will probably last an hour.', tr: 'Toplantı muhtemelen bir saat sürer.' },
      { fi: 'Hän {saanee} paikan.', base: 'saada', en: 'She will probably get the job.', tr: 'İşi muhtemelen o alacak.' },
      { fi: 'Sinä {tiennet} vastauksen.', base: 'tietää', en: 'You probably know the answer.', tr: 'Cevabı muhtemelen biliyorsundur.' },
      { fi: 'He {tullevat} myöhemmin.', base: 'tulla', en: 'They will probably come later.', tr: 'Muhtemelen daha sonra gelirler.' },
      { fi: 'Huomenna {satanee}.', base: 'sataa', en: 'It will probably rain tomorrow.', tr: 'Yarın muhtemelen yağmur yağacak.' },
      { fi: 'Me {lienemme} ajoissa.', base: 'olla', en: 'We will probably be on time.', tr: 'Muhtemelen zamanında oluruz.' },
      { fi: 'Kauppa {avannee} kymmeneltä.', base: 'avata', en: 'The shop probably opens at ten.', tr: 'Mağaza muhtemelen saat onda açılır.' }
    ]
  },
  {
    id: 'adverbs', lv: 3, icon: 'gauge',
    title: { en: 'Adverbs: -sti', tr: 'Zarflar: -sti' },
    summary: { en: 'nopea → nopeasti, hyvä → hyvin.', tr: 'nopea → nopeasti, hyvä → hyvin.' },
    body: {
      en: [
        'Most adverbs of manner add **-sti** to the genitive stem: *nopea* → **nopeasti** (quickly), *kaunis* (*kauniin*) → **kauniisti**, *iloinen* (*iloisen*) → **iloisesti**. Irregular: *hyvä* → **hyvin**.',
        'Comparative **-mmin**, superlative **-immin**: *nopeammin* (faster), *nopeimmin* (fastest); *paremmin* (better), *parhaiten* (best).',
        'Place adverbs come in where / where to / where from sets: **täällä – tänne – täältä** (here), **siellä – sinne – sieltä** (there), **kotona – kotiin – kotoa** (home).'
      ],
      tr: [
        'Durum zarflarının çoğu genitif gövdeye **-sti** ekler: *nopea* → **nopeasti** (hızlıca), *kaunis* (*kauniin*) → **kauniisti** (güzelce), *iloinen* (*iloisen*) → **iloisesti** (neşeyle). Türkçedeki *-ce/-ca* gibi düşün. Düzensiz: *hyvä* → **hyvin** (iyi).',
        'Karşılaştırma **-mmin**, en üstünlük **-immin**: *nopeammin* (daha hızlı), *nopeimmin* (en hızlı); *paremmin* (daha iyi), *parhaiten* (en iyi).',
        'Yer zarfları nerede / nereye / nereden üçlüsüyle gelir: **täällä – tänne – täältä** (burada, buraya, buradan), **siellä – sinne – sieltä** (orada…), **kotona – kotiin – kotoa** (evde, eve, evden).'
      ]
    },
    table: {
      head: { en: ['Adjective', 'Adverb'], tr: ['Sıfat', 'Zarf'] },
      rows: [['nopea', 'nopeasti'], ['hidas', 'hitaasti'], ['kaunis', 'kauniisti'], ['iloinen', 'iloisesti'], ['selvä', 'selvästi'], ['huono', 'huonosti'], ['hyvä', 'hyvin']]
    },
    examples: [
      ['Puhutko vähän hitaammin?', 'Could you speak a bit more slowly?', 'Biraz daha yavaş konuşur musun?'],
      ['Hän laulaa todella kauniisti.', 'She sings really beautifully.', 'Gerçekten çok güzel şarkı söylüyor.'],
      ['Tule tänne!', 'Come here!', 'Buraya gel!']
    ],
    quiz: [
      { fi: 'Hän puhuu suomea {hyvin}.', base: 'hyvä', en: 'She speaks Finnish well.', tr: 'İyi Fince konuşuyor.' },
      { fi: 'Aja {hitaasti}!', base: 'hidas', en: 'Drive slowly!', tr: 'Yavaş sür!' },
      { fi: 'Juokse {nopeammin}!', base: 'nopea', en: 'Run faster!', tr: 'Daha hızlı koş!' },
      { fi: 'Lapsi hymyili {iloisesti}.', base: 'iloinen', en: 'The child smiled happily.', tr: 'Çocuk neşeyle gülümsedi.' },
      { fi: 'Tule {tänne}!', base: 'täällä', en: 'Come here!', tr: 'Buraya gel!' },
      { fi: 'Puhu {selvästi}, kiitos.', base: 'selvä', en: 'Speak clearly, please.', tr: 'Lütfen açık konuş.' },
      { fi: 'Hän laulaa {kauniisti}.', base: 'kaunis', en: 'She sings beautifully.', tr: 'Güzel şarkı söylüyor.' },
      { fi: 'Nukuin {huonosti}.', base: 'huono', en: 'I slept badly.', tr: 'Kötü uyudum.' },
      { fi: 'Menen {sinne} huomenna.', base: 'siellä', en: 'I\'m going there tomorrow.', tr: 'Yarın oraya gidiyorum.' },
      { fi: 'Hän tuli {kotiin} myöhään.', base: 'koti', en: 'He came home late.', tr: 'Eve geç geldi.' }
    ]
  },

  // ───────────────────────── More lessons ─────────────────────────
  {
    id: 'question-words', lv: 1, icon: 'search',
    title: { en: 'Question words', tr: 'Soru kelimeleri' },
    summary: { en: 'mikä, kuka, missä, mistä, mihin, milloin, miksi, miten…', tr: 'mikä, kuka, missä, mistä, mihin, milloin, miksi, miten…' },
    body: {
      en: [
        'A question word goes first and the rest of the sentence keeps normal word order: **Missä** sinä asut? = Where do you live? When there is a question word, you don\'t add -ko/-kö.',
        'The "where" family follows the three location cases: **missä** (where), **mistä** (where from), **mihin** (where to). Answer in the same case: *Missä?* – *Helsingissä*. *Mistä?* – *Helsingistä*. *Mihin?* – *Helsinkiin*.',
        '**mikä** = what / which (things) and **kuka** = who (people) take case endings too: *Mitä* sinä teet? (what – partitive), *Kenen* laukku? (whose), *Kenelle* soitat? (who… to).',
        'Others: **milloin** (when), **miksi** (why – answer with *koska*, because), **miten** or **kuinka** (how), **paljonko** (how much), **kuinka monta** (how many, followed by the partitive singular).'
      ],
      tr: [
        'Soru kelimesi başa gelir, cümlenin geri kalanı normal sırada kalır: **Missä** sinä asut? = Nerede oturuyorsun? Soru kelimesi varsa -ko/-kö eklenmez; Türkçede de soru kelimesiyle birlikte *mı* kullanmadığımız gibi.',
        '"Nerede" ailesi üç yer hâlini izler: **missä** (nerede), **mistä** (nereden), **mihin** (nereye). Cevap da aynı hâlde gelir: *Missä?* – *Helsingissä*. *Mistä?* – *Helsingistä*. *Mihin?* – *Helsinkiin*. Türkçedeki *-de / -den / -e* üçlüsünün tıpatıp aynısı!',
        '**mikä** = ne / hangi (şeyler için) ve **kuka** = kim (insanlar için) de hâl eki alır: *Mitä* sinä teet? (Ne yapıyorsun? – partitif), *Kenen* laukku? (Kimin çantası?), *Kenelle* soitat? (Kimi arıyorsun? – kelimesi kelimesine "kime").',
        'Diğerleri: **milloin** (ne zaman), **miksi** (neden – cevap *koska*, çünkü), **miten** ya da **kuinka** (nasıl), **paljonko** (ne kadar), **kuinka monta** (kaç tane; arkasından tekil partitif gelir).'
      ]
    },
    table: {
      head: { en: ['Question', 'Answer'], tr: ['Soru', 'Cevap'] },
      rows: [['Missä asut?', 'Helsingissä.'], ['Mistä tulet?', 'Turkista.'], ['Mihin menet?', 'Kauppaan.'], ['Kuka hän on?', 'Opettaja.'], ['Mitä teet?', 'Luen.'], ['Milloin tulet?', 'Huomenna.'], ['Miksi?', 'Koska olen väsynyt.'], ['Paljonko se maksaa?', 'Viisi euroa.']]
    },
    examples: [
      ['Mikä sinun nimesi on?', 'What is your name?', 'Adın ne?'],
      ['Mistä sinä olet kotoisin?', 'Where are you from?', 'Nerelisin?'],
      ['Miten menee?', 'How are things?', 'Nasıl gidiyor?'],
      ['Paljonko tämä maksaa?', 'How much does this cost?', 'Bu ne kadar?']
    ],
    quiz: [
      { fi: '{Missä} sinä asut? – Tampereella.', base: 'missä / mistä / mihin', en: 'Where do you live? – In Tampere.', tr: 'Nerede oturuyorsun? – Tampere\'de.' },
      { fi: '{Mistä} sinä tulet? – Kaupasta.', base: 'missä / mistä / mihin', en: 'Where are you coming from? – From the shop.', tr: 'Nereden geliyorsun? – Marketten.' },
      { fi: '{Mihin} te menette? – Elokuviin.', base: 'missä / mistä / mihin', en: 'Where are you going? – To the cinema.', tr: 'Nereye gidiyorsunuz? – Sinemaya.' },
      { fi: '{Kenen} laukku tämä on? – Annan.', base: 'kuka', en: 'Whose bag is this? – Anna\'s.', tr: 'Bu kimin çantası? – Anna\'nın.' },
      { fi: '{Mitä} sinä teet? – Luen kirjaa.', base: 'mikä', en: 'What are you doing? – I\'m reading a book.', tr: 'Ne yapıyorsun? – Kitap okuyorum.' },
      { fi: '{Kenelle} soitat? – Äidille.', base: 'kuka', en: 'Who are you calling? – Mum.', tr: 'Kimi arıyorsun? – Annemi.' },
      { fi: '{Milloin} juna lähtee? – Kello kahdeksan.', base: 'milloin', en: 'When does the train leave? – At eight.', tr: 'Tren ne zaman kalkıyor? – Saat sekizde.' },
      { fi: '{Miksi} olet myöhässä? – Koska bussi oli myöhässä.', base: 'miksi', en: 'Why are you late? – Because the bus was late.', tr: 'Neden geç kaldın? – Çünkü otobüs gecikti.' },
      { fi: 'Kuinka {paljon} kahvi maksaa? – Kolme euroa.', base: 'paljon', en: 'How much is the coffee? – Three euros.', tr: 'Kahve ne kadar? – Üç avro.' },
      { fi: '{Mikä} tämä on? – Se on sanakirja.', base: 'mikä', en: 'What is this? – It\'s a dictionary.', tr: 'Bu ne? – Sözlük.' }
    ]
  },
  {
    id: 'days-months-clock', lv: 1, icon: 'calendar',
    title: { en: 'Days, months and the clock', tr: 'Günler, aylar ve saat' },
    summary: { en: 'maanantai, tammikuu, kello on viisi, puoli kuusi.', tr: 'maanantai, tammikuu, kello on viisi, puoli kuusi.' },
    body: {
      en: [
        'Days and months are written with a **small letter**. Days: *maanantai, tiistai, keskiviikko, torstai, perjantai, lauantai, sunnuntai*. "On Monday" = **maanantaina**.',
        'All months end in **-kuu** ("moon"): *tammikuu, helmikuu, maaliskuu, huhtikuu, toukokuu, kesäkuu, heinäkuu, elokuu, syyskuu, lokakuu, marraskuu, joulukuu*. "In May" = **toukokuussa**.',
        'Telling the time: *Paljonko kello on?* or *Mitä kello on?* – **Kello on viisi** (It\'s five). Half hours look **forward** to the next hour: **puoli kuusi** is literally "half six", but it means **5.30** (half of the way to six). Careful: British "half six" means 6.30! Quarters: **varttia yli** viisi (5.15), **varttia vaille** kuusi (5.45). Minutes work the same way: *kymmenen yli kaksi* (2.10), *viittä vaille kolme* (2.55).',
        '"At five" is **kello viisi** or **viideltä**. Timetables use the 24-hour clock: *kello 17.30* = *seitsemäntoista kolmekymmentä*.'
      ],
      tr: [
        'Günler ve aylar **küçük harfle** yazılır. Günler: *maanantai* (pazartesi), *tiistai* (salı), *keskiviikko* (çarşamba, "hafta ortası"), *torstai* (perşembe), *perjantai* (cuma), *lauantai* (cumartesi), *sunnuntai* (pazar). "Pazartesi günü" = **maanantaina**.',
        'Ayların hepsi **-kuu** ("ay") ile biter: *tammikuu* (ocak), *helmikuu* (şubat), *maaliskuu* (mart), *huhtikuu* (nisan), *toukokuu* (mayıs), *kesäkuu* (haziran), *heinäkuu* (temmuz), *elokuu* (ağustos), *syyskuu* (eylül), *lokakuu* (ekim), *marraskuu* (kasım), *joulukuu* (aralık). "Mayısta" = **toukokuussa**.',
        'Saat sormak: *Paljonko kello on?* ya da *Mitä kello on?* (Saat kaç?) – **Kello on viisi** (Saat beş). Buçuklar **ileriye** bakar: **puoli kuusi** kelimesi kelimesine "yarım altı", yani altıya doğru yarım saat: **5.30** (beş buçuk)! Çeyrekler: **varttia yli** viisi (beşi çeyrek geçiyor), **varttia vaille** kuusi (altıya çeyrek var). Dakikalar da aynı mantıkla: *kymmenen yli kaksi* (ikiyi on geçiyor), *viittä vaille kolme* (üçe beş var). Türkçedeki *geçiyor / var* ile birebir.',
        '"Saat beşte" = **kello viisi** ya da **viideltä**. Tarifelerde 24 saat sistemi kullanılır: *kello 17.30* = *seitsemäntoista kolmekymmentä*.'
      ]
    },
    table: {
      head: { en: ['Time', 'In Finnish'], tr: ['Saat', 'Fincesi'] },
      rows: [['5.00', 'kello on viisi'], ['5.15', 'varttia yli viisi'], ['5.30', 'puoli kuusi'], ['5.45', 'varttia vaille kuusi'], ['2.10', 'kymmenen yli kaksi'], ['2.55', 'viittä vaille kolme']]
    },
    examples: [
      ['Mitä kello on? – Se on puoli kahdeksan.', 'What time is it? – It\'s half past seven.', 'Saat kaç? – Yedi buçuk.'],
      ['Kauppa on auki maanantaista perjantaihin.', 'The shop is open from Monday to Friday.', 'Mağaza pazartesiden cumaya açık.'],
      ['Joulu on joulukuussa.', 'Christmas is in December.', 'Noel aralıkta.'],
      ['Tavataan lauantaina kello kaksi.', 'Let\'s meet on Saturday at two.', 'Cumartesi saat ikide buluşalım.']
    ],
    quiz: [
      { fi: 'Kello on puoli {seitsemän}.', base: '6.30', en: 'It\'s half past six.', tr: 'Saat altı buçuk.' },
      { fi: 'Kello on varttia vaille {neljä}.', base: '3.45', en: 'It\'s a quarter to four.', tr: 'Saat dörde çeyrek var.' },
      { fi: 'Elokuva alkaa kello {yhdeksän}.', base: '9', en: 'The film starts at nine.', tr: 'Film saat dokuzda başlıyor.' },
      { fi: 'Tapaamme {keskiviikkona}.', base: 'keskiviikko', en: 'We\'ll meet on Wednesday.', tr: 'Çarşamba günü buluşuyoruz.' },
      { fi: 'Kesäloma alkaa {kesäkuussa}.', base: 'kesäkuu', en: 'The summer holiday starts in June.', tr: 'Yaz tatili haziranda başlıyor.' },
      { fi: 'Lunta sataa usein {tammikuussa}.', base: 'tammikuu', en: 'It often snows in January.', tr: 'Ocakta sık sık kar yağar.' },
      { fi: 'Kauppa on kiinni {sunnuntaina}.', base: 'sunnuntai', en: 'The shop is closed on Sunday.', tr: 'Mağaza pazar günü kapalı.' },
      { fi: 'Herään joka aamu {seitsemältä}.', base: 'seitsemän', en: 'I wake up at seven every morning.', tr: 'Her sabah yedide uyanırım.' },
      { fi: 'Kello on viittä vaille {kaksi}.', base: '1.55', en: 'It\'s five to two.', tr: 'Saat ikiye beş var.' },
      { fi: 'Koulu alkaa {elokuussa}.', base: 'elokuu', en: 'School starts in August.', tr: 'Okul ağustosta başlıyor.' }
    ]
  },
  {
    id: 'adjective-agreement', lv: 1, icon: 'swatch-book',
    title: { en: 'Adjectives agree', tr: 'Sıfat uyumu' },
    summary: { en: 'isossa talossa, punaisia omenoita.', tr: 'isossa talossa, punaisia omenoita.' },
    body: {
      en: [
        'In Finnish an adjective in front of a noun takes the **same case and number** as the noun: *iso talo* → **isossa talossa** (in a big house), **isoon taloon** (into a big house), **isot talot** (the big houses).',
        'In English the adjective never changes. In Finnish it works like an echo: whatever ending the noun gets, the adjective repeats it: *punainen omena* → **punaisia omenoita** (red apples, partitive plural).',
        'Adjectives have stems just like nouns: *pieni* → *pienessä*, *uusi* → *uudessa*, *punainen* → *punaisessa*, *kaunis* → *kauniissa*. Learn the stem once and every ending works.',
        'Demonstratives agree too: **tässä** *pienessä kylässä* (in this small village). But after *olla* the adjective is not an echo: *Talo on iso* (The house is big).'
      ],
      tr: [
        'Fincede ismin önündeki sıfat, isimle **aynı hâli ve sayıyı** alır: *iso talo* (büyük ev) → **isossa talossa** (büyük evde), **isoon taloon** (büyük eve), **isot talot** (büyük evler).',
        'Türkçeden en büyük fark bu: Türkçede *büyük evde* deriz, sıfat hiç değişmez. Fincede sıfat, ismin ekini yankı gibi tekrarlar; sanki "büyükte evde" diyormuşuz gibi: *punainen omena* (kırmızı elma) → **punaisia omenoita** (kırmızı elmalar, çoğul partitif).',
        'Sıfatların da isimler gibi gövdeleri vardır: *pieni* → *pienessä*, *uusi* → *uudessa*, *punainen* → *punaisessa*, *kaunis* → *kauniissa*. Gövdeyi bir kez öğren, bütün ekler onunla çalışır.',
        'İşaret sıfatları da uyar: **tässä** *pienessä kylässä* (bu küçük köyde). Ama *olla* fiilinden sonra sıfat yüklemdir, ismin ekini tekrarlamaz: *Talo on iso* (Ev büyük).'
      ]
    },
    table: {
      head: { en: ['Basic form', 'With an ending'], tr: ['Temel hâl', 'Ekli hâl'] },
      rows: [['iso talo', 'isossa talossa'], ['pieni kylä', 'pienessä kylässä'], ['uusi auto', 'uudella autolla'], ['punainen omena', 'punaisia omenoita'], ['kaunis kukka', 'kauniita kukkia'], ['vanha mies', 'vanhalle miehelle']]
    },
    examples: [
      ['Asun isossa talossa.', 'I live in a big house.', 'Büyük bir evde oturuyorum.'],
      ['Ostin punaisia omenoita.', 'I bought some red apples.', 'Kırmızı elma aldım.'],
      ['Hän ajaa uudella autolla.', 'He drives a new car.', 'Yeni bir araba kullanıyor.'],
      ['Pidän kylmästä vedestä.', 'I like cold water.', 'Soğuk suyu severim.']
    ],
    quiz: [
      { fi: 'Asumme {pienessä} kylässä.', base: 'pieni', en: 'We live in a small village.', tr: 'Küçük bir köyde yaşıyoruz.' },
      { fi: 'Pöydällä on {punaisia} kukkia.', base: 'punainen', en: 'There are red flowers on the table.', tr: 'Masada kırmızı çiçekler var.' },
      { fi: 'Menen {uuteen} kauppaan.', base: 'uusi', en: 'I\'m going to the new shop.', tr: 'Yeni markete gidiyorum.' },
      { fi: 'Hän asuu {vanhassa} talossa.', base: 'vanha', en: 'She lives in an old house.', tr: 'Eski bir evde oturuyor.' },
      { fi: 'Juon {kylmää} vettä.', base: 'kylmä', en: 'I\'m drinking cold water.', tr: 'Soğuk su içiyorum.' },
      { fi: 'Annan kirjan {nuorelle} pojalle.', base: 'nuori', en: 'I give the book to the young boy.', tr: 'Kitabı genç oğlana veriyorum.' },
      { fi: '{Isot} koirat haukkuvat.', base: 'iso', en: 'The big dogs are barking.', tr: 'Büyük köpekler havlıyor.' },
      { fi: 'Istun {mukavalla} tuolilla.', base: 'mukava', en: 'I\'m sitting on a comfortable chair.', tr: 'Rahat bir sandalyede oturuyorum.' },
      { fi: 'Tulen {suuresta} kaupungista.', base: 'suuri', en: 'I come from a big city.', tr: 'Büyük bir şehirden geliyorum.' },
      { fi: 'Tässä {kauniissa} puistossa on paljon lintuja.', base: 'kaunis', en: 'There are many birds in this beautiful park.', tr: 'Bu güzel parkta çok kuş var.' }
    ]
  },
  {
    id: 'postpositions', lv: 2, icon: 'map',
    title: { en: 'Postpositions: kanssa, alla, päällä…', tr: 'Son çekim edatları: kanssa, alla, päällä…' },
    summary: { en: '"With", "under", "next to" come after a genitive: talon edessä.', tr: 'Türkçedeki gibi sonra gelir: talon edessä = evin önünde.' },
    body: {
      en: [
        'Finnish says "the house\'s front-in": **talon edessä** = in front of the house. These words come **after** the noun, and the noun goes into the **genitive** (-n).',
        'Common ones: **kanssa** (with), **alla** (under), **päällä** (on top of), **vieressä** (next to), **edessä** (in front of), **takana** (behind), **välissä** (between), **luona** (at someone\'s place), **lähellä** (near).',
        'Many have three forms, like the location cases: **alla – alle – alta** (under / to under / from under), **edessä – eteen – edestä**, **luona – luo – luota**. *Kissa menee pöydän alle* (The cat goes under the table).',
        'With pronouns, use the genitive pronoun, usually with a possessive suffix: **minun kanssani** (with me), **sinun luonasi** (at your place). *välissä* needs two things: *talon ja kaupan välissä*.'
      ],
      tr: [
        'Türkçe konuşanlar için çok kolay! Fince de "evin önünde" der: **talon edessä**. Bu kelimeler ismin **arkasından** gelir ve isim **genitif** (-n) hâlini alır; tıpkı Türkçedeki *evin önünde, masanın altında* gibi.',
        'Sık kullanılanlar: **kanssa** (ile, birlikte), **alla** (altında), **päällä** (üstünde), **vieressä** (yanında), **edessä** (önünde), **takana** (arkasında), **välissä** (arasında), **luona** (birinin yanında / evinde), **lähellä** (yakınında).',
        'Çoğunun yer hâlleri gibi üç biçimi vardır: **alla – alle – alta** (altında / altına / altından), **edessä – eteen – edestä**, **luona – luo – luota**. *Kissa menee pöydän alle* (Kedi masanın altına gidiyor).',
        'Zamirlerle genitif zamir kullanılır, çoğunlukla iyelik ekiyle: **minun kanssani** (benimle), **sinun luonasi** (senin evinde). *välissä* iki şey ister: *talon ja kaupan välissä* (ev ile marketin arasında).'
      ]
    },
    table: {
      head: { en: ['Where?', 'Where to?', 'Where from?'], tr: ['Nerede?', 'Nereye?', 'Nereden?'] },
      rows: [['alla', 'alle', 'alta'], ['päällä', 'päälle', 'päältä'], ['vieressä', 'viereen', 'vierestä'], ['edessä', 'eteen', 'edestä'], ['takana', 'taakse', 'takaa'], ['luona', 'luo', 'luota']]
    },
    examples: [
      ['Kissa nukkuu sängyn alla.', 'The cat is sleeping under the bed.', 'Kedi yatağın altında uyuyor.'],
      ['Menen elokuviin ystävän kanssa.', 'I\'m going to the cinema with a friend.', 'Bir arkadaşımla sinemaya gidiyorum.'],
      ['Asun kirjaston vieressä.', 'I live next to the library.', 'Kütüphanenin yanında oturuyorum.'],
      ['Olin eilen isoäidin luona.', 'I was at Grandma\'s yesterday.', 'Dün büyükannemdeydim.']
    ],
    quiz: [
      { fi: 'Kirja on {pöydän} päällä.', base: 'pöytä', en: 'The book is on the table.', tr: 'Kitap masanın üstünde.' },
      { fi: 'Lapset leikkivät {talon} takana.', base: 'talo', en: 'The children are playing behind the house.', tr: 'Çocuklar evin arkasında oynuyor.' },
      { fi: 'Odotan sinua {aseman} edessä.', base: 'asema', en: 'I\'ll wait for you in front of the station.', tr: 'Seni istasyonun önünde bekliyorum.' },
      { fi: 'Menen kauppaan {äidin} kanssa.', base: 'äiti', en: 'I\'m going to the shop with Mum.', tr: 'Annemle markete gidiyorum.' },
      { fi: 'Pankki on {koulun} vieressä.', base: 'koulu', en: 'The bank is next to the school.', tr: 'Banka okulun yanında.' },
      { fi: 'Kissa juoksi {sängyn} alle.', base: 'sänky', en: 'The cat ran under the bed.', tr: 'Kedi yatağın altına koştu.' },
      { fi: 'Kauppa on pankin ja {kirjaston} välissä.', base: 'kirjasto', en: 'The shop is between the bank and the library.', tr: 'Market, banka ile kütüphanenin arasında.' },
      { fi: 'Olen viikonlopun {Matin} luona.', base: 'Matti', en: 'I\'m spending the weekend at Matti\'s.', tr: 'Hafta sonunu Matti\'nin evinde geçiriyorum.' },
      { fi: 'Tule {minun} kanssani!', base: 'minä', en: 'Come with me!', tr: 'Benimle gel!' },
      { fi: 'Avaimet olivat {tyynyn} alla.', base: 'tyyny', en: 'The keys were under the pillow.', tr: 'Anahtarlar yastığın altındaydı.' }
    ]
  },
  {
    id: 'ordinals', lv: 2, icon: 'medal',
    title: { en: 'Ordinal numbers and dates', tr: 'Sıra sayıları ve tarihler' },
    summary: { en: 'ensimmäinen, toinen, kolmas… and kolmas toukokuuta.', tr: 'ensimmäinen, toinen, kolmas… ve kolmas toukokuuta.' },
    body: {
      en: [
        'Ordinals answer "which one in order?". The first two are irregular: **ensimmäinen** (1st), **toinen** (2nd). From 3 on, add **-s** to a shortened stem: *kolmas, neljäs, viides, kuudes, seitsemäs, kahdeksas, yhdeksäs, kymmenes*.',
        'Teens and tens: *yhdestoista* (11th), *kahdestoista* (12th), *kahdeskymmenes* (20th), *kahdeskymmenesensimmäinen* (21st). In writing, a **dot** after the number marks an ordinal: **3.** = *kolmas*.',
        'Ordinals inflect like adjectives and agree with the noun. The stem of the -s ordinals is **-nne-** (partitive **-tta**): *kolmas* → *kolmannen*, *kolmatta*; *Asun **kolmannessa** kerroksessa* (on the third floor).',
        'Dates: the day is an ordinal and the month is in the **partitive**: *kolmas toukokuuta* (3 May), written **3.5.** "On 3 May" uses the essive: **kolmantena toukokuuta**.'
      ],
      tr: [
        'Sıra sayıları "kaçıncı?" sorusuna cevap verir. İlk ikisi düzensizdir: **ensimmäinen** (birinci), **toinen** (ikinci). 3\'ten sonra kısaltılmış gövdeye **-s** eklenir: *kolmas, neljäs, viides, kuudes, seitsemäs, kahdeksas, yhdeksäs, kymmenes*. Türkçedeki *-ıncı* eki gibi düşün.',
        '11–19 arası ve onluklar: *yhdestoista* (11.), *kahdestoista* (12.), *kahdeskymmenes* (20.), *kahdeskymmenesensimmäinen* (21.). Yazıda sayıdan sonraki **nokta** sıra sayısını gösterir: **3.** = *kolmas*. Türkçede de *3.* "üçüncü" diye okunur!',
        'Sıra sayıları sıfat gibi çekimlenir ve isme uyar. -s ile biten sıra sayılarının gövdesi **-nne-** olur (partitifte **-tta**): *kolmas* → *kolmannen*, *kolmatta*; *Asun **kolmannessa** kerroksessa* (Üçüncü katta oturuyorum).',
        'Tarihler: gün sıra sayısıdır, ay ise **partitif** hâldedir: *kolmas toukokuuta* (3 Mayıs), yazılışı **3.5.** "3 Mayıs\'ta" demek için essif kullanılır: **kolmantena toukokuuta**.'
      ]
    },
    table: {
      head: { en: ['Number', 'Ordinal'], tr: ['Sayı', 'Sıra sayısı'] },
      rows: [['1.', 'ensimmäinen'], ['2.', 'toinen'], ['3.', 'kolmas'], ['4.', 'neljäs'], ['5.', 'viides'], ['6.', 'kuudes'], ['10.', 'kymmenes'], ['20.', 'kahdeskymmenes']]
    },
    examples: [
      ['Tämä on ensimmäinen kertani Suomessa.', 'This is my first time in Finland.', 'Bu, Finlandiya\'ya ilk gelişim.'],
      ['Asumme toisessa kerroksessa.', 'We live on the second floor.', 'İkinci katta oturuyoruz.'],
      ['Tänään on kymmenes kesäkuuta.', 'Today is the tenth of June.', 'Bugün 10 Haziran.'],
      ['Synnyin viidentenä maaliskuuta.', 'I was born on the fifth of March.', '5 Mart\'ta doğdum.']
    ],
    quiz: [
      { fi: 'Tammikuu on vuoden {ensimmäinen} kuukausi.', base: 'yksi', en: 'January is the first month of the year.', tr: 'Ocak, yılın ilk ayıdır.' },
      { fi: 'Helmikuu on vuoden {toinen} kuukausi.', base: 'kaksi', en: 'February is the second month of the year.', tr: 'Şubat, yılın ikinci ayıdır.' },
      { fi: 'Tänään on {kolmas} toukokuuta.', base: 'kolme', en: 'Today is the third of May.', tr: 'Bugün 3 Mayıs.' },
      { fi: 'Hän tuli kilpailussa {kolmanneksi}.', base: 'kolme', en: 'She came third in the race.', tr: 'Yarışta üçüncü oldu.' },
      { fi: 'Toimisto on {viidennessä} kerroksessa.', base: 'viisi', en: 'The office is on the fifth floor.', tr: 'Ofis beşinci katta.' },
      { fi: 'Tänään on {kuudes} joulukuuta, itsenäisyyspäivä.', base: 'kuusi', en: 'Today is the sixth of December, Independence Day.', tr: 'Bugün 6 Aralık, Bağımsızlık Günü.' },
      { fi: 'Huomenna on {kahdestoista} lokakuuta, syntymäpäiväni.', base: 'kaksitoista', en: 'Tomorrow is the twelfth of October, my birthday.', tr: 'Yarın 12 Ekim, doğum günüm.' },
      { fi: 'Muutimme tänne {kahdeksantena} elokuuta.', base: 'kahdeksan', en: 'We moved here on the eighth of August.', tr: 'Buraya 8 Ağustos\'ta taşındık.' },
      { fi: 'Tämä on {kymmenes} kerta, kun soitan sinulle!', base: 'kymmenen', en: 'This is the tenth time I\'ve called you!', tr: 'Seni onuncu kez arıyorum!' },
      { fi: 'Poikani on {neljännellä} luokalla.', base: 'neljä', en: 'My son is in fourth grade.', tr: 'Oğlum dördüncü sınıfta.' }
    ]
  },
  {
    id: 'pronoun-cases', lv: 2, icon: 'contact',
    title: { en: 'Pronouns in every case', tr: 'Zamirlerin çekimi' },
    summary: { en: 'minä, minun, minua, minulla, minulle, minusta… and tämä, tuo, se.', tr: 'minä, minun, minua, minulla, minulle, minusta… ve tämä, tuo, se.' },
    body: {
      en: [
        'Personal pronouns take the same endings as nouns, added to a stem: **minu-**, **sinu-**, **häne-**, **mei-**, **tei-**, **hei-**. So *minulla* (I have / on me), *minulle* (to me), *minusta* (about me / in my opinion), *minuun* (*luottaa minuun*, to trust me).',
        'A few forms are special: partitive **minua, sinua, häntä, meitä, teitä, heitä**; genitive **minun, sinun, hänen, meidän, teidän, heidän**; and the object form in **-t**: **minut, sinut, hänet, meidät, teidät, heidät** (*Näin hänet* = I saw him).',
        'The demonstratives **tämä** (this), **tuo** (that, over there) and **se** (it, that) have the stems **tä-**, **tuo-**, **si-**: *tässä, tuossa, siinä*; *tästä, tuosta, siitä*; partitive *tätä, tuota, sitä*. Plural **nämä, nuo, ne** → *näissä, noissa, niissä*.',
        'In everyday speech **se** and **ne** are used for people too, but in standard Finnish use *hän* and *he* for people.'
      ],
      tr: [
        'Şahıs zamirleri isimlerle aynı ekleri alır, ekler bir gövdeye gelir: **minu-**, **sinu-**, **häne-**, **mei-**, **tei-**, **hei-**. Yani *minulla* (bende), *minulle* (bana), *minusta* (benden / bence), *minuun* (*luottaa minuun*, bana güvenmek). Türkçedeki *ben → bende, bana, benden* çekimi gibi.',
        'Birkaç biçim özeldir: partitif **minua, sinua, häntä, meitä, teitä, heitä**; genitif **minun, sinun, hänen, meidän, teidän, heidän** (benim, senin…); **-t** ile nesne biçimi: **minut, sinut, hänet, meidät, teidät, heidät** (*Näin hänet* = Onu gördüm).',
        'İşaret zamirleri **tämä** (bu), **tuo** (şu, oradaki) ve **se** (o) şu gövdeleri alır: **tä-**, **tuo-**, **si-**: *tässä, tuossa, siinä* (bunda, şunda, onda); *tästä, tuosta, siitä*; partitif *tätä, tuota, sitä*. Çoğul **nämä, nuo, ne** → *näissä, noissa, niissä*. Türkçedeki bu / şu / o üçlüsüne çok benzer.',
        'Günlük konuşmada **se** ve **ne** insanlar için de kullanılır, ama standart dilde insanlar için *hän* ve *he* kullan.'
      ]
    },
    table: {
      head: { en: ['I', 'you', 'he / she'], tr: ['ben', 'sen', 'o'] },
      rows: [['minä', 'sinä', 'hän'], ['minun', 'sinun', 'hänen'], ['minua', 'sinua', 'häntä'], ['minut', 'sinut', 'hänet'], ['minulla', 'sinulla', 'hänellä'], ['minulle', 'sinulle', 'hänelle'], ['minusta', 'sinusta', 'hänestä'], ['minuun', 'sinuun', 'häneen']]
    },
    examples: [
      ['Minulla on kylmä.', 'I\'m cold.', 'Üşüyorum.'],
      ['Minusta tämä on hyvä idea.', 'I think this is a good idea.', 'Bence bu iyi bir fikir.'],
      ['Soita minulle huomenna!', 'Call me tomorrow!', 'Yarın beni ara!'],
      ['Mikä tuo on? – Se on kirjasto.', 'What\'s that? – It\'s a library.', 'Şu ne? – O bir kütüphane.']
    ],
    quiz: [
      { fi: 'Annan kirjan {sinulle}.', base: 'sinä', en: 'I\'ll give the book to you.', tr: 'Kitabı sana veriyorum.' },
      { fi: 'Rakastan {häntä}.', base: 'hän', en: 'I love her.', tr: 'Onu seviyorum.' },
      { fi: '{Heillä} on iso talo.', base: 'he', en: 'They have a big house.', tr: 'Onların büyük bir evi var.' },
      { fi: '{Minusta} tämä kirja on tylsä.', base: 'minä', en: 'I think this book is boring.', tr: 'Bence bu kitap sıkıcı.' },
      { fi: 'Odotan {teitä} kahvilassa.', base: 'te', en: 'I\'ll wait for you in the café.', tr: 'Sizi kafede bekliyorum.' },
      { fi: 'Vien {sinut} kotiin.', base: 'sinä', en: 'I\'ll take you home.', tr: 'Seni eve bırakayım.' },
      { fi: 'Tämä kirja on {minun}.', base: 'minä', en: 'This book is mine.', tr: 'Bu kitap benim.' },
      { fi: 'Asun {tässä} talossa.', base: 'tämä', en: 'I live in this house.', tr: 'Bu evde oturuyorum.' },
      { fi: 'Pidätkö {tuosta} takista?', base: 'tuo', en: 'Do you like that coat?', tr: 'Şu ceketi beğendin mi?' },
      { fi: 'En tiedä {siitä} mitään.', base: 'se', en: 'I don\'t know anything about it.', tr: 'Onun hakkında hiçbir şey bilmiyorum.' }
    ]
  },
  {
    id: 'verb-rection', lv: 3, icon: 'magnet',
    title: { en: 'Verbs that choose a case', tr: 'Belirli hâl isteyen fiiller' },
    summary: { en: 'pitää kahvista, auttaa ystävää, tottua kylmään.', tr: 'pitää kahvista, auttaa ystävää, tottua kylmään.' },
    body: {
      en: [
        'Many verbs decide the case of the word that follows. Learn the verb **together with its case**, the way you learn English *listen to* or *depend on*. The Finnish case is often surprising: "to like" takes "out of": *Pidän **kahvista***.',
        '**Elative (-sta/-stä)**: *pitää* (like), *tykätä* (like, informal), *kiinnostua* (get interested in), *nauttia* (enjoy), *puhua* (talk about), *unelmoida* (dream of). *Tykkään **sinusta***.',
        '**Partitive**: *auttaa* (help), *odottaa* (wait for), *ajatella* (think about), *rakastaa* (love), *kuunnella* (listen to), *katsoa* (look at). *Odotan **bussia***, *Ajattelen **sinua***.',
        '**Illative (-Vn, -hVn, -seen)**: *tottua* (get used to), *luottaa* (trust), *rakastua* (fall in love with), *tutustua* (get to know), *osallistua* (take part in). *Olen tottunut **kylmään***, *Luotan **sinuun***.'
      ],
      tr: [
        'Birçok fiil, arkasından gelen kelimenin hâlini belirler. Fiili **hâliyle birlikte** öğren; tıpkı Türkçede *-den korkmak*, *-e güvenmek* gibi. Ama hâller her zaman Türkçeyle örtüşmez: Türkçede yardım "-e" edilir, Fincede *auttaa* partitif ister: *Autan **äitiä*** (Anneme yardım ediyorum).',
        '**Elatif (-sta/-stä)**: *pitää* (sevmek, hoşlanmak – Türkçedeki *-den hoşlanmak* gibi!), *tykätä* (sevmek, gündelik), *kiinnostua* (-e ilgi duymak), *nauttia* (-den keyif almak), *puhua* (-den bahsetmek), *unelmoida* (-i hayal etmek). *Tykkään **sinusta*** (Senden hoşlanıyorum).',
        '**Partitif**: *auttaa* (-e yardım etmek), *odottaa* (-i beklemek), *ajatella* (-i düşünmek), *rakastaa* (-i sevmek), *kuunnella* (-i dinlemek), *katsoa* (-e bakmak). *Odotan **bussia*** (Otobüsü bekliyorum), *Ajattelen **sinua*** (Seni düşünüyorum).',
        '**İllatif (-Vn, -hVn, -seen)**: *tottua* (-e alışmak), *luottaa* (-e güvenmek), *rakastua* (-e âşık olmak), *tutustua* (-i tanımak, ile tanışmak), *osallistua* (-e katılmak). *Olen tottunut **kylmään*** (Soğuğa alıştım), *Luotan **sinuun*** (Sana güveniyorum).'
      ]
    },
    table: {
      head: { en: ['Verb + case', 'Example'], tr: ['Fiil + hâl', 'Örnek'] },
      rows: [['pitää + -sta', 'Pidän musiikista.'], ['tykätä + -sta', 'Tykkään sinusta.'], ['kiinnostua + -sta', 'Kiinnostuin historiasta.'], ['auttaa + partitiivi', 'Autan ystävää.'], ['odottaa + partitiivi', 'Odotan junaa.'], ['ajatella + partitiivi', 'Ajattelen sinua.'], ['tottua + -Vn', 'Olen tottunut kylmään.'], ['luottaa + -Vn', 'Luotan sinuun.']]
    },
    examples: [
      ['Tykkäätkö jäätelöstä?', 'Do you like ice cream?', 'Dondurma sever misin?'],
      ['Voitko auttaa minua?', 'Can you help me?', 'Bana yardım edebilir misin?'],
      ['Olen jo tottunut pimeään.', 'I\'ve already got used to the dark.', 'Karanlığa çoktan alıştım.'],
      ['Hän kiinnostui suomen kielestä.', 'She became interested in the Finnish language.', 'Fince ile ilgilenmeye başladı.']
    ],
    quiz: [
      { fi: 'Pidän {suklaasta}.', base: 'suklaa', en: 'I like chocolate.', tr: 'Çikolatayı severim.' },
      { fi: 'Tykkäätkö {jalkapallosta}?', base: 'jalkapallo', en: 'Do you like football?', tr: 'Futbolu sever misin?' },
      { fi: 'Autan {naapuria} usein.', base: 'naapuri', en: 'I often help the neighbour.', tr: 'Komşuya sık sık yardım ederim.' },
      { fi: 'Odotan {junaa} asemalla.', base: 'juna', en: 'I\'m waiting for the train at the station.', tr: 'İstasyonda treni bekliyorum.' },
      { fi: 'Ajattelen {kesää} koko ajan.', base: 'kesä', en: 'I think about summer all the time.', tr: 'Sürekli yazı düşünüyorum.' },
      { fi: 'Hän kiinnostui {taiteesta}.', base: 'taide', en: 'He became interested in art.', tr: 'Sanata ilgi duymaya başladı.' },
      { fi: 'En ole vielä tottunut {talveen}.', base: 'talvi', en: 'I haven\'t got used to the winter yet.', tr: 'Kışa henüz alışmadım.' },
      { fi: 'Luotan {sinuun}.', base: 'sinä', en: 'I trust you.', tr: 'Sana güveniyorum.' },
      { fi: 'Lapset odottavat {joulua}.', base: 'joulu', en: 'The children are waiting for Christmas.', tr: 'Çocuklar Noel\'i bekliyor.' },
      { fi: 'Tutustuin {Liisaan} kurssilla.', base: 'Liisa', en: 'I got to know Liisa on the course.', tr: 'Liisa ile kursta tanıştım.' }
    ]
  },
  {
    id: 'colloquial-finnish', lv: 3, icon: 'speech',
    title: { en: 'Spoken Finnish (puhekieli)', tr: 'Konuşma dili (puhekieli)' },
    summary: { en: 'mä, sä, oon, mennään! Recognize it, write the standard form.', tr: 'mä, sä, oon, mennään! Tanı, ama standart biçimi yaz.' },
    body: {
      en: [
        'Finns write standard Finnish (*yleiskieli*) but speak a relaxed **puhekieli**. You will hear it everywhere, so learn to **recognize** it. When you write, use the standard forms.',
        'Pronouns shrink: **minä → mä**, **sinä → sä**, and *hän / he* are usually **se / ne**. Possessive suffixes drop and the genitive shortens: *minun kirjani* → **mun kirja**, *sinun autosi* → **sun auto**.',
        'Verbs get shorter: *olen → **oon***, *olet → **oot***, *tulen → **tuun***, *menen → **meen***. "We" uses the passive form: *me menemme → **me mennään***, and **Mennään!** means "Let\'s go!". The *-vat* of "they" disappears: *he puhuvat → **ne puhuu***.',
        'Questions add **-ks**: *Onko sinulla aikaa?* → **Onks sulla aikaa?**, *Tuletko?* → **Tuleks sä?**. Other common forms: *tämä → **tää***, *ei ole → **ei oo***, *minulla → **mulla***, *sinulle → **sulle***, and *joo* = yes.'
      ],
      tr: [
        'Finliler yazarken standart Fince (*yleiskieli*) kullanır, ama konuşurken rahat bir **puhekieli** konuşur. Her yerde duyacaksın, o yüzden onu **tanımayı** öğren. Yazarken standart biçimleri kullan.',
        'Zamirler kısalır: **minä → mä**, **sinä → sä**; *hän / he* yerine de genellikle **se / ne** denir. İyelik ekleri düşer, genitif kısalır: *minun kirjani* → **mun kirja**, *sinun autosi* → **sun auto**. Türkçedeki *geliyorum → geliyom* gibi kısalmaları düşün.',
        'Fiiller kısalır: *olen → **oon***, *olet → **oot***, *tulen → **tuun***, *menen → **meen***. "Biz" için edilgen biçim kullanılır: *me menemme → **me mennään***; **Mennään!** "Hadi gidelim!" demektir. "Onlar"ın *-vat* eki düşer: *he puhuvat → **ne puhuu***.',
        'Sorular **-ks** alır: *Onko sinulla aikaa?* → **Onks sulla aikaa?**, *Tuletko?* → **Tuleks sä?**. Diğer sık biçimler: *tämä → **tää***, *ei ole → **ei oo***, *minulla → **mulla***, *sinulle → **sulle***; *joo* = evet.'
      ]
    },
    table: {
      head: { en: ['Spoken', 'Standard'], tr: ['Konuşma dili', 'Standart'] },
      rows: [['mä', 'minä'], ['sä', 'sinä'], ['mun kirja', 'minun kirjani'], ['mulla', 'minulla'], ['oon', 'olen'], ['oot', 'olet'], ['me mennään', 'me menemme'], ['onks', 'onko'], ['tää', 'tämä']]
    },
    examples: [
      ['Mä oon kotona.', 'I\'m at home. (Standard: Minä olen kotona.)', 'Evdeyim. (Standart: Minä olen kotona.)'],
      ['Onks sulla nälkä?', 'Are you hungry? (Standard: Onko sinulla nälkä?)', 'Acıktın mı? (Standart: Onko sinulla nälkä?)'],
      ['Mennään kahville!', 'Let\'s go for a coffee!', 'Hadi kahve içmeye gidelim!'],
      ['Mun auto on tuolla.', 'My car is over there. (Standard: Minun autoni on tuolla.)', 'Arabam şurada. (Standart: Minun autoni on tuolla.)']
    ],
    quiz: [
      { fi: 'Mä oon väsynyt. → Minä {olen} väsynyt.', base: 'olla', en: 'I\'m tired.', tr: 'Yorgunum.' },
      { fi: 'Sä oot myöhässä. → Sinä {olet} myöhässä.', base: 'olla', en: 'You\'re late.', tr: 'Geç kaldın.' },
      { fi: 'Mä tuun huomenna. → Minä {tulen} huomenna.', base: 'tulla', en: 'I\'ll come tomorrow.', tr: 'Yarın gelirim.' },
      { fi: 'Onks sulla aikaa? → {Onko} sinulla aikaa?', base: 'olla', en: 'Do you have time?', tr: 'Vaktin var mı?' },
      { fi: 'Mulla on nälkä. → {Minulla} on nälkä.', base: 'minä', en: 'I\'m hungry.', tr: 'Acıktım.' },
      { fi: 'Me mennään kauppaan. → Me {menemme} kauppaan.', base: 'mennä', en: 'We\'re going to the shop.', tr: 'Markete gidiyoruz.' },
      { fi: 'Ne puhuu ruotsia. → He {puhuvat} ruotsia.', base: 'puhua', en: 'They speak Swedish.', tr: 'İsveççe konuşuyorlar.' },
      { fi: 'Mun kirja on tässä. → Minun {kirjani} on tässä.', base: 'kirja', en: 'My book is here.', tr: 'Kitabım burada.' },
      { fi: 'Soita mulle! → Soita {minulle}!', base: 'minä', en: 'Call me!', tr: 'Beni ara!' },
      { fi: 'Tuleks sä mukaan? → {Tuletko} sinä mukaan?', base: 'tulla', en: 'Are you coming along?', tr: 'Sen de geliyor musun?' }
    ]
  }
];
