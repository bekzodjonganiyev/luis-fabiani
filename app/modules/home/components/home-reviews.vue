<script setup lang="ts">
const { t, tm, rt } = useI18n()
const reviews = computed(() =>
  (tm("reviews") as any[]).map((r) => ({ city: rt(r.city), model: r.model ? rt(r.model) : null }))
)
</script>

<template>
  <section class="lf-container grid grid-cols-1 gap-4 pt-11 lg:grid-cols-12 lg:gap-x-6 lg:pt-20">
    <div class="flex flex-col gap-[18px] lg:col-span-4">
      <h2 class="serif m-0 text-[34px] font-medium leading-[1.05] lg:text-[52px]">
        <span class="lg:hidden">{{ t("home.reviews_title_mobile") }}</span>
        <span class="hidden lg:inline">
          {{ t("home.reviews_title") }}
          <br />
          {{ t("home.reviews_title_2") }}
        </span>
      </h2>
      <p class="m-0 hidden max-w-[30ch] text-[15px] leading-[1.55] text-muted lg:block">{{ t("home.reviews_text") }}</p>
      <nuxt-link class="lf-link hidden self-start text-[15px] lg:inline" to="/reviews">
        {{ t("home.reviews_cta") }}
      </nuxt-link>
    </div>
    <div class="grid content-start gap-4 lg:col-span-8 lg:grid-cols-2 lg:gap-5">
      <blockquote
        v-for="(r, i) in reviews"
        :key="i"
        class="m-0 flex flex-col gap-3 rounded-lf border border-line bg-card p-5 lg:gap-3.5 lg:px-[26px] lg:pb-[22px] lg:pt-[26px]"
        :class="{ 'hidden lg:flex': i > 0 }"
      >
        <ui-stars />
        <p class="serif m-0 text-xl leading-[1.35] text-ink lg:text-[21px]">{{ t("placeholders.review_text") }}</p>
        <footer class="flex justify-between text-[13px] font-medium text-muted">
          <span>{{ t("placeholders.name") }}, {{ r.city }}</span>
          <ui-model-no class="not-italic text-muted" :value="r.model" />
        </footer>
      </blockquote>
    </div>
    <nuxt-link class="lf-link self-start text-sm lg:hidden" to="/reviews">{{ t("home.reviews_cta") }}</nuxt-link>
  </section>
</template>
