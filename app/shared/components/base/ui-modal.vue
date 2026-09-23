<script setup lang="ts">
import { NModal } from "naive-ui"

defineProps<{
  modelValue: boolean
  width?: number | string
  ariaLabelledby?: string
}>()
const emit = defineEmits<{ (e: "update:modelValue", v: boolean): void }>()
</script>

<template>
  <n-modal
    transform-origin="center"
    :show="modelValue"
    :mask-closable="true"
    :close-on-esc="true"
    :trap-focus="true"
    :auto-focus="true"
    :block-scroll="true"
    @update:show="emit('update:modelValue', $event)"
  >
    <div
      class="mx-4 max-h-[92dvh] w-full overflow-auto bg-bg text-ink shadow-[0_8px_24px_var(--lf-shadow)]"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="ariaLabelledby"
      :style="{ maxWidth: typeof width === 'number' ? `${width}px` : width || '880px' }"
    >
      <slot />
    </div>
  </n-modal>
</template>
