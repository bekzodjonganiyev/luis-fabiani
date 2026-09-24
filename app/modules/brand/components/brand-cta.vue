<script setup lang="ts">
/** Sahifa oxiridagi CTA: katalog + do'kon manzili */
const { t } = useI18n()
</script>

<template>
  <section
    class="lf-container flex flex-col gap-6 pb-12 pt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pb-20 lg:pt-[72px]"
  >
    <div class="flex flex-col gap-2.5">
      <h2 class="serif m-0 text-[30px] font-medium leading-[1.05] lg:text-[44px]" style="text-wrap: balance">
        {{ t("brand.cta_title") }}
      </h2>
      <p class="m-0 text-sm text-muted lg:text-[15px]">{{ t("brand.cta_text") }}</p>
    </div>
    <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
      <ui-button to="/catalog">{{ t("brand.cta_catalog") }}</ui-button>
      <ui-button variant="line" to="/stores">{{ t("brand.cta_stores") }}</ui-button>
    </div>
  </section>
</template>
