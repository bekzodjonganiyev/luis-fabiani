export type SortKey = "popular" | "new" | "price_asc" | "price_desc" | "sale"
export const SORT_KEYS: SortKey[] = ["popular", "new", "price_asc", "price_desc", "sale"]

export class CatalogParamsDTO {
  q = ""
  type: string[] = []
  size: number[] = []
  fit: string | null = null
  color: string[] = []
  material: string[] = []
  occasion: string[] = []
  badge: string[] = []
  category: string | null = null
  price_from = ""
  price_to = ""
  sort: SortKey = "popular"
  page = 1
  per_page = 12
  wishlist = false
}

const list = (v: unknown): string[] =>
  Array.isArray(v) ? v.flatMap((x) => String(x).split(",")) : typeof v === "string" && v ? v.split(",") : []

/** URL query → DTO (URL manba hisoblanadi) */
export const paramsFromQuery = (q: Record<string, any>): CatalogParamsDTO => {
  const p = new CatalogParamsDTO()
  p.q = (q.q as string) || ""
  p.type = list(q.type)
  p.size = list(q.size).map(Number).filter(Boolean)
  p.fit = (q.fit as string) || null
  p.color = list(q.color)
  p.material = list(q.material)
  p.occasion = list(q.occasion)
  p.badge = list(q.badge)
  p.category = (q.category as string) || null
  p.price_from = (q.price_from as string) || ""
  p.price_to = (q.price_to as string) || ""
  p.sort = SORT_KEYS.includes(q.sort) ? q.sort : "popular"
  p.page = Math.max(Number(q.page) || 1, 1)
  p.wishlist = q.wishlist === "1" || q.wishlist === "true"
  return { ...p }
}

/** DTO → URL query (bo'sh qiymatlar tushib qoladi) */
export const queryFromParams = (p: CatalogParamsDTO): Record<string, string> => {
  const q: Record<string, string> = {}
  if (p.q) q.q = p.q
  if (p.type.length) q.type = p.type.join(",")
  if (p.size.length) q.size = p.size.join(",")
  if (p.fit) q.fit = p.fit
  if (p.color.length) q.color = p.color.join(",")
  if (p.material.length) q.material = p.material.join(",")
  if (p.occasion.length) q.occasion = p.occasion.join(",")
  if (p.badge.length) q.badge = p.badge.join(",")
  if (p.category) q.category = p.category
  if (p.price_from) q.price_from = p.price_from
  if (p.price_to) q.price_to = p.price_to
  if (p.sort !== "popular") q.sort = p.sort
  if (p.page > 1) q.page = String(p.page)
  if (p.wishlist) q.wishlist = "1"
  return q
}

export interface IActivePill {
  key: string
  label: string
  remove: () => void
}
