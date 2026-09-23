<script setup lang="ts">
defineProps<{ title: string; text?: string; ctaLabel?: string; ctaTo?: string }>()
</script>

<template>
  <div class="flex flex-col items-center gap-2.5 border border-dashed border-line p-6 text-center">
    <span class="serif text-2xl font-medium">{{ title }}</span>
    <span v-if="text" class="text-[13px] text-muted">{{ text }}</span>
    <ui-button v-if="ctaLabel && ctaTo" class="mt-1" variant="line" size="sm" :to="ctaTo">{{ ctaLabel }}</ui-button>
  </div>
</template>
