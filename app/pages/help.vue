<script setup lang="ts">
import { HelpNav, HelpSection, HelpSizes, HelpDelivery, HelpReturns, HelpCare, HelpFaq, HelpCta } from "@/modules/help"

const { t } = useI18n()
useHead({ title: () => t("help.title") })

const crumbs = computed(() => [{ label: t("nav.home"), to: "/" }, { label: t("nav.help") }])
</script>

<template>
  <div>
    <div class="border-b border-line">
      <div class="lf-container flex flex-col gap-2.5 pb-5 pt-4 lg:gap-[18px] lg:pb-9 lg:pt-9">
        <page-breadcrumbs :items="crumbs" />
        <h1 class="serif m-0 text-[40px] font-medium leading-[1.02] lg:text-[56px]">
          {{ t("help.title") }}
          <em class="font-normal text-accent-text">{{ t("help.title_em") }}</em>
        </h1>
        <p class="m-0 max-w-[62ch] text-sm leading-[1.55] text-muted lg:text-[15px]">{{ t("help.intro") }}</p>
      </div>
    </div>

    <div class="sticky top-0 z-20 border-b border-line bg-bg lg:hidden">
      <help-nav mobile />
    </div>

    <div class="lf-container grid grid-cols-1 gap-x-12 pb-12 pt-2 lg:grid-cols-[240px_minmax(0,1fr)] lg:pb-20 lg:pt-4">
      <aside class="hidden lg:block">
        <div class="sticky top-6 pt-8">
          <help-nav />
        </div>
      </aside>

      <div class="flex min-w-0 flex-col gap-10 lg:gap-14">
        <help-section id="sizes" class="!border-t-0"  :n="1" :title="t('help.nav.sizes')" :lead="t('help.sizes_lead')">
          <help-sizes />
        </help-section>
        <help-section id="delivery" :n="2" :title="t('help.delivery_title')" :lead="t('help.delivery_lead')">
          <help-delivery />
        </help-section>
        <help-section id="returns" :n="3" :title="t('help.nav.returns')" :lead="t('help.returns_lead')">
          <help-returns />
        </help-section>
        <help-section id="care" :n="4" :title="t('help.nav.care')" :lead="t('help.care_lead')">
          <help-care />
        </help-section>
        <help-section id="faq" :n="5" :title="t('help.nav.faq')">
          <help-faq />
        </help-section>
      </div>
    </div>

    <help-cta />
  </div>
</template>
