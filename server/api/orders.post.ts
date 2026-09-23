import { z } from "zod"

const schema = z.object({
  contact: z.object({ name: z.string().min(1), phone: z.string().min(9) }),
  delivery: z.object({
    method: z.enum(["courier", "regions", "pickup"]),
    address: z.string().optional(),
    flat: z.string().optional(),
    region: z.string().optional(),
    timeSlot: z.string().optional(),
    pickupPoint: z.string().optional()
  }),
  payment: z.enum(["payme", "click", "uzum", "nasiya", "cash"]),
  promo: z.string().optional(),
  items: z.array(z.object({ key: z.string(), qty: z.number().int().positive() })).min(1)
})

/** Mock: buyurtmani qabul qiladi va raqam qaytaradi. Haqiqiy API — Laravel (alohida repo). */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success)
    throw createError({ statusCode: 422, statusMessage: "Validation failed", data: parsed.error.flatten() })
  const number = `LF-${Date.now().toString().slice(-6)}`
  return { status: "ok", data: { id: Date.now(), number, status: "new" } }
})
