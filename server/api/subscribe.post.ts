export default defineEventHandler(async (event) => {
  const body = await readBody<{ phone?: string }>(event)
  if (!body?.phone) throw createError({ statusCode: 422, statusMessage: "Phone required" })
  return { status: "ok", data: { subscribed: true } }
})
