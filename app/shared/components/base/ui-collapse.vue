<script setup lang="ts">
import { NCollapse, NCollapseItem } from "naive-ui"

/** Akkordeon (Tavsif / Parvarish / Yetkazib berish). items: {key,title}; har key uchun slot. */
defineProps<{
  items: { key: string; title: string }[]
  defaultExpanded?: string[]
}>()
</script>

<template>
  <n-collapse class="lf-collapse" arrow-placement="right" :default-expanded-names="defaultExpanded">
    <n-collapse-item v-for="item in items" :key="item.key" :name="item.key" :title="item.title">
      <template #arrow>
        <ui-icon class="lf-collapse__arrow" name="chevron-down" :size="16" :stroke-width="2" />
      </template>
      <slot :name="item.key" />
    </n-collapse-item>
  </n-collapse>
</template>

<style scoped>
.lf-collapse :deep(.n-collapse-item__header) {
  padding: 0 !important;
}
.lf-collapse :deep(.n-collapse-item__header-main) {
  width: 100%;
}
.lf-collapse :deep(.n-collapse-item-arrow) {
  transition: transform var(--lf-ease);
}
.lf-collapse :deep(.n-collapse-item--active .n-collapse-item-arrow) {
  transform: rotate(180deg) !important;
}
</style>
