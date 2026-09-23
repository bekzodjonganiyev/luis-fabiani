<script setup lang="ts">
/** Bir tanlovli chip qatori: To'liqlik (Tor / Standart / Keng), Qulay vaqt, Santimetr / Dyuym. */
withDefaults(
  defineProps<{
    options: { value: string; label: string }[]
    modelValue?: string | null
    height?: number
    grow?: boolean
    ariaLabel?: string
  }>(),
  { height: 44, grow: false }
)
const emit = defineEmits<{ (e: "update:modelValue", v: string): void }>()
</script>

<template>
  <div class="flex gap-2" role="group" :aria-label="ariaLabel">
    <button
      v-for="o in options"
      :key="o.value"
      class="inline-flex items-center justify-center rounded-lf border px-4 text-[13px] font-semibold transition-colors duration-lf"
      type="button"
      :class="[
        grow ? 'flex-1' : '',
        modelValue === o.value ? 'border-brand bg-brand text-on-dark' : 'border-line bg-card text-ink hover:border-ink'
      ]"
      :style="{ height: `${height}px` }"
      :aria-pressed="modelValue === o.value"
      @click="emit('update:modelValue', o.value)"
    >
      {{ o.label }}
    </button>
  </div>
</template>
