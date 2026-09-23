<script setup lang="ts">
withDefaults(defineProps<{ modelValue: number; min?: number; max?: number }>(), { min: 1, max: 10 })
const emit = defineEmits<{ (e: "update:modelValue", v: number): void }>()
</script>

<template>
  <div class="inline-flex rounded-lf border border-line bg-card">
    <button
      class="grid h-9 w-9 place-items-center text-ink disabled:opacity-40"
      type="button"
      :aria-label="$t('cart.decrease')"
      :disabled="modelValue <= min"
      @click="emit('update:modelValue', Math.max(min, modelValue - 1))"
    >
      <ui-icon name="minus" :size="14" :stroke-width="2" />
    </button>
    <span class="tabular inline-flex w-9 items-center justify-center text-sm font-semibold" aria-live="polite">
      {{ modelValue }}
    </span>
    <button
      class="grid h-9 w-9 place-items-center text-ink disabled:opacity-40"
      type="button"
      :aria-label="$t('cart.increase')"
      :disabled="modelValue >= max"
      @click="emit('update:modelValue', Math.min(max, modelValue + 1))"
    >
      <ui-icon name="plus" :size="14" :stroke-width="2" />
    </button>
  </div>
</template>
