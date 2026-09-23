import type { IProduct, IProductList } from "@/modules/product"

export const useProductStore = defineStore("product", () => {
  /** Megamenyudagi tavsiya kartasi (Oksford № 673-1) */
  const featured = ref<IProductList | null>(null)

  /** Joriy mahsulot sahifasi holati */
  const current = ref<IProduct | null>(null)
  const colorId = ref<string | null>(null)
  const size = ref<number | null>(null)
  const activeImage = ref(0)
  const sizeModalOpen = ref(false)
  const sizeUnit = ref<"cm" | "inch">("cm")
  const sizeError = ref(false)

  const color = computed(
    () => current.value?.colors.find((c) => c.id === colorId.value) || current.value?.colors[0] || null
  )

  const setCurrent = (p: IProduct | null) => {
    current.value = p
    colorId.value = p?.colors[0]?.id ?? null
    size.value = null
    activeImage.value = 0
    sizeError.value = false
  }

  return { featured, current, colorId, color, size, activeImage, sizeModalOpen, sizeUnit, sizeError, setCurrent }
})
