<script setup lang="ts">
import { NuxtLink } from "#components"

/**
 * Rasm joyi. `src` — vaqtinchalik tekstura yoki haqiqiy foto. `caption` — fotografga topshiriq
 * («Foto · ...»): prodda ko'rinmaydi, aria-label/alt bo'lib qoladi; dev rejimda yorliq chiqadi.
 */
withDefaults(
  defineProps<{
    src?: string
    caption?: string
    dark?: boolean
    tag?: string
    to?: string
  }>(),
  { tag: "div" }
)
</script>

<template>
  <component
    :is="to ? NuxtLink : tag"
    class="ph"
    role="img"
    :class="{ 'ph-dark ph-leather': dark }"
    :to="to"
    :aria-label="caption"
    :style="src ? { backgroundImage: `url(${src})` } : undefined"
  >
    <span v-if="caption" class="ph-cap">{{ caption }}</span>
    <slot />
  </component>
</template>
