<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="bg-brand text-on-dark">
    <div
      class="mx-auto grid max-w-[1440px] grid-cols-1 overflow-hidden lg:min-h-[560px] lg:grid-cols-12 lg:gap-x-6 lg:pl-[60px]"
    >
      <div class="flex flex-col justify-center gap-5 px-4 py-8 md:px-8 lg:col-span-6 lg:gap-6 lg:px-0 lg:py-10">
        <nav
          class="flex gap-2.5 text-xs font-medium text-on-dark-muted lg:text-[13px]"
          :aria-label="t('nav.breadcrumb')"
        >
          <nuxt-link class="text-on-dark-muted transition-colors duration-lf hover:text-on-dark" to="/">
            {{ t("nav.home") }}
          </nuxt-link>
          <span aria-hidden="true">/</span>
          <span class="text-on-dark" aria-current="page">{{ t("nav.business") }}</span>
        </nav>
        <h1
          class="serif m-0 text-[40px] font-medium leading-[1.02] md:text-[56px] lg:text-[68px]"
          style="text-wrap: balance"
        >
          {{ t("business.hero_title") }}
          <em class="font-normal text-accent">{{ t("business.hero_title_em") }}</em>
        </h1>
        <p class="m-0 max-w-[50ch] text-[15px] leading-[1.6] text-on-dark-body lg:text-[17px]">
          {{ t("business.hero_text") }}
        </p>
        <div class="flex flex-col gap-3.5 sm:flex-row">
          <ui-button variant="bone" :to="{ hash: '#request' }">{{ t("business.hero_cta") }}</ui-button>
          <ui-button variant="line-bone" :to="{ query: { pricelist: '1' }, hash: '#request' }">
            {{ t("home.business_cta_2") }}
          </ui-button>
        </div>
      </div>
      <ui-photo
        class="h-[240px] !rounded-none md:h-[320px] lg:col-span-6 lg:h-auto"
        dark
        src="/images/home-workshop.jpg"
        :caption="t('business.hero_photo')"
      />
    </div>
  </section>
</template>
