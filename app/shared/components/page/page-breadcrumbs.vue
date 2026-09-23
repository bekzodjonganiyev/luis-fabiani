<script setup lang="ts">
defineProps<{ items: { label: string; to?: string }[] }>()
</script>

<template>
  <nav
    class="flex flex-wrap gap-2 text-xs font-medium text-muted lg:gap-2.5 lg:text-[13px]"
    :aria-label="$t('nav.breadcrumb')"
  >
    <template v-for="(item, i) in items" :key="i">
      <nuxt-link v-if="item.to" class="text-muted transition-colors duration-lf hover:text-ink" :to="item.to">
        {{ item.label }}
      </nuxt-link>
      <span v-else class="text-ink" aria-current="page">{{ item.label }}</span>
      <span v-if="i < items.length - 1" aria-hidden="true">/</span>
    </template>
  </nav>
</template>
