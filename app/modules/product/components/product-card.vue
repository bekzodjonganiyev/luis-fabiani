<script setup lang="ts">
import WishlistButton from "./wishlist-button.vue"
import type { IProductList } from "@/modules/product"

/**
 * Mahsulot kartochkasi (UIKit, 3 holat): oddiy · hover — 2-foto + mavjud o'lchamlar · sotuvda yo'q.
 */
const props = withDefaults(defineProps<{ product: IProductList; imageHeight?: string; compact?: boolean }>(), {
  imageHeight: "h-[220px] md:h-[300px] xl:h-[380px]",
  compact: false
})
const { t } = useI18n()

const hover = ref(false)
const name = computed(() => t(`types.${props.product.type}`))
const link = computed(() => `/product/${props.product.slug}`)
const availableSizes = computed(() => props.product.sizes.filter((s) => s.available).map((s) => s.eu))
const image = computed(() => (hover.value && props.product.hoverImage ? props.product.hoverImage : props.product.image))
const colors = computed(() => props.product.colors.map((c) => ({ ...c, name: t(`colors.${c.id}`) })))
const caption = computed(() => `${t("common.photo")} · ${name.value}, 3/4`)
</script>

<template>
  <article class="flex flex-col gap-2 md:gap-3" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="relative">
      <ui-photo
        tag="a"
        :class="[imageHeight, { 'opacity-60': !product.inStock }]"
        :to="link"
        :src="image.src"
        :caption="caption"
      >
        <ui-badge v-if="!product.inStock" variant="waiting" />
        <ui-badge v-else-if="product.badge" :variant="product.badge" />
        <transition name="fade">
          <span
            v-if="hover && product.inStock && availableSizes.length"
            class="absolute inset-x-2 bottom-2 flex flex-wrap gap-1"
          >
            <span
              v-for="s in availableSizes"
              :key="s"
              class="rounded-lf-badge bg-card px-[5px] py-1 text-[10px] font-semibold leading-none text-ink"
            >
              {{ s }}
            </span>
          </span>
        </transition>
      </ui-photo>
      <wishlist-button :slug="product.slug" :size="compact ? 36 : 40" />
    </div>

    <div class="flex flex-col gap-1 md:gap-1.5">
      <div class="flex items-baseline justify-between gap-1.5">
        <nuxt-link
          class="serif font-medium text-ink"
          :class="[compact ? 'text-xl' : 'text-xl md:text-2xl xl:text-[26px]', { 'text-muted-2': !product.inStock }]"
          :to="link"
        >
          {{ name }}
        </nuxt-link>
        <ui-model-no :class="compact ? 'text-[15px]' : 'text-[15px] md:text-lg xl:text-xl'" :value="product.modelNo" />
      </div>
      <span class="text-xs text-muted md:text-[13px]">
        {{ t(`categories.${product.category}`) }} · {{ t(`materials.${product.material}`) }}
      </span>
      <template v-if="product.inStock">
        <ui-price :value="product.price" :old-value="product.oldPrice" :size="compact ? 'sm' : 'md'" />
      </template>
      <nuxt-link v-else class="text-xs font-semibold text-accent-text" :to="link">
        {{ t("common.notify_me") }}
      </nuxt-link>
      <ui-swatches class="mt-0.5" :colors="colors" :size="compact ? 12 : 14" />
    </div>
  </article>
</template>
