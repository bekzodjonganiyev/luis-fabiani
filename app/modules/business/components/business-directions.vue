<script setup lang="ts">
import { BUSINESS_INTERESTS } from "@/modules/business"

const { t } = useI18n()
const items = computed(() =>
  BUSINESS_INTERESTS.map((id) => ({
    id,
    title: t(`business.directions.${id}.title`),
    text: t(`business.directions.${id}.text`),
    cta: t(`business.directions.${id}.cta`),
    to: { query: { interest: id }, hash: "#request" }
  }))
)
</script>

<template>
  <section class="lf-container flex flex-col gap-6 pt-11 lg:gap-8 lg:pt-[72px]">
    <h2 class="serif m-0 text-[34px] font-medium leading-[1.05] lg:text-[48px]">
      {{ t("business.directions_title") }}
    </h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
      <nuxt-link
        v-for="item in items"
        :id="item.id"
        :key="item.id"
        class="group flex scroll-mt-24 flex-col gap-3.5 border-t-2 pt-6 text-ink lg:pt-7"
        :class="item.id === 'private-label' ? 'border-accent' : 'border-brand'"
        :to="item.to"
      >
        <span class="serif text-[28px] font-medium leading-none lg:text-[34px]">{{ item.title }}</span>
        <span class="text-[15px] leading-[1.55] text-muted">{{ item.text }}</span>
        <span
          class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent-text transition-colors duration-lf group-hover:text-ink"
        >
          {{ item.cta }}
          <ui-icon name="arrow-right" :size="14" :stroke-width="2" />
        </span>
      </nuxt-link>
    </div>
  </section>
</template>
