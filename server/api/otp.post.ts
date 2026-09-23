/** Mock SMS tasdiqlash: {phone, action: 'send'|'verify', code}. Har qanday 4 xonali kod qabul qilinadi. */
export default defineEventHandler(async (event) => {
  const body = await readBody<{ phone?: string; action?: string; code?: string }>(event)
  if (!body?.phone) throw createError({ statusCode: 422, statusMessage: "Phone required" })
  if (body.action === "verify") {
    const ok = /^\d{4}$/.test(body.code || "")
    if (!ok) throw createError({ statusCode: 422, statusMessage: "Invalid code" })
    return { status: "ok", data: { verified: true } }
  }
  return { status: "ok", data: { sent: true } }
})
