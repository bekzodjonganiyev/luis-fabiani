<script setup lang="ts">
/** Yakuniy CTA: savol qoldimi — Telegram yoki telefon. */
const { t } = useI18n()
const config = useRuntimeConfig()
</script>

<template>
  <section class="bg-dark text-on-dark">
    <div class="lf-container flex flex-col gap-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-14">
      <div class="flex flex-col gap-2">
        <h2 class="serif m-0 text-[32px] font-medium leading-[1.05] lg:text-[44px]">{{ t("help.cta_title") }}</h2>
        <p class="m-0 max-w-[52ch] text-sm leading-[1.6] text-on-dark-body lg:text-[15px]">{{ t("help.cta_text") }}</p>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row">
        <ui-button variant="bone" :href="config.public.telegramUrl" target="_blank" rel="noopener">
          {{ t("common.write_telegram") }}
        </ui-button>
        <ui-button variant="line-bone" href="tel:+998">{{ t("placeholders.phone") }}</ui-button>
      </div>
    </div>
  </section>
</template>
