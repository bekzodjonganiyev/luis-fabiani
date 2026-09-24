/** Ish jadvali: kunlar (0 — yakshanba) va soatlar Toshkent vaqti (UTC+5) bo'yicha. */
export interface StoreSchedule {
  days: number[]
  open: number
  close: number
}

export interface StorePoint {
  id: "store" | "workshop"
  schedule: StoreSchedule
  /** Xaritadagi belgi joyi, % (map.jpg ustida) */
  pin: { left: string; top: string }
}

export const TASHKENT_UTC_OFFSET = 5

export const STORE_POINTS: StorePoint[] = [
  { id: "store", schedule: { days: [0, 1, 2, 3, 4, 5, 6], open: 9, close: 21 }, pin: { left: "44%", top: "38%" } },
  { id: "workshop", schedule: { days: [1, 2, 3, 4, 5, 6], open: 9, close: 18 }, pin: { left: "62%", top: "58%" } }
]
