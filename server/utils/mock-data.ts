/**
 * Mock ma'lumotlar — Laravel API (alohida repo) tayyor bo'lguncha.
 * Faqat dizayndagi haqiqiy qiymatlar: modellar 673-1 / 403-2 / 6963-13, narxlar 525 000 / 580 000,
 * o'lchamlar 39–46 (673-1 da 45 yo'q). Qolgan raqamlar null → UI da [raqam] / [NARX] placeholder.
 */
export type ProductType = "oksford" | "derbi" | "loafer" | "monk" | "brogi" | "chelsi" | "sneaker"
export type ProductMaterial = "leather" | "suede" | "patent" | "nubuck"
export type ProductFit = "narrow" | "standard" | "wide"
export type ProductOccasion = "office" | "wedding" | "casual" | "winter"
export type ProductBadge = "new" | "sale" | "bestseller"
export type ProductCategory = "classic" | "casual" | "boots" | "formal"
export type ColorId = "black" | "brown" | "cognac" | "navy" | "white"

export interface ProductColor {
  id: ColorId
  hex: string
}
export interface ProductSize {
  eu: number
  available: boolean
  cm: number | null
}
export interface ProductImage {
  src: string
  view: string
}
export interface AddonRecord {
  id: string
  nameKey: string
  categoryKey: string
  price: number | null
  image: string
}
export interface ProductRecord {
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
  popularity: number
  colors: ProductColor[]
  sizes: ProductSize[]
  fit: ProductFit
  occasions: ProductOccasion[]
  images: ProductImage[]
  addons: string[]
  similar: string[]
  reviewsCount: number | null
  inStock: boolean
}

export const COLORS: Record<ColorId, string> = {
  black: "#1A1714",
  brown: "#5C3A21",
  cognac: "#8B5E3C",
  navy: "#1F2A44",
  white: "#F1EDE4"
}

const sizes = (unavailable: number[] = []): ProductSize[] =>
  [39, 40, 41, 42, 43, 44, 45, 46].map((eu) => ({ eu, available: !unavailable.includes(eu), cm: null }))

/** Asosiy va ikkinchi rasm — `public/images/products/<slug>(-2).jpg` (manbalar: CREDITS.md), qolgani tekstura */
const gallery = (slug: string): ProductImage[] => [
  { src: `/images/products/${slug}.jpg`, view: "three_quarter" },
  { src: `/images/products/${slug}-2.jpg`, view: "profile" },
  { src: "/images/studio_cream.jpg", view: "top" },
  { src: "/images/studio_stone.jpg", view: "sole" },
  { src: "/images/leather_black.jpg", view: "macro" },
  { src: "/images/studio_grey.jpg", view: "on_foot" }
]

const pick = (...ids: ColorId[]): ProductColor[] => ids.map((id) => ({ id, hex: COLORS[id] }))

export const ADDONS: AddonRecord[] = [
  {
    id: "cream-black",
    nameKey: "addons.cream_black",
    categoryKey: "categories.care",
    price: null,
    image: "/images/studio_warm.jpg"
  },
  {
    id: "belt-673",
    nameKey: "addons.belt_673",
    categoryKey: "categories.accessory",
    price: null,
    image: "/images/studio_grey.jpg"
  },
  {
    id: "laces",
    nameKey: "addons.laces",
    categoryKey: "categories.accessory",
    price: null,
    image: "/images/studio_cream.jpg"
  }
]

export const PRODUCTS: ProductRecord[] = [
  {
    id: 1,
    slug: "oksford-673-1",
    type: "oksford",
    modelNo: "673-1",
    category: "classic",
    material: "leather",
    price: 525000,
    oldPrice: null,
    badge: "new",
    bestseller: true,
    popularity: 100,
    colors: pick("black", "brown", "cognac"),
    sizes: sizes([45]),
    fit: "standard",
    occasions: ["office", "wedding"],
    images: gallery("oksford-673-1"),
    addons: ["cream-black", "belt-673", "laces"],
    similar: ["oksford-navy", "derbi-403-2", "brogi", "monk"],
    reviewsCount: null,
    inStock: true
  },
  {
    id: 2,
    slug: "derbi-403-2",
    type: "derbi",
    modelNo: "403-2",
    category: "classic",
    material: "leather",
    price: 525000,
    oldPrice: null,
    badge: null,
    bestseller: true,
    popularity: 90,
    colors: pick("black", "brown", "cognac"),
    sizes: sizes(),
    fit: "standard",
    occasions: ["office", "casual"],
    images: gallery("derbi-403-2"),
    addons: ["cream-black", "laces"],
    similar: ["oksford-673-1", "derbi-nubuk", "monk", "brogi"],
    reviewsCount: null,
    inStock: true
  },
  {
    id: 3,
    slug: "loafer-6963-13",
    type: "loafer",
    modelNo: "6963-13",
    category: "casual",
    material: "suede",
    price: 580000,
    oldPrice: null,
    badge: "new",
    bestseller: true,
    popularity: 85,
    colors: pick("black", "brown", "cognac"),
    sizes: sizes(),
    fit: "standard",
    occasions: ["casual"],
    images: gallery("loafer-6963-13"),
    addons: ["cream-black"],
    similar: ["derbi-nubuk", "derbi-403-2", "oksford-673-1", "chelsi"],
    reviewsCount: null,
    inStock: true
  },
  {
    id: 4,
    slug: "monk",
    type: "monk",
    modelNo: null,
    category: "classic",
    material: "leather",
    price: 580000,
    oldPrice: null,
    badge: null,
    bestseller: true,
    popularity: 70,
    colors: pick("black", "brown", "navy"),
    sizes: sizes(),
    fit: "standard",
    occasions: ["office", "casual"],
    images: gallery("monk"),
    addons: ["cream-black"],
    similar: ["oksford-673-1", "derbi-403-2", "brogi", "oksford-navy"],
    reviewsCount: null,
    inStock: true
  },
  {
    id: 5,
    slug: "brogi",
    type: "brogi",
    modelNo: null,
    category: "classic",
    material: "leather",
    price: 580000,
    oldPrice: null,
    badge: null,
    bestseller: false,
    popularity: 60,
    colors: pick("black", "brown", "cognac"),
    sizes: sizes(),
    fit: "standard",
    occasions: ["office", "casual"],
    images: gallery("brogi"),
    addons: ["cream-black", "laces"],
    similar: ["oksford-673-1", "derbi-403-2", "monk", "oksford-lak"],
    reviewsCount: null,
    inStock: true
  },
  {
    id: 6,
    slug: "oksford-lak",
    type: "oksford",
    modelNo: null,
    category: "formal",
    material: "patent",
    price: 580000,
    oldPrice: null,
    badge: null,
    bestseller: false,
    popularity: 55,
    colors: pick("black"),
    sizes: sizes(),
    fit: "standard",
    occasions: ["wedding"],
    images: gallery("oksford-lak"),
    addons: ["cream-black"],
    similar: ["oksford-673-1", "oksford-navy", "brogi", "monk"],
    reviewsCount: null,
    inStock: true
  },
  {
    id: 7,
    slug: "derbi-nubuk",
    type: "derbi",
    modelNo: null,
    category: "casual",
    material: "nubuck",
    price: 525000,
    oldPrice: 580000,
    badge: "sale",
    bestseller: false,
    popularity: 65,
    colors: pick("brown", "cognac"),
    sizes: sizes(),
    fit: "standard",
    occasions: ["casual"],
    images: gallery("derbi-nubuk"),
    addons: ["cream-black"],
    similar: ["derbi-403-2", "loafer-6963-13", "monk", "chelsi"],
    reviewsCount: null,
    inStock: true
  },
  {
    id: 8,
    slug: "oksford-navy",
    type: "oksford",
    modelNo: null,
    category: "classic",
    material: "leather",
    price: 525000,
    oldPrice: null,
    badge: null,
    bestseller: false,
    popularity: 50,
    colors: pick("navy", "black"),
    sizes: sizes(),
    fit: "standard",
    occasions: ["office"],
    images: gallery("oksford-navy"),
    addons: ["cream-black", "laces"],
    similar: ["oksford-673-1", "oksford-lak", "derbi-403-2", "brogi"],
    reviewsCount: null,
    inStock: true
  },
  {
    id: 9,
    slug: "chelsi",
    type: "chelsi",
    modelNo: null,
    category: "boots",
    material: "leather",
    price: 580000,
    oldPrice: null,
    badge: null,
    bestseller: false,
    popularity: 45,
    colors: pick("black", "brown", "cognac"),
    sizes: sizes(),
    fit: "standard",
    occasions: ["winter", "casual"],
    images: gallery("chelsi"),
    addons: ["cream-black"],
    similar: ["loafer-6963-13", "derbi-nubuk", "derbi-403-2", "monk"],
    reviewsCount: null,
    inStock: true
  }
]

export const toListItem = (p: ProductRecord) => ({
  id: p.id,
  slug: p.slug,
  type: p.type,
  modelNo: p.modelNo,
  category: p.category,
  material: p.material,
  price: p.price,
  oldPrice: p.oldPrice,
  badge: p.badge,
  bestseller: p.bestseller,
  colors: p.colors,
  sizes: p.sizes,
  image: p.images[0],
  hoverImage: p.images[1],
  inStock: p.inStock
})

export const toDetail = (p: ProductRecord) => ({
  ...toListItem(p),
  images: p.images,
  fit: p.fit,
  occasions: p.occasions,
  reviewsCount: p.reviewsCount,
  addons: ADDONS.filter((a) => p.addons.includes(a.id)),
  similar: p.similar
    .map((slug) => PRODUCTS.find((x) => x.slug === slug))
    .filter(Boolean)
    .map((x) => toListItem(x!))
})
