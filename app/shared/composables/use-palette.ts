import tokens from "~~/tokens/tokens.json"

export const PALETTES: PaletteCode[] = ["page1-forest-cream", "page2-soft-sage"]

const ALIASES: Record<string, PaletteCode> = {
  "forest": "page1-forest-cream",
  "cream": "page1-forest-cream",
  "page1": "page1-forest-cream",
  "1": "page1-forest-cream",
  "sage": "page2-soft-sage",
  "page2": "page2-soft-sage",
  "2": "page2-soft-sage"
}

export const resolvePalette = (value?: string | null): PaletteCode | undefined => {
  if (!value) return undefined
  if (PALETTES.includes(value as PaletteCode)) return value as PaletteCode
  return ALIASES[value]
}

/**
 * Faol palitra. Mijoz hali tanlamagan — ikkalasi ham qo'llab-quvvatlanadi.
 * Manba tartibi: ?palette= query → cookie → NUXT_PUBLIC_DEFAULT_PALETTE.
 */
export const usePalette = () => {
  const config = useRuntimeConfig()
  const cookie = useCookie<PaletteCode | undefined>("lf_palette", { maxAge: 60 * 60 * 24 * 365, sameSite: "lax" })
  const route = useRoute()

  const palette = useState<PaletteCode>("lf-palette", () => {
    return (
      resolvePalette(route.query.palette as string) ||
      resolvePalette(cookie.value) ||
      resolvePalette(config.public.defaultPalette) ||
      "page1-forest-cream"
    )
  })

  const set = (value: PaletteCode) => {
    palette.value = value
    cookie.value = value
  }

  const toggle = () => set(palette.value === "page1-forest-cream" ? "page2-soft-sage" : "page1-forest-cream")

  const colors = computed(() => tokens.palettes[palette.value] as Record<string, string>)
  const isSage = computed(() => palette.value === "page2-soft-sage")
  const logo = computed(() => (isSage.value ? "/images/lf-logo-sage.png" : "/images/lf-logo-forest.png"))

  return { palette, colors, isSage, logo, set, toggle }
}
