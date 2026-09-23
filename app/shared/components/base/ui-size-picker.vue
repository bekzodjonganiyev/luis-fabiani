<script setup lang="ts">
/**
 * O'lcham tanlagich (UIKit): oddiy · tanlangan · hover · sotuvda yo'q (chizilgan, bosilmaydi).
 * multiple=true — filtrda bir nechta o'lcham.
 */
withDefaults(
  defineProps<{
    sizes: { eu: number | string; available?: boolean }[]
    modelValue?: number | string | (number | string)[] | null
    cols?: number
    height?: number
    multiple?: boolean
    ariaLabel?: string
  }>(),
  { cols: 4, height: 44, multiple: false }
)
const emit = defineEmits<{ (e: "update:modelValue", v: any): void }>()

const isOn = (eu: number | string, model?: any) => (Array.isArray(model) ? model.includes(eu) : model === eu)

const toggle = (eu: number | string, model: any, multiple: boolean) => {
  if (multiple) {
    const list = Array.isArray(model) ? [...model] : []
    const i = list.indexOf(eu)
    if (i >= 0) list.splice(i, 1)
    else list.push(eu)
    emit("update:modelValue", list)
  } else emit("update:modelValue", eu)
}
</script>

<template>
  <div
    class="grid gap-2"
    role="group"
    :aria-label="ariaLabel"
    :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }"
  >
    <button
      v-for="s in sizes"
      :key="s.eu"
      class="inline-flex items-center justify-center rounded-lf border text-sm font-semibold transition-colors duration-lf"
      type="button"
      :class="[
        s.available === false
          ? 'cursor-not-allowed border-line bg-bg text-size-off line-through'
          : isOn(s.eu, modelValue)
            ? 'border-brand bg-brand text-on-dark'
            : 'border-line bg-card text-ink hover:border-ink'
      ]"
      :style="{ height: `${height}px` }"
      :disabled="s.available === false"
      :aria-pressed="isOn(s.eu, modelValue)"
      :aria-label="s.available === false ? `${s.eu} — ${$t('common.out_of_stock')}` : `${s.eu}`"
      @click="toggle(s.eu, modelValue, multiple)"
    >
      {{ s.eu }}
    </button>
  </div>
</template>
