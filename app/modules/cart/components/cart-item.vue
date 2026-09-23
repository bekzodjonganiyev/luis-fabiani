<script setup lang="ts">
import { NuxtLink } from "#components"
import type { ICartItem } from "@/modules/cart"
import { useCartStore } from "@/modules/cart"

const props = defineProps<{ item: ICartItem }>()
const cart = useCartStore()
const { t } = useI18n()

const link = computed(() => (props.item.slug ? `/product/${props.item.slug}` : undefined))
const title = computed(() => (props.item.kind === "product" ? t(`types.${props.item.type}`) : t(props.item.nameKey!)))
const meta = computed(() =>
  props.item.kind === "product"
    ? t("cart.item_meta", {
        color: t(`colors.${props.item.colorId}`),
        size: props.item.size,
        fit: t(`fits.${props.item.fit || "standard"}`).toLowerCase()
      })
    : t("addons.cream_black_sub")
)
</script>

<template>
  <article class="flex gap-4 border-b border-line py-5">
    <ui-photo class="h-[120px] w-24 shrink-0" :tag="link ? 'a' : 'div'" :to="link" :src="item.image" :caption="title" />
    <div class="flex flex-1 flex-col gap-1.5">
      <div class="flex items-baseline justify-between gap-2">
        <component :is="link ? NuxtLink : 'span'" class="serif text-[22px] font-medium text-ink" :to="link">
          {{ title }}
        </component>
        <ui-model-no v-if="item.kind === 'product'" class="text-[17px]" :value="item.modelNo" />
        <button
          v-else
          class="text-muted hover:text-ink"
          type="button"
          :aria-label="t('cart.remove')"
          @click="cart.remove(item.key)"
        >
          <ui-icon name="close" :size="16" />
        </button>
      </div>
      <span class="text-[13px] text-muted">{{ meta }}</span>
      <div class="mt-auto flex items-center justify-between">
        <ui-quantity :model-value="item.qty" :min="0" @update:model-value="cart.setQty(item.key, $event)" />
        <ui-price size="md" :value="item.price === null ? null : item.price * item.qty" />
      </div>
    </div>
  </article>
</template>
