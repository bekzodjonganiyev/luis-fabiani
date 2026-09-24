<script setup lang="ts">
import { BrandPageHead, BrandTimeline } from "@/modules/brand"

const { t } = useI18n()
useHead({ title: () => t("brand.history_head") })
</script>

<template>
  <div>
    <brand-page-head
      :crumb="t('brand.history_crumb')"
      :title="t('brand.history_title')"
      :title-em="t('brand.history_title_em')"
      :text="t('brand.history_text', { year: t('placeholders.year') })"
      :photo="t('brand.history_photo')"
      src="/images/home-workshop.jpg"
    />
    <brand-timeline />
  </div>
</template>
