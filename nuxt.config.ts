// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["~/shared/assets/css/index.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@vueuse/nuxt", "@pinia/nuxt", "nuxtjs-naive-ui"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Bosh sahifa",
      titleTemplate: "%s | Luis Fabiani",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap"
        }
      ]
    }
  },

  routeRules: {
    // Laravel API (alohida repo). NUXT_API_URL bo'sh bo'lsa server/api dagi mock ishlaydi.
    ...(process.env.NUXT_API_URL ? { "/gateway/**": { proxy: `${process.env.NUXT_API_URL}/**` } } : {}),
    "/checkout": { ssr: false }
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_URL ? "/gateway" : "/api",
      defaultPalette: process.env.NUXT_PUBLIC_DEFAULT_PALETTE || "page1-forest-cream",
      telegramUrl: process.env.NUXT_PUBLIC_TELEGRAM_URL || "https://t.me/luisfabianishoes",
      instagramUrl: process.env.NUXT_PUBLIC_INSTAGRAM_URL || "#",
      youtubeUrl: process.env.NUXT_PUBLIC_YOUTUBE_URL || "#"
    }
  },

  components: [
    {
      path: "~/shared/components",
      pathPrefix: false
    }
  ],

  imports: {
    dirs: ["~/shared/utils", "~/shared/composables", "~/shared/stores"]
  },

  i18n: {
    langDir: "app/locales",
    restructureDir: "",
    defaultLocale: "uz",
    strategy: "no_prefix",
    locales: [
      { code: "uz", language: "uz-Latn", file: "uz.json", name: "UZ" },
      { code: "ru", language: "ru-RU", file: "ru.json", name: "RU" },
      { code: "en", language: "en-US", file: "en.json", name: "EN" }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lf_locale",
      redirectOn: "root"
    }
  },

  vite: {
    optimizeDeps: {
      include: ["naive-ui"]
    }
  }
})
