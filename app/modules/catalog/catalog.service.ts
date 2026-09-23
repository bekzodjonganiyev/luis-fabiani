import { useDebounceFn } from "@vueuse/core"
import {
  paramsFromQuery,
  queryFromParams,
  useCatalogStore,
  CatalogParamsDTO,
  type IActivePill
} from "@/modules/catalog"
import { useProductApi } from "@/modules/product"
import { useWishlistStore } from "@/modules/wishlist"

export const useCatalogService = () => {
  const api = useProductApi()
  const store = useCatalogStore()
  const wishlist = useWishlistStore()
  const route = useRoute()
  const router = useRouter()
  const { t } = useI18n()

  const syncFromRoute = () => {
    store.params = paramsFromQuery(route.query as Record<string, any>)
  }

  /** API so'rovi parametrlari (wishlist rejimida — faqat saqlangan sluglar) */
  const requestParams = () => {
    const p = store.params
    const q: Record<string, any> = { ...queryFromParams(p), per_page: p.per_page, page: p.page }
    delete q.wishlist
    if (p.wishlist) q.slugs = wishlist.slugs.join(",") || "__none__"
    return q
  }

  const fetchList = async () => {
    store.loading = true
    try {
      const res = await api.getProducts(requestParams())
      store.items = res.data
      store.facets = res.facets
      if (res.pagination) store.pagination = res.pagination
      return res
    } finally {
      store.loading = false
    }
  }

  /** Filtr o'zgarishi → URL (replace), sahifa 1 ga qaytadi */
  const push = (patch: Partial<CatalogParamsDTO> = {}, resetPage = true) => {
    const next: CatalogParamsDTO = { ...new CatalogParamsDTO(), ...store.params, ...patch }
    if (resetPage) next.page = 1
    router.replace({ query: queryFromParams(next) })
  }
  const debouncedPush = useDebounceFn(push, 500)

  const toggleIn = <K extends "type" | "color" | "material" | "occasion" | "badge">(key: K, value: string) => {
    const list = [...store.params[key]]
    const i = list.indexOf(value)
    if (i >= 0) list.splice(i, 1)
    else list.push(value)
    push({ [key]: list } as Partial<CatalogParamsDTO>)
  }

  const setSizes = (sizes: number[]) => push({ size: sizes })
  const setFit = (fit: string) => push({ fit: store.params.fit === fit ? null : fit })
  const setSort = (sort: CatalogParamsDTO["sort"]) => push({ sort })
  const setPage = (page: number) => push({ page }, false)
  const setPrice = (from: string, to: string) =>
    debouncedPush({ price_from: from.replace(/\D/g, ""), price_to: to.replace(/\D/g, "") })
  const clear = () => router.replace({ query: store.params.q ? { q: store.params.q } : {} })

  const activePills = computed<IActivePill[]>(() => {
    const p = store.params
    const pills: IActivePill[] = []
    p.type.forEach((v) => pills.push({ key: `type:${v}`, label: t(`types.${v}`), remove: () => toggleIn("type", v) }))
    p.size.forEach((v) =>
      pills.push({ key: `size:${v}`, label: String(v), remove: () => setSizes(p.size.filter((s) => s !== v)) })
    )
    if (p.fit) pills.push({ key: "fit", label: t(`fits.${p.fit}`), remove: () => push({ fit: null }) })
    p.color.forEach((v) =>
      pills.push({ key: `color:${v}`, label: t(`colors.${v}`), remove: () => toggleIn("color", v) })
    )
    p.material.forEach((v) =>
      pills.push({ key: `material:${v}`, label: t(`materials.${v}`), remove: () => toggleIn("material", v) })
    )
    p.occasion.forEach((v) =>
      pills.push({ key: `occasion:${v}`, label: t(`occasions.${v}`), remove: () => toggleIn("occasion", v) })
    )
    p.badge.forEach((v) =>
      pills.push({ key: `badge:${v}`, label: t(`badges.${v}`), remove: () => toggleIn("badge", v) })
    )
    if (p.price_from || p.price_to)
      pills.push({
        key: "price",
        label: `${p.price_from ? formatNumber(Number(p.price_from)) : "…"} — ${p.price_to ? formatNumber(Number(p.price_to)) : "…"}`,
        remove: () => push({ price_from: "", price_to: "" })
      })
    return pills
  })

  const activeCount = computed(() => activePills.value.length)

  return {
    syncFromRoute,
    fetchList,
    requestParams,
    push,
    toggleIn,
    setSizes,
    setFit,
    setSort,
    setPage,
    setPrice,
    clear,
    activePills,
    activeCount
  }
}
