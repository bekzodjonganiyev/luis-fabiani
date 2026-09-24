<script setup lang="ts">
const { t, tm, rt } = useI18n()

/** Mos foto bor qadamlarda — foto, qolganida vaqtinchalik tekstura (fotograf suratlari kelguncha) */
const images = [
  "/images/paper.jpg",
  "/images/leather_dark.jpg",
  "/images/home-hero.jpg",
  "/images/leather_cognac.jpg",
  "/images/home-workshop.jpg",
  "/images/home-office.jpg"
]
const steps = computed(() =>
  (tm("brand.path_steps") as any[]).map((s, i) => ({
    title: rt(s.title),
    text: rt(s.text),
    photo: rt(s.photo),
    src: images[i % images.length]
  }))
)
</script>

<template>
  <section class="lf-container flex flex-col gap-8 pt-12 lg:gap-10 lg:pt-20">
    <ui-section-title :title="t('brand.path_title')">
      <template #aside>
        <p class="m-0 max-w-[36ch] text-sm leading-[1.55] text-muted lg:text-[15px]">{{ t("brand.path_text") }}</p>
      </template>
    </ui-section-title>
    <ol class="m-0 flex list-none flex-col gap-10 p-0">
      <li
        v-for="(s, i) in steps"
        :key="s.title"
        class="grid grid-cols-1 items-center gap-y-5 lg:grid-cols-12 lg:gap-x-6"
      >
        <ui-photo
          class="h-[220px] lg:row-start-1 lg:h-[240px]"
          :class="i % 2 === 0 ? 'lg:col-span-7 lg:col-start-1' : 'lg:col-span-7 lg:col-start-6'"
          :src="s.src"
          :caption="s.photo"
        />
        <div
          class="flex flex-col gap-2.5 lg:row-start-1 lg:gap-3.5"
          :class="i % 2 === 0 ? 'lg:col-span-4 lg:col-start-9' : 'lg:col-span-4 lg:col-start-1'"
        >
          <span class="serif text-5xl italic leading-none text-accent-text lg:text-[64px]">{{ i + 1 }}</span>
          <h3 class="serif m-0 text-[28px] font-medium leading-[1.05] lg:text-4xl">{{ s.title }}</h3>
          <p class="text-ink/85 m-0 max-w-[44ch] text-[15px] leading-relaxed">{{ s.text }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>
