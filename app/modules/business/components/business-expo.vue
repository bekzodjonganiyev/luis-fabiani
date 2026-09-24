<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="lf-container mt-11 lg:mt-[72px]">
    <section
      class="flex flex-col gap-6 rounded-lf bg-soft px-5 py-7 text-ink md:flex-row md:items-center md:justify-between md:gap-8 lg:px-10 lg:py-9"
    >
      <div class="flex flex-col gap-1.5">
        <span class="lf-label">{{ t("business.expo_label") }}</span>
        <h2 class="serif m-0 text-[30px] font-medium leading-[1.05] lg:text-4xl">{{ t("business.expo_title") }}</h2>
        <p class="text-ink/80 m-0 text-[15px]">{{ t("business.expo_text", { stand: t("placeholders.stand") }) }}</p>
      </div>
      <ui-button
        class="shrink-0 self-start md:self-auto"
        :to="{ query: { interest: 'private-label' }, hash: '#request' }"
      >
        {{ t("business.expo_cta") }}
      </ui-button>
    </section>
  </div>
</template>
