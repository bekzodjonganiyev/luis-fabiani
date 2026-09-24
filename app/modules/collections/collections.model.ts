export type CollectionSlug = "office" | "wedding" | "casual" | "winter" | "new"

export interface ICollection {
  slug: CollectionSlug
  /** Katalog API filtri: vaziyat yoki holat (yangi) */
  query: Record<string, string>
  src: string
}

/** Vaziyat bo'yicha xarid (Sitemap: /collections) — tartib dizayndagi kabi */
export const COLLECTIONS: ICollection[] = [
  { slug: "office", query: { occasion: "office" }, src: "/images/home-office.jpg" },
  { slug: "wedding", query: { occasion: "wedding" }, src: "/images/home-party.jpg" },
  { slug: "casual", query: { occasion: "casual" }, src: "/images/home-daily.jpg" },
  { slug: "winter", query: { occasion: "winter" }, src: "/images/home-winter.jpg" },
  { slug: "new", query: { badge: "new" }, src: "/images/home-hero.jpg" }
]

export const findCollection = (slug: string) => COLLECTIONS.find((c) => c.slug === slug)
