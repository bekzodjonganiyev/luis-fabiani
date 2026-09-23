<script setup lang="ts">
import { NInput } from "naive-ui"

interface Props {
  modelValue?: string
  id?: string
  label?: string
  placeholder?: string
  error?: string
  hint?: string
  type?: "text" | "tel" | "email" | "password" | "textarea"
  size?: "xs" | "sm" | "md" | "lg"
  inputmode?: string
  autocomplete?: string
  disabled?: boolean
  maxlength?: number
}

const props = withDefaults(defineProps<Props>(), { size: "md", type: "text" })
const emit = defineEmits<{ (e: "update:modelValue", v: string): void; (e: "enter"): void }>()

const naiveSize = computed(() => ({ xs: "tiny", sm: "small", md: "medium", lg: "large" })[props.size] as any)
const localId = props.id || `in-${useId()}`
const naiveType = computed(() =>
  props.type === "textarea" ? "textarea" : props.type === "password" ? "password" : "text"
)
const nativeType = computed(() => (["tel", "email"].includes(props.type) ? props.type : undefined))
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" class="text-xs font-semibold" :class="error ? 'text-sale' : 'text-muted'" :for="localId">
      {{ label }}
    </label>
    <n-input
      :value="modelValue"
      :type="naiveType"
      :size="naiveSize"
      :placeholder="placeholder"
      :status="error ? 'error' : undefined"
      :disabled="disabled"
      :maxlength="maxlength"
      :input-props="{ inputmode: inputmode as any, autocomplete, id: localId, type: nativeType }"
      @update:value="emit('update:modelValue', $event)"
      @keydown.enter="emit('enter')"
    >
      <template v-if="$slots.suffix" #suffix><slot name="suffix" /></template>
    </n-input>
    <span v-if="error" class="text-xs font-medium text-sale">{{ error }}</span>
    <span v-else-if="hint" class="text-xs text-muted">{{ hint }}</span>
  </div>
</template>
