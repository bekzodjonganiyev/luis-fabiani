<script setup lang="ts">
/**
 * Mijoz palitrani hali tanlamagan — ikkalasini solishtirish uchun kichik almashtirgich.
 * Prodda yashirish: NUXT_PUBLIC_DEFAULT_PALETTE ni belgilab, bu komponentni layoutdan olib tashlash kifoya.
 */
const { palette, set } = usePalette()
const { t } = useI18n()
const options = computed(() => [
  { value: "page1-forest-cream" as PaletteCode, label: t("palette.forest") },
  { value: "page2-soft-sage" as PaletteCode, label: t("palette.sage") }
])
</script>

<template>
  <div
    class="fixed bottom-6 left-4 z-30 hidden items-center gap-1 rounded-lf-btn border border-line bg-card p-1 text-[11px] font-semibold shadow-[0_1px_3px_var(--lf-shadow)] md:flex"
    role="group"
    :aria-label="t('palette.label')"
  >
    <span class="px-2 uppercase tracking-[.1em] text-muted">{{ t("palette.label") }}</span>
    <button
      v-for="o in options"
      :key="o.value"
      class="h-8 rounded-lf px-2.5 transition-colors duration-lf"
      type="button"
      :class="palette === o.value ? 'bg-brand text-on-dark' : 'text-ink hover:bg-soft-hover'"
      :aria-pressed="palette === o.value"
      @click="set(o.value)"
    >
      {{ o.label }}
    </button>
  </div>
</template>
