<script setup lang="ts">
import { useCartStore } from "@/modules/cart"

/** Savat / checkout xulosasi: mahsulotlar · yetkazish · jami · Nasiya */
withDefaults(
  defineProps<{ deliveryLabel?: string; deliveryValue?: string; deliveryFree?: boolean; compact?: boolean }>(),
  { deliveryFree: true, compact: false }
)
const cart = useCartStore()
const { t } = useI18n()

const productsLine = computed(() => {
  const known = `${formatNumber(cart.knownSubtotal)} ${t("common.sum")}`
  return cart.hasUnknownPrice ? t("cart.price_partial", { known, placeholder: t("placeholders.price") }) : known
})
</script>

<template>
  <div class="flex flex-col gap-3.5">
    <div class="flex justify-between text-sm">
      <span class="text-muted">{{ t("cart.products") }}</span>
      <span class="tabular">{{ productsLine }}</span>
    </div>
    <div class="flex justify-between text-sm">
      <span class="text-muted">{{ deliveryLabel || t("cart.delivery") }}</span>
      <span v-if="deliveryFree" class="font-semibold text-success">{{ capitalize(t("common.free")) }}</span>
      <span v-else class="tabular">{{ deliveryValue }}</span>
    </div>
    <div class="flex items-baseline justify-between border-t border-line pt-3">
      <span class="text-base font-bold">{{ t("cart.total") }}</span>
      <span class="tabular text-2xl font-bold">
        {{ cart.total === null ? t("placeholders.total") : formatNumber(cart.total) }} {{ t("common.sum") }}
      </span>
    </div>
    <span class="text-[13px] font-medium text-brand">
      {{ t("cart.nasiya", { n: cart.installment ? formatNumber(cart.installment) : t("placeholders.sum") }) }}
    </span>
  </div>
</template>
