<script setup lang="ts">
import type { IProductList } from "@/modules/product"

defineProps<{ items: IProductList[] }>()
const { t } = useI18n()
</script>

<template>
  <section class="flex flex-col gap-3 lg:gap-6">
    <div class="flex items-end justify-between">
      <h2 class="serif m-0 text-[26px] font-medium leading-none lg:text-[40px]">{{ t("product.similar_title") }}</h2>
      <nuxt-link class="lf-link hidden text-[15px] lg:inline" to="/catalog?category=classic">
        {{ t("product.similar_all") }}
      </nuxt-link>
    </div>
    <div class="grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-6">
      <nuxt-link
        v-for="p in items"
        :key="p.slug"
        class="flex flex-col gap-1.5 text-ink lg:gap-2.5"
        :to="`/product/${p.slug}`"
      >
        <ui-photo
          class="h-[200px] lg:h-[240px]"
          :src="p.image.src"
          :caption="`${t('common.photo')} · ${t(`types.${p.type}`)}`"
        />
        <span class="flex items-baseline justify-between">
          <span class="serif text-lg font-medium lg:text-[22px]">{{ t(`types.${p.type}`) }}</span>
          <ui-model-no class="text-sm lg:text-[17px]" :value="p.modelNo" />
        </span>
        <ui-price size="sm" :value="p.price" />
      </nuxt-link>
    </div>
  </section>
</template>
