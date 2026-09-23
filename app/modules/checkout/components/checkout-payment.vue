<script setup lang="ts">
import CheckoutStepHead from "./checkout-step-head.vue"
import { PAYMENT_METHODS, useCheckoutStore } from "@/modules/checkout"

const store = useCheckoutStore()
const { t } = useI18n()
const f = computed(() => store.form)
const state = computed(() => (store.step === 3 ? "active" : "next"))
</script>

<template>
  <section
    class="flex flex-col gap-[18px] rounded-lf border bg-card p-5 lg:p-[26px]"
    :class="[state === 'active' ? 'border-brand' : 'border-line opacity-90']"
  >
    <checkout-step-head :n="3" :title="t('checkout.step_payment')" :state="state" />
    <div class="grid grid-cols-2 gap-2.5 md:grid-cols-5" role="radiogroup" :aria-label="t('checkout.step_payment')">
      <button
        v-for="m in PAYMENT_METHODS"
        :key="m"
        class="inline-flex h-14 flex-col items-center justify-center gap-0.5 rounded-lf border text-[13px] font-bold transition-colors duration-lf"
        type="button"
        role="radio"
        :class="[
          f.payment === m
            ? 'border-brand bg-[var(--lf-selected-bg)]'
            : m === 'nasiya'
              ? 'border-accent bg-[color-mix(in_srgb,var(--lf-accent)_18%,var(--lf-card))] hover:border-brand'
              : 'border-line hover:border-ink'
        ]"
        :aria-checked="f.payment === m"
        :disabled="state !== 'active'"
        @click="f.payment = m"
      >
        {{ t(`checkout.payments.${m}`) }}
        <span v-if="m === 'nasiya'" class="text-[11px] font-medium text-accent-text">
          {{ t("checkout.payments.nasiya_sub") }}
        </span>
      </button>
    </div>
    <span v-if="store.errors.payment" class="text-xs font-medium text-sale">{{ store.errors.payment }}</span>
    <span class="text-xs text-muted">{{ t("checkout.payment_note") }}</span>
  </section>
</template>
