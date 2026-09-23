<script setup lang="ts">
/** Keyingi bosqich sahifalari uchun vaqtinchalik sahifa: sarlavha dizayndan, kontent mijozdan. */
defineProps<{ title: string }>()
const { t } = useI18n()
</script>

<template>
  <div class="lf-container flex min-h-[50vh] flex-col gap-4 py-12 lg:py-20">
    <h1 class="serif m-0 text-[40px] font-medium leading-[1.02] lg:text-[56px]">{{ title }}</h1>
    <p class="m-0 max-w-[60ch] text-[15px] text-muted">{{ t("stub.note") }}</p>
    <ui-button class="self-start" variant="line" to="/catalog">{{ t("nav.catalog") }}</ui-button>
  </div>
</template>
