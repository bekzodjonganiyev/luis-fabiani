<script setup lang="ts">
import { NSkeleton } from "naive-ui"
import { COLLECTIONS, findCollection } from "@/modules/collections"
import { ProductCard, useProductApi } from "@/modules/product"

const route = useRoute()
const { t } = useI18n()
const api = useProductApi()

const collection = findCollection(route.params.slug as string)
if (!collection) throw createError({ statusCode: 404, fatal: true })

const key = `collections.items.${collection.slug}`
useHead({ title: () => t(`${key}.title`) })

const { data, pending } = await useAsyncData(`collection-${collection.slug}`, () =>
  api.getProducts({ ...collection.query, per_page: 24 })
)
const items = computed(() => data.value?.data || [])
const total = computed(() => data.value?.pagination?.total ?? items.value.length)
const others = computed(() => COLLECTIONS.filter((c) => c.slug !== collection.slug))
/** To'liq filtrlar bilan katalogda davom etish */
const catalogLink = computed(() => ({ path: "/catalog", query: collection.query }))

const crumbs = computed(() => [
  { label: t("nav.home"), to: "/" },
  { label: t("nav.collections"), to: "/collections" },
  { label: t(`${key}.title`) }
])
</script>

<template>
  <div>
    <!-- Sarlavha: foto + matn -->
    <div class="border-b border-line">
      <div class="lf-container grid grid-cols-1 gap-5 pb-6 pt-4 lg:grid-cols-12 lg:gap-x-6 lg:pb-10 lg:pt-9">
        <div class="flex flex-col gap-2.5 lg:col-span-6 lg:gap-[18px]">
          <page-breadcrumbs :items="crumbs" />
          <h1 class="serif m-0 text-[34px] font-medium leading-[1.04] lg:text-[56px] lg:leading-[1.02]">
            {{ t(`${key}.title`) }}
            <span class="serif ml-1 text-lg font-normal italic text-accent-text lg:ml-2.5 lg:text-2xl">
              {{ t("catalog.count_short", { n: total }) }}
            </span>
          </h1>
          <p class="m-0 max-w-[52ch] text-[13px] leading-normal text-muted lg:text-[15px] lg:leading-[1.55]">
            {{ t(`${key}.intro`) }}
          </p>
          <div class="lf-scroll-x pt-1 lg:flex-wrap">
            <nuxt-link
              v-for="c in others"
              :key="c.slug"
              class="shrink-0 rounded-lf border border-line bg-card px-3.5 py-2 text-[13px] font-semibold text-ink transition-colors duration-lf hover:border-brand"
              :to="`/collections/${c.slug}`"
            >
              {{ t(`collections.items.${c.slug}.title`) }}
            </nuxt-link>
          </div>
        </div>
        <ui-photo
          class="h-[200px] lg:col-span-5 lg:col-start-8 lg:h-[320px]"
          :src="collection.src"
          :caption="t(`${key}.photo`)"
        />
      </div>
    </div>

    <!-- Mahsulotlar -->
    <section class="lf-container flex flex-col gap-6 pb-10 pt-6 lg:gap-10 lg:pb-16 lg:pt-10">
      <div
        v-if="pending && !items.length"
        class="grid grid-cols-2 gap-x-2.5 gap-y-5 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:grid-cols-4"
      >
        <div v-for="i in 8" :key="i" class="flex flex-col gap-3">
          <n-skeleton class="h-[220px] md:h-[300px]" :sharp="false" />
          <n-skeleton text style="width: 60%" />
        </div>
      </div>
      <ui-empty-state
        v-else-if="!items.length"
        cta-to="/catalog"
        :title="t('collections.empty_title')"
        :text="t('collections.empty_text')"
        :cta-label="t('mega.all_models')"
      />
      <div v-else class="grid grid-cols-2 gap-x-2.5 gap-y-5 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:grid-cols-4">
        <product-card v-for="p in items" :key="p.slug" image-height="h-[220px] md:h-[300px]" :product="p" />
      </div>
      <div v-if="items.length" class="flex justify-center border-t border-line pt-5">
        <ui-button variant="line" :to="catalogLink">{{ t("collections.to_catalog") }}</ui-button>
      </div>
    </section>
  </div>
</template>
