import type { Config } from "tailwindcss"
import palettes from "./tokens/tailwind.colors.js"

/**
 * Ikkita palitra ham tokens/tailwind.colors.js dan olinadi (forest-cream / soft-sage).
 * Komponentlarda esa faqat semantik ranglar ishlatiladi — ular CSS o'zgaruvchilarga bog'langan
 * va <html data-palette="..."> orqali almashadi (tokens/tokens.css).
 */
export const semantic = {
  "brand": "var(--lf-brand)",
  "brand-hover": "var(--lf-brand-hover)",
  "dark": "var(--lf-dark)",
  "soft": "var(--lf-soft)",
  "bg": "var(--lf-bg)",
  "card": "var(--lf-card)",
  "line": "var(--lf-line)",
  "ink": "var(--lf-text)",
  "muted": "var(--lf-muted)",
  "muted-2": "var(--lf-muted-2)",
  "accent": "var(--lf-accent)",
  "accent-text": "var(--lf-accent-text)",
  "badge-new": "var(--lf-badge-new)",
  "badge-new-text": "var(--lf-badge-new-text)",
  "success": "var(--lf-success)",
  "sale": "var(--lf-sale)",
  "on-dark": "var(--lf-on-dark)",
  "on-dark-muted": "var(--lf-on-dark-muted)",
  "on-dark-body": "var(--lf-on-dark-body)",
  "photo-bg": "var(--lf-photo-bg)",
  "soft-hover": "var(--lf-soft-hover)",
  "size-off": "var(--lf-size-off)"
}

export default <Partial<Config>>{
  content: ["app/**/*.{js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        ...palettes,
        ...semantic
      },
      fontFamily: {
        sans: ["Manrope", "Segoe UI", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"]
      },
      borderRadius: {
        "lf": "var(--lf-radius)",
        "lf-btn": "var(--lf-radius-btn)",
        "lf-badge": "var(--lf-radius-badge)",
        "lf-lg": "var(--lf-radius-lg)"
      },
      maxWidth: {
        lf: "var(--lf-max)"
      },
      transitionDuration: {
        lf: "180ms"
      },
      screens: {
        "xs": "390px",
        "3xl": "1600px"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "32px",
        xl: "60px"
      },
      screens: {
        "2xl": "1440px"
      }
    }
  },
  plugins: []
}
