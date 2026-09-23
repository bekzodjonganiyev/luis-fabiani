# Luis Fabiani — sayt (Nuxt 4)

Dizayn manbasi: `../design-handoff/` (`CLAUDE.md`, `DESIGN.md`, `preview/*.html`).

## Ishga tushirish

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm preview
pnpm typecheck
pnpm lint
```

## Muhit

`.env.example` ga qarang. `NUXT_API_URL` bo'sh bo'lsa `server/api/` dagi mock ma'lumotlar ishlaydi
(katalog, mahsulot, buyurtma, obuna). Laravel API ulanganda `/gateway/**` proxy orqali o'sha manzilga yo'naltiriladi.

## Mock backend (dev)

- `GET /api/products` — filtrlar, saralash, sahifalash, facet hisoblari (`server/utils/mock-catalog.ts`)
- `GET /api/products/:slug`, `GET /api/addons`
- `POST /api/otp` — SMS tasdiqlash mock: har qanday 4 xonali kod qabul qilinadi
- `POST /api/orders` — zod validatsiya, `LF-xxxxxx` raqam qaytaradi
- `POST /api/subscribe`, `POST /api/promo` (promokodlar hali yo'q — hammasi rad etiladi)

Savat va sevimlilar `localStorage` da (`lf_cart`, `lf_wishlist`); palitra `lf_palette` cookie da.

## Palitra

Ikkala palitra ham `tokens/tokens.css` dagi CSS o'zgaruvchilar orqali ishlaydi va `<html data-palette>` bilan almashadi:

- `page1-forest-cream` — Forest + Cream (Page 1)
- `page2-soft-sage` — Soft Sage (Page 2)

Almashtirish: `?palette=sage` / `?palette=forest` query, pastki o'ng burchakdagi almashtirgich yoki `NUXT_PUBLIC_DEFAULT_PALETTE`.
Komponentlarda hech qanday hex rang yo'q — faqat semantik Tailwind ranglari (`bg-brand`, `text-accent-text`, `border-line`...).

## Struktura (tiif-online arxitekturasi)

```
app/
  layouts/        default (header + footer), blank
  pages/          / , /catalog, /product/[slug], /checkout, ...
  modules/<name>/ <name>.model.ts · <name>.api.ts · <name>.service.ts · <name>.store.ts · components/
  widgets/        layout (header, megamenu, footer, mobile nav), palette-switcher
  shared/         assets (css, tokens), components/base (ui-* — NaiveUI ustidan), composables, stores, types, utils
  locales/        uz.json (asosiy), ru.json, en.json — barcha [PLACEHOLDER] lar i18n kalit
server/api/       mock backend (Laravel API o'rniga)
```
