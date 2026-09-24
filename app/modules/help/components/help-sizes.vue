<script setup lang="ts">
import { SIZE_RANGE, SizeTable } from "@/modules/product"

/** O'lcham — qaytarishning №1 sababi: 3 qadam o'lchash + umumiy jadval + to'liqlik. sm qiymatlari — mijozdan. */
const { t, tm, rt } = useI18n()
const config = useRuntimeConfig()

const unit = ref<"cm" | "inch">("cm")
const units = computed(() => [
  { value: "cm", label: t("size_modal.cm") },
  { value: "inch", label: t("size_modal.inch") }
])
const steps = computed(() => (tm("size_modal.steps") as any[]).map((s) => rt(s)))
const rows = computed(() => SIZE_RANGE.map((eu) => ({ eu, length: t("placeholders.cm") })))
const fits = computed(() =>
  (["narrow", "standard", "wide"] as const).map((id) => ({ id, label: t(`fits.${id}`), text: t(`help.fit_${id}`) }))
)
</script>

<template>
  <div class="flex flex-col gap-6 lg:gap-8">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-8">
      <div class="flex flex-col gap-5 bg-dark px-5 py-6 text-on-dark lg:px-8 lg:py-8">
        <span class="serif text-[26px] font-medium leading-[1.05] lg:text-[32px]">
          {{ t("size_modal.title") }}
          <em class="font-normal text-accent">{{ t("size_modal.title_em") }}</em>
          {{ t("size_modal.title_end") }}
        </span>
        <ol class="m-0 flex list-none flex-col gap-4 p-0">
          <li v-for="(s, i) in steps" :key="i" class="flex gap-3.5">
            <span class="serif w-6 shrink-0 text-[30px] italic leading-none text-accent">{{ i + 1 }}</span>
            <span class="text-sm leading-normal text-on-dark-body">{{ s }}</span>
          </li>
        </ol>
        <ui-photo class="mt-auto h-[150px]" dark src="/images/paper.jpg" :caption="t('size_modal.photo')" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between gap-3">
          <span class="serif text-[26px] font-medium leading-none">{{ t("size_modal.table_title") }}</span>
          <ui-chip-group v-model="unit" :options="units" :height="36" :aria-label="t('size_modal.table_title')" />
        </div>
        <size-table :rows="rows" :unit="unit" :stock="false" />
        <p class="m-0 text-xs leading-normal text-muted">{{ t("size_modal.note") }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="lf-label">{{ t("catalog.f_fit") }}</span>
      <ul class="m-0 grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-3">
        <li
          v-for="f in fits"
          :key="f.id"
          class="flex flex-col gap-1.5 border bg-card p-4"
          :class="f.id === 'standard' ? 'border-brand' : 'border-line'"
        >
          <span class="text-[15px] font-semibold">{{ f.label }}</span>
          <span class="text-[13px] leading-normal text-muted">{{ f.text }}</span>
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
      <ui-button variant="line" :href="config.public.telegramUrl" target="_blank" rel="noopener">
        {{ t("size_modal.telegram_advice") }}
      </ui-button>
      <span class="text-[13px] text-muted">{{ t("help.sizes_exchange") }}</span>
    </div>
  </div>
</template>
