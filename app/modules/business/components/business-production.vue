<script setup lang="ts">
const { t, tm, rt } = useI18n()

const facts = computed(() => [
  { label: t("business.fact_capacity"), value: t("business.fact_capacity_value", { n: t("placeholders.number") }) },
  { label: t("business.fact_models"), value: t("placeholders.number") },
  { label: t("business.fact_staff"), value: t("placeholders.number") },
  { label: t("business.fact_markets"), value: t("placeholders.list") },
  { label: t("business.fact_workshop"), value: t("business.fact_workshop_value") }
])
const steps = computed(() => (tm("home.steps") as any[]).map((s) => rt(s.title)))
const photos = computed(() => [
  { caption: t("business.photo_certificate"), src: "/images/paper.jpg" },
  { caption: t("business.photo_supplier"), src: "/images/leather_cognac.jpg" },
  { caption: t("business.photo_batch"), src: "/images/leather_dark.jpg", dark: true }
])
</script>

<template>
  <section class="lf-container mt-11 grid grid-cols-1 items-start gap-10 lg:mt-[72px] lg:grid-cols-12 lg:gap-x-12">
    <dl class="m-0 flex flex-col border-t border-line lg:col-span-4">
      <div
        v-for="f in facts"
        :key="f.label"
        class="flex items-baseline justify-between gap-4 border-b border-line py-4 lg:py-[18px]"
      >
        <dt class="text-sm text-muted">{{ f.label }}</dt>
        <dd class="serif m-0 text-[28px] text-brand lg:text-4xl">{{ f.value }}</dd>
      </div>
    </dl>

    <div class="flex flex-col gap-6 lg:col-span-8">
      <h2 class="serif m-0 text-[30px] font-medium leading-[1.05] lg:text-4xl">{{ t("business.process_title") }}</h2>
      <ol class="m-0 grid list-none grid-cols-3 gap-4 p-0 md:grid-cols-6">
        <li v-for="(s, i) in steps" :key="s" class="flex flex-col gap-2.5 border-t border-brand pt-3.5">
          <span class="serif text-[26px] italic leading-none text-accent-text lg:text-[30px]">{{ i + 1 }}</span>
          <span class="text-[13px] font-semibold lg:text-sm">{{ s }}</span>
        </li>
      </ol>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ui-photo
          v-for="p in photos"
          :key="p.caption"
          class="h-[180px]"
          :dark="p.dark"
          :src="p.src"
          :caption="p.caption"
        />
      </div>
    </div>
  </section>
</template>
