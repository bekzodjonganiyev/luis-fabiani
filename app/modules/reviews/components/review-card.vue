<script setup lang="ts">
/** Mijoz fikri kartasi: matn Telegram kanalidan o'zgarishsiz olinadi (hozircha placeholder). */
defineProps<{ city: string; model?: string | null }>()
const { t } = useI18n()
</script>

<template>
  <blockquote
    class="m-0 flex flex-col gap-3 rounded-lf border border-line bg-card p-5 lg:gap-3.5 lg:px-[26px] lg:pb-[22px] lg:pt-[26px]"
  >
    <ui-stars />
    <p class="serif m-0 text-xl leading-[1.35] text-ink lg:text-[21px]">{{ t("placeholders.review_text") }}</p>
    <footer class="mt-auto flex justify-between gap-3 text-[13px] font-medium text-muted">
      <span>{{ t("placeholders.name") }}, {{ city }}</span>
      <ui-model-no class="not-italic text-muted" :value="model" />
    </footer>
  </blockquote>
</template>
