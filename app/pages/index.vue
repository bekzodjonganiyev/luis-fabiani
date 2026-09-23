<script setup lang="ts">
import {
  HomeHero,
  HomeTrustRow,
  HomeOccasions,
  HomeNewCollection,
  HomeWorkshop,
  HomeBestsellers,
  HomeStyles,
  HomeReviews,
  HomeBusiness,
  HomeSubscribe
} from "@/modules/home"
import { useProductApi } from "@/modules/product"

const { t } = useI18n()
const api = useProductApi()

useHead({ title: t("home.title") })

const { data } = await useAsyncData("home-products", () => api.getProducts({ per_page: 24 }))
const all = computed(() => data.value?.data || [])

/** Yangi kolleksiya: dizayndagi tartib — Oksford 673-1, Derbi 403-2, Loafer 6963-13, Chelsi */
const order = ["oksford-673-1", "derbi-403-2", "loafer-6963-13", "chelsi"]
const newCollection = computed(
  () => order.map((s) => all.value.find((p) => p.slug === s)).filter(Boolean) as typeof all.value
)
const bestsellers = computed(() => all.value.filter((p) => p.bestseller).slice(0, 4))
</script>

<template>
  <div>
    <home-hero />
    <home-trust-row />
    <home-occasions />
    <home-new-collection :items="newCollection.length ? newCollection : all" />
    <home-workshop />
    <home-bestsellers :items="bestsellers" />
    <home-styles />
    <home-reviews />
    <home-business />
    <home-subscribe />
  </div>
</template>
