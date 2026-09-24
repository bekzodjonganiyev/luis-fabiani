<script setup lang="ts">
import {
  BusinessHero,
  BusinessDirections,
  BusinessProduction,
  BusinessExpo,
  BusinessRequestForm,
  isBusinessInterest,
  useBusinessService
} from "@/modules/business"

const { t } = useI18n()
const route = useRoute()
const service = useBusinessService()

useHead({ title: () => t("business.title") })

/** ?interest=wholesale|dealers|private-label va ?pricelist=1 (yoki #pricelist) formani oldindan to'ldiradi */
watch(
  () => [route.query.interest, route.query.pricelist, route.hash],
  () => {
    const interest = route.query.interest
    service.prefill(
      isBusinessInterest(interest) ? interest : undefined,
      route.query.pricelist === "1" || route.hash === "#pricelist"
    )
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <business-hero />
    <business-directions />
    <business-production />
    <business-expo />
    <business-request-form />
  </div>
</template>
