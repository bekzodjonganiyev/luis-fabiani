import { useStorage } from "@vueuse/core"
import type { ICartItem } from "@/modules/cart"
import type { IAddon, IProduct } from "@/modules/product"

export const useCartStore = defineStore("cart", () => {
  const items = useStorage<ICartItem[]>("lf_cart", [], undefined, { initOnMounted: true })

  const count = computed(() => items.value.reduce((n, i) => n + i.qty, 0))
  const productCount = computed(() => items.value.length)

  /** Narxi ma'lum mahsulotlar summasi */
  const knownSubtotal = computed(() => items.value.reduce((s, i) => s + (i.price ?? 0) * i.qty, 0))
  /** Narxi hali mijozdan kelmagan pozitsiyalar bormi ([NARX]) */
  const hasUnknownPrice = computed(() => items.value.some((i) => i.price === null))
  /** Jami — faqat hamma narx ma'lum bo'lsa; aks holda null → [JAMI] */
  const total = computed(() => (hasUnknownPrice.value ? null : knownSubtotal.value))
  const installment = computed(() => installmentOf(total.value))

  const find = (key: string) => items.value.find((i) => i.key === key)

  const addProduct = (p: IProduct, colorId: string, size: number, fit: string) => {
    const key = `p:${p.slug}:${colorId}:${size}`
    const existing = find(key)
    if (existing) existing.qty = Math.min(existing.qty + 1, 10)
    else
      items.value.push({
        key,
        kind: "product",
        slug: p.slug,
        type: p.type,
        modelNo: p.modelNo,
        colorId,
        size,
        fit,
        price: p.price,
        qty: 1,
        image: p.images[0]?.src || p.image.src
      })
  }

  const addAddon = (a: IAddon) => {
    const key = `a:${a.id}`
    const existing = find(key)
    if (existing) existing.qty = Math.min(existing.qty + 1, 10)
    else
      items.value.push({
        key,
        kind: "addon",
        addonId: a.id,
        nameKey: a.nameKey,
        metaKey: a.categoryKey,
        price: a.price,
        qty: 1,
        image: a.image
      })
  }

  const setQty = (key: string, qty: number) => {
    const item = find(key)
    if (!item) return
    if (qty <= 0) remove(key)
    else item.qty = Math.min(qty, 10)
  }

  const remove = (key: string) => {
    items.value = items.value.filter((i) => i.key !== key)
  }

  const clear = () => (items.value = [])

  const hasAddon = (id: string) => items.value.some((i) => i.addonId === id)

  return {
    items,
    count,
    productCount,
    knownSubtotal,
    hasUnknownPrice,
    total,
    installment,
    addProduct,
    addAddon,
    setQty,
    remove,
    clear,
    hasAddon
  }
})
