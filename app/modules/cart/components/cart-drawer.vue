<script setup lang="ts">
import CartItem from "./cart-item.vue"
import CartTotals from "./cart-totals.vue"
import { useCartStore } from "@/modules/cart"
import { useLayoutStore } from "@/modules/layout"
import { useProductApi, type IAddon } from "@/modules/product"

/** Savat — yon panel (Cart.html), 500px, o'ngdan. */
const layout = useLayoutStore()
const cart = useCartStore()
const api = useProductApi()
const config = useRuntimeConfig()
const { t } = useI18n()

const addons = ref<IAddon[]>([])
watch(
  () => layout.cartOpen,
  async (open) => {
    if (open && !addons.value.length) {
      try {
        addons.value = (await api.getAddons()).data
      } catch (e) {
        console.error(e)
      }
    }
  }
)
const suggested = computed(() => addons.value.filter((a) => !cart.hasAddon(a.id)).slice(0, 1))
</script>

<template>
  <ui-drawer v-model="layout.cartOpen" placement="right" width="min(500px, 100vw)" :aria-label="t('cart.title')">
    <div class="flex items-center justify-between border-b border-line px-5 py-4 lg:px-7 lg:py-[22px]">
      <span class="serif text-[30px] font-medium">
        {{ t("cart.title") }}
        <em class="font-normal text-accent-text">· {{ cart.count }}</em>
      </span>
      <ui-icon-button icon="close" :label="t('common.close')" :icon-size="22" @click="layout.cartOpen = false" />
    </div>

    <template v-if="cart.items.length">
      <div class="flex items-center gap-3 bg-soft px-5 py-3.5 text-[13px] font-medium text-ink lg:px-7">
        <ui-icon class="shrink-0 text-brand" name="truck" :size="18" :stroke-width="1.8" />
        <span>
          {{ t("cart.delivery_note") }}
          <strong class="text-success">{{ t("common.free") }}</strong>
          {{ t("cart.delivery_note_2") }}
        </span>
      </div>

      <div class="flex-1 overflow-y-auto px-5 py-2 lg:px-7">
        <cart-item v-for="item in cart.items" :key="item.key" :item="item" />

        <div v-if="suggested.length" class="flex flex-col gap-2.5 pt-5">
          <span class="lf-label">{{ t("cart.addons_title") }}</span>
          <div
            v-for="a in suggested"
            :key="a.id"
            class="flex items-center gap-3 rounded-lf border border-line bg-card px-3 py-2.5"
          >
            <span class="ph h-11 w-11 shrink-0" :style="{ backgroundImage: `url(${a.image})` }" />
            <span class="flex-1 text-sm font-semibold">{{ t(a.nameKey) }}</span>
            <ui-price size="sm" :value="a.price" />
            <ui-button variant="line" size="xs" @click="cart.addAddon(a)">{{ t("common.add") }}</ui-button>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3.5 border-t border-line bg-card px-5 pb-6 pt-5 lg:px-7 lg:pb-7">
        <cart-totals />
        <ui-button block to="/checkout">{{ t("cart.checkout") }}</ui-button>
        <ui-button variant="line" block target="_blank" rel="noopener" :href="config.public.telegramUrl">
          <template #icon><ui-icon name="telegram" :size="18" /></template>
          {{ t("common.order_telegram") }}
        </ui-button>
      </div>
    </template>

    <div v-else class="flex flex-1 items-center px-5 lg:px-7">
      <ui-empty-state
        class="w-full"
        cta-to="/catalog"
        :title="t('cart.empty_title')"
        :text="t('cart.empty_text')"
        :cta-label="t('cart.empty_cta')"
      />
    </div>
  </ui-drawer>
</template>
