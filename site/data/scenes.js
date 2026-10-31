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
  // ── Level 1 (more): locative cases ──
  { id: 'sc1-kissa-laatikko', lv: 1, items: ['kissa', 'laatikko'], fi: 'Kissa istuu {laatikossa}.', answer: 'laatikossa', base: 'laatikko', en: 'The cat is sitting in the box.', tr: 'Kedi kutunun içinde oturuyor.' },
  { id: 'sc1-kala-vesi', lv: 1, items: ['kala', 'vesi'], fi: 'Kala ui {vedessä}.', answer: 'vedessä', base: 'vesi', en: 'The fish is swimming in the water.', tr: 'Balık suda yüzüyor.' },
  { id: 'sc1-kirje-postilaatikko', lv: 1, items: ['kirje', 'postilaatikko'], fi: 'Laitan kirjeen {postilaatikkoon}.', answer: 'postilaatikkoon', base: 'postilaatikko', en: 'I put the letter in the mailbox.', tr: 'Mektubu posta kutusuna atıyorum.' },
  { id: 'sc1-auto-parkkipaikka', lv: 1, items: ['auto', 'parkkipaikka'], fi: 'Auto on {parkkipaikalla}.', answer: 'parkkipaikalla', base: 'parkkipaikka', en: 'The car is in the car park.', tr: 'Araba otoparkta.' },
  { id: 'sc1-koira-auto', lv: 1, items: ['koira', 'auto'], fi: 'Koira hyppää ulos {autosta}.', answer: 'autosta', base: 'auto', en: 'The dog jumps out of the car.', tr: 'Köpek arabadan dışarı atlıyor.' },
  { id: 'sc1-kirja-kirjasto', lv: 1, items: ['kirja', 'kirjasto'], fi: 'Lainaan kirjan {kirjastosta}.', answer: 'kirjastosta', base: 'kirjasto', en: 'I borrow a book from the library.', tr: 'Kütüphaneden kitap ödünç alıyorum.' },
  { id: 'sc1-ihminen-bussi', lv: 1, items: ['ihminen', 'bussi'], fi: 'Mies nousee {bussiin}.', answer: 'bussiin', base: 'bussi', en: 'The man gets on the bus.', tr: 'Adam otobüse biniyor.' },
  { id: 'sc1-lentokone-lentoasema', lv: 1, items: ['lentokone', 'lentoasema'], fi: 'Lentokone laskeutuu {lentoasemalle}.', answer: 'lentoasemalle', base: 'lentoasema', en: 'The plane is landing at the airport.', tr: 'Uçak havalimanına iniyor.' },
  { id: 'sc1-keitto-kattila', lv: 1, items: ['keitto', 'kattila'], fi: 'Keitto on {kattilassa}.', answer: 'kattilassa', base: 'kattila', en: 'The soup is in the pot.', tr: 'Çorba tencerede.' },
  { id: 'sc1-sukka-pesukone', lv: 1, items: ['sukka', 'pesukone'], fi: 'Sukka on {pesukoneessa}.', answer: 'pesukoneessa', base: 'pesukone', en: 'The sock is in the washing machine.', tr: 'Çorap çamaşır makinesinde.' },
  { id: 'sc1-kuva-seina', lv: 1, items: ['kuva', 'seinä'], fi: 'Kuva on {seinällä}.', answer: 'seinällä', base: 'seinä', en: 'The picture is on the wall.', tr: 'Resim duvarda asılı.' },
  { id: 'sc1-matkalaukku-hotelli', lv: 1, items: ['matkalaukku', 'hotelli'], fi: 'Kannan matkalaukun ulos {hotellista}.', answer: 'hotellista', base: 'hotelli', en: 'I carry the suitcase out of the hotel.', tr: 'Bavulu otelden dışarı taşıyorum.' },

  // ── Level 2 (more): partitive, past tense, plural ──
  { id: 'sc2-kokki-keitto', lv: 2, items: ['kokki', 'keitto'], fi: 'Kokki keittää {keittoa}.', answer: 'keittoa', base: 'keitto', en: 'The chef is making soup.', tr: 'Aşçı çorba pişiriyor.' },
  { id: 'sc2-kissa-kala', lv: 2, items: ['kissa', 'kala'], fi: 'Kissa {söi} kalan.', answer: 'söi', base: 'syödä', en: 'The cat ate the fish.', tr: 'Kedi balığı yedi.' },
  { id: 'sc2-ostoskori-omena', lv: 2, items: ['ostoskori', 'omena'], fi: 'Ostoskorissa on paljon {omenoita}.', answer: 'omenoita', base: 'omena', en: 'There are lots of apples in the shopping basket.', tr: 'Alışveriş sepetinde bir sürü elma var.' },
  { id: 'sc2-vauva-maito', lv: 2, items: ['vauva', 'maito'], fi: 'Vauva {joi} maitoa.', answer: 'joi', base: 'juoda', en: 'The baby drank milk.', tr: 'Bebek süt içti.' },
  { id: 'sc2-lahja-kirja', lv: 2, items: ['lahja', 'kirja'], fi: 'Sain lahjaksi kaksi {kirjaa}.', answer: 'kirjaa', base: 'kirja', en: 'I got two books as a present.', tr: 'Hediye olarak iki kitap aldım.' },
  { id: 'sc2-aurinko-kukka', lv: 2, items: ['aurinko', 'kukka'], fi: 'Aurinko {paistoi}, ja kukat kukkivat.', answer: 'paistoi', base: 'paistaa', en: 'The sun was shining and the flowers were in bloom.', tr: 'Güneş parlıyordu ve çiçekler açmıştı.' },
  { id: 'sc2-polkupyora-sade', lv: 2, items: ['polkupyörä', 'sade'], fi: 'Ajoin pyörällä, vaikka {satoi}.', answer: 'satoi', base: 'sataa', en: 'I rode my bike even though it was raining.', tr: 'Yağmur yağmasına rağmen bisiklete bindim.' },
  { id: 'sc2-kakku-juhla', lv: 2, items: ['kakku', 'juhla'], fi: 'Juhlissa ei ollut {kakkua}.', answer: 'kakkua', base: 'kakku', en: 'There was no cake at the party.', tr: 'Partide pasta yoktu.' },
  { id: 'sc2-sukka-laatikko', lv: 2, items: ['sukka', 'laatikko'], fi: '{Sukat} ovat laatikossa.', answer: 'Sukat', base: 'sukka', en: 'The socks are in the drawer.', tr: 'Çoraplar çekmecede.' },
  { id: 'sc2-koira-luu', lv: 2, items: ['koira', 'luu'], fi: 'Koira {kaivoi} luun maahan.', answer: 'kaivoi', base: 'kaivaa', en: 'The dog buried the bone in the ground.', tr: 'Köpek kemiği toprağa gömdü.' },

  // ── Level 3 (more): conditional, passive ──
  { id: 'sc3-piano-nuotti', lv: 3, items: ['piano', 'nuotti'], fi: 'Jos minulla olisi aikaa, {opettelisin} soittamaan pianoa.', answer: 'opettelisin', base: 'opetella', en: 'If I had time, I would learn to play the piano.', tr: 'Vaktim olsa piyano çalmayı öğrenirdim.' },
  { id: 'sc3-lentokone-karttapallo', lv: 3, items: ['lentokone', 'karttapallo'], fi: 'Jos minulla olisi rahaa, {matkustaisin} ympäri maailmaa.', answer: 'matkustaisin', base: 'matkustaa', en: 'If I had money, I would travel around the world.', tr: 'Param olsa dünyayı gezerdim.' },
  { id: 'sc3-kahvi-kakku', lv: 3, items: ['kahvi', 'kakku'], fi: '{Saisinko} kahvia ja palan kakkua?', answer: 'Saisinko', base: 'saada', en: 'Could I have some coffee and a piece of cake?', tr: 'Biraz kahve ve bir dilim pasta alabilir miyim?' },
  { id: 'sc3-leipa-kauppa', lv: 3, items: ['leipä', 'kauppa'], fi: 'Kaupassa {myydään} tuoretta leipää joka aamu.', answer: 'myydään', base: 'myydä', en: 'Fresh bread is sold in the shop every morning.', tr: 'Dükkânda her sabah taze ekmek satılır.' },
  { id: 'sc3-kirje-postilaatikko', lv: 3, items: ['kirje', 'postilaatikko'], fi: 'Kirjeet {jaetaan} postilaatikoihin aamulla.', answer: 'jaetaan', base: 'jakaa', en: 'The letters are delivered to the mailboxes in the morning.', tr: 'Mektuplar sabahları posta kutularına dağıtılır.' },
  { id: 'sc3-auto-huoltoasema', lv: 3, items: ['auto', 'huoltoasema'], fi: 'Auto {tankattiin} huoltoasemalla.', answer: 'tankattiin', base: 'tankata', en: 'The car was filled up at the petrol station.', tr: 'Arabanın deposu benzin istasyonunda dolduruldu.' },
  { id: 'sc3-teltta-metsa', lv: 3, items: ['teltta', 'metsä'], fi: 'Teltta {pystytettiin} metsän reunaan.', answer: 'pystytettiin', base: 'pystyttää', en: 'The tent was put up at the edge of the forest.', tr: 'Çadır ormanın kenarına kuruldu.' },
  { id: 'sc3-museo-paasylippu', lv: 3, items: ['museo', 'pääsylippu'], fi: 'Museon pääsyliput {myytiin} loppuun jo aamupäivällä.', answer: 'myytiin', base: 'myydä', en: 'The museum tickets were already sold out by late morning.', tr: 'Müze biletleri daha öğleden önce tükendi.' },
];
