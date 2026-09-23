<script setup lang="ts">
import type { IconName } from "./ui-icon.vue"
import { NuxtLink } from "#components"

withDefaults(
  defineProps<{
    icon: IconName
    label: string
    to?: string
    href?: string
    size?: number
    iconSize?: number
    bordered?: boolean
    round?: boolean
    count?: number
  }>(),
  { size: 44, iconSize: 20, bordered: false, round: false }
)
</script>

<template>
  <component
    :is="to ? NuxtLink : href ? 'a' : 'button'"
    class="relative inline-flex shrink-0 items-center justify-center bg-transparent text-ink transition-colors duration-lf hover:bg-soft-hover"
    :class="[round ? 'rounded-full' : 'rounded-lf-btn', { 'border border-line': bordered }]"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :type="!to && !href ? 'button' : undefined"
    :to="to"
    :href="href"
    :aria-label="label"
  >
    <ui-icon :name="icon" :size="iconSize" />
    <span
      v-if="count"
      class="absolute right-1 top-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-lg bg-badge-new px-1 text-[10px] font-bold text-badge-new-text"
    >
      {{ count }}
    </span>
  </component>
</template>
