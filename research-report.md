# Luis Fabiani Shoes — Raqobatchilar tahlili va veb-sayt dizayn brifi

**Tayyorlandi:** 2026-09-21
**Maqsad:** Bitta saytda **korporativ (biznes) + e-commerce** modelini birlashtirgan veb-sayt dizaynini ishlab chiqish.
**Keyingi qadam:** Ushbu hujjat Claude Design'da dizayn yaratish uchun kirish brifi sifatida ishlatiladi.

---

## 0. Bir qarashda: 12 ta asosiy qaror

| # | Qaror | Nega |
|---|-------|------|
| 1 | Sayt **ikki yo'nalishli** bo'ladi: `Shop` (B2C) + `Biznes` (optom/diler/xalqaro) | Mijoz ham chakana sotadi, ham MICAM Milano orqali hamkor qidiryapti |
| 2 | Bosh sahifa **brend hikoyasi bilan ochiladi**, katalog bilan emas | Raqobat ustunligi — "O'zbekistonda ishlab chiqarilgan chinakam charm", bu ko'rsatilishi kerak |
| 3 | **3 til: UZ / RU / EN** (EN — xalqaro hamkorlar uchun majburiy) | MICAM konteksti; ECCO UZ ham uz/ru ishlatadi |
| 4 | **Telefon + Telegram birinchi o'rinda**, savat ikkinchi | 13.5K Telegram auditoriyasi allaqachon shu kanalga o'rgangan |
| 5 | To'lov: **Payme, Click, Uzum** + naqd (yetkazib berishda) + **Uzum Nasiya** (bo'lib to'lash) | Lokal standart; Skechers TR "taksit" modeli aynan shu ehtiyojni yopadi |
| 6 | PDP'da **o'lcham jadvali + "qaysi o'lchamni olay?"** yordamchisi majburiy | Poyabzalda №1 qaytarish sababi — o'lcham |
| 7 | Har bir modelga **ishlab chiqarish hikoyasi** (charm turi, taglik, qo'l mehnati) | Clarks va Salamander ayni shu bilan narxni oqlaydi |
| 8 | **Tarix / Ustaxona** sahifasi — yillar bo'yicha timeline | Salamander'ning "Качество через века" bloki isbotlangan pattern |
| 9 | **Mijoz fikrlari** saytga chiqariladi (t.me/LuisFabiani_otziv'dan ~500 ta) | Ishonch signali; lokal raqobatchilarda umuman yo'q |
| 10 | **Sodiqlik/bonus** tizimi 2-fazada (Skechers Plus modeli soddalashtirilgan) | Takroriy xarid drayveri |
| 11 | Mobil-birinchi, 3G'da ham ochiladigan og'irlik | O'zbekistonda trafikning 80%+ mobil |
| 12 | Lokal bozor bari **juda past** — ECCO UZ sayti yarim tarjima qilinmagan demo | To'g'ri bajarilgan sayt darhol №1 bo'ladi |

---

## 1. Metodologiya

| Sayt | Bozor | Tekshiruv holati |
|------|-------|------------------|
| nike.com.ar | Argentina | ✅ To'liq tahlil (arxiv nusxasi orqali; jonli sayt bot himoyasida) |
| clarks.com/en-gb | Buyuk Britaniya | ✅ To'liq tahlil (bosh sahifa, katalog, do'kon qidiruvi, PDP filtrlari) |
| skechers.com.tr | Turkiya | ⚠️ Jonli sayt 403 qaytaradi (Akamai/WAF). Tahlil ochiq manbalar + rasmiy sahifalar tavsiflari asosida |
| salamander.ru | Rossiya | ✅ To'liq tahlil (arxiv nusxasi; jonli saytda JS-verifikatsiya) |
| ecco.uz | O'zbekiston | ✅ To'liq tahlil (jonli HTML, 345 KB) |

Qo'shimcha kontekst: Luis Fabiani Telegram kanali (t.me/s/luisfabianishoes) mahsulot assortimenti, narx darajasi va buyurtma jarayonini aniqlash uchun tekshirildi.

---

## 2. Raqobatchilar tahlili

### 2.1 Nike Argentina — nike.com.ar
**Pozitsiya:** global brend + agressiv lokal savdo mexanikasi.

**Navigatsiya (IA):**
- Yuqori daraja: `Destacados` · `Hombre` · `Mujer` · `Niño/a` · `Accesorios` · `SNKRS` · `Ofertas`
- Har bir megamenyu **4 ta ustunga** bo'lingan:
  1. `Destacados` (SALE, Lo Nuevo, Los Más Vendidos, Íconos)
  2. `Calzado` (mahsulot turi bo'yicha: Botines, Running, Básquet, Ojotas…)
  3. `Ropa`
  4. `Comprar por Deporte` (Fútbol, Running, Tenis y Pádel, Golf, Hockey…)
- Alohida **"Íconos"** bloki: Air Force 1, Air Jordan 1, Dunk, Air Max, Pegasus — ya'ni **model nomi kategoriya darajasiga chiqarilgan**.
- **"Buscador de Calzado"** — o'lcham/maqsad bo'yicha poyabzal tanlash yordamchisi.
- Bolalar uchun **yosh bo'yicha xarid**: `De 0 a 3 años`, `De 3 a 7 años`, `De 7 a 15 años`.

**Lokal tijorat mexanikasi (eng muhim qism):**
- Doimiy yuqori bandda: **"Hasta 6 cuotas sin interés con todos los bancos"** + `Ver promociones bancarias` havolasi — foizsiz bo'lib to'lash butun saytda takrorlanadi.
- `Envío gratis para miembros a partir de $229.9…` — a'zolar uchun bepul yetkazish chegarasi.
- `Envío Express! Comprá antes de las 14hs…` — soat chegarasi bilan tezkor yetkazish.
- Pochta indeksi bo'yicha **yetkazib berish kalkulyatori** ("envío disponible para el código postal informado").
- Huquqiy majburiy elementlar: **`Botón de Arrepentimiento`** (Argentina qonuni), `Términos y Condiciones`, `Medios de pago`, `Cambios y devoluciones`, `Guía de talles`.

**Bosh sahifa bloklari (yuqoridan pastga):**
1. Promo bar — cuotas
2. Katta hero: `LO ÚLTIMO DE NIKE — La innovación que necesitas para alcanzar tu mejor versión` + `Comprar`
3. `Descubrí lo nuevo` — 4 ta tematik plitka (Nike Running / Nike x LEGO / Nike Moda / Nike Básquet), har biri sarlavha + bir qatorli matn + `Comprar`
4. `Nuestros Clásicos — Íconos` — Air Force, Air Jordan, Dunk, Air Max
5. Kategoriya bo'yicha tez kirish: Calzado / Ropa / Niño/a
6. A'zolik (`miembros`) taklifi

**Luis Fabiani uchun olinadigan narsalar:**
- ✅ Foizsiz bo'lib to'lash xabarini **doimiy yuqori bandga** qo'yish (UZ ekvivalenti: "Uzum Nasiya bilan 0% ustama, 6 oygacha").
- ✅ Model nomini kategoriya darajasiga chiqarish ("Íconos" → Luis Fabiani'da: `Oksford`, `Derbi`, `Loafer`, `Chelsi`).
- ✅ "Poyabzal tanlash yordamchisi" — 3 savolli kvizga aylantirish (maqsad / uslub / o'lcham).
- ❌ Olinmaydi: sport brendining tezkor, shovqinli vizual tili — Luis Fabiani klassik segmentda.

---

### 2.2 Clarks UK — clarks.com/en-gb
**Pozitsiya:** 200 yillik meros + texnik qulaylik. **Luis Fabiani uchun eng yaqin referens.**

**Yuqori bandlar (ikki qavat):**
- 1-qavat (promo): `Free Standard Delivery over £50` · `Free Exchanges`
- 2-qavat (utilita): `Track Order` · `Store Locator` · `FAQ`

**Navigatsiya:** `Women` · `Men` · `Kids` · `School` · `Originals` · `Accessories` · `Clothing` · `Brands`
Megamenyu ichida **uch xil kesim** aralashtirilgan:
- Mahsulot turi: `Shoes` (ballet pumps, brogues, heels, loafers), `Boots` (ankle, Chelsea), `Trainers`, `Sandals`
- Texnologiya kolleksiyalari: `Cloudsteppers™`, `Clarks Pace`, `Clarks Code`, `Solevana Foam™`, `C360 Foam™`
- Meros kolleksiyasi: `Originals` (Wallabee, Desert Boot, Desert Trek)
- **"Shop by Size"** — 6 dan 13 gacha o'lchamlar to'g'ridan-to'g'ri havola sifatida
- Rang bo'yicha kirish: `Men's Black Boots`, `Men's Brown Boots`

**Katalog (PLP) filtrlari — to'liq ro'yxat:**
`Gender` · `Product Type` · `Style` · `Color` · `Size` · **`Width`** · `Heel Height` · `Material` · `Price Range` · `Top Rated`
- Natijalar soni ko'rsatiladi: **"Desert Boots — 21 Results"**
- Breadcrumb: `Home > All Originals > Desert Boots (21 Results)`
- Mahsulot kartochkasi: rasm · nom · rang varianti · kategoriya yorlig'i ("Mens Originals Boots") · narx · **rang svotchlari (boshqa ranglarga havola)** · beyjlar (`New Arrivals`, `47% OFF`)
- Kategoriya tepasida **redaksion matn**: *"Nathan Clark's 1950 design was inspired by a rough boot from Cairo's Old Bazaar…"* — ya'ni kategoriya sahifasi ham hikoya aytadi.

**Bosh sahifa bloklari:**
1. Hero: `From £65 / New Season Boots Start Here`
2. Kategoriya plitkalari (Women's / Men's / Kids' Boots)
3. Texnologiya bloki: `Clarks Pace` + `Clarks Code` — **"Walk further for longer"**, `C360 Foam™`
4. Mahsulot karuseli: `From £55 / Trending trainers with comfort built in`
5. Narx bilan kirish nuqtasi: `FROM £20`
6. Meros bloki: `Wallabee™ Lite` — *"reworks Clarks Originals' iconic moccasin for a more comfortable step — innovation through heritage"*
7. **Ishonch qatori** (grid): yetkazib berish · qaytarish · **`Shoemakers Since 1825`**
8. Kategoriya bo'yicha xarid plitkalari
9. Obuna: **`£10 off £50`** (chegirma evaziga email)

**Xizmatlar (raqobatchilardan ajratib turadi):**
- `Book a Kids In-Store Fitting` — do'konda o'lcham olish uchun **onlayn bron**
- `Measure at Home` — uyda oyoq o'lchash yo'riqnomasi
- `Shoe Size Chart`, `Shoe Care`, `Store Services`
- Do'kon qidiruvi: `Enter City, Town or Postcode` → `Find a store`

**Futer guruhlari:** `Customer Services` (fitting, complaints, contact, FAQs, delivery, returns, size charts, store locator) · `About` (company, sustainability, corporate responsibility, careers, media) · `Follow Us` · `Legal` (terms, privacy, cookies, modern slavery statement, accessibility)

**Luis Fabiani uchun olinadigan narsalar:**
- ✅ **"Shoemakers Since 1825"** patterni → **"Toshkentda tikilgan / Ishlab chiqaruvchidan to'g'ridan-to'g'ri"** doimiy signal sifatida.
- ✅ `Width` (to'liqlik) filtri — klassik charm poyabzalda juda muhim, lokal raqobatchilarda **umuman yo'q**.
- ✅ Kategoriya sahifasida redaksion matn (SEO + ishonch).
- ✅ Texnologiya/material nomlash: Clarks'da `C360 Foam™` → Luis Fabiani'da `100% tabiiy charm`, `Goodyear/qo'l tikuv`, `Anatomik ichki taglik` kabi nomlangan xususiyatlar.
- ✅ Ikki qavatli yuqori band (promo + utilita).
- ✅ Obunaga chegirma bilan almashish.

---

### 2.3 Skechers Turkiya — skechers.com.tr
**Pozitsiya:** qulaylik texnologiyasi + agressiv lokal moliyaviy mexanika. **Bo'lib to'lash va sodiqlik bo'yicha eng yaxshi referens.**

> Eslatma: jonli sayt avtomatlashtirilgan so'rovlarni bloklaydi (HTTP 403). Quyidagi ma'lumotlar rasmiy sahifalar va ochiq manbalardan.

**Bo'lib to'lash (taksit) modeli:**
- **2 taksit — naqd narxda** (ustamasiz)
- **9 taksitgacha — vade farqi bilan** (ustama bilan)
- Bank hamkorligi: masalan Bankkart egalari uchun **3 taksit**
→ Ya'ni: *ustamasiz qisqa muddat* + *uzoq muddat ustama bilan* + *bank kampaniyalari*.

**Skechers Plus — sodiqlik dasturi (3 daraja):**

| Daraja | Ball | Qaytarish muddati | Bepul yetkazish chegarasi |
|--------|------|-------------------|---------------------------|
| **Classic** | har 1 TL = 1 ball (5% ball) | 30 kun | 500 TL |
| **Silver** | 5% ball, ballarni chegirma sifatida ishlatish | 60 kun | 250 TL |
| **Gold** | oxirgi 1 yilda 350 ball to'plagan | eng uzoq muddat | chegirmali/bepul |

Gold qo'shimcha: maxsus kampaniyalar, chegirmalarga **erta kirish**.
A'zolik: sayt, mobil ilova yoki do'kon orqali — **telefon raqamini tasdiqlash** bilan.

**Operatsion va'dalar:** buyurtma tasdiqlangach **1–3 ish kuni** ichida kargoga topshiriladi.
**Kategoriyalar:** mavsumiy chegirma hub'i (`Sezon İndirimi`), `Skechers Outlet` — yil davomida.
**Kontent:** o'z blogi bor (`/blog/…`) — mahsulot va dastur bo'yicha maqolalar.

**Luis Fabiani uchun olinadigan narsalar:**
- ✅ **Bo'lib to'lash strukturasini nusxalash:** "3 oy — 0% ustama", "6–12 oy — Uzum Nasiya orqali".
- ✅ **Darajali sodiqlik**: xarid summasi ↑ → qaytarish muddati ↑ va bepul yetkazish chegarasi ↓. Bu chiroyli, tushunarli va arzon mexanika.
- ✅ Telefon raqami bilan ro'yxatdan o'tish (O'zbekistonda email emas, **telefon** — asosiy identifikator).
- ✅ "Buyurtma 1–3 ish kunida jo'natiladi" kabi **aniq operatsion va'da**.
- ✅ Doimiy `Outlet` / `Chegirma` bo'limi — eski kolleksiyani sotish kanali.

---

### 2.4 Salamander Rossiya — salamander.ru
**Pozitsiya:** 140 yillik yevropa merosi + klassik charm. **Meros hikoyasi va katalog chuqurligi bo'yicha eng yaxshi referens.**

**Yuqori band:** ilova reklamasi (`Мы обновили приложение… Скачать`), `Женщинам` / `Мужчинам` almashtirgich, `Самовывоз`, `Салоны`, `Вакансии`, va **`Регион доставки: Москва`** — ya'ni **hudud tanlash yuqori bandda**.

**Katalog chuqurligi (erkaklar) — 3 daraja:**
```
Обувь
├── Ботинки
├── Кроссовки и кеды → Кеды · Кеды высокие · Кроссовки · Кроссовки высокие
├── Лоферы
├── Мокасины и топсайдеры → Мокасины · Топсайдеры
├── Полуботинки → Броги · Дерби · Оксфорды
├── Сабо · Сандалии · Слипоны · Туфли · Челси · Угги
Сумки → Мессенджеры · Борсетки · Портфели · Сумки дорожные · Сумки через плечо · Сумки-слинг · Рюкзаки
Аксессуары → Ремни · Уход за обувью · Перчатки · Шапки · Платки
```
E'tibor bering: **`Полуботинки` ichida `Броги / Дерби / Оксфорды`** — bu aynan Luis Fabiani sotadigan klassik erkaklar poyabzali taksonomiyasi. Tayyor xarita.

**Bosh sahifa bloklari:**
1. Mahsulot kartochkasi beyj bilan: `Хит` · `SALAMANDER` · `Челси` · **`7 499 ₽`** ~~`14 999`~~ (chizilgan eski narx)
2. **`Обратите внимание`** — vaziyat/uslub bo'yicha plitkalar: `В офис` · `Практичные полуботинки` · `Кеды нового сезона` · `Фактурная кожа` · `Броги`
3. **`Подборки`** (kuratorlik to'plamlari): `Классика жанра` · `Тренды сезона` · `Кеды и кроссовки`
4. Obuna: `Для него` / `Для нее` tanlovi bilan + shaxsiy ma'lumotlar bo'yicha aniq roziliklar (3 ta alohida checkbox)

**Futer strukturasi (3 ustun):**
- **`Обратная связь`**: `+7 (495) 478-01-38`, **`пн–вс с 09:00 до 21:00 МСК`** (ish vaqti!), `Напишите нам`
- **`Сервис`**: `Размеры` · `Уход за обувью` · `Программа лояльности` · `Контактная информация` · `Журнал` · **`Технологии`** · `Вакансии` · **`История`** · **`Магазины партнёров`** · **`Франчайзи`**
- **`Интернет-магазин`**: `Акции` · `Бренды` · `Салоны` · `Самовывоз` · `Возврат товара`
- Huquqiy: `Политика в отношении обработки персональных данных` · `Пользовательское соглашение` · **`Политика безопасности платежей`**

**`История` sahifasi — eng qimmatli pattern:**
Sarlavha: **«Качество через века»**. Keyin yillar bo'yicha timeline:
`1885-1897` (asoschi Jakob Zigle 23 yoshda ishni boshlaydi) → `1904` (savdo belgisi patentlanadi) → `1909` (26 ta do'kon) → `1914` (2 880 xodim, 2 mln juft) → `1937` (Lurchi komiksi) → `1939-1945` (urush, quvvatning 26% yo'qolishi) → `1960-1969` (xalqaro ekspansiya) → `2009` (Ara AG sotib oladi) → **`СЕГОДНЯ`**.
Har bir yil — qisqa, aniq, **raqamlar bilan** paragraf. Oxirida bugungi pozitsiya: *"Salamander сочетает в себе любовь к качеству, моде и сервису."*

**Luis Fabiani uchun olinadigan narsalar:**
- ✅ **Taksonomiyani deyarli to'g'ridan-to'g'ri olish**: Poyabzal → Klassik (Oksford/Derbi/Brogi) · Loafer/Mokasin · Chelsi/Botinka · Sneaker · Sandal.
- ✅ **Timeline sahifasi** — Luis Fabiani versiyasi: ustaxona tashkil etilgan yil → birinchi kolleksiya → Telegram 13.5K → YouTube 1.5 mln ko'rish → **2026: MICAM Milano** → bugun.
- ✅ **`Обратите внимание` = vaziyat bo'yicha xarid**: `Ofisga` · `To'yga` · `Kundalik` · `Qish uchun` — bu klassik poyabzalda sport brendlarining "sport turi" filtrining ekvivalenti.
- ✅ **`Подборки` = kuratorlik to'plamlari** — kam mahsulot bilan boy sayt ko'rinishini beradi.
- ✅ Futerda **`Франчайзи` va `Магазины партнёров`** — bu aynan Luis Fabiani'ning B2B ehtiyoji.
- ✅ Futerda telefon **+ ish vaqti**; `Политика безопасности платежей` — lokal ishonch uchun kuchli.
- ✅ Hudud tanlash (`Регион доставки`) → UZ versiyasi: `Toshkent / Viloyatlar` — yetkazish narxi va muddati shunga qarab.

---

### 2.5 ECCO O'zbekiston — ecco.uz (LOKAL BOZOR)
**Pozitsiya:** global brendning lokal franchayzi. **Texnik holati — zaif. Bu Luis Fabiani uchun asosiy imkoniyat.**

**Aniqlangan kamchiliklar (to'g'ridan-to'g'ri HTML tahlilidan):**

| Muammo | Dalil |
|--------|-------|
| **Tarjima tugallanmagan** | URL `/uz/` bo'lsa ham, butun katalog rus tilida: `Женщины`, `Мужчины`, `Кроссовки`. Interfeys esa ingliz tilida: `Add to cart`, `Wishlist`, `Search`, `Welcome`, `Login` |
| **Mahsulot nomlari aralash** | `sport poyafzal Ecco 830774/60928`, `kedalar Ecco 235813/61582`, `sandal Ecco 821883/01682` — uz+ru+artikul aralashmasi |
| **Demo kontakt ma'lumotlari qolib ketgan** | `support@support.com`, `+61 3 1234 4567`, manzil: `PO Box 16122 Collins Street West Victoria 8007 Australia` — **Avstraliya!** |
| **Platforma sozlanmagan** | `(tax incl.)` yozuvi, `No produts were found` (imlo xatosi bilan) — PrestaShop standart matnlari |
| **To'lov tizimlari ko'rinmaydi** | HTML'da Payme / Click / Uzum belgisi yo'q. Faqat `Yetkazib berish` va `Bo'lib to'lash` so'zlari 2 martadan uchraydi |
| **Brend hikoyasi yo'q** | "Biz haqimizda", tarix, texnologiya sahifalari yo'q |
| **Chegirmalar ishonchsiz** | `-54%`, `-61%`, `-66%` — butun bosh sahifa "Limited special offer" bilan to'la, bu doimiy chegirma taassurotini beradi |

**Narx darajasi (raqobat uchun muhim):** 500 000 – 3 300 000 UZS.
Luis Fabiani narxi **525 000 – 580 000 UZS** → ya'ni ECCO'ning eng arzon segmenti bilan bir xil, lekin ECCO'ning asosiy assortimenti 2–3 mln.
**Pozitsiyalash xulosasi:** *"Yevropa sifati, lokal narx — chunki o'rtada vositachi yo'q."*

**Navigatsiya (foydali qismi):** `Женщины` · `Мужчины` · `Дети` · `Sale` · `Golf` · `Аксессуары` (Сумки, Рюкзаки, Перчатки, Носки, **Стельки**, **Шнурки**, Шапки, **Средства по уходу**)
→ ✅ **Aksessuar va parvarish mahsulotlari** (kremlar, shnurlar, ichki tagliklar) — o'rtacha chek summasini oshiradigan arzon qo'shimcha savdo. Luis Fabiani buni oson qo'sha oladi.

---

## 3. Qiyosiy matritsa

| Xususiyat | Nike AR | Clarks | Skechers TR | Salamander | ECCO UZ | **LF (tavsiya)** |
|---|---|---|---|---|---|---|
| Ikki qavatli yuqori band | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Foizsiz bo'lib to'lash e'loni | ✅ (6 cuotas) | ❌ | ✅ (2 taksit) | ❌ | ❌ | ✅ |
| Megamenyu (ko'p ustunli) | ✅ | ✅ | ✅ | ✅ | ⚠️ oddiy | ✅ |
| Uslub/tur bo'yicha chuqur taksonomiya | ✅ | ✅ | ✅ | ✅✅ | ⚠️ | ✅✅ |
| `Width` / to'liqlik filtri | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ *(ajralib turish)* |
| O'lcham jadvali / fitting xizmati | ✅ | ✅✅ | ✅ | ✅ | ❌ | ✅✅ |
| Vaziyat bo'yicha xarid ("Ofisga") | ⚠️ sport | ⚠️ | ⚠️ | ✅ | ❌ | ✅ |
| Kuratorlik to'plamlari | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Brend tarixi / timeline | ⚠️ | ✅ | ⚠️ | ✅✅ | ❌ | ✅✅ |
| Ishlab chiqarish/ustaxona kontenti | ❌ | ⚠️ | ❌ | ⚠️ | ❌ | ✅✅ *(asosiy ustunlik)* |
| Sodiqlik dasturi | ✅ | ✅ | ✅✅ 3 daraja | ✅ | ⚠️ | 🔜 2-faza |
| Do'kon qidiruvi / self-pickup | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Mijoz fikrlari / reyting | ✅ | ✅ | ✅ | ⚠️ | ❌ | ✅✅ *(500 ta otziv bor)* |
| B2B / franchayzing bo'limi | ❌ | ❌ | ❌ | ✅ | ❌ | ✅✅ |
| Blog / jurnal | ✅ | ✅ | ✅ | ✅ (`Журнал`) | ❌ | ✅ |
| Lokal to'lov tizimlari | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Huquqiy: ommaviy oferta | ✅ | ✅ | ✅ | ✅ | ⚠️ | ✅ |

**Xulosa:** hech bir raqobatchi **"ishlab chiqaruvchi + brend + do'kon"** uchligini bitta saytda ko'rsatmaydi. Luis Fabiani'ning haqiqiy ustaxonasi bor — bu eng kuchli va nusxalab bo'lmaydigan kontent.

---

## 4. Luis Fabiani uchun pozitsiyalash

**Biznes konteksti:**
- Erkaklar klassik charm poyabzali, 525 000 – 580 000 UZS, model raqamlari bilan (673-1, 403-2, 6963-13)
- Material: 100% tabiiy charm; "O'zbekistonda ishlab chiqaramiz", "Ishlab chiqaruvchidan to'g'ridan-to'g'ri"
- Kanallar: Telegram 13.5K · YouTube 4.82K obuna / 1.5 mln ko'rish · Instagram · ~500 ta mijoz fikri
- Buyurtma hozir: `@luisfabiani_admin` yoki `+998 90 316 20 00`
- Optom yo'nalishi allaqachon bor ("ZAGATOVSHIK" uchun alohida kontakt)
- 2026-sentabr: MICAM Milano — xalqaro hamkorlik izlash

**Brend platformasi (dizayn uchun asos):**

> **Italyan estetikasi. O'zbek ustaxonasi. Vositachisiz narx.**

| Element | Ifoda |
|---|---|
| Asosiy va'da | Har bir juft — qo'lda yig'ilgan, 100% tabiiy charm |
| Ishonch isboti | Ustaxona videosi, 500+ mijoz fikri, 1.5 mln YouTube ko'rish |
| Narx pozitsiyasi | Xuddi shu sifat, xalqaro brend narxining 1/4 qismi — chunki fabrika bevosita sotadi |
| Ton | Vazmin, hurmatli, ortiqcha shovqinsiz. "Siz" murojaati. |

**Uch auditoriya, uch yo'l:**

| Auditoriya | Ehtiyoj | Saytdagi yo'l | Konversiya harakati |
|---|---|---|---|
| **B2C — lokal xaridor** | To'g'ri o'lcham, ishonch, tez yetkazish | Bosh sahifa → Katalog → PDP → Savat | Savatga qo'shish / Telegram orqali buyurtma |
| **B2B — optomchi, diler, do'kon** | Narxlar, MOQ, sifat, muddatlar | `Biznes` → `Optom savdo` | So'rov formasi / narx ro'yxatini yuklab olish |
| **Xalqaro hamkor (MICAM)** | Ishlab chiqarish quvvati, OEM/private label imkoniyati | `Business` (EN) → `Manufacturing` | Company profile PDF + hamkorlik formasi |

---

## 5. Sayt arxitekturasi (sitemap)

```
/                                   Bosh sahifa
/catalog                            Katalog (barcha mahsulotlar)
  /catalog/klassik                    → Oksford · Derbi · Brogi · Monk
  /catalog/loafer                     → Loafer · Mokasin
  /catalog/botinka                    → Chelsi · Botinka · Qishki
  /catalog/sneaker                    → Charm sneaker · Kedlar
  /catalog/aksessuar                  → Kamar · Krem · Shnur · Ichki taglik
  /catalog/sale                       Chegirmalar
/product/{slug}                     Mahsulot sahifasi (PDP)
/collections/{slug}                 Kuratorlik to'plamlari (Ofisga · To'yga · Qish · Yangi)

/brand                              Brend haqida
  /brand/history                      Tarix — timeline
  /brand/workshop                     Ustaxona: qanday tikamiz (foto + video)
  /brand/materials                    Charm va materiallar
  /brand/reviews                      Mijoz fikrlari (500+)

/business                           ⟵ B2B markaz
  /business/wholesale                 Optom savdo: shartlar, MOQ, narx ro'yxati
  /business/partnership               Dilerlik / franchayzing
  /business/manufacturing             OEM / private label (xalqaro, EN)
  /business/contact                   B2B so'rov formasi

/help                               Yordam markazi
  /help/sizes                         O'lcham jadvali + "oyoqni qanday o'lchash"
  /help/delivery                      Yetkazib berish va to'lov
  /help/returns                       Qaytarish va almashtirish
  /help/care                          Charm poyabzal parvarishi
  /help/faq                           Savol-javob
/stores                             Do'konlar / savdo nuqtalari (xarita)
/journal                            Blog / jurnal
/contact                            Kontakt
/offer                              Ommaviy oferta · Maxfiylik siyosati · To'lov xavfsizligi

/cart · /checkout · /account · /account/orders · /wishlist
```

**Tillar:** `/uz/` (asosiy) · `/ru/` · `/en/` — `en` versiyasi qisqartirilgan: `Home · Collection · Manufacturing · Business · Contact`.

---

## 6. Sahifa-ba-sahifa dizayn spetsifikatsiyasi

### 6.1 Bosh sahifa — bloklar tartibi

| # | Blok | Mazmun | Referens |
|---|------|--------|----------|
| 0 | **Promo band** (32px) | "Uzum Nasiya bilan 0% ustama · 3 oy" → havola | Nike AR `cuotas` |
| 0b | **Utilita band** | Til (UZ/RU/EN) · `Buyurtmani kuzatish` · `Do'konlar` · `+998 90 316 20 00` | Clarks |
| 1 | **Header** (sticky) | Logotip (markazda yoki chapda) · Katalog · Kolleksiyalar · Brend · Biznes · Yordam \| Qidiruv · Sevimlilar · Savat | Clarks / Salamander |
| 2 | **Hero** (100vh emas, ~72vh) | Bitta kuchli kadr: charm poyabzal makro yoki usta qo'li. Sarlavha: **"Qo'lda tikilgan charm poyabzal"**, ost-sarlavha: *"1985-yildan buyon O'zbekistonda"* (aniq yil kiritiladi), CTA: `Kolleksiyani ko'rish` + ikkilamchi `Ustaxonamiz` | Nike hero |
| 3 | **Ishonch qatori** (4 ta ikonka) | `100% tabiiy charm` · `Ishlab chiqaruvchidan` · `Toshkent bo'ylab bepul yetkazish` · `14 kun ichida almashtirish` | Clarks trust grid |
| 4 | **Vaziyat bo'yicha xarid** (4 plitka) | `Ofisga` · `To'y va tantana` · `Kundalik` · `Qish uchun` | Salamander `Обратите внимание` |
| 5 | **Yangi kolleksiya** (karusel, 4–8 mahsulot) | Kartochka: rasm · model nomi · uslub yorlig'i · narx · rang svotchlari | Clarks PLP kartochkasi |
| 6 | **Ustaxona bloki** (to'liq kenglik, video/foto) | "Bir juft poyabzal 87 ta qo'l amaliyotidan o'tadi" — raqamli hikoya + `Batafsil` | LF ning noyob ustunligi |
| 7 | **Bestsellerlar** (karusel) | `Eng ko'p sotilganlar` | Nike `Los Más Vendidos` |
| 8 | **Uslub bo'yicha kirish** (4 plitka) | `Oksford` · `Derbi` · `Loafer` · `Chelsi` — model nomi kategoriya darajasida | Nike `Íconos` |
| 9 | **Mijoz fikrlari** (3–6 ta) | Haqiqiy Telegram sharhlari, ism + shahar + 5 yulduz | Lokal raqobatchilarda yo'q |
| 10 | **Biznes bloki** (kontrast fon) | "Optom savdo va hamkorlik" → 3 ta afzallik + `Taklif olish` | Salamander `Франчайзи` |
| 11 | **Obuna** | "Yangi kolleksiyadan birinchi bo'lib xabardor bo'ling — birinchi buyurtmaga 5%" | Clarks `£10 off £50` |
| 12 | **Futer** | 4 ustun (quyida) | Salamander futeri |

**Futer strukturasi:**
- **Ustun 1 — Aloqa:** telefon · **ish vaqti (9:00–21:00)** · Telegram · Instagram · YouTube · manzil
- **Ustun 2 — Xizmat:** O'lchamlar · Parvarish · Yetkazib berish · Qaytarish · Savol-javob · Do'konlar
- **Ustun 3 — Brend:** Biz haqimizda · Tarix · Ustaxona · Jurnal · Mijoz fikrlari · Vakansiyalar
- **Ustun 4 — Biznes:** Optom savdo · Dilerlik · OEM / Private label · Hamkorlik so'rovi
- **Pastki qator:** Ommaviy oferta · Maxfiylik siyosati · To'lov xavfsizligi · to'lov logotiplari (Payme, Click, Uzum, Uzcard, Humo, Visa, Mastercard) · © 2026

---

### 6.2 Katalog (PLP)

**Filtrlar (chap panel desktopda, pastdan chiqadigan sheet mobilda):**

| Filtr | Variantlar |
|---|---|
| `Turi` | Oksford · Derbi · Brogi · Monk · Loafer · Mokasin · Chelsi · Botinka · Sneaker · Sandal |
| `O'lcham` | 39–46 (mavjud bo'lmaganlari o'chirilgan holda) |
| **`To'liqlik`** | Tor · Standart · Keng ⟵ *Clarks'dan; hech bir lokal raqobatchida yo'q* |
| `Rang` | vizual svotchlar: qora · jigarrang · konyak · to'q ko'k · oq |
| `Material` | Tabiiy charm · Zamsha · Nubuk · Lak |
| `Taglik` | Charm · Rezina · Polyuretan |
| `Mavsum` | Yoz · Demi · Qish |
| `Narx` | slayder, UZS |
| `Holat` | Yangi · Chegirmada · Sotuvda bor |

**Saralash:** `Ommabop` · `Yangi kelganlar` · `Narx: arzondan qimmatga` · `Narx: qimmatdan arzonga` · `Chegirma bo'yicha`

**Natijalar sarlavhasi:** `Erkaklar klassik poyabzali — 48 ta mahsulot` (Clarks pattern).
**Breadcrumb:** `Bosh sahifa > Katalog > Klassik > Oksford (12)`

**Mahsulot kartochkasi:**
```
┌─────────────────┐
│  [Yangi]        │ ← beyj (chapda yuqorida)
│                 │
│   MAHSULOT      │ ← hoverda 2-rasm (oyoqdagi ko'rinish)
│    RASMI        │
│           ♡     │ ← sevimlilar (o'ngda yuqorida)
├─────────────────┤
│ Oksford 673-1   │ ← model nomi + raqami
│ Klassik · Charm │ ← kategoriya yorlig'i (kulrang, kichik)
│ 525 000 so'm    │ ← narx (qalin)
│ ● ● ●           │ ← rang svotchlari
│ 40 41 42 43 44  │ ← mavjud o'lchamlar (hoverda ko'rinadi)
└─────────────────┘
```
**Pastda:** kategoriya uchun redaksion matn (Clarks patterni) — masalan: *"Oksford — tugma bandlari taglikka tikilgan eng rasmiy klassik model. Ofis va tantanali tadbirlar uchun."* (SEO uchun ham kerak.)

---

### 6.3 Mahsulot sahifasi (PDP) — anatomiya

**Chap ustun (60%):** galereya
- 5–7 ta kadr: 3/4 rakurs · profil · yuqoridan · taglik · charm makro · **oyoqdagi ko'rinish (lifestyle)** · ixtiyoriy 360°
- Zoom, mobil — swipe

**O'ng ustun (40%), tartib bilan:**
1. Model nomi + artikul (`Oksford 673-1`)
2. Narx · eski narx chizilgan · chegirma foizi
3. **`Uzum Nasiya: 3 × 175 000 so'm, 0% ustama`** ⟵ Nike/Skechers patterni
4. Rang tanlash — svotchlar (har biri alohida rasmga o'tadi)
5. **O'lcham tanlash** — tugmalar qatori + `Mening o'lchamim qaysi?` havolasi → modal:
   - Uzunlik (sm) ↔ O'zbek/EU o'lchami jadvali
   - "Oyoqni qanday o'lchash" — 3 qadamli rasmli yo'riqnoma (Clarks `Measure at Home`)
   - To'liqlik bo'yicha maslahat
6. **CTA:** `Savatga qo'shish` (asosiy, to'liq kenglik) + `Telegram orqali buyurtma` (ikkilamchi) ⟵ *lokal odatga moslashuv, juda muhim*
7. **Yetkazib berish qatori:** `Toshkent — ertaga, bepul` / `Viloyatlar — 2–4 kun` + pochta indeks/hudud tanlash
8. **Ishonch yorliqlari:** `14 kun qaytarish` · `Almashtirish bepul` · `Original charm kafolati`
9. **Akkordeon bloklari:**
   - `Tavsif` — qisqa, hikoyali
   - `Xususiyatlar` — jadval: material / astar / taglik / poshna balandligi / ishlab chiqarilgan joy / og'irlik
   - `Parvarish` — charm uchun ko'rsatmalar
   - `Yetkazib berish va qaytarish`
10. **Mijoz fikrlari** — yulduzlar, matn, ism, "O'lchamiga mos keldi: Ha/Yo'q" indikatori
11. **`Shu bilan birga`** — parvarish kremi, shnur, kamar (o'rtacha chekni oshiradi)
12. **`O'xshash modellar`**

---

### 6.4 Savat va checkout

- **Savat:** yon panel (drawer) sifatida ochiladi; ichida yetkazish chegarasi progressi: *"Bepul yetkazishgacha 120 000 so'm qoldi"*
- **Checkout — bir sahifa, 3 qadam** (ro'yxatdan o'tmasdan ham):
  1. **Kontakt:** ism + telefon (+998 maskasi) → SMS tasdiq (email ixtiyoriy)
  2. **Yetkazib berish:** Toshkent / viloyat · manzil yoki **o'zi olib ketish (do'kondan)** · vaqt oralig'i
  3. **To'lov:** `Payme` · `Click` · `Uzum` · `Uzum Nasiya (bo'lib to'lash)` · `Naqd — yetkazib berishda`
- Yon tomonda buyurtma xulosasi doimiy ko'rinib turadi
- Yakunda: `Buyurtma qabul qilindi` + **Telegram bot orqali kuzatish** havolasi

---

### 6.5 Biznes (B2B) bo'limi — bu yerda ko'p saytlar yiqiladi

**`/business` — landing:**
- Hero: *"Ishlab chiqaruvchi bilan bevosita ishlang"* + ustaxona fotosi
- 3 ta yo'nalish kartasi: **Optom savdo** · **Dilerlik / hamkorlik** · **OEM / Private label**
- Raqamlar bloki: kunlik ishlab chiqarish quvvati · model soni · xodimlar · eksport bozorlari
- **Ishlab chiqarish jarayoni** — 6 qadamli vizual: dizayn → qolip → kesish → yig'ish → tikuv → sifat nazorati
- Sertifikatlar va materiallar kelib chiqishi
- **`Narxlar ro'yxatini yuklab olish`** (PDF, email/telefon evaziga)
- **So'rov formasi:** kompaniya · mamlakat · qiziqish turi (optom / diler / OEM) · taxminiy hajm · aloqa
- MICAM / ko'rgazmalar bloki: *"Bizni MICAM Milano'da toping"* — stend raqami bilan
- EN versiyasida bu sahifa **asosiy kirish nuqtasi** bo'ladi

---

### 6.6 Brend bo'limi

- **`/brand/history`** — Salamander patterni: **"Yillar orqali sifat"**, timeline: asos solingan yil → birinchi kolleksiya → birinchi 1000 juft → Telegram jamoasi 13 500 kishi → YouTube 1,5 mln ko'rish → **2026: MICAM Milano** → bugun. Har bir nuqta: yil + 2–3 jumla + 1 foto.
- **`/brand/workshop`** — eng kuchli sahifa: ustaxonadagi katta fotolar, video, "bir juft poyabzal yo'li" bosqichma-bosqich.
- **`/brand/materials`** — charm turlari makro fotolarda, farqi tushuntirilgan.
- **`/brand/reviews`** — Telegram otzivlarining tartiblangan arxivi (skrinshot + matn).

---

## 7. Dizayn tizimi (Claude Design uchun)

### Rang palitrasi
| Token | HEX | Qo'llanishi |
|---|---|---|
| `--ink` | `#1A1714` | Asosiy matn, header |
| `--espresso` | `#3B2A20` | To'q charm, sarlavhalar |
| `--cognac` | `#8B5E3C` | Brend aksenti, havolalar |
| `--brass` | `#B08D57` | Nozik aksent, chegara, "premium" detal |
| `--bone` | `#F5F1EA` | Asosiy fon (oq emas — issiq) |
| `--paper` | `#FFFFFF` | Kartochka foni |
| `--stone` | `#8C8279` | Ikkilamchi matn |
| `--line` | `#E3DCD2` | Chegaralar |
| `--success` | `#2E6B4F` | "Sotuvda bor", muvaffaqiyat |
| `--sale` | `#A33A2B` | Chegirma (kamdan-kam ishlatiladi) |

**Qoida:** Sof oq (`#FFFFFF`) faqat mahsulot kartochkasida. Umumiy fon — issiq `--bone`. Bu charm mahsulotini "qimmat" ko'rsatadi.
**Qorong'i rejim:** `--ink` fon, `--bone` matn, `--brass` aksent.

### Tipografika
| Rol | Shrift | Izoh |
|---|---|---|
| Display / sarlavhalar | **Cormorant Garamond** yoki **Libre Baskerville** (serif) | Klassika va italyan estetikasi |
| Interfeys / matn | **Inter** yoki **Manrope** (grotesk) | **Kirill + lotin + o'zbek diakritikasi to'liq qo'llab-quvvatlanadi** |
| Raqamlar (narx) | Inter, tabular-nums | Narxlar tekis turadi |

O'lchamlar: `H1 48/56` · `H2 32/40` · `H3 24/32` · `body 16/26` · `small 14/22` · `caption 12/18`.
**Muhim:** o'zbek lotin (`o'`, `g'`, `sh`, `ch`) va rus kirill belgilarini ikkala shrift ham qo'llab-quvvatlashi tekshirilsin.

### Grid va masofa
- Desktop: 12 ustun, max-width `1320px`, gutter `24px`
- Mahsulot gridi: desktop 4 ta, planshet 3 ta, mobil 2 ta
- Masofa shkalasi: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`
- Radius: `2px` (deyarli to'g'ri burchak — klassik brend), tugmalarda `4px`
- Soya: minimal, faqat `0 1px 3px rgba(26,23,20,.08)`

### Komponentlar ro'yxati (dizayn qilinishi kerak)
`Promo bar` · `Utility bar` · `Header + megamenyu` · `Mobil menyu` · `Qidiruv overlay` · `Hero` · `Trust row` · `Kategoriya plitkasi` · `Mahsulot kartochkasi (3 holat: normal / hover / sotilib ketgan)` · `Karusel` · `Filtr paneli (desktop)` · `Filtr sheet (mobil)` · `Saralash dropdown` · `Breadcrumb` · `PDP galereya` · `O'lcham tanlagich` · `O'lcham jadvali modali` · `Akkordeon` · `Sharh kartochkasi` · `Savat drawer` · `Checkout qadamlari` · `To'lov usuli tanlash` · `Forma elementlari` · `Timeline (tarix)` · `B2B so'rov formasi` · `Do'kon kartochkasi + xarita` · `Blog kartochkasi` · `Futer` · `Til almashtirgich` · `Toast / xabar` · `Bo'sh holatlar`

### Fotografiya yo'nalishi (art direction)
- **Mahsulot:** issiq kulrang (`#EDE8E0`) fonda, bitta yumshoq yon yorug'lik, nozik soya. Barcha modellar bir xil rakursda.
- **Ustaxona:** hujjatli uslub, qo'llar, asboblar, charm. Rangi biroz issiq, kontrast past.
- **Lifestyle:** oyoqdagi poyabzal — kostyum shim bilan, ko'chada yoki ofisda. Yuz ko'rsatilishi shart emas.
- **Qoida:** stok foto **ishlatilmaydi**. Bu brendning butun ustunligi — haqiqiylik.

### Harakat (motion)
- O'tishlar `160–240ms`, `ease-out`
- Hoverda mahsulot rasmi 2-kadrga **fade** (slayd emas)
- Parallaks yo'q, avtomatik karusel yo'q (foydalanuvchi boshqaradi)

---

## 8. Lokal e-commerce mexanikasi (O'zbekiston)

### To'lov
| Usul | Izoh |
|---|---|
| **Payme** | Majburiy — eng keng tarqalgan |
| **Click** | Majburiy |
| **Uzum Pay** | Tavsiya etiladi |
| **Uzum Nasiya** | Bo'lib to'lash — konversiyani sezilarli oshiradi |
| Uzcard / Humo | Karta to'lovi |
| Visa / Mastercard | Xalqaro mijozlar uchun |
| Naqd (yetkazib berishda) | Hali ham juda keng talab qilinadi |
| **UzQR** | 2026-yil 1-iyuldan yuridik shaxslar uchun yagona QR-kod talabi — futer/checkout'da hisobga olinsin |

### Yetkazib berish
- Toshkent: 1 kun, ma'lum summadan yuqori — bepul
- Viloyatlar: 2–4 kun (BTS / Fargo / Express24 kabi xizmat)
- **O'zi olib ketish** — do'kon/ustaxonadan (Salamander `Самовывоз` patterni)
- Checkout'da hudud tanlash → narx va muddat avtomatik hisoblanadi

### Lokal UX odatlari (raqobatchilarda ham ko'rindi)
1. **Telefon — asosiy identifikator**, email emas. Ro'yxatdan o'tish SMS-kod bilan.
2. **Telegram kanali saytdan kuchliroq** — shuning uchun har bir PDP'da `Telegram orqali buyurtma` tugmasi va sayt bo'ylab suzuvchi Telegram tugmasi bo'lsin. Saytga qarshi emas, unga qo'shimcha.
3. **Narx formati:** `525 000 so'm` (probel bilan ajratilgan, "UZS" emas — mahalliy o'quvchi uchun "so'm" tabiiy).
4. Ruscha va o'zbekcha kontent **to'liq** tarjima qilinsin — ECCO UZ ning asosiy xatosini takrorlamaslik.

### Huquqiy
`Ommaviy oferta` · `Maxfiylik siyosati` (shaxsiy ma'lumotlar to'g'risidagi qonun) · `To'lov xavfsizligi` · `Qaytarish shartlari` — futerda alohida havolalar. Salamander bu uchligini aynan shunday joylashtiradi.

---

## 9. Kontent talablari (mijozdan olinishi kerak)

| Kontent | Hajm | Kimdan |
|---|---|---|
| Mahsulot fotolari (studiya) | har model × 5–7 kadr | Yangi suratga olish kerak |
| Oyoqdagi (lifestyle) fotolar | har model × 1–2 | Yangi |
| Ustaxona fotoreportaji | 15–25 kadr | Yangi |
| Ustaxona videosi | 60–90 son | YouTube arxividan qirqish mumkin |
| Brend tarixi faktlari | 8–12 ta yil/voqea | Mijoz intervyusi |
| Ishlab chiqarish raqamlari | quvvat, xodim, model soni | Mijozdan |
| Mahsulot tavsiflari | har model × 60–100 so'z | Copywriting |
| Mijoz fikrlari | 20–30 ta tanlangan | t.me/LuisFabiani_otziv |
| O'lcham jadvali | 1 jadval + o'lchash yo'riqnomasi | Mijozdan aniq ma'lumot |
| Logotip vektor + brendbuk | — | Mijozdan (agar yo'q bo'lsa — dizayn ishiga kiritiladi) |

---

## 10. Texnik va sifat mezonlari

- **Mobil-birinchi**: barcha maketlar avval 390px kenglikda chiziladi
- Rasm formati: **AVIF/WebP**, `srcset`, lazy-load; PDP birinchi kadri — `priority`
- Performance maqsadi: LCP < 2.5s (4G), sahifa og'irligi < 1.2 MB
- SEO: har bir PDP uchun `Product` schema.org (narx, mavjudlik, reyting), kategoriya matnlari, `hreflang` uz/ru/en
- Analitika: Google Analytics 4 + Yandex Metrika (heatmap uchun) + Telegram konversiyalarini `utm` bilan belgilash
- A11y: kontrast ≥ 4.5:1, klaviatura navigatsiyasi, `alt` matnlar

---

## 11. Bosqichma-bosqich reja

**Faza 1 — MVP (dizayn + ishga tushirish):**
Bosh sahifa · Katalog + filtrlar · PDP · Savat/checkout (Payme, Click, naqd) · Brend/Ustaxona · O'lchamlar · Yetkazish/Qaytarish · Kontakt · Biznes landing + forma · UZ/RU · Telegram integratsiyasi

**Faza 2:**
Uzum Nasiya (bo'lib to'lash) · Sodiqlik dasturi (Skechers Plus modeli, 3 daraja) · Mijoz kabineti · Sharh yig'ish tizimi · Jurnal/blog · EN versiyasi + OEM sahifasi · Do'kon xaritasi

**Faza 3:**
Wishlist + narx tushishi haqida xabar · Mahsulot tanlash kvizi · Optom mijozlar uchun alohida kabinet (shaxsiy narxlar) · Mobil ilova yoki PWA

---

## 12. Claude Design uchun brif (tayyor kirish matni)

> **Loyiha:** Luis Fabiani Shoes — O'zbekistonda ishlab chiqariladigan erkaklar klassik charm poyabzali brendi uchun veb-sayt.
> **Model:** korporativ brend sayti + e-commerce, bitta domenda.
> **Ton:** vazmin, premium, italyan klassikasi; shovqinsiz, hurmatli ("Siz").
> **Rang:** issiq neytral fon (`#F5F1EA`), to'q charm ranglari (`#1A1714`, `#3B2A20`), konyak aksent (`#8B5E3C`), latun detal (`#B08D57`).
> **Shrift:** sarlavhalar — serif (Cormorant Garamond / Libre Baskerville); interfeys — Inter. Kirill va o'zbek lotin belgilarini qo'llab-quvvatlashi shart.
> **Grid:** 12 ustun, 1320px, mahsulot gridi 4/3/2.
> **Radius:** 2–4px. **Soya:** minimal. **Animatsiya:** 160–240ms fade.
> **Farqlovchi g'oya:** butun sayt bo'ylab "ishlab chiqaruvchidan to'g'ridan-to'g'ri" hikoyasi — ustaxona fotolari, jarayon, qo'l mehnati.

**Chiziladigan ekranlar (artboardlar):**
1. Bosh sahifa — desktop (to'liq, 12 blok)
2. Bosh sahifa — mobil
3. Megamenyu ochiq holati
4. Katalog (PLP) — filtrlar bilan, desktop
5. Katalog — mobil + filtr sheet
6. Mahsulot sahifasi (PDP) — desktop
7. Mahsulot sahifasi — mobil
8. O'lcham jadvali modali
9. Savat drawer + Checkout (3 qadam)
10. Ustaxona sahifasi (brend hikoyasi)
11. Tarix — timeline sahifasi
12. Biznes (B2B) landing + so'rov formasi
13. Do'konlar / kontakt
14. Komponentlar kutubxonasi (UI kit)

---

## 13. Manbalar

- [Clarks UK](https://www.clarks.com/en-gb) — bosh sahifa, [Desert Boots katalogi](https://www.clarks.com/en-us/all-originals/desert-boots/o_desertboots_us-c), [Do'kon qidiruvi](https://www.clarks.com/en-gb/store-locator)
- [Nike Argentina](https://www.nike.com.ar/) — arxiv nusxasi orqali tahlil qilindi
- [Skechers Türkiye](https://www.skechers.com.tr/) — [Skechers Plus](https://www.skechers.com.tr/sayfa/skechers-plus-lp), [Buyurtma savollari](https://www.skechers.com.tr/nsayfa/faqorder), [Bankkart taksit kampaniyasi](https://www.bankkart.com.tr/kampanyalar/giyim-ve-aksesuar/skechersta-3-taksit)
- [Salamander Rossiya](https://salamander.ru/men/) — [Tarix sahifasi](https://salamander.ru/history/)
- [ECCO O'zbekiston](https://ecco.uz/uz/)
- [Luis Fabiani Telegram kanali](https://t.me/luisfabianishoes), [mijoz fikrlari](https://t.me/LuisFabiani_otziv)
- [UzQR tizimi — kun.uz](https://kun.uz/news/2026/07/03/ozbekistonda-uzqr-tizimi-ishga-tushdi-asosiy-savollarga-javoblar-3dab63)
- [O'zbekistonda onlayn do'kon ochish bo'yicha qo'llanma — 101digital](https://101digital.uz/en/blog/how-to-open-online-store-uzbekistan-2026/)
- [To'lov tizimlari integratsiyasi — manu.uz](https://diary.manu.uz/blog/tolov-tizimlari-uchun-integratsiya-payme-click-va-boshqa-turdagi-tizimlarga-qanday-ulaniladi.htm)
- [O'zbekistonda online savdo 2026 tendensiyalari — VOX Digital](https://vox.uz/blog/ozbekistonda-online-savdo-2026-yil-tendensiyalari-2026-06-11)
- [Italian Shoe Factory — private label modeli](https://italianshoefactory.com/private-label/), [K.Shoes private label](https://k.shoes/private-label/shoes-manufacturer/)
