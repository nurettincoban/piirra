// Picture scenes: two illustrated things and a sentence about how they relate.
// Shape: { id, lv, items: [fiA, fiB], fi: '… {answer} …', answer, base, en, tr }
//   items  two dictionary-form words that have a picture (hand drawing or icon)
//   fi     sentence with exactly one {gap}; the text inside the braces equals `answer`
//   base   dictionary form shown as an optional hint
// lv 1 = locative cases, lv 2 = partitive / past tense / plural, lv 3 = conditional / passive.

export const SCENES = [
  // ── Level 1: locative cases ──
  { id: 'sc1-kissa-sohva', lv: 1, items: ['kissa', 'sohva'], fi: 'Kissa nukkuu {sohvalla}.', answer: 'sohvalla', base: 'sohva', en: 'The cat is sleeping on the sofa.', tr: 'Kedi kanepede uyuyor.' },
  { id: 'sc1-kirja-laukku', lv: 1, items: ['kirja', 'laukku'], fi: 'Kirja on {laukussa}.', answer: 'laukussa', base: 'laukku', en: 'The book is in the bag.', tr: 'Kitap çantanın içinde.' },
  { id: 'sc1-lintu-puu', lv: 1, items: ['lintu', 'puu'], fi: 'Lintu istuu {puussa}.', answer: 'puussa', base: 'puu', en: 'The bird is sitting in the tree.', tr: 'Kuş ağaçta oturuyor.' },
  { id: 'sc1-kahvi-kuppi', lv: 1, items: ['kahvi', 'kuppi'], fi: 'Kahvi on {kupissa}.', answer: 'kupissa', base: 'kuppi', en: 'The coffee is in the cup.', tr: 'Kahve fincanda.' },
  { id: 'sc1-kukka-maljakko', lv: 1, items: ['kukka', 'maljakko'], fi: 'Kukka on {maljakossa}.', answer: 'maljakossa', base: 'maljakko', en: 'The flower is in the vase.', tr: 'Çiçek vazoda.' },
  { id: 'sc1-avain-ovi', lv: 1, items: ['avain', 'ovi'], fi: 'Avain on {ovessa}.', answer: 'ovessa', base: 'ovi', en: 'The key is in the door.', tr: 'Anahtar kapının kilidinde.' },
  { id: 'sc1-kamera-reppu', lv: 1, items: ['kamera', 'reppu'], fi: 'Kamera on {repussa}.', answer: 'repussa', base: 'reppu', en: 'The camera is in the backpack.', tr: 'Fotoğraf makinesi sırt çantasında.' },
  { id: 'sc1-puhelin-sanky', lv: 1, items: ['puhelin', 'sänky'], fi: 'Puhelin on {sängyllä}.', answer: 'sängyllä', base: 'sänky', en: 'The phone is on the bed.', tr: 'Telefon yatağın üstünde.' },
  { id: 'sc1-maito-jaakaappi', lv: 1, items: ['maito', 'jääkaappi'], fi: 'Laitan maidon {jääkaappiin}.', answer: 'jääkaappiin', base: 'jääkaappi', en: 'I put the milk in the fridge.', tr: 'Sütü buzdolabına koyuyorum.' },
  { id: 'sc1-kissa-talo', lv: 1, items: ['kissa', 'talo'], fi: 'Kissa juoksee {taloon}.', answer: 'taloon', base: 'talo', en: 'The cat runs into the house.', tr: 'Kedi eve koşuyor.' },
  { id: 'sc1-kala-vene', lv: 1, items: ['kala', 'vene'], fi: 'Kala hyppää {veneeseen}.', answer: 'veneeseen', base: 'vene', en: 'The fish jumps into the boat.', tr: 'Balık tekneye atlıyor.' },
  { id: 'sc1-matkalaukku-auto', lv: 1, items: ['matkalaukku', 'auto'], fi: 'Laitan matkalaukun {autoon}.', answer: 'autoon', base: 'auto', en: 'I put the suitcase in the car.', tr: 'Bavulu arabaya koyuyorum.' },
  { id: 'sc1-koira-talo', lv: 1, items: ['koira', 'talo'], fi: 'Koira tulee ulos {talosta}.', answer: 'talosta', base: 'talo', en: 'The dog comes out of the house.', tr: 'Köpek evden dışarı çıkıyor.' },
  { id: 'sc1-orava-puu', lv: 1, items: ['orava', 'puu'], fi: 'Orava hyppää alas {puusta}.', answer: 'puusta', base: 'puu', en: 'The squirrel jumps down from the tree.', tr: 'Sincap ağaçtan aşağı atlıyor.' },
  { id: 'sc1-kahvi-muki', lv: 1, items: ['kahvi', 'muki'], fi: 'Juon kahvia {mukista}.', answer: 'mukista', base: 'muki', en: 'I drink coffee from a mug.', tr: 'Kahveyi kupadan içiyorum.' },
  { id: 'sc1-kissa-tuoli', lv: 1, items: ['kissa', 'tuoli'], fi: 'Kissa hyppää {tuolille}.', answer: 'tuolille', base: 'tuoli', en: 'The cat jumps onto the chair.', tr: 'Kedi sandalyeye atlıyor.' },
  { id: 'sc1-lintu-laiva', lv: 1, items: ['lintu', 'laiva'], fi: 'Lintu lentää {laivalle}.', answer: 'laivalle', base: 'laiva', en: 'The bird flies onto the ship.', tr: 'Kuş gemiye uçuyor.' },
  { id: 'sc1-koira-sanky', lv: 1, items: ['koira', 'sänky'], fi: 'Koira hyppää alas {sängyltä}.', answer: 'sängyltä', base: 'sänky', en: 'The dog jumps down off the bed.', tr: 'Köpek yataktan aşağı atlıyor.' },

  // ── Level 2: partitive, past tense, plural ──
  { id: 'sc2-kissa-maito', lv: 2, items: ['kissa', 'maito'], fi: 'Kissa juo {maitoa}.', answer: 'maitoa', base: 'maito', en: 'The cat is drinking milk.', tr: 'Kedi süt içiyor.' },
  { id: 'sc2-kani-porkkana', lv: 2, items: ['kani', 'porkkana'], fi: 'Kani syö {porkkanaa}.', answer: 'porkkanaa', base: 'porkkana', en: 'The rabbit is eating a carrot.', tr: 'Tavşan havuç yiyor.' },
  { id: 'sc2-omena-laukku', lv: 2, items: ['omena', 'laukku'], fi: 'Laukussa on kolme {omenaa}.', answer: 'omenaa', base: 'omena', en: 'There are three apples in the bag.', tr: 'Çantada üç elma var.' },
  { id: 'sc2-kahvi-muki', lv: 2, items: ['kahvi', 'muki'], fi: 'Mukissa on kuumaa {kahvia}.', answer: 'kahvia', base: 'kahvi', en: 'There is hot coffee in the mug.', tr: 'Kupada sıcak kahve var.' },
  { id: 'sc2-maito-jaakaappi', lv: 2, items: ['maito', 'jääkaappi'], fi: 'Jääkaapissa ei ole {maitoa}.', answer: 'maitoa', base: 'maito', en: 'There is no milk in the fridge.', tr: 'Buzdolabında süt yok.' },
  { id: 'sc2-leipa-maito', lv: 2, items: ['leipä', 'maito'], fi: 'Ostin {leipää} ja maitoa.', answer: 'leipää', base: 'leipä', en: 'I bought bread and milk.', tr: 'Ekmek ve süt aldım.' },
  { id: 'sc2-orava-sieni', lv: 2, items: ['orava', 'sieni'], fi: 'Orava kerää {sieniä}.', answer: 'sieniä', base: 'sieni', en: 'The squirrel is gathering mushrooms.', tr: 'Sincap mantar topluyor.' },
  { id: 'sc2-kuu-tahti', lv: 2, items: ['kuu', 'tähti'], fi: 'Kuun ympärillä on paljon {tähtiä}.', answer: 'tähtiä', base: 'tähti', en: 'There are lots of stars around the moon.', tr: 'Ayın etrafında bir sürü yıldız var.' },
  { id: 'sc2-kukka-maljakko', lv: 2, items: ['kukka', 'maljakko'], fi: '{Kukat} ovat maljakossa.', answer: 'Kukat', base: 'kukka', en: 'The flowers are in the vase.', tr: 'Çiçekler vazoda.' },
  { id: 'sc2-lintu-puu', lv: 2, items: ['lintu', 'puu'], fi: 'Lintu {lensi} puuhun.', answer: 'lensi', base: 'lentää', en: 'The bird flew into the tree.', tr: 'Kuş ağaca uçtu.' },
  { id: 'sc2-koira-pallo', lv: 2, items: ['koira', 'pallo'], fi: 'Koira {juoksi} pallon perään.', answer: 'juoksi', base: 'juosta', en: 'The dog ran after the ball.', tr: 'Köpek topun peşinden koştu.' },
  { id: 'sc2-sade-sateenvarjo', lv: 2, items: ['sade', 'sateenvarjo'], fi: 'Eilen {satoi}, joten otin sateenvarjon.', answer: 'satoi', base: 'sataa', en: 'It rained yesterday, so I took an umbrella.', tr: 'Dün yağmur yağdı, bu yüzden şemsiye aldım.' },
  { id: 'sc2-juna-kello', lv: 2, items: ['juna', 'kello'], fi: 'Juna {lähti} tasan kello kahdeksan.', answer: 'lähti', base: 'lähteä', en: 'The train left at exactly eight o\'clock.', tr: 'Tren tam saat sekizde kalktı.' },
  { id: 'sc2-kissa-sohva', lv: 2, items: ['kissa', 'sohva'], fi: 'Kissa {nukkui} koko päivän sohvalla.', answer: 'nukkui', base: 'nukkua', en: 'The cat slept on the sofa all day.', tr: 'Kedi bütün gün kanepede uyudu.' },

  // ── Level 3: conditional, passive ──
  { id: 'sc3-sade-sateenvarjo', lv: 3, items: ['sade', 'sateenvarjo'], fi: 'Jos sataisi, {ottaisin} sateenvarjon.', answer: 'ottaisin', base: 'ottaa', en: 'If it rained, I would take an umbrella.', tr: 'Yağmur yağsa şemsiye alırdım.' },
  { id: 'sc3-vene-kala', lv: 3, items: ['vene', 'kala'], fi: 'Jos minulla olisi vene, {kalastaisin} joka päivä.', answer: 'kalastaisin', base: 'kalastaa', en: 'If I had a boat, I would go fishing every day.', tr: 'Bir teknem olsa her gün balık tutardım.' },
  { id: 'sc3-juna-vuori', lv: 3, items: ['juna', 'vuori'], fi: '{Haluaisin} matkustaa junalla vuorille.', answer: 'Haluaisin', base: 'haluta', en: 'I would like to travel to the mountains by train.', tr: 'Trenle dağlara gitmek isterdim.' },
  { id: 'sc3-kissa-sanky', lv: 3, items: ['kissa', 'sänky'], fi: 'Kissa {nukkuisi} mieluiten sängyssä.', answer: 'nukkuisi', base: 'nukkua', en: 'The cat would most like to sleep in the bed.', tr: 'Kedi en çok yatakta uyumak isterdi.' },
  { id: 'sc3-kahvi-muki', lv: 3, items: ['kahvi', 'muki'], fi: 'Suomessa {juodaan} paljon kahvia.', answer: 'juodaan', base: 'juoda', en: 'People drink a lot of coffee in Finland.', tr: 'Finlandiya\'da çok kahve içilir.' },
  { id: 'sc3-kirkko-sairaala', lv: 3, items: ['kirkko', 'sairaala'], fi: 'Kirkon viereen {rakennetaan} uutta sairaalaa.', answer: 'rakennetaan', base: 'rakentaa', en: 'A new hospital is being built next to the church.', tr: 'Kilisenin yanına yeni bir hastane yapılıyor.' },
  { id: 'sc3-kakku-lahja', lv: 3, items: ['kakku', 'lahja'], fi: 'Juhlissa {syötiin} kakkua ja avattiin lahjoja.', answer: 'syötiin', base: 'syödä', en: 'At the party, people ate cake and opened presents.', tr: 'Partide pasta yenildi ve hediyeler açıldı.' },
  { id: 'sc3-kamera-linna', lv: 3, items: ['kamera', 'linna'], fi: 'Kuva {otettiin} linnan edessä.', answer: 'otettiin', base: 'ottaa', en: 'The photo was taken in front of the castle.', tr: 'Fotoğraf kalenin önünde çekildi.' },
];
