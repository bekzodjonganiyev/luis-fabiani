<script setup lang="ts">
import type { IProductList } from "@/modules/product"

/** Gorizontal karta — «Eng ko'p sotilganlar» */
const props = defineProps<{ product: IProductList }>()
const { t } = useI18n()
const link = computed(() => `/product/${props.product.slug}`)
const firstColor = computed(() => props.product.colors[0])
</script>

<template>
  <article class="flex items-stretch gap-4 rounded-lf border border-line bg-card p-3">
    <ui-photo
      class="h-[150px] w-[118px] shrink-0"
      tag="a"
      :to="link"
      :src="product.image.src"
      :caption="`${t('common.photo')} · ${t(`types.${product.type}`)}`"
    />
    <div class="flex flex-1 flex-col justify-between py-1">
      <div class="flex flex-col gap-1">
        <ui-model-no class="text-base" :value="product.modelNo" />
        <nuxt-link class="serif text-2xl font-medium leading-[1.1] text-ink" :to="link">
          {{ t(`types.${product.type}`) }}
        </nuxt-link>
        <span class="text-xs text-muted">
          {{ t(`categories.${product.category}`) }} · {{ firstColor ? t(`colors.${firstColor.id}`) : "" }}
        </span>
      </div>
      <div class="flex flex-col gap-1">
        <ui-price size="md" :value="product.price" />
        <span class="text-xs font-semibold text-success">{{ t("common.sizes_range") }}</span>
      </div>
    </div>
  </article>
</template>
