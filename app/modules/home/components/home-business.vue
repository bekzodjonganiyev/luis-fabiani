<script setup lang="ts">
const { t, tm, rt } = useI18n()
const items = computed(() =>
  (tm("home.business_items") as any[]).map((i) => ({ title: rt(i.title), text: rt(i.text), to: rt(i.to) }))
)
</script>

<template>
  <section class="mt-11 bg-dark text-on-dark lg:mt-20">
    <div
      class="lf-container grid grid-cols-1 gap-[18px] py-9 lg:min-h-[620px] lg:grid-cols-12 lg:gap-x-6 lg:pb-16 lg:pt-[88px]"
    >
      <div class="flex flex-col gap-[18px] lg:col-span-5 lg:gap-[22px]">
        <h2 class="serif m-0 text-4xl font-medium leading-[1.04] lg:text-[56px]" style="text-wrap: balance">
          {{ t("home.business_title") }}
        </h2>
        <p class="m-0 max-w-[42ch] text-sm leading-[1.55] text-on-dark-body lg:text-base lg:leading-relaxed">
          <span class="lg:hidden">{{ t("home.business_text_mobile") }}</span>
          <span class="hidden lg:inline">{{ t("home.business_text") }}</span>
        </p>
        <div class="flex flex-col gap-3.5 sm:flex-row">
          <ui-button variant="bone" to="/business#request">{{ t("home.business_cta") }}</ui-button>
          <ui-button class="hidden lg:inline-flex" variant="line-bone" to="/business#pricelist">
            {{ t("home.business_cta_2") }}
          </ui-button>
        </div>
        <p class="m-0 text-[13px] text-on-dark-muted lg:mt-3.5 lg:text-sm">
          <span class="lg:hidden">{{ t("home.business_micam_mobile", { stand: t("placeholders.stand") }) }}</span>
          <i18n-t class="hidden lg:inline" keypath="home.business_micam" tag="span">
            <template #brand><strong class="font-semibold text-on-dark">MICAM Milano</strong></template>
            <template #stand>{{ t("placeholders.stand") }}</template>
          </i18n-t>
        </p>
      </div>
      <div class="hidden flex-col lg:col-span-6 lg:col-start-7 lg:flex">
        <nuxt-link
          v-for="(item, i) in items"
          :key="item.title"
          class="flex items-center justify-between border-t py-[26px] text-on-dark transition-colors duration-lf hover:text-accent"
          style="border-color: color-mix(in srgb, var(--lf-on-dark) 20%, transparent)"
          :class="{ 'border-b': i === items.length - 1 }"
          :to="item.to"
        >
          <span class="flex flex-col gap-1.5">
            <span class="serif text-[32px] font-medium leading-none">{{ item.title }}</span>
            <span class="text-sm text-on-dark-muted">{{ item.text }}</span>
          </span>
          <ui-icon class="text-accent" name="arrow-right" :size="22" :stroke-width="1.8" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
