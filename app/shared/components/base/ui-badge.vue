<script setup lang="ts">
withDefaults(defineProps<{ variant?: "new" | "sale" | "bestseller" | "waiting" | "dark"; absolute?: boolean }>(), {
  variant: "new",
  absolute: true
})
</script>

<template>
  <span
    class="rounded-lf-badge px-[9px] py-[7px] text-[11px] font-semibold uppercase leading-none tracking-[.12em]"
    :class="[
      absolute ? 'absolute left-3.5 top-3.5 z-[1]' : 'inline-block',
      {
        'bg-badge-new text-badge-new-text': variant === 'new',
        'bg-sale text-on-dark': variant === 'sale',
        'bg-accent text-brand': variant === 'bestseller',
        'bg-muted-2 text-on-dark': variant === 'waiting',
        'bg-ink text-on-dark': variant === 'dark'
      }
    ]"
  >
    <slot>{{ $t(`badges.${variant}`) }}</slot>
  </span>
</template>
