export default defineEventHandler((event) => {
  const query = getQuery(event) as Record<string, any>
  return filterProducts(query)
})
