<script setup lang="ts">
const { tm, rt } = useI18n()
const stats = computed(() => (tm("brand.stats") as any[]).map((s) => ({ value: rt(s.value), label: rt(s.label) })))
</script>

<template>
  <section class="border-b border-line">
    <dl class="lf-container m-0 grid grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(s, i) in stats"
        :key="i"
        class="flex flex-col-reverse gap-1.5 border-line py-5 lg:py-8"
        :class="[
          i % 2 === 0 ? 'border-r pr-4' : 'pl-4',
          i < 2 ? 'border-b lg:border-b-0' : '',
          'lg:border-r lg:px-6',
          i === 0 && 'lg:pl-0',
          i === stats.length - 1 && 'lg:border-r-0 lg:pr-0'
        ]"
      >
        <dt class="text-[13px] text-muted lg:text-sm">{{ s.label }}</dt>
        <dd class="serif m-0 text-[34px] font-medium leading-none text-brand lg:text-5xl">{{ s.value }}</dd>
      </div>
    </dl>
  </section>
</template>
