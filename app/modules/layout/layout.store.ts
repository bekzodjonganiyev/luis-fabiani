export const useLayoutStore = defineStore("layout", () => {
  const megamenuOpen = ref(false)
  const mobileNavOpen = ref(false)
  const cartOpen = ref(false)
  const searchOpen = ref(false)
  const filterSheetOpen = ref(false)

  const closeAll = () => {
    megamenuOpen.value = false
    mobileNavOpen.value = false
    searchOpen.value = false
    filterSheetOpen.value = false
    cartOpen.value = false
  }

  return { megamenuOpen, mobileNavOpen, cartOpen, searchOpen, filterSheetOpen, closeAll }
})
