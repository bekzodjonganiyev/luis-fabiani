<script setup lang="ts">
import CatalogFilters from "./catalog-filters.vue"
import { useCatalogService, useCatalogStore } from "@/modules/catalog"
import { useLayoutStore } from "@/modules/layout"

/** Mobil filtr sheet (FilterSheet.html): pastdan chiqadi, tutqich, Tozalash, «N ta mahsulotni ko'rsatish». */
const layout = useLayoutStore()
const store = useCatalogStore()
const { clear } = useCatalogService()
const { t } = useI18n()
</script>

<template>
  <ui-drawer
    v-model="layout.filterSheetOpen"
    placement="bottom"
    height="min(720px, 92dvh)"
    :aria-label="t('catalog.filters')"
  >
    <div class="flex justify-center pt-2.5"><span class="h-1 w-10 rounded-sm bg-line" /></div>
    <div class="flex items-center justify-between border-b border-line py-3 pl-5 pr-4">
      <span class="serif text-[26px] font-medium">{{ t("catalog.filters") }}</span>
      <div class="flex items-center gap-1">
        <button class="px-2 text-[13px] font-semibold text-muted" type="button" @click="clear">
          {{ t("common.clear") }}
        </button>
        <ui-icon-button
          icon="close"
          :label="t('common.close')"
          :icon-size="22"
          @click="layout.filterSheetOpen = false"
        />
      </div>
    </div>
    <div class="flex-1 overflow-y-auto pt-1">
      <catalog-filters sheet />
    </div>
    <div class="border-t border-line bg-card px-5 pb-6 pt-3">
      <ui-button block @click="layout.filterSheetOpen = false">
        {{ t("catalog.show_n", { n: store.pagination.total }) }}
      </ui-button>
    </div>
  </ui-drawer>
</template>
