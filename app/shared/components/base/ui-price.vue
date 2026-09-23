<script setup lang="ts">
withDefaults(
  defineProps<{
    value?: number | null
    oldValue?: number | null
    size?: "sm" | "md" | "lg" | "xl"
    withCurrency?: boolean
  }>(),
  { size: "md", withCurrency: true }
)
const { t } = useI18n()
</script>

<template>
  <span class="inline-flex items-baseline gap-2.5">
    <span
      class="tabular font-bold leading-none"
      :class="{
        'text-sm': size === 'sm',
        'text-[15px]': size === 'md',
        'text-2xl': size === 'lg',
        'text-3xl': size === 'xl'
      }"
    >
      {{ formatPrice(value, t("placeholders.price")) }}
      <template v-if="withCurrency">&nbsp;{{ t("common.sum") }}</template>
    </span>
    <span v-if="oldValue" class="tabular text-[13px] text-muted-2 line-through">
      {{ formatPrice(oldValue) }} {{ t("common.sum") }}
    </span>
  </span>
</template>
