import { useStorage } from "@vueuse/core"

export const useWishlistStore = defineStore("wishlist", () => {
  const slugs = useStorage<string[]>("lf_wishlist", [], undefined, { initOnMounted: true })
  const count = computed(() => slugs.value.length)
  const has = (slug: string) => slugs.value.includes(slug)
  const toggle = (slug: string) => {
    const i = slugs.value.indexOf(slug)
    if (i >= 0) slugs.value.splice(i, 1)
    else slugs.value.push(slug)
  }
  return { slugs, count, has, toggle }
})
