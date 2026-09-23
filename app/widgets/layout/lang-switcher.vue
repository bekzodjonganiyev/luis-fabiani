<script setup lang="ts">
/** UZ / RU / EN — utilita bandida. RU/EN tarjimalari keyin; hozircha uz ga fallback. */
const { locale, locales, setLocale } = useI18n()
</script>

<template>
  <div class="flex items-center gap-[18px]" role="group" :aria-label="$t('nav.language')">
    <button
      v-for="l in locales"
      :key="l.code"
      class="text-xs uppercase transition-colors duration-lf"
      type="button"
      :class="locale === l.code ? 'font-bold text-ink' : 'font-medium text-muted hover:text-ink'"
      :aria-pressed="locale === l.code"
      @click="setLocale(l.code)"
    >
      {{ l.name }}
    </button>
  </div>
</template>
