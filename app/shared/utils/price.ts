/**
 * Narx: probel bilan guruhlangan, tabular-nums bilan ko'rsatiladi — «525 000 so'm».
 * null/undefined bo'lsa mijozdan kutilayotgan [NARX] placeholder (i18n) qaytariladi.
 */
export const formatNumber = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value).replace(new RegExp(String.fromCharCode(160), "g"), " ")

export const formatPrice = (value: Nullable<number>, placeholder = "[NARX]") =>
  typeof value === "number" ? formatNumber(value) : placeholder

export const installmentOf = (value: Nullable<number>, months = 3) =>
  typeof value === "number" ? Math.round(value / months) : undefined
