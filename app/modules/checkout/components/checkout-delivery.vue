<script setup lang="ts">
import CheckoutStepHead from "./checkout-step-head.vue"
import { useCheckoutService, useCheckoutStore } from "@/modules/checkout"

const store = useCheckoutStore()
const service = useCheckoutService()
const { t, tm, rt } = useI18n()
const f = computed(() => store.form)

const state = computed(() => (store.step === 2 ? "active" : store.step > 2 ? "done" : "next"))
const slots = computed(() => (tm("checkout.time_slots") as any[]).map((s) => ({ value: rt(s), label: rt(s) })))
const regions = computed(() => (tm("checkout.regions") as any[]).map((r) => ({ value: rt(r), label: rt(r) })))
const pickupOptions = computed(() => [
  { value: "store", label: t("checkout.pickup_store", { address: t("placeholders.address_store") }) },
  { value: "workshop", label: t("checkout.pickup_workshop", { address: t("placeholders.address_workshop") }) }
])
</script>

<template>
  <section
    class="flex flex-col gap-5 rounded-lf border bg-card p-5 transition-opacity lg:p-[26px]"
    :class="[state === 'active' ? 'border-brand' : 'border-line', { 'opacity-90': state === 'next' }]"
    :aria-disabled="state === 'next'"
  >
    <div class="flex items-center justify-between gap-4">
      <checkout-step-head :n="2" :title="t('checkout.step_delivery')" :state="state" />
      <button
        v-if="state === 'done'"
        class="text-sm font-semibold text-accent-text"
        type="button"
        @click="store.step = 2"
      >
        {{ t("common.change") }}
      </button>
    </div>

    <template v-if="state !== 'next'">
      <div class="grid gap-3 md:grid-cols-3">
        <ui-radio-card
          v-model="f.delivery"
          name="delivery"
          value="courier"
          :title="t('checkout.delivery_courier')"
          :note="t('checkout.delivery_courier_note')"
          :note-accent="t('common.free')"
        />
        <ui-radio-card
          v-model="f.delivery"
          name="delivery"
          value="regions"
          :title="t('checkout.delivery_regions')"
          :note="t('checkout.delivery_regions_note', { price: t('placeholders.regions_price') })"
        />
        <ui-radio-card
          v-model="f.delivery"
          name="delivery"
          value="pickup"
          :title="t('checkout.delivery_pickup')"
          :note="t('checkout.delivery_pickup_note')"
        />
      </div>

      <template v-if="state === 'active'">
        <div v-if="f.delivery === 'regions'" class="flex flex-col gap-1.5">
          <span class="text-xs font-semibold text-muted">{{ t("checkout.region") }}</span>
          <ui-select v-model="f.region" block size="lg" :options="regions" :placeholder="t('checkout.region')" />
          <span v-if="store.errors.region" class="text-xs font-medium text-sale">{{ store.errors.region }}</span>
        </div>

        <div v-if="f.delivery !== 'pickup'" class="grid gap-3.5 md:grid-cols-[2fr_1fr]">
          <ui-input
            v-model="f.address"
            autocomplete="street-address"
            :label="t('checkout.address')"
            :placeholder="t('checkout.address_placeholder')"
            :error="store.errors.address"
          />
          <ui-input v-model="f.flat" :label="t('checkout.flat')" :placeholder="t('checkout.flat_placeholder')" />
        </div>

        <div v-else class="flex flex-col gap-2">
          <span class="text-xs font-semibold text-muted">{{ t("checkout.pickup_point") }}</span>
          <div class="grid gap-3 md:grid-cols-2">
            <ui-radio-card
              v-for="o in pickupOptions"
              :key="o.value"
              v-model="f.pickupPoint"
              name="pickup"
              :value="o.value"
              :title="o.label"
            />
          </div>
        </div>

        <div v-if="f.delivery === 'courier'" class="flex flex-col gap-2">
          <span class="text-xs font-semibold text-muted">{{ t("checkout.time") }}</span>
          <ui-chip-group v-model="f.timeSlot" :options="slots" :height="44" :aria-label="t('checkout.time')" />
        </div>

        <div>
          <ui-button @click="service.toPayment()">{{ t("checkout.to_payment") }}</ui-button>
        </div>
      </template>

      <p v-else class="m-0 text-sm text-muted">
        <template v-if="f.delivery === 'courier'">
          {{ t("checkout.delivery_courier") }} · {{ f.address }}{{ f.flat ? `, ${f.flat}` : ""
          }}{{ f.timeSlot ? ` · ${f.timeSlot}` : "" }}
        </template>
        <template v-else-if="f.delivery === 'regions'">{{ f.region }} · {{ f.address }}</template>
        <template v-else>{{ t("checkout.delivery_pickup") }}</template>
      </p>
    </template>
  </section>
</template>
