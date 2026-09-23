<script setup lang="ts">
import {
  CatalogFilters,
  CatalogFilterSheet,
  CatalogActivePills,
  CatalogSort,
  CatalogGrid,
  useCatalogService,
  useCatalogStore
} from "@/modules/catalog"
import { useLayoutStore } from "@/modules/layout"

const { t } = useI18n()
const route = useRoute()
const store = useCatalogStore()
const service = useCatalogService()
const layout = useLayoutStore()

useHead({ title: t("catalog.title") })

service.syncFromRoute()
const { refresh } = await useAsyncData("catalog", () => service.fetchList(), {
  watch: [() => route.query],
  server: !store.params.wishlist
})
watch(
  () => route.query,
  () => service.syncFromRoute(),
  { flush: "sync" }
)
onMounted(() => store.params.wishlist && refresh())

const crumbs = computed(() => [
  { label: t("nav.home"), to: "/" },
  { label: t("nav.catalog"), to: "/catalog" },
  { label: store.params.wishlist ? t("catalog.wishlist_title") : t("catalog.crumb_classic") }
])
const title = computed(() =>
  store.params.q
    ? t("catalog.search_results", { q: store.params.q })
    : store.params.wishlist
      ? t("catalog.wishlist_title")
      : t("catalog.title")
)
</script>

<template>
  <div>
    <!-- Sarlavha -->
    <div class="border-b border-line">
      <div class="lf-container flex flex-col gap-2.5 pb-4 pt-4 lg:gap-[18px] lg:pb-7 lg:pt-9">
        <page-breadcrumbs :items="crumbs" />
        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div class="flex flex-col gap-2.5">
            <h1 class="serif m-0 text-[34px] font-medium leading-[1.04] lg:text-[56px] lg:leading-[1.02]">
              {{ title }}
              <span class="serif ml-1 text-lg font-normal italic text-accent-text lg:ml-2.5 lg:text-2xl">
                <span class="lg:hidden">{{ t("catalog.count_short", { n: store.pagination.total }) }}</span>
                <span class="hidden lg:inline">{{ t("catalog.count", { n: store.pagination.total }) }}</span>
              </span>
            </h1>
            <p
              v-if="!store.params.q && !store.params.wishlist"
              class="m-0 max-w-[70ch] text-[13px] leading-normal text-muted lg:text-[15px] lg:leading-[1.55]"
            >
              <span class="lg:hidden">{{ t("catalog.intro_short") }}</span>
              <span class="hidden lg:inline">{{ t("catalog.intro") }}</span>
            </p>
          </div>
          <div class="hidden shrink-0 lg:block"><catalog-sort /></div>
        </div>
      </div>
    </div>

    <!-- Mobil: filtr + saralash (yopishqoq) -->
    <div class="sticky top-0 z-20 border-b border-line bg-bg lg:hidden">
      <div class="flex gap-2 px-4 py-3">
        <button
          class="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lf border border-brand bg-card text-[13px] font-semibold text-ink"
          type="button"
          :aria-expanded="layout.filterSheetOpen"
          @click="layout.filterSheetOpen = true"
        >
          <ui-icon name="filter" :size="16" :stroke-width="1.8" />
          {{ t("catalog.filter") }}
          <span v-if="service.activeCount.value" class="rounded-lg bg-brand px-1.5 py-0.5 text-[11px] text-on-dark">
            {{ service.activeCount.value }}
          </span>
        </button>
        <div class="flex-1"><catalog-sort mobile /></div>
      </div>
      <div v-if="service.activePills.value.length" class="lf-scroll-x px-4 pb-3"><catalog-active-pills compact /></div>
    </div>

    <!-- Asosiy -->
    <div class="lf-container grid grid-cols-1 gap-x-12 pb-10 pt-5 lg:grid-cols-[264px_minmax(0,1fr)] lg:pb-16 lg:pt-7">
      <aside class="hidden flex-col lg:flex" :aria-label="t('catalog.filters')">
        <div class="pb-[18px]"><catalog-active-pills /></div>
        <catalog-filters />
      </aside>
      <catalog-grid />
    </div>

    <client-only><catalog-filter-sheet /></client-only>
  </div>
</template>
