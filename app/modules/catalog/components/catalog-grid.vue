<script setup lang="ts">
import { NSkeleton } from "naive-ui"
import { useCatalogService, useCatalogStore } from "@/modules/catalog"
import { ProductCard } from "@/modules/product"

const store = useCatalogStore()
const { clear, setPage } = useCatalogService()
const { t } = useI18n()
const shown = computed(() =>
  Math.min(store.pagination.current_page * store.pagination.per_page, store.pagination.total)
)
</script>

<template>
  <div class="flex flex-col gap-6 lg:gap-10">
    <div
      v-if="store.loading && !store.items.length"
      class="grid grid-cols-2 gap-x-2.5 gap-y-5 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:grid-cols-4"
    >
      <div v-for="i in 8" :key="i" class="flex flex-col gap-3">
        <n-skeleton class="h-[220px] md:h-[300px]" :sharp="false" />
        <n-skeleton text style="width: 60%" />
        <n-skeleton text style="width: 40%" />
      </div>
    </div>

    <ui-empty-state
      v-else-if="!store.items.length"
      cta-to="/catalog"
      :title="t('catalog.empty_title')"
      :text="t('catalog.empty_text')"
      :cta-label="t('common.clear')"
      @click="clear"
    />

    <div
      v-else
      class="grid grid-cols-2 gap-x-2.5 gap-y-5 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:grid-cols-4"
      aria-live="polite"
      :class="{ 'opacity-60 transition-opacity': store.loading }"
    >
      <product-card v-for="p in store.items" :key="p.slug" image-height="h-[220px] md:h-[300px]" :product="p" />
    </div>

    <div
      v-if="store.items.length"
      class="flex flex-col items-center gap-3 border-t border-line pt-4 lg:flex-row lg:justify-between"
    >
      <span class="text-xs text-muted lg:text-[13px]">
        {{ t("catalog.shown", { shown, total: store.pagination.total }) }}
      </span>
      <ui-pagination
        v-if="store.pagination.last_page > 1"
        :page="store.pagination.current_page"
        :page-count="store.pagination.last_page"
        @update:page="setPage($event)"
      />
    </div>
  </div>
</template>
