import type { DeliveryMethod } from "@/modules/cart"

export type PaymentMethod = "payme" | "click" | "uzum" | "nasiya" | "cash"
export const PAYMENT_METHODS: PaymentMethod[] = ["payme", "click", "uzum", "nasiya", "cash"]

export class CheckoutFormDTO {
  name = ""
  phone = "+998 "
  code = ""
  codeSent = false
  contactConfirmed = false
  delivery: DeliveryMethod = "courier"
  address = ""
  flat = ""
  region: string | null = null
  pickupPoint: "store" | "workshop" = "store"
  timeSlot: string | null = null
  payment: PaymentMethod | null = null
  promo = ""
  promoApplied = false
}

export interface IOrderPayload {
  contact: { name: string; phone: string }
  delivery: {
    method: DeliveryMethod
    address?: string
    flat?: string
    region?: string
    timeSlot?: string
    pickupPoint?: string
  }
  payment: PaymentMethod
  promo?: string
  items: { key: string; qty: number }[]
}

export interface IOrderResult {
  id: number
  number: string
  status: string
}
