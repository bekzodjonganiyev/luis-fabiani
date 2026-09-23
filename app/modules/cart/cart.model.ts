import type { ProductType } from "@/modules/product"

export interface ICartItem {
  key: string
  kind: "product" | "addon"
  slug?: string
  addonId?: string
  type?: ProductType
  modelNo?: string | null
  nameKey?: string
  metaKey?: string
  colorId?: string
  size?: number
  fit?: string
  price: number | null
  qty: number
  image: string
}

export type DeliveryMethod = "courier" | "regions" | "pickup"
