<script setup lang="ts">
import { NPagination } from "naive-ui"

defineProps<{
  page: number
  pageCount: number
}>()
const emit = defineEmits<{ (e: "update:page", v: number): void }>()
</script>

<template>
  <nav :aria-label="$t('catalog.pages')">
    <n-pagination
      :page="page"
      :page-count="pageCount"
      :page-slot="7"
      :show-quick-jumper="false"
      @update:page="emit('update:page', $event)"
    />
  </nav>
</template>
