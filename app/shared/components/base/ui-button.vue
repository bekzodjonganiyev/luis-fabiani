<script setup lang="ts">
import { NButton, type ButtonProps } from "naive-ui"

/**
 * Dizayn tugmalari (UIKit): ink (asosiy) · line (ikkilamchi) · bone (to'q fonda asosiy — oltin/pastel) ·
 * line-bone (to'q fonda ikkilamchi) · text. Balandlik: xs 36 · sm 44 · md 52 · lg 56.
 */
interface Props {
  variant?: "ink" | "line" | "bone" | "line-bone" | "text"
  size?: "xs" | "sm" | "md" | "lg"
  type?: "button" | "submit" | "reset"
  to?: string | Record<string, any>
  href?: string
  block?: boolean
  loading?: boolean
  disabled?: boolean
  label?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: "ink",
  size: "md",
  type: "button"
})

const { colors } = usePalette()

const naiveSize = computed(
  () => ({ xs: "tiny", sm: "small", md: "medium", lg: "large" })[props.size] as ButtonProps["size"]
)

const colorProps = computed<Partial<ButtonProps>>(() => {
  const c = colors.value
  const accent = c.gold || c.pastel
  const onDark = c["on-dark"]
  switch (props.variant) {
    case "bone":
      return { color: accent, textColor: c.brand }
    case "line-bone":
      return { ghost: true, color: onDark, textColor: onDark }
    case "line":
      return { ghost: true, type: "primary" }
    case "text":
      return { text: true, type: "primary" }
    default:
      return { type: "primary" }
  }
})

const common = computed(() => ({
  ...colorProps.value,
  "class": ["lf-btn", `lf-btn--${props.variant}`, { "lf-btn--block": props.block }],
  "size": naiveSize.value,
  "loading": props.loading,
  "disabled": props.disabled,
  "block": props.block,
  "focusable": true,
  "aria-label": props.ariaLabel
}))
</script>

<template>
  <!-- Ichki havola: NuxtLink custom → <a> ko'rinishidagi tugma -->
  <nuxt-link v-if="to" v-slot="{ href: linkHref, navigate }" custom :to="to">
    <n-button v-bind="common" tag="a" :href="linkHref" @click="navigate">
      <template v-if="$slots.icon" #icon><slot name="icon" /></template>
      <slot>{{ label }}</slot>
    </n-button>
  </nuxt-link>
  <n-button v-else-if="href" v-bind="{ ...common, ...$attrs }" tag="a" :href="href">
    <template v-if="$slots.icon" #icon><slot name="icon" /></template>
    <slot>{{ label }}</slot>
  </n-button>
  <n-button v-else v-bind="common" :attr-type="type">
    <template v-if="$slots.icon" #icon><slot name="icon" /></template>
    <slot>{{ label }}</slot>
  </n-button>
</template>

<style scoped>
.lf-btn {
  font-family: var(--lf-font-ui);
  letter-spacing: 0.01em;
  transition:
    background-color var(--lf-ease),
    color var(--lf-ease),
    border-color var(--lf-ease);
}
.lf-btn :deep(.n-button__content) {
  gap: 10px;
}
/* naive ghost fonni hover'da ham shaffof qoldiradi (colorGhostHover ishlatilmaydi) — dizayn: brand fon + och matn.
   Fokusda naive textColorGhostHover (och) ni oladi — shaffof fonda matn yo'qolmasin. */
.lf-btn--line:not(.n-button--disabled):hover,
.lf-btn--line:not(.n-button--disabled):active {
  --n-color-hover: var(--lf-brand) !important;
  --n-color-pressed: var(--lf-brand-hover) !important;
}
.lf-btn--line:not(:hover) {
  --n-text-color-focus: var(--lf-brand) !important;
}
.lf-btn--line-bone {
  --n-border: 1px solid color-mix(in srgb, var(--lf-on-dark) 55%, transparent) !important;
}
.lf-btn--line-bone:hover {
  --n-border-hover: 1px solid var(--lf-on-dark) !important;
}
.lf-btn--bone:hover {
  filter: brightness(1.04);
}
</style>
