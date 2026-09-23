<script setup lang="ts">
/**
 * Checkbox — dizayndagi kabi native input (accent-color), 16/18px, min balandlik 28/44px.
 * NaiveUI NCheckbox SSR da tasodifiy id yaratib gidratsiya nomuvofiqligini keltirgani uchun native.
 */
defineProps<{
  modelValue?: boolean
  label: string
  count?: number
  size?: "md" | "lg"
}>()
const emit = defineEmits<{ (e: "update:modelValue", v: boolean): void }>()
const id = `chk-${useId()}`
</script>

<template>
  <label
    class="flex cursor-pointer items-center gap-2.5 font-medium text-ink"
    :class="size === 'lg' ? 'min-h-11 gap-3 text-[15px]' : 'min-h-7 text-sm'"
    :for="id"
  >
    <input
      :id="id"
      class="m-0 shrink-0 cursor-pointer accent-ink"
      :class="size === 'lg' ? 'h-[18px] w-[18px]' : 'h-4 w-4'"
      type="checkbox"
      :checked="modelValue"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="flex-1">{{ label }}</span>
    <span v-if="count !== undefined" class="text-xs text-muted-2">{{ count }}</span>
  </label>
</template>
