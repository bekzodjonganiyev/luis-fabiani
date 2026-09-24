export default defineEventHandler(async (event) => {
  const body = await readBody<{ company?: string; location?: string; interest?: string; name?: string; contact?: string }>(
    event
  )
  if (!body?.company || !body.location || !body.name || !body.contact || !body.interest) {
    throw createError({ statusCode: 422, statusMessage: "company, location, interest, name, contact required" })
  }
  return { status: "ok", data: { id: Date.now(), status: "new" } }
})
