<script setup lang="ts">
/** Rang svotchlari: kichik (kartochka) yoki tanlanadigan (filtr / mahsulot). */
withDefaults(
  defineProps<{
    colors: { id: string; name: string; hex: string }[]
    modelValue?: string | string[] | null
    size?: number
    selectable?: boolean
  }>(),
  { size: 14, selectable: false }
)
const emit = defineEmits<{ (e: "update:modelValue", v: string): void }>()

const isActive = (id: string, model?: string | string[] | null) =>
  Array.isArray(model) ? model.includes(id) : model === id
</script>

<template>
  <div class="flex flex-wrap items-center gap-2" role="group" :class="{ 'gap-3': selectable }">
    <template v-if="selectable">
      <button
        v-for="c in colors"
        :key="c.id"
        class="rounded-full border-2 bg-card p-[3px] transition-colors duration-lf"
        type="button"
        :class="isActive(c.id, modelValue) ? 'border-brand' : 'border-transparent hover:border-line'"
        :style="{ width: `${size}px`, height: `${size}px` }"
        :aria-label="c.name"
        :aria-pressed="isActive(c.id, modelValue)"
        :title="c.name"
        @click="emit('update:modelValue', c.id)"
      >
        <span
          class="block h-full w-full rounded-full"
          :style="{ background: c.hex, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)' }"
        />
      </button>
    </template>
    <template v-else>
      <span
        v-for="c in colors"
        :key="c.id"
        class="rounded-full"
        role="img"
        :aria-label="c.name"
        :title="c.name"
        :style="{
          width: `${size}px`,
          height: `${size}px`,
          background: c.hex,
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.18)'
        }"
      />
    </template>
  </div>
</template>
