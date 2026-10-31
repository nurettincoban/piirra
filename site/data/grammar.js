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
      { fi: 'Pyyhe on {kylpyhuoneessa}.', base: 'kylpyhuone', en: 'The towel is in the bathroom.', tr: 'Havlu banyoda.' }
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
      { fi: 'Tämä kirja {on} hyvä.', base: 'olla', en: 'This book is good.', tr: 'Bu kitap güzel.' }
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
      { fi: 'Te {kysytte} paljon.', base: 'kysyä', en: 'You ask a lot.', tr: 'Çok soru soruyorsunuz.' }
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
      { fi: 'Minä {näen} meren.', base: 'nähdä', en: 'I can see the sea.', tr: 'Denizi görüyorum.' }
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
      { fi: 'Te {pesette} kädet.', base: 'pestä', en: 'You wash your hands.', tr: 'Ellerinizi yıkıyorsunuz.' }
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
      { fi: 'Mitä sinä {valitset}?', base: 'valita', en: 'What do you choose?', tr: 'Neyi seçiyorsun?' }
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
      { fi: 'En {ymmärrä} tätä.', base: 'ymmärtää', en: 'I don\'t understand this.', tr: 'Bunu anlamıyorum.' }
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
      { fi: '{Ymmärrätkö} minua?', base: 'ymmärtää', en: 'Do you understand me?', tr: 'Beni anlıyor musun?' }
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
      { fi: 'Avaimet ovat {laukussa}.', base: 'laukku', en: 'The keys are in the bag.', tr: 'Anahtarlar çantada.' }
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
      { fi: 'Lähden {koulusta} kolmelta.', base: 'koulu', en: 'I leave school at three.', tr: 'Okuldan saat üçte çıkıyorum.' }
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
      { fi: 'Kissa hyppää {laatikkoon}.', base: 'laatikko', en: 'The cat jumps into the box.', tr: 'Kedi kutuya atlıyor.' }
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
      { fi: 'Onko {sinulla} aikaa?', base: 'sinä', en: 'Do you have time?', tr: 'Vaktin var mı?' }
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
      { fi: 'Voinko lainata {sinulta} kynää?', base: 'sinä', en: 'Can I borrow a pen from you?', tr: 'Senden bir kalem ödünç alabilir miyim?' }
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
      { fi: 'Kirjoitan viestin {opettajalle}.', base: 'opettaja', en: 'I\'m writing a message to the teacher.', tr: 'Öğretmene mesaj yazıyorum.' }
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
      { fi: '{Kaupan} ovi on auki.', base: 'kauppa', en: 'The shop door is open.', tr: 'Marketin kapısı açık.' }
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
      { fi: 'Talossa on {seitsemän} huonetta.', base: '7', en: 'The house has seven rooms.', tr: 'Evde yedi oda var.' }
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
      { fi: '{Huoneet} ovat isoja.', base: 'huone', en: 'The rooms are big.', tr: 'Odalar büyük.' }
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
      { fi: 'Rakastan {sinua}.', base: 'sinä', en: 'I love you.', tr: 'Seni seviyorum.' }
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
      { fi: 'Täällä on paljon {puita}.', base: 'puu', en: 'There are lots of trees here.', tr: 'Burada çok ağaç var.' }
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
      { fi: 'Minä {halusin} uuden puhelimen.', base: 'haluta', en: 'I wanted a new phone.', tr: 'Yeni bir telefon istedim.' }
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
      { fi: 'Minä en {ymmärtänyt} kysymystä.', base: 'ymmärtää', en: 'I didn\'t understand the question.', tr: 'Soruyu anlamadım.' }
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
      { fi: 'Avaa {ikkuna}, kiitos!', base: 'ikkuna', en: 'Open the window, please!', tr: 'Pencereyi aç, lütfen!' }
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
      { fi: 'Kirjoitan {ystäville}.', base: 'ystävä', en: 'I\'m writing to my friends.', tr: 'Arkadaşlarıma yazıyorum.' }
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
      { fi: 'Kissa on {pienempi} kuin koira.', base: 'pieni', en: 'The cat is smaller than the dog.', tr: 'Kedi köpekten daha küçük.' }
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
      { fi: 'Ostan {halvimman} lipun.', base: 'halpa', en: 'I\'ll buy the cheapest ticket.', tr: 'En ucuz bileti alacağım.' }
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
      { fi: 'Olen {huoneessani}.', base: 'huone', en: 'I\'m in my room.', tr: 'Odamdayım.' }
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
      { fi: 'Pekka, {avaa} ikkuna, kiitos.', base: 'avata', en: 'Pekka, open the window, please.', tr: 'Pekka, pencereyi aç lütfen.' }
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
      { fi: '{Hänen} täytyy ostaa uusi puhelin.', base: 'hän', en: 'She has to buy a new phone.', tr: 'Yeni bir telefon alması lazım.' }
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
      { fi: 'Sää muuttui {kylmäksi}.', base: 'kylmä', en: 'The weather turned cold.', tr: 'Hava soğudu.' }
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
      { fi: 'Juna lähtee {kahdelta}.', base: 'kaksi', en: 'The train leaves at two.', tr: 'Tren saat ikide kalkıyor.' }
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
      { fi: 'Odotan sinua {kaupan} edessä.', base: 'kauppa', en: 'I\'ll wait for you in front of the shop.', tr: 'Seni marketin önünde bekliyorum.' }
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
      { fi: 'Hän {söisi} mielellään jäätelöä.', base: 'syödä', en: 'She would gladly eat ice cream.', tr: 'Seve seve dondurma yerdi.' }
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
      { fi: 'En olisi {uskonut}!', base: 'uskoa', en: 'I wouldn\'t have believed it!', tr: 'İnanmazdım!' }
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
      { fi: 'Mitä tänään {tehdään}?', base: 'tehdä', en: 'What shall we do today?', tr: 'Bugün ne yapıyoruz?' }
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
      { fi: 'Ikkuna {rikottiin} eilen.', base: 'rikkoa', en: 'The window was broken yesterday.', tr: 'Pencere dün kırıldı.' }
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
      { fi: 'En ole koskaan {syönyt} poronlihaa.', base: 'syödä', en: 'I have never eaten reindeer meat.', tr: 'Hiç ren geyiği eti yemedim.' }
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
      { fi: 'Olin juuri {herännyt}, kun puhelin soi.', base: 'herätä', en: 'I had just woken up when the phone rang.', tr: 'Telefon çaldığında daha yeni uyanmıştım.' }
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
      { fi: 'Kaikki, {mitä} hän sanoi, oli totta.', base: 'mikä', en: 'Everything he said was true.', tr: 'Söylediği her şey doğruydu.' }
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
      { fi: 'Älä herätä {nukkuvaa} lasta.', base: 'nukkua', en: 'Don\'t wake the sleeping child.', tr: 'Uyuyan çocuğu uyandırma.' }
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
      { fi: 'Tule {katsomaan}!', base: 'katsoa', en: 'Come and see!', tr: 'Gel de bak!' }
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
      { fi: 'Hän {saanee} paikan.', base: 'saada', en: 'She will probably get the job.', tr: 'İşi muhtemelen o alacak.' }
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
      { fi: 'Puhu {selvästi}, kiitos.', base: 'selvä', en: 'Speak clearly, please.', tr: 'Lütfen açık konuş.' }
    ]
  }
];
