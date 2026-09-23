<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"
import Megamenu from "./megamenu.vue"
import MobileNav from "./mobile-nav.vue"
import LangSwitcher from "./lang-switcher.vue"
import { useLayoutStore } from "@/modules/layout"
import { useCartStore } from "@/modules/cart"
import { useWishlistStore } from "@/modules/wishlist"

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const layout = useLayoutStore()
const cart = useCartStore()
const wishlist = useWishlistStore()
const { nav } = useSiteLinks()
const { logo } = usePalette()

const headerEl = useTemplateRef<HTMLElement>("headerEl")
const searchEl = useTemplateRef<any>("searchEl")
const query = ref((route.query.q as string) || "")

onClickOutside(headerEl, () => (layout.megamenuOpen = false))
watch(
  () => route.fullPath,
  () => layout.closeAll()
)

let hoverTimer: ReturnType<typeof setTimeout> | undefined
const openMega = () => {
  clearTimeout(hoverTimer)
  layout.megamenuOpen = true
}
const closeMegaSoon = () => {
  clearTimeout(hoverTimer)
  hoverTimer = setTimeout(() => (layout.megamenuOpen = false), 160)
}

const isActive = (to: string) => {
  const path = to.split("?")[0] ?? to
  return path !== "/" && route.path.startsWith(path)
}

const toggleSearch = async () => {
  layout.searchOpen = !layout.searchOpen
  if (layout.searchOpen) {
    await nextTick()
    searchEl.value?.focus?.()
  }
}
const submitSearch = () => {
  layout.searchOpen = false
  router.push({ path: "/catalog", query: query.value ? { q: query.value } : {} })
}
</script>

<template>
  <header ref="headerEl" class="relative z-40 bg-bg" @keydown.esc="layout.closeAll()">
    <!-- 0 · Promo band -->
    <div
      class="flex h-9 items-center justify-center gap-3.5 bg-brand px-4 text-center text-xs font-medium text-on-dark md:h-10 md:text-[13px]"
    >
      <span class="hidden md:inline">{{ t("promo.band") }}</span>
      <span class="md:hidden">{{ t("promo.band_short") }}</span>
      <nuxt-link
        class="font-semibold text-accent"
        style="border-bottom: 1px solid color-mix(in srgb, var(--lf-accent) 60%, transparent)"
        to="/help#nasiya"
      >
        {{ t("promo.more") }}
      </nuxt-link>
    </div>

    <!-- 0b · Utility band (desktop) -->
    <div class="hidden border-b border-line lg:block">
      <div class="lf-container flex h-9 items-center justify-between text-xs font-medium">
        <lang-switcher />
        <div class="flex items-center gap-7">
          <nuxt-link class="text-muted transition-colors duration-lf hover:text-ink" to="/track">
            {{ t("utility.track") }}
          </nuxt-link>
          <nuxt-link class="text-muted transition-colors duration-lf hover:text-ink" to="/stores">
            {{ t("utility.stores") }}
          </nuxt-link>
          <a class="font-semibold text-ink" href="tel:+998">{{ t("placeholders.phone") }}</a>
        </div>
      </div>
    </div>

    <!-- 1 · Header -->
    <div class="border-b border-line bg-bg">
      <div class="lf-container flex h-[60px] items-center justify-between lg:h-[72px]">
        <div class="flex items-center lg:hidden">
          <ui-icon-button icon="menu" :label="t('nav.menu')" :icon-size="22" @click="layout.mobileNavOpen = true" />
        </div>

        <nuxt-link class="flex items-center" to="/" :aria-label="t('nav.logo_aria')">
          <img class="block h-[34px] w-auto lg:h-11" width="160" height="44" :src="logo" :alt="t('nav.logo_alt')" />
        </nuxt-link>

        <nav class="hidden items-center gap-[34px] lg:flex" :aria-label="t('nav.main')">
          <template v-for="item in nav" :key="item.key">
            <div v-if="item.mega" class="flex h-[72px] items-center" @mouseenter="openMega" @mouseleave="closeMegaSoon">
              <button
                class="border-b py-2 text-[15px] font-medium text-ink transition-colors duration-lf"
                type="button"
                aria-controls="lf-megamenu"
                :class="layout.megamenuOpen || isActive(item.to) ? 'border-ink' : 'border-transparent hover:border-ink'"
                :aria-expanded="layout.megamenuOpen"
                @click="layout.megamenuOpen = !layout.megamenuOpen"
              >
                {{ item.label }}
              </button>
            </div>
            <nuxt-link
              v-else
              class="border-b py-2 text-[15px] font-medium text-ink transition-colors duration-lf"
              :class="isActive(item.to) ? 'border-ink' : 'border-transparent hover:border-ink'"
              :to="item.to"
            >
              {{ item.label }}
            </nuxt-link>
          </template>
        </nav>

        <div class="flex items-center gap-1">
          <ui-icon-button
            icon="search"
            :label="t('nav.search')"
            :aria-expanded="layout.searchOpen"
            @click="toggleSearch"
          />
          <ui-icon-button
            class="hidden lg:inline-flex"
            icon="heart"
            to="/catalog?wishlist=1"
            :label="t('nav.wishlist')"
            :count="wishlist.count"
          />
          <ui-icon-button
            icon="cart"
            :label="cart.count ? t('nav.cart_count', { n: cart.count }) : t('nav.cart')"
            :count="cart.count"
            @click="layout.cartOpen = true"
          />
        </div>
      </div>

      <!-- Qidiruv qatori -->
      <transition name="fade">
        <div v-if="layout.searchOpen" class="border-t border-line bg-bg">
          <form class="lf-container flex items-center gap-2 py-3" role="search" @submit.prevent="submitSearch">
            <ui-input
              ref="searchEl"
              v-model="query"
              class="flex-1"
              size="sm"
              type="text"
              autocomplete="off"
              :placeholder="t('nav.search_placeholder')"
            />
            <ui-button size="sm" type="submit">{{ t("nav.search") }}</ui-button>
            <ui-icon-button icon="close" :label="t('common.close')" @click="layout.searchOpen = false" />
          </form>
        </div>
      </transition>
    </div>

    <!-- Megamenyu (desktop) -->
    <megamenu
      :open="layout.megamenuOpen"
      @mouseenter="openMega"
      @mouseleave="closeMegaSoon"
      @close="layout.megamenuOpen = false"
    />

    <!-- Mobil menyu -->
    <client-only>
      <mobile-nav />
    </client-only>
  </header>
</template>
