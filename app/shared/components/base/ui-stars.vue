<script setup lang="ts">
withDefaults(defineProps<{ count?: number; size?: number }>(), { count: 5, size: 14 })
</script>

<template>
  <span
    class="inline-flex gap-[3px] text-[var(--lf-star)]"
    role="img"
    :aria-label="`${count} / 5`"
    :style="{ '--lf-star': 'var(--lf-accent)' }"
  >
    <ui-icon v-for="i in count" :key="i" name="star" :size="size" />
  </span>
</template>
