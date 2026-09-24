<script setup lang="ts">
import {
  CheckoutContact,
  CheckoutDelivery,
  CheckoutPayment,
  CheckoutSummary,
  useCheckoutStore
} from "@/modules/checkout"
import { useCartStore } from "@/modules/cart"

const { t } = useI18n()
const store = useCheckoutStore()
const cart = useCartStore()

useHead({ title: () => t("checkout.title") })
onBeforeUnmount(() => store.order && store.reset())
</script>

<template>
  <div class="lf-container pb-12 pt-6 lg:pb-16 lg:pt-9">
    <!-- Muvaffaqiyat -->
    <div v-if="store.order" class="mx-auto flex max-w-xl flex-col items-center gap-4 py-16 text-center">
      <span class="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-accent">
        <ui-icon name="check" :size="26" :stroke-width="2.2" />
      </span>
      <h1 class="serif m-0 text-[40px] font-medium leading-[1.02]">{{ t("checkout.success_title") }}</h1>
      <p class="m-0 text-[15px] text-muted">{{ t("checkout.success_text", { number: store.order.number }) }}</p>
      <ui-button variant="line" to="/catalog" @click="store.reset()">{{ t("checkout.success_cta") }}</ui-button>
    </div>

    <!-- Bo'sh savat -->
    <div v-else-if="!cart.items.length" class="mx-auto max-w-xl py-10">
      <ui-empty-state
        cta-to="/catalog"
        :title="t('checkout.empty_title')"
        :text="t('cart.empty_text')"
        :cta-label="t('cart.empty_cta')"
      />
    </div>

    <!-- 3 qadam -->
    <div v-else class="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-x-16">
      <div class="flex flex-col gap-5 lg:gap-7">
        <div class="flex flex-col gap-2">
          <h1 class="serif m-0 text-[36px] font-medium leading-[1.02] lg:text-[48px]">{{ t("checkout.title") }}</h1>
          <p class="m-0 text-[15px] text-muted">{{ t("checkout.subtitle") }}</p>
        </div>
        <checkout-contact />
        <checkout-delivery />
        <checkout-payment />
      </div>
      <checkout-summary />
    </div>
  </div>
</template>
