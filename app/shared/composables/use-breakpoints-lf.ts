import { useBreakpoints } from "@vueuse/core"

/** Dizayn artboardlari: mobil 390, desktop 1440. lg (1024) dan boshlab desktop tuzilma. */
export const useLfBreakpoints = () => {
  const bp = useBreakpoints({ sm: 640, md: 768, lg: 1024, xl: 1280 })
  const isDesktop = bp.greaterOrEqual("lg")
  const isMobile = bp.smaller("lg")
  return { bp, isDesktop, isMobile }
}
