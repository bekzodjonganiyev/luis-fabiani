import { z } from "zod"

const schema = z.object({ phone: z.string().min(9), number: z.string().regex(/^LF-\d{6}$/i) })
const STATUSES = ["new", "confirmed", "packed", "shipping", "delivered"] as const

/**
 * Mock: buyurtma holati. Raqam formati LF-XXXXXX (orders.post.ts beradi); holat raqamning oxirgi
 * raqamidan aniqlanadi, sanalar — hozirdan orqaga. Haqiqiy API — Laravel (alohida repo).
 */
export default defineEventHandler((event) => {
  const parsed = schema.safeParse(getQuery(event))
  if (!parsed.success) throw createError({ statusCode: 404, statusMessage: "Order not found" })

  const number = parsed.data.number.toUpperCase()
  const last = Number(number.slice(-1))
  const current = last % STATUSES.length
  const hour = 3_600_000
  const steps = STATUSES.map((status, i) => ({
    status,
    date: i <= current ? new Date(Date.now() - (current - i) * 20 * hour).toISOString() : null
  }))

  return {
    status: "ok",
    data: {
      number,
      status: STATUSES[current],
      steps,
      delivery: last % 3 === 0 ? "regions" : last % 3 === 1 ? "courier" : "pickup",
      items_count: (last % 2) + 1
    }
  }
})
