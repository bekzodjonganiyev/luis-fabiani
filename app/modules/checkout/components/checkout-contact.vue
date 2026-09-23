<script setup lang="ts">
import CheckoutStepHead from "./checkout-step-head.vue"
import { useCheckoutService, useCheckoutStore } from "@/modules/checkout"

const store = useCheckoutStore()
const service = useCheckoutService()
const { t } = useI18n()
const f = computed(() => store.form)
</script>

<template>
  <!-- Bajarilgan holat -->
  <section
    v-if="f.contactConfirmed"
    class="flex items-center justify-between gap-5 rounded-lf border border-line bg-card px-5 py-5 lg:px-[26px]"
  >
    <div class="flex items-center gap-4">
      <checkout-step-head class="!gap-0" state="done" :n="1" :title="''" />
      <div class="flex flex-col gap-1">
        <span class="text-base font-bold">{{ t("checkout.step_contact") }}</span>
        <span class="text-sm text-muted">
          {{
            t("checkout.contact_done", {
              name: f.name || t("placeholders.full_name"),
              phone: formatPhone(f.phone) || t("placeholders.phone")
            })
          }}
        </span>
      </div>
    </div>
    <button class="text-sm font-semibold text-accent-text" type="button" @click="service.editContact()">
      {{ t("common.change") }}
    </button>
  </section>

  <!-- Faol holat -->
  <section v-else class="flex flex-col gap-5 rounded-lf border border-brand bg-card p-5 lg:p-[26px]">
    <checkout-step-head state="active" :n="1" :title="t('checkout.step_contact')" />
    <div class="grid gap-3.5 md:grid-cols-2">
      <ui-input
        v-model="f.name"
        autocomplete="name"
        :label="t('checkout.name')"
        :placeholder="t('placeholders.full_name')"
        :error="store.errors.name"
        :disabled="f.codeSent"
      />
      <ui-input
        v-model="f.phone"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        :label="t('checkout.phone')"
        :error="store.errors.phone"
        :disabled="f.codeSent"
        @enter="service.sendCode()"
      />
    </div>
    <div v-if="f.codeSent" class="grid gap-3.5 md:grid-cols-2">
      <ui-input
        v-model="f.code"
        inputmode="numeric"
        autocomplete="one-time-code"
        :maxlength="6"
        :label="t('checkout.code')"
        :hint="t('checkout.code_hint', { phone: formatPhone(f.phone) })"
        :error="store.errors.code"
        @enter="service.verifyCode()"
      />
      <div class="flex items-end gap-3">
        <ui-button :loading="store.loading" @click="service.verifyCode()">{{ t("checkout.confirm_code") }}</ui-button>
        <button class="h-[52px] text-sm font-semibold text-accent-text" type="button" @click="service.sendCode()">
          {{ t("checkout.resend") }}
        </button>
      </div>
    </div>
    <div v-else>
      <ui-button :loading="store.loading" @click="service.sendCode()">{{ t("checkout.send_code") }}</ui-button>
    </div>
  </section>
</template>
