<script setup lang="ts">
/** Dizayndagi ikonkalar — inline SVG (stroke: currentColor). */
const props = withDefaults(
  defineProps<{
    name: IconName
    size?: number | string
    strokeWidth?: number | string
  }>(),
  { size: 20, strokeWidth: 1.6 }
)

export type IconName =
  | "search"
  | "heart"
  | "cart"
  | "arrow-right"
  | "arrow-left"
  | "close"
  | "chevron-down"
  | "chevron-up"
  | "chevron-right"
  | "check"
  | "star"
  | "play"
  | "telegram"
  | "menu"
  | "filter"
  | "truck"
  | "zoom"
  | "minus"
  | "plus"
  | "instagram"
  | "youtube"

const stroked: Record<string, string> = {
  "search": '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  "heart": '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  "cart": '<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "arrow-left": '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  "close": '<path d="M6 6l12 12M18 6 6 18"/>',
  "chevron-down": '<path d="M5 9l7 7 7-7"/>',
  "chevron-up": '<path d="M5 15l7-7 7 7"/>',
  "chevron-right": '<path d="M9 5l7 7-7 7"/>',
  "check": '<path d="m5 12 5 5L20 7"/>',
  "menu": '<path d="M4 7h16M4 12h16M4 17h16"/>',
  "filter": '<path d="M4 6h16M7 12h10M10 18h4"/>',
  "truck":
    '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
  "zoom": '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>',
  "minus": '<path d="M5 12h14"/>',
  "plus": '<path d="M12 5v14M5 12h14"/>',
  "instagram": '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6"/>',
  "youtube":
    '<path d="M21 8.2a2.8 2.8 0 0 0-2-2C17.3 5.8 12 5.8 12 5.8s-5.3 0-7 .4a2.8 2.8 0 0 0-2 2C2.6 9.9 2.6 12 2.6 12s0 2.1.4 3.8a2.8 2.8 0 0 0 2 2c1.7.4 7 .4 7 .4s5.3 0 7-.4a2.8 2.8 0 0 0 2-2c.4-1.7.4-3.8.4-3.8s0-2.1-.4-3.8z"/><path d="m10 9.2 5 2.8-5 2.8z"/>'
}

const filled: Record<string, string> = {
  star: '<path d="m12 2 3 6.6 7 .8-5.2 4.8 1.4 7L12 17.7 5.8 21.2l1.4-7L2 9.4l7-.8z"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  telegram:
    '<path d="M21.5 3.5 2.9 10.7c-1.1.4-1.1 1.1-.2 1.4l4.7 1.5 1.8 5.5c.2.6.4.8.8.8.4 0 .6-.2.9-.5l2.4-2.3 4.9 3.6c.9.5 1.6.2 1.8-.8l3.2-15.2c.3-1.3-.5-1.9-1.7-1.2zM8.6 13.2l9.3-5.9c.5-.3.9-.1.5.2l-7.9 7.1-.3 3.2-1.6-4.6z"/>'
}

const isFilled = computed(() => props.name in filled)
const markup = computed(() => (isFilled.value ? filled[props.name] : stroked[props.name]) || "")
</script>

<template>
  <svg
    v-if="isFilled"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    :width="size"
    :height="size"
    v-html="markup"
  />
  <svg
    v-else
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    :stroke-width="strokeWidth"
    :width="size"
    :height="size"
    v-html="markup"
  />
</template>
