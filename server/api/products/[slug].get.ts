export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug")
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) throw createError({ statusCode: 404, statusMessage: "Product not found" })
  return { status: "ok", data: toDetail(product) }
})
