<script setup lang="ts">
/** Qadam sarlavhasi: bajarilgan (✓ yashil) · faol (raqam, brand) · keyingi (raqam, kulrang) */
defineProps<{ n: number; title: string; state: "done" | "active" | "next" }>()
</script>

<template>
  <div class="flex items-center gap-4">
    <span
      v-if="state === 'done'"
      class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-accent"
    >
      <ui-icon name="check" :size="18" :stroke-width="2.2" />
    </span>
    <span
      v-else
      class="serif inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[22px] italic"
      :class="state === 'active' ? 'border-brand text-brand' : 'border-line text-muted'"
    >
      {{ n }}
    </span>
    <span class="text-base font-bold">{{ title }}</span>
  </div>
</template>
