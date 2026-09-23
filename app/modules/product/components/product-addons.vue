<script setup lang="ts">
import type { IAddon } from "@/modules/product"
import { useCartStore } from "@/modules/cart"

defineProps<{ addons: IAddon[] }>()
const { t } = useI18n()
const cart = useCartStore()
</script>

<template>
  <div class="flex flex-col gap-3 lg:gap-3.5">
    <span class="serif text-[26px] font-medium lg:text-[30px]">{{ t("product.addons_title") }}</span>
    <button
      v-for="a in addons"
      :key="a.id"
      class="flex items-center gap-3 rounded-lf border border-line bg-card p-2.5 text-left text-ink transition-colors duration-lf hover:border-ink lg:gap-3.5 lg:p-3"
      type="button"
      :aria-label="`${t('common.add')}: ${t(a.nameKey)}`"
      @click="cart.addAddon(a)"
    >
      <span class="ph h-14 w-14 shrink-0 lg:h-16 lg:w-16" :style="{ backgroundImage: `url(${a.image})` }" />
      <span class="flex flex-1 flex-col gap-1">
        <span class="text-sm font-semibold">{{ t(a.nameKey) }}</span>
        <span class="hidden text-xs text-muted lg:inline">{{ t(a.categoryKey) }}</span>
      </span>
      <ui-price size="sm" :value="a.price" />
    </button>
  </div>
</template>
