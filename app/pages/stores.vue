<script setup lang="ts">
import { StoresCard, StoresMap, StoresContact, STORE_POINTS } from "@/modules/stores"

const { t } = useI18n()
useHead({ title: () => t("utility.stores") })

const crumbs = computed(() => [{ label: t("nav.home"), to: "/" }, { label: t("utility.stores") }])
</script>

<template>
  <div>
    <section
      class="lf-container grid grid-cols-1 gap-6 pb-10 pt-5 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-x-10 lg:pb-14 lg:pt-12"
    >
      <div class="flex flex-col gap-5 lg:gap-6">
        <div class="flex flex-col gap-3">
          <page-breadcrumbs :items="crumbs" />
          <h1 class="serif m-0 text-[40px] font-medium leading-[1.02] lg:text-[56px]">
            {{ t("stores.title") }}
            <em class="font-normal text-accent-text">{{ t("stores.title_em") }}</em>
          </h1>
          <p class="m-0 text-sm leading-[1.55] text-muted lg:text-[15px]">{{ t("stores.intro") }}</p>
        </div>

        <stores-card v-for="p in STORE_POINTS" :key="p.id" :point="p" />

        <div class="flex flex-col gap-2 pt-2">
          <span class="lf-label">{{ t("stores.regions") }}</span>
          <span class="text-sm leading-normal text-muted">{{ t("stores.regions_text") }}</span>
        </div>
      </div>

      <stores-map />
    </section>

    <stores-contact />
  </div>
</template>
