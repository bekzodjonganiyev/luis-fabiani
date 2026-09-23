export type ProductType = "oksford" | "derbi" | "loafer" | "monk" | "brogi" | "chelsi" | "sneaker"
export type ProductMaterial = "leather" | "suede" | "patent" | "nubuck"
export type ProductFit = "narrow" | "standard" | "wide"
export type ProductOccasion = "office" | "wedding" | "casual" | "winter"
export type ProductBadge = "new" | "sale" | "bestseller"
export type ProductCategory = "classic" | "casual" | "boots" | "formal"

export interface IProductColor {
  id: string
  hex: string
}

export interface IProductSize {
  eu: number
  available: boolean
  cm: number | null
}

export interface IProductImage {
  src: string
  view: string
}

export interface IProductList {
  id: number
  slug: string
  type: ProductType
  modelNo: string | null
  category: ProductCategory
  material: ProductMaterial
  price: number | null
  oldPrice: number | null
  badge: ProductBadge | null
  bestseller: boolean
  colors: IProductColor[]
  sizes: IProductSize[]
  image: IProductImage
  hoverImage?: IProductImage
  inStock: boolean
}

export interface IAddon {
  id: string
  nameKey: string
  categoryKey: string
  price: number | null
  image: string
}

export interface IProduct extends IProductList {
  images: IProductImage[]
  fit: ProductFit
  occasions: ProductOccasion[]
  reviewsCount: number | null
  addons: IAddon[]
  similar: IProductList[]
}

export interface ICatalogFacets {
  type: { value: string; count: number }[]
  material: { value: string; count: number }[]
  color: { value: string; count: number }[]
  size: { value: number; count: number }[]
  price: { min: number; max: number }
}

export interface ICatalogResponse extends IResponse<IProductList[]> {
  facets: ICatalogFacets
}

/** Mahsulot ranglari (charm rangi — palitraga bog'liq emas) */
export const COLOR_HEX: Record<string, string> = {
  black: "#1A1714",
  brown: "#5C3A21",
  cognac: "#8B5E3C",
  navy: "#1F2A44",
  white: "#F1EDE4"
}

export const SIZE_RANGE = [39, 40, 41, 42, 43, 44, 45, 46]
export const FEATURED_SLUG = "oksford-673-1"
