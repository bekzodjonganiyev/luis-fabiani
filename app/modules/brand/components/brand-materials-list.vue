<script setup lang="ts">
const { t, tm, rt } = useI18n()

const images: Record<string, { src: string; dark?: boolean }> = {
  leather: { src: "/images/leather_cognac.jpg", dark: true },
  suede: { src: "/images/suede.jpg" },
  nubuck: { src: "/images/leather_black.jpg", dark: true },
  patent: { src: "/images/patent.jpg" }
}
const items = computed(() =>
  (tm("brand.materials_list") as any[]).map((m) => {
    const id = rt(m.id)
    return {
      id,
      name: rt(m.name),
      text: rt(m.text),
      care: rt(m.care),
      photo: rt(m.photo),
      ...images[id]
    }
  })
)
</script>

<template>
  <section class="lf-container grid grid-cols-1 gap-x-6 gap-y-10 pt-10 md:grid-cols-2 lg:gap-y-14 lg:pt-16">
    <article v-for="m in items" :id="m.id" :key="m.id" class="flex scroll-mt-24 flex-col gap-4 lg:gap-5">
      <ui-photo class="h-[220px] lg:h-[320px]" :dark="m.dark" :src="m.src" :caption="m.photo" />
      <div class="flex flex-col gap-2.5">
        <h2 class="serif m-0 text-[30px] font-medium leading-[1.05] lg:text-4xl">{{ m.name }}</h2>
        <p class="text-ink/85 m-0 max-w-[52ch] text-[15px] leading-relaxed">{{ m.text }}</p>
      </div>
      <div class="flex flex-col gap-1.5 border-t border-line pt-4">
        <span class="lf-label">{{ t("brand.materials_care") }}</span>
        <p class="m-0 max-w-[52ch] text-sm leading-[1.55] text-muted">{{ m.care }}</p>
      </div>
      <nuxt-link class="lf-link self-start text-sm" :to="`/catalog?material=${m.id}`">
        {{ t("brand.materials_shop") }}
      </nuxt-link>
    </article>
  </section>
</template>
