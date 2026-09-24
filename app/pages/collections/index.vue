<script setup lang="ts">
import { COLLECTIONS, CollectionTile } from "@/modules/collections"

const { t } = useI18n()
useHead({ title: () => t("collections.title") })

const crumbs = computed(() => [{ label: t("nav.home"), to: "/" }, { label: t("nav.collections") }])
/** Plitka o'lchamlari: birinchisi katta (2×2), oxirgisi — butun qator */
const cls = ["col-span-2 lg:row-span-2", "", "", "col-span-2", "col-span-2 lg:col-span-4"]
</script>

<template>
  <div>
    <div class="border-b border-line">
      <div class="lf-container flex flex-col gap-2.5 pb-5 pt-4 lg:gap-[18px] lg:pb-9 lg:pt-9">
        <page-breadcrumbs :items="crumbs" />
        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h1 class="serif m-0 text-[34px] font-medium leading-[1.04] lg:text-[56px] lg:leading-[1.02]">
            {{ t("collections.title") }}
            <em class="font-normal text-accent-text">{{ t("collections.title_em") }}</em>
          </h1>
          <p class="m-0 max-w-[46ch] text-[13px] leading-normal text-muted lg:text-[15px] lg:leading-[1.55]">
            {{ t("collections.intro") }}
          </p>
        </div>
      </div>
    </div>

    <section class="lf-container pb-10 pt-5 lg:pb-20 lg:pt-10">
      <div class="grid auto-rows-[200px] grid-cols-2 gap-2.5 lg:grid-cols-4 lg:grid-rows-[300px_300px_260px] lg:gap-5">
        <collection-tile v-for="(c, i) in COLLECTIONS" :key="c.slug" :class="cls[i]" :item="c" />
      </div>
    </section>

    <section class="bg-soft">
      <div class="lf-container flex flex-col gap-4 py-9 lg:flex-row lg:items-center lg:justify-between lg:py-14">
        <div class="flex flex-col gap-2">
          <h2 class="serif m-0 text-[28px] font-medium leading-[1.1] lg:text-[40px]">
            {{ t("collections.all_title") }}
          </h2>
          <p class="m-0 text-sm text-muted lg:text-[15px]">{{ t("collections.all_text") }}</p>
        </div>
        <ui-button class="self-start lg:self-auto" to="/catalog">{{ t("mega.all_models") }}</ui-button>
      </div>
    </section>
  </div>
</template>
