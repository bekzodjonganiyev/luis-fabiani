<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="relative flex min-h-[460px] items-end overflow-hidden bg-brand text-on-dark lg:h-[640px]">
    <ui-photo
      class="!absolute inset-0 !rounded-none"
      dark
      src="/images/home-workshop.jpg"
      :caption="t('brand.workshop_photo')"
    />
    <div
      class="absolute inset-0"
      aria-hidden="true"
      style="
        background: linear-gradient(
          180deg,
          color-mix(in srgb, var(--lf-brand) 0%, transparent) 30%,
          color-mix(in srgb, var(--lf-brand) 88%, transparent) 100%
        );
      "
    />
    <div class="lf-container relative flex flex-col gap-3.5 pb-9 lg:gap-4 lg:pb-16">
      <nav
        class="flex flex-wrap gap-2 text-xs font-medium text-on-dark-muted lg:gap-2.5 lg:text-[13px]"
        :aria-label="t('nav.breadcrumb')"
      >
        <nuxt-link class="text-on-dark-muted transition-colors duration-lf hover:text-on-dark" to="/">
          {{ t("nav.home") }}
        </nuxt-link>
        <span aria-hidden="true">/</span>
        <span>{{ t("brand.crumb") }}</span>
        <span aria-hidden="true">/</span>
        <span class="text-on-dark" aria-current="page">{{ t("brand.workshop_crumb") }}</span>
      </nav>
      <h1 class="serif m-0 text-[48px] font-medium leading-none lg:text-[80px]">
        {{ t("brand.workshop_title") }}
        <em class="font-normal text-accent">{{ t("brand.workshop_title_em") }}</em>
      </h1>
      <p class="m-0 max-w-[56ch] text-[15px] leading-[1.55] text-on-dark-body lg:text-lg">
        {{ t("brand.workshop_text") }}
      </p>
    </div>
  </section>
</template>
