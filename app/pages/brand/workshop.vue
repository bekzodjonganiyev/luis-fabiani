<script setup lang="ts">
import {
  BrandWorkshopHero,
  BrandWorkshopStats,
  BrandWorkshopSteps,
  BrandLeatherTeaser,
  BrandCta
} from "@/modules/brand"

const { t } = useI18n()
useHead({ title: () => t("brand.workshop_head") })
</script>

<template>
  <div>
    <brand-workshop-hero />
    <brand-workshop-stats />
    <brand-workshop-steps />
    <brand-leather-teaser />
    <brand-cta />
  </div>
</template>
