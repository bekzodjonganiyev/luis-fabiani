<script setup lang="ts">
import { useOrderTrackService, useOrderTrackStore } from "@/modules/order-track"

const store = useOrderTrackStore()
const service = useOrderTrackService()
const { t } = useI18n()
</script>

<template>
  <form
    class="flex flex-col gap-5 rounded-lf border border-line bg-card p-5 lg:p-[26px]"
    @submit.prevent="service.submit()"
  >
    <div class="grid gap-3.5 md:grid-cols-2">
      <ui-input
        v-model="store.form.phone"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        :label="t('checkout.phone')"
        :error="store.errors.phone"
        @enter="service.submit()"
      />
      <ui-input
        v-model="store.form.number"
        :label="t('track.number')"
        :placeholder="t('track.number_placeholder')"
        :error="store.errors.number"
        @enter="service.submit()"
      />
    </div>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <ui-button type="submit" :loading="store.loading">{{ t("track.submit") }}</ui-button>
      <span class="text-xs text-muted lg:text-[13px]">{{ t("track.hint") }}</span>
    </div>
  </form>
</template>
