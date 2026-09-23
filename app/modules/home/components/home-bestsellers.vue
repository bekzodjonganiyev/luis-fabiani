<script setup lang="ts">
import { ProductCardRow, type IProductList } from "@/modules/product"

defineProps<{ items: IProductList[] }>()
const { t } = useI18n()
</script>

<template>
  <section class="lf-container hidden flex-col gap-8 pt-20 lg:flex">
    <ui-section-title :title="t('home.bestsellers_title')">
      <template #aside>
        <nuxt-link class="lf-link text-[15px]" to="/catalog?badge=bestseller">{{ t("common.show_all") }}</nuxt-link>
      </template>
    </ui-section-title>
    <div class="grid grid-cols-2 gap-6 xl:grid-cols-4">
      <product-card-row v-for="p in items.slice(0, 4)" :key="p.slug" :product="p" />
    </div>
    <p class="serif m-0 mt-2 max-w-[64ch] text-xl italic text-muted">{{ t("home.bestsellers_note") }}</p>
  </section>
</template>
