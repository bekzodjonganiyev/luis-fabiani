<script setup lang="ts">
import { NRadio } from "naive-ui"

/** Checkout dagi yetkazish variantlari: radio + sarlavha + izoh, tanlanganda chegara brand, fon selected. */
defineProps<{
  modelValue?: string
  value: string
  name: string
  title: string
  note?: string
  noteAccent?: string
}>()
const emit = defineEmits<{ (e: "update:modelValue", v: string): void }>()
</script>

<template>
  <label
    class="flex cursor-pointer flex-col gap-1.5 rounded-lf border p-4 transition-colors duration-lf"
    :class="modelValue === value ? 'border-brand bg-[var(--lf-selected-bg)]' : 'border-line bg-card hover:border-ink'"
  >
    <span class="flex items-center gap-2.5">
      <n-radio :checked="modelValue === value" :name="name" :value="value" @change="emit('update:modelValue', value)" />
      <span class="text-sm font-bold">{{ title }}</span>
    </span>
    <span v-if="note || noteAccent" class="text-[13px] text-muted">
      {{ note }}
      <strong v-if="noteAccent" class="font-semibold text-success">{{ noteAccent }}</strong>
    </span>
  </label>
</template>
