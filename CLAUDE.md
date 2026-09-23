# Luis Fabiani — frontend

@../design-handoff/CLAUDE.md

- Nuxt 4 + TypeScript + Tailwind 3 + NaiveUI (`nuxtjs-naive-ui`). Arxitektura — tiif-online: `app/modules/<name>/{model,api,service,store}.ts` + `components/`, `app/shared/*`, `app/widgets/*`.
- Fayl nomlari kebab-case, shablonda komponentlar kebab-case (`<ui-button>`), auto-import faqat `shared/components`.
- Ranglar faqat semantik Tailwind klasslar (`bg-brand`, `bg-soft`, `text-accent-text`...) — ular `tokens/tokens.css` CSS o'zgaruvchilariga bog'langan. Hex yozilmaydi.
- Matnlar `app/locales/uz.json` da; `[RAQAM]`, `[NARX]` va h.k. o'sha yerda placeholder sifatida turadi.
- Backend yo'q bo'lsa `server/api/*` mock ishlaydi (`NUXT_API_URL` bo'sh).
