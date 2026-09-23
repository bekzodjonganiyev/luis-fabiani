/** Mock promokod: hech qanday kod yo'q — mijoz tomonidan belgilanadi. Hozircha hamma kod rad etiladi. */
export default defineEventHandler(async (event) => {
  const body = await readBody<{ code?: string }>(event)
  throw createError({ statusCode: 404, statusMessage: `Promo not found: ${body?.code ?? ""}` })
})
