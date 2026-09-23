export const capitalize = (str: string): string => (str ? str.charAt(0).toUpperCase() + str.slice(1) : "")

/** +998 XX XXX XX XX ko'rinishiga keltiradi; mos kelmasa asl matnni qaytaradi. */
export function formatPhone(unformatted: string): string {
  if (!unformatted) return ""
  const digits = unformatted.replace(/[^\d+]/g, "")
  const match = digits.match(/^\+?998(\d{2})(\d{3})(\d{2})(\d{2})$/)
  if (!match) return unformatted
  const [, code, part1, part2, part3] = match
  return `+998 ${code} ${part1} ${part2} ${part3}`
}

export const isPhoneComplete = (value: string) => /^\+?998\d{9}$/.test(value.replace(/[^\d+]/g, ""))

export const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max)

export const uid = () => Math.random().toString(36).slice(2, 10)
