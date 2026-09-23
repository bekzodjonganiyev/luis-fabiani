<script setup lang="ts">
/**
 * Select — dizayndagi kabi native <select> (44/52px, chegara ink, chevron).
 * NaiveUI NSelect SSR da caret-color stilini boshqacha chizib gidratsiya nomuvofiqligi bergani uchun native.
 */
interface Option {
  label: string
  value: string | number
}

interface Props {
  modelValue?: string | number | null
  options: Option[]
  label?: string
  id?: string
  size?: "sm" | "md" | "lg"
  placeholder?: string
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), { size: "md", block: false })
const emit = defineEmits<{ (e: "update:modelValue", v: any): void }>()
const localId = props.id || `sel-${useId()}`
const height = computed(() => ({ sm: "h-11", md: "h-[52px]", lg: "h-[52px]" })[props.size])

const onChange = (e: Event) => {
  const raw = (e.target as HTMLSelectElement).value
  const opt = props.options.find((o) => String(o.value) === raw)
  emit("update:modelValue", opt ? opt.value : raw)
}
</script>

<template>
  <div class="flex items-center gap-3" :class="{ 'w-full': block }">
    <label v-if="label" class="shrink-0 text-[13px] font-medium text-muted" :for="localId">{{ label }}</label>
    <div class="relative" :class="block ? 'w-full' : 'min-w-[180px]'">
      <select
        :id="localId"
        class="w-full cursor-pointer appearance-none rounded-lf-btn border border-ink bg-card py-0 pl-3.5 pr-10 text-sm font-semibold text-ink transition-colors duration-lf hover:border-brand"
        :class="[height, { 'text-muted': modelValue === null || modelValue === undefined }]"
        :value="modelValue ?? ''"
        @change="onChange"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <ui-icon
        class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink"
        name="chevron-down"
        :size="16"
        :stroke-width="1.8"
      />
    </div>
  </div>
</template>
