<script setup lang="ts">
import { useCheckoutService, useCheckoutStore } from "@/modules/checkout"
import { useCartStore, CartTotals } from "@/modules/cart"

const store = useCheckoutStore()
const service = useCheckoutService()
const cart = useCartStore()
const { t } = useI18n()
const f = computed(() => store.form)

const itemTitle = (i: (typeof cart.items)[number]) => (i.kind === "product" ? t(`types.${i.type}`) : t(i.nameKey!))
const deliveryFree = computed(() => f.value.delivery !== "regions")
</script>

<template>
  <aside class="flex flex-col gap-[18px] rounded-lf border border-line bg-soft p-5 text-ink lg:sticky lg:top-6 lg:p-7">
    <span class="serif text-[28px] font-medium">{{ t("checkout.summary_title") }}</span>

    <div v-for="i in cart.items" :key="i.key" class="flex items-center gap-3.5 border-b border-line pb-4">
      <span class="ph h-20 w-16 shrink-0" :style="{ backgroundImage: `url(${i.image})` }" />
      <span class="flex flex-1 flex-col gap-1">
        <span class="serif text-xl">
          {{ itemTitle(i) }}
          <em v-if="i.kind === 'product'" class="text-accent-text">№ {{ i.modelNo || t("placeholders.model_no") }}</em>
        </span>
        <span class="text-[13px] text-muted">
          <template v-if="i.kind === 'product'">{{ t(`colors.${i.colorId}`) }} · {{ i.size }} ·</template>
          {{ t("common.pieces", { n: i.qty }) }}
        </span>
      </span>
      <span class="tabular font-bold">
        {{ i.price === null ? t("placeholders.price") : formatNumber(i.price * i.qty) }}
      </span>
    </div>

    <div class="flex flex-col gap-1.5">
      <div class="flex gap-2">
        <ui-input
          v-model="f.promo"
          class="flex-1"
          size="sm"
          :placeholder="t('checkout.promo')"
          :aria-label="t('checkout.promo')"
          @enter="service.applyPromo()"
        />
        <ui-button variant="line" size="sm" @click="service.applyPromo()">{{ t("common.apply") }}</ui-button>
      </div>
      <span v-if="store.promoError" class="text-xs font-medium text-sale">{{ store.promoError }}</span>
      <span v-else-if="f.promoApplied" class="text-xs font-medium text-success">{{ t("checkout.promo_applied") }}</span>
    </div>

    <cart-totals
      :delivery-label="t('checkout.delivery')"
      :delivery-free="deliveryFree"
      :delivery-value="t('placeholders.regions_price')"
    />

    <ui-button block :loading="store.loading" :disabled="store.step < 3" @click="service.submit()">
      {{ t("checkout.confirm") }}
    </ui-button>
    <span v-if="store.errors.submit" class="text-xs font-medium text-sale">{{ store.errors.submit }}</span>
    <span class="text-xs leading-normal text-muted">{{ t("checkout.legal") }}</span>
  </aside>
</template>
