import { PRODUCTS, toListItem, type ProductRecord } from "./mock-data"

const list = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(String) : typeof v === "string" && v ? v.split(",") : []
const num = (v: unknown) => {
  const n = Number(String(v ?? "").replace(/\s/g, ""))
  return Number.isFinite(n) && n > 0 ? n : undefined
}

export interface CatalogQuery {
  q?: string
  type?: string | string[]
  size?: string | string[]
  fit?: string | string[]
  color?: string | string[]
  material?: string | string[]
  occasion?: string | string[]
  badge?: string | string[]
  price_from?: string
  price_to?: string
  sort?: string
  page?: string
  per_page?: string
  slugs?: string | string[]
}

export const filterProducts = (q: CatalogQuery) => {
  const types = list(q.type)
  const sizes = list(q.size).map(Number)
  const fits = list(q.fit)
  const colors = list(q.color)
  const materials = list(q.material)
  const occasions = list(q.occasion)
  const badges = list(q.badge)
  const slugs = list(q.slugs)
  const from = num(q.price_from)
  const to = num(q.price_to)
  const query = (q.q || "").toString().trim().toLowerCase()

  const matches = (p: ProductRecord, skip?: string) =>
    (skip === "type" || !types.length || types.includes(p.type)) &&
    (!sizes.length || p.sizes.some((s) => sizes.includes(s.eu) && s.available)) &&
    (!fits.length || fits.includes(p.fit)) &&
    (skip === "color" || !colors.length || p.colors.some((c) => colors.includes(c.id))) &&
    (skip === "material" || !materials.length || materials.includes(p.material)) &&
    (!occasions.length || p.occasions.some((o) => occasions.includes(o))) &&
    (!badges.length || badges.some((b) => (b === "bestseller" ? p.bestseller : p.badge === b))) &&
    (!slugs.length || slugs.includes(p.slug)) &&
    (from === undefined || (p.price ?? 0) >= from) &&
    (to === undefined || (p.price ?? 0) <= to) &&
    (!query || `${p.type} ${p.modelNo ?? ""} ${p.slug}`.toLowerCase().includes(query))

  let items = PRODUCTS.filter((p) => matches(p))

  switch (q.sort) {
    case "new":
      items = [...items].sort((a, b) => Number(b.badge === "new") - Number(a.badge === "new") || b.id - a.id)
      break
    case "price_asc":
      items = [...items].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
      break
    case "price_desc":
      items = [...items].sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
      break
    case "sale":
      items = [...items].sort((a, b) => Number(!!b.oldPrice) - Number(!!a.oldPrice))
      break
    default:
      items = [...items].sort((a, b) => b.popularity - a.popularity)
  }

  const perPage = Math.min(Math.max(Number(q.per_page) || 12, 1), 48)
  const page = Math.max(Number(q.page) || 1, 1)
  const total = items.length
  const lastPage = Math.max(Math.ceil(total / perPage), 1)
  const pageItems = items.slice((page - 1) * perPage, page * perPage)

  // Facet hisoblari — o'z guruhidan tashqari barcha filtrlar qo'llangan holda
  const count = (skip: string, pred: (p: ProductRecord) => boolean) =>
    PRODUCTS.filter((p) => matches(p, skip) && pred(p)).length
  const facets = {
    type: ["oksford", "derbi", "brogi", "monk", "loafer", "chelsi"].map((v) => ({
      value: v,
      count: count("type", (p) => p.type === v)
    })),
    material: ["leather", "suede", "patent", "nubuck"].map((v) => ({
      value: v,
      count: count("material", (p) => p.material === v)
    })),
    color: ["black", "brown", "cognac", "navy", "white"].map((v) => ({
      value: v,
      count: count("color", (p) => p.colors.some((c) => c.id === v))
    })),
    size: [39, 40, 41, 42, 43, 44, 45, 46].map((v) => ({
      value: v,
      count: PRODUCTS.filter((p) => matches(p) && p.sizes.some((s) => s.eu === v && s.available)).length
    })),
    price: { min: 525000, max: 580000 }
  }

  return {
    status: "ok",
    data: pageItems.map(toListItem),
    pagination: { current_page: page, per_page: perPage, total, last_page: lastPage },
    facets
  }
}
