<script setup lang="ts">
import { NDrawer, NDrawerContent } from "naive-ui"

interface Props {
  modelValue: boolean
  placement?: "left" | "right" | "bottom" | "top"
  width?: number | string
  height?: number | string
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), { placement: "right", width: 500 })
const emit = defineEmits<{ (e: "update:modelValue", v: boolean): void }>()
</script>

<template>
  <n-drawer
    class="lf-drawer"
    :show="modelValue"
    :placement="placement"
    :width="width"
    :height="height"
    :auto-focus="true"
    :trap-focus="true"
    :block-scroll="true"
    :mask-closable="true"
    :close-on-esc="true"
    :default-width="width"
    :style="placement === 'bottom' ? 'border-radius: var(--lf-radius-lg) var(--lf-radius-lg) 0 0' : undefined"
    @update:show="emit('update:modelValue', $event)"
    @mask-click="emit('update:modelValue', false)"
  >
    <n-drawer-content :native-scrollbar="true" :body-content-style="{ padding: 0 }" :aria-label="ariaLabel">
      <div class="flex h-full flex-col bg-bg text-ink" role="dialog" :aria-label="ariaLabel">
        <slot />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<style>
.lf-drawer .n-drawer-body-content-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
}
.lf-drawer .n-drawer-body {
  flex: 1;
  min-height: 0;
}
.lf-drawer .n-drawer-body-content-wrapper > div {
  flex: 1;
  min-height: 0;
}
</style>
