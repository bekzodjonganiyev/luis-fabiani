import type { useMessage } from "naive-ui"
import { h } from "vue"
import { FEATURED_SLUG, useProductApi, useProductStore, type IProduct } from "@/modules/product"
import { useCartStore } from "@/modules/cart"
import { useLayoutStore } from "@/modules/layout"

export const useProductService = () => {
  const api = useProductApi()
  const store = useProductStore()
  const cart = useCartStore()
  const layout = useLayoutStore()
  const { t } = useI18n()

  const loadFeatured = async () => {
    if (store.featured) return
    try {
      const { data } = await api.getProduct(FEATURED_SLUG)
      store.featured = data
    } catch (e) {
      console.error(e)
    }
  }

  const productName = (p: Pick<IProduct, "type" | "modelNo">) =>
    `${t(`types.${p.type}`)} № ${p.modelNo || t("placeholders.model_no")}`

  const selectSize = (eu: number) => {
    store.size = eu
    store.sizeError = false
  }

  /** Savatga qo'shish: o'lcham tanlanmagan bo'lsa — xato holati; muvaffaqiyatda toast + savat ochiladi. */
  const addToCart = (message?: ReturnType<typeof useMessage>) => {
    const p = store.current
    if (!p) return false
    if (!store.size) {
      store.sizeError = true
      return false
    }
    cart.addProduct(p, store.color?.id || p.colors[0]?.id || "black", store.size, p.fit)
    message?.success(() => h("span", [productName(p), " ", t("product.added_toast", { name: "" }).trim()]), {
      duration: 3500
    })
    layout.cartOpen = true
    return true
  }

  return { loadFeatured, productName, selectSize, addToCart }
}
