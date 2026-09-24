<script setup lang="ts">
import { BUSINESS_INTERESTS, useBusinessService, useBusinessStore } from "@/modules/business"

const { t } = useI18n()
const store = useBusinessStore()
const service = useBusinessService()
const f = computed(() => store.form)

const interests = computed(() =>
  BUSINESS_INTERESTS.map((id) => ({ value: id, label: t(`business.directions.${id}.title`) }))
)
</script>

<template>
  <section
    id="request"
    class="lf-container grid scroll-mt-6 grid-cols-1 gap-8 pb-12 pt-11 lg:grid-cols-12 lg:gap-x-12 lg:pb-16 lg:pt-[72px]"
  >
    <div class="flex flex-col gap-4 lg:col-span-4">
      <span id="pricelist" aria-hidden="true" />
      <h2 class="serif m-0 text-[34px] font-medium leading-[1.05] lg:text-[48px]">{{ t("business.form_title") }}</h2>
      <p class="m-0 max-w-[34ch] text-[15px] leading-[1.55] text-muted">{{ t("business.form_text") }}</p>
      <a class="mt-2 text-sm font-semibold text-ink" href="tel:+998">
        {{ t("business.form_phone", { phone: t("placeholders.phone") }) }}
      </a>
      <span class="text-sm text-muted">{{ t("business.form_email") }}</span>
    </div>

    <div
      v-if="store.sent"
      class="flex flex-col items-start gap-4 rounded-lf border border-line bg-card p-6 lg:col-span-8 lg:p-8"
      role="status"
    >
      <span class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-on-dark">
        <ui-icon name="check" :size="20" :stroke-width="2" />
      </span>
      <h3 class="serif m-0 text-[28px] font-medium leading-[1.1] lg:text-[32px]">
        {{ t("business.form.done_title") }}
      </h3>
      <p class="m-0 max-w-[52ch] text-[15px] leading-[1.55] text-muted">{{ t("business.form.done_text") }}</p>
      <ui-button variant="line" @click="store.reset()">{{ t("business.form.done_again") }}</ui-button>
    </div>

    <form
      v-else
      class="grid grid-cols-1 gap-x-4 gap-y-[18px] rounded-lf border border-line bg-card p-5 md:grid-cols-2 lg:col-span-8 lg:p-8"
      novalidate
      @submit.prevent="service.submit()"
    >
      <ui-input
        v-model="f.company"
        autocomplete="organization"
        :label="t('business.form.company')"
        :error="store.errors.company"
        @update:model-value="service.clearError('company')"
      />
      <ui-input
        v-model="f.location"
        autocomplete="address-level2"
        :label="t('business.form.location')"
        :error="store.errors.location"
        @update:model-value="service.clearError('location')"
      />
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-semibold text-muted" for="b-interest">{{ t("business.form.interest") }}</label>
        <ui-select id="b-interest" v-model="f.interest" block :options="interests" />
      </div>
      <ui-input v-model="f.volume" inputmode="numeric" :label="t('business.form.volume')" />
      <ui-input
        v-model="f.name"
        autocomplete="name"
        :label="t('checkout.name')"
        :placeholder="t('placeholders.full_name')"
        :error="store.errors.name"
        @update:model-value="service.clearError('name')"
      />
      <ui-input
        v-model="f.contact"
        autocomplete="tel"
        :label="t('business.form.contact')"
        :hint="t('business.form.contact_hint')"
        :error="store.errors.contact"
        @update:model-value="service.clearError('contact')"
      />
      <ui-input v-model="f.message" class="md:col-span-2" type="textarea" :label="t('business.form.message')" />
      <div class="md:col-span-2">
        <ui-checkbox v-model="f.pricelist" :label="t('business.form.pricelist')" />
      </div>
      <div class="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between md:gap-5">
        <p class="m-0 max-w-[48ch] text-xs leading-normal text-muted">
          <i18n-t keypath="business.form.legal" tag="span">
            <template #policy>
              <nuxt-link class="lf-link-accent" to="/legal/privacy">{{ t("business.form.legal_policy") }}</nuxt-link>
            </template>
          </i18n-t>
        </p>
        <div class="flex shrink-0 flex-col items-start gap-1.5 md:items-end">
          <ui-button type="submit" :loading="store.loading">{{ t("business.form.submit") }}</ui-button>
          <span v-if="store.errors.submit" class="text-xs font-medium text-sale" role="alert">
            {{ store.errors.submit }}
          </span>
        </div>
      </div>
    </form>
  </section>
</template>
