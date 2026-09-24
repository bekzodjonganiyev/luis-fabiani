export type OrderTrackStatus = "new" | "confirmed" | "packed" | "shipping" | "delivered"
export const ORDER_TRACK_STATUSES: OrderTrackStatus[] = ["new", "confirmed", "packed", "shipping", "delivered"]

export interface IOrderTrackStep {
  status: OrderTrackStatus
  /** ISO sana; bosqich hali o'tmagan bo'lsa null */
  date: string | null
}

export interface IOrderTrack {
  number: string
  status: OrderTrackStatus
  steps: IOrderTrackStep[]
  delivery: "courier" | "regions" | "pickup"
  items_count: number
}

export class OrderTrackFormDTO {
  phone = "+998"
  number = ""
}
