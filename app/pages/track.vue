<script setup lang="ts">
import { OrderTrackForm, OrderTrackTimeline, useOrderTrackStore } from "@/modules/order-track"

const { t } = useI18n()
const route = useRoute()
const store = useOrderTrackStore()
useHead({ title: () => t("stub.track") })

// Checkout muvaffaqiyat sahifasidan ?number=LF-... bilan kelsa — raqam oldindan to'ldiriladi
if (typeof route.query.number === "string") store.form.number = route.query.number
onUnmounted(() => store.reset())

const crumbs = computed(() => [{ label: t("nav.home"), to: "/" }, { label: t("stub.track") }])
</script>

<template>
  <div class="lf-container grid grid-cols-1 gap-6 pb-12 pt-4 lg:grid-cols-12 lg:gap-x-6 lg:pb-20 lg:pt-9">
    <div class="flex flex-col gap-2.5 lg:col-span-4 lg:gap-[18px]">
      <page-breadcrumbs :items="crumbs" />
      <h1 class="serif m-0 text-[34px] font-medium leading-[1.04] lg:text-[56px] lg:leading-[1.02]">
        {{ t("stub.track") }}
      </h1>
      <p class="m-0 max-w-[40ch] text-[13px] leading-normal text-muted lg:text-[15px] lg:leading-[1.55]">
        {{ t("track.intro") }}
      </p>
    </div>
    <div class="flex flex-col gap-5 lg:col-span-7 lg:col-start-6 lg:pt-10">
      <order-track-form />
      <order-track-timeline v-if="store.result" :order="store.result" />
    </div>
  </div>
</template>
