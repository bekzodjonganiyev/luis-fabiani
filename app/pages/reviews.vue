<script setup lang="ts">
import { ReviewCard } from "@/modules/reviews"

const { t, tm, rt } = useI18n()
const config = useRuntimeConfig()
useHead({ title: () => t("footer.reviews") })

const crumbs = computed(() => [
  { label: t("nav.home"), to: "/" },
  { label: t("nav.brand"), to: "/brand/history" },
  { label: t("footer.reviews") }
])
const reviews = computed(() =>
  (tm("reviews_page.items") as any[]).map((r) => ({ city: rt(r.city), model: r.model ? rt(r.model) : null }))
)
const facts = computed(() =>
  (tm("reviews_page.facts") as any[]).map((f) => ({ value: rt(f.value), label: rt(f.label) }))
)
</script>

<template>
  <div>
    <!-- Sarlavha + reyting xulosasi -->
    <div class="border-b border-line">
      <div class="lf-container grid grid-cols-1 gap-6 pb-6 pt-4 lg:grid-cols-12 lg:gap-x-6 lg:pb-10 lg:pt-9">
        <div class="flex flex-col gap-2.5 lg:col-span-7 lg:gap-[18px]">
          <page-breadcrumbs :items="crumbs" />
          <h1 class="serif m-0 text-[34px] font-medium leading-[1.04] lg:text-[56px] lg:leading-[1.02]">
            {{ t("reviews_page.title") }}
            <em class="font-normal text-accent-text">{{ t("reviews_page.title_em") }}</em>
          </h1>
          <p class="m-0 max-w-[52ch] text-[13px] leading-normal text-muted lg:text-[15px] lg:leading-[1.55]">
            {{ t("home.reviews_text") }}
          </p>
        </div>
        <div
          class="flex flex-col gap-4 rounded-lf border border-line bg-card p-5 lg:col-span-4 lg:col-start-9 lg:self-end lg:p-[26px]"
        >
          <div class="flex items-end gap-3">
            <span class="serif text-[56px] font-medium leading-none">{{ t("reviews_page.rating") }}</span>
            <div class="flex flex-col gap-1.5 pb-1.5">
              <ui-stars :size="16" />
              <span class="text-[13px] text-muted">{{ t("reviews_page.rating_note") }}</span>
            </div>
          </div>
          <dl class="m-0 grid grid-cols-2 gap-3 border-t border-line pt-4">
            <div v-for="f in facts" :key="f.label" class="flex flex-col-reverse gap-1">
              <dt class="text-[13px] text-muted">{{ f.label }}</dt>
              <dd class="serif m-0 text-2xl font-medium leading-none">{{ f.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Fikrlar -->
    <section class="lf-container pb-10 pt-6 lg:pb-16 lg:pt-10">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-3">
        <review-card v-for="(r, i) in reviews" :key="i" :city="r.city" :model="r.model" />
      </div>
    </section>

    <!-- Telegram kanaliga CTA -->
    <section class="bg-dark text-on-dark">
      <div class="lf-container flex flex-col gap-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div class="flex flex-col gap-3">
          <h2 class="serif m-0 text-[30px] font-medium leading-[1.08] lg:text-[44px]">
            {{ t("reviews_page.cta_title") }}
          </h2>
          <p class="m-0 max-w-[52ch] text-sm leading-[1.55] text-on-dark-body lg:text-base">
            {{ t("reviews_page.cta_text") }}
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
          <ui-button variant="bone" target="_blank" rel="noopener" :href="config.public.telegramUrl">
            <template #icon><ui-icon name="telegram" :size="18" /></template>
            {{ t("reviews_page.cta_channel") }}
          </ui-button>
          <ui-button variant="line-bone" to="/catalog">{{ t("reviews_page.cta_catalog") }}</ui-button>
        </div>
      </div>
    </section>
  </div>
</template>
