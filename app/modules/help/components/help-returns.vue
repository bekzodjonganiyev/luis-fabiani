<script setup lang="ts">
/** Qaytarish va almashtirish: 14 kun, shartlar, 3 qadam. */
const { t, tm, rt } = useI18n()
const config = useRuntimeConfig()

const facts = computed(() => [
  { value: "14", label: t("help.returns_fact_days") },
  { value: "0", label: t("help.returns_fact_exchange") },
  { value: t("placeholders.number"), label: t("help.returns_fact_refund") }
])
const conditions = computed(() => (tm("help.returns_conditions") as any[]).map((c) => rt(c)))
const steps = computed(() => (tm("help.returns_steps") as any[]).map((s) => ({ title: rt(s.title), text: rt(s.text) })))
</script>

<template>
  <div class="flex flex-col gap-6 lg:gap-8">
    <dl class="m-0 grid grid-cols-3 gap-px border border-line bg-line">
      <div v-for="f in facts" :key="f.label" class="flex flex-col gap-1 bg-card p-4 lg:p-5">
        <dt class="order-2 text-xs leading-snug text-muted lg:text-[13px]">{{ f.label }}</dt>
        <dd class="serif order-1 m-0 text-[32px] font-medium leading-none text-brand lg:text-[44px]">{{ f.value }}</dd>
      </div>
    </dl>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
      <div class="flex flex-col gap-3">
        <span class="lf-label">{{ t("help.returns_conditions_title") }}</span>
        <ul class="m-0 flex list-none flex-col gap-2.5 p-0">
          <li v-for="c in conditions" :key="c" class="flex gap-2.5 text-sm leading-normal">
            <ui-icon class="mt-0.5 shrink-0 text-success" name="check" :size="16" :stroke-width="2" />
            {{ c }}
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-3">
        <span class="lf-label">{{ t("help.returns_steps_title") }}</span>
        <ol class="m-0 flex list-none flex-col gap-3.5 p-0">
          <li v-for="(s, i) in steps" :key="s.title" class="flex gap-3.5">
            <span class="serif w-6 shrink-0 text-[26px] italic leading-none text-accent-text">{{ i + 1 }}</span>
            <span class="flex flex-col gap-0.5">
              <span class="text-[15px] font-semibold">{{ s.title }}</span>
              <span class="text-[13px] leading-normal text-muted">{{ s.text }}</span>
            </span>
          </li>
        </ol>
        <div class="pt-1">
          <ui-button size="sm" :href="config.public.telegramUrl" target="_blank" rel="noopener">
            {{ t("help.returns_cta") }}
          </ui-button>
        </div>
      </div>
    </div>
  </div>
</template>
