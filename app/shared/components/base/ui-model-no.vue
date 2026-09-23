<script setup lang="ts">
/** Imzo element: «№ 673-1» — Cormorant kursiv, oltin/sage matn. Raqam yo'q bo'lsa [raqam]. */
withDefaults(defineProps<{ value?: string | null; onDark?: boolean; tag?: string }>(), { tag: "span" })
</script>

<template>
  <component :is="tag" class="serif italic" :class="onDark ? 'text-on-dark' : 'text-accent-text'">
    № {{ value || $t("placeholders.model_no") }}
  </component>
</template>
