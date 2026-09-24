<script setup lang="ts">
const route = useRoute()
const { t, tm, rt } = useI18n()

/** Hujjatlar: slug → footer dagi nom kaliti */
const docs: Record<string, string> = {
  offer: "footer.offer",
  privacy: "footer.privacy",
  payment: "footer.payment_security"
}
const slug = computed(() => route.params.slug as string)
const key = computed(() => docs[slug.value])
if (!key.value) throw createError({ statusCode: 404, fatal: true })
useHead({ title: () => t(key.value!) })

const sections = computed(() =>
  (tm(`legal.docs.${slug.value}.sections`) as any[]).map((s, i) => ({ id: `s-${i + 1}`, title: rt(s) }))
)
const crumbs = computed(() => [{ label: t("nav.home"), to: "/" }, { label: t(key.value!) }])
</script>

<template>
  <div class="lf-container grid grid-cols-1 gap-6 pb-12 pt-4 lg:grid-cols-12 lg:gap-x-6 lg:pb-20 lg:pt-9">
    <!-- Hujjatlar navigatsiyasi -->
    <aside class="flex flex-col gap-4 lg:col-span-3">
      <page-breadcrumbs :items="crumbs" />
      <nav class="lf-scroll-x lg:sticky lg:top-6 lg:flex-col lg:gap-0 lg:pt-6" :aria-label="t('legal.docs_nav')">
        <nuxt-link
          v-for="(k, s) in docs"
          :key="s"
          class="shrink-0 rounded-lf border px-3.5 py-2 text-[13px] font-semibold transition-colors duration-lf lg:rounded-none lg:border-0 lg:border-l-2 lg:px-4 lg:py-2.5 lg:text-[15px]"
          :class="s === slug ? 'border-brand text-ink' : 'border-line text-muted hover:text-ink'"
          :to="`/legal/${s}`"
          :aria-current="s === slug ? 'page' : undefined"
        >
          {{ t(k) }}
        </nuxt-link>
      </nav>
    </aside>

    <!-- Hujjat -->
    <article class="flex flex-col gap-6 lg:col-span-8 lg:col-start-5 lg:gap-8">
      <header class="flex flex-col gap-2.5 border-b border-line pb-5 lg:gap-3.5 lg:pb-7">
        <h1 class="serif m-0 text-[34px] font-medium leading-[1.04] lg:text-[56px] lg:leading-[1.02]">{{ t(key!) }}</h1>
        <p class="m-0 text-[13px] text-muted">{{ t("legal.updated", { date: t("legal.date") }) }}</p>
      </header>

      <!-- Mundarija -->
      <nav class="rounded-lf border border-line bg-card p-5" :aria-label="t('legal.contents')">
        <span class="lf-label">{{ t("legal.contents") }}</span>
        <ol class="m-0 mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-sm">
          <li v-for="s in sections" :key="s.id">
            <a class="text-ink transition-colors duration-lf hover:text-accent-text" :href="`#${s.id}`">
              {{ s.title }}
            </a>
          </li>
        </ol>
      </nav>

      <section v-for="(s, i) in sections" :id="s.id" :key="s.id" class="flex scroll-mt-6 flex-col gap-3">
        <h2 class="serif m-0 text-2xl font-medium leading-[1.15] lg:text-[30px]">{{ i + 1 }}. {{ s.title }}</h2>
        <p class="m-0 max-w-[70ch] text-[15px] leading-relaxed text-muted">{{ t("legal.placeholder") }}</p>
      </section>

      <p class="m-0 border-t border-line pt-5 text-[13px] text-muted">
        {{ t("legal.questions") }}
        <a class="lf-link-accent" href="tel:+998">{{ t("placeholders.phone") }}</a>
      </p>
    </article>
  </div>
</template>
