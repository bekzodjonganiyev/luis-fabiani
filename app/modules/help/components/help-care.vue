<script setup lang="ts">
/** Charm parvarishi: material bo'yicha 3 karta + umumiy qoidalar. Aniq tavsiyalar — mijozdan. */
const { t, tm, rt } = useI18n()

const materials = computed(() =>
  [
    { id: "leather", src: "/images/leather_cognac.jpg" },
    { id: "suede", src: "/images/suede.jpg" },
    { id: "patent", src: "/images/patent.jpg" }
  ].map((m) => ({
    ...m,
    title: t(`materials.${m.id}`),
    text: t(`help.care_${m.id}`),
    photo: t(`help.care_${m.id}_photo`)
  }))
)
const rules = computed(() => (tm("help.care_rules") as any[]).map((r) => rt(r)))
</script>

<template>
  <div class="flex flex-col gap-6 lg:gap-8">
    <ul class="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3 lg:gap-5">
      <li v-for="m in materials" :key="m.id" class="flex flex-col gap-3">
        <ui-photo class="h-[160px] lg:h-[200px]" :src="m.src" :caption="m.photo" />
        <span class="serif text-2xl font-medium leading-none">{{ m.title }}</span>
        <span class="text-[13px] leading-normal text-muted">{{ m.text }}</span>
      </li>
    </ul>
    <div class="flex flex-col gap-3 border border-line bg-card p-5 lg:p-6">
      <span class="lf-label">{{ t("help.care_rules_title") }}</span>
      <ul class="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-2.5 p-0 lg:grid-cols-2">
        <li v-for="r in rules" :key="r" class="flex gap-2.5 text-sm leading-normal">
          <ui-icon class="mt-0.5 shrink-0 text-accent-text" name="check" :size="16" :stroke-width="2" />
          {{ r }}
        </li>
      </ul>
      <nuxt-link class="lf-link-accent self-start text-sm" to="/catalog?category=accessories&kind=care">
        {{ t("mega.creams") }}
      </nuxt-link>
    </div>
  </div>
</template>
