<script setup lang="ts">
import { BrandPageHead, BrandMaterialsList, BrandCta } from "@/modules/brand"

const { t } = useI18n()
useHead({ title: () => t("brand.materials_head") })
</script>

<template>
  <div>
    <brand-page-head
      :crumb="t('brand.materials_crumb')"
      :title="t('brand.materials_title')"
      :title-em="t('brand.materials_title_em')"
      :text="t('brand.materials_text')"
      :photo="t('brand.leather_macro_smooth')"
      src="/images/leather_cognac.jpg"
    />
    <brand-materials-list />

    <!-- Taglik va astar -->
    <section class="mt-12 bg-soft lg:mt-20">
      <div class="lf-container grid grid-cols-1 gap-4 py-10 lg:grid-cols-[5fr_7fr] lg:gap-x-12 lg:py-[72px]">
        <h2 class="serif m-0 text-[34px] font-medium leading-[1.05] lg:text-5xl">
          {{ t("brand.materials_sole_title") }}
        </h2>
        <p class="text-ink/85 m-0 max-w-[60ch] text-[15px] leading-relaxed lg:self-center">
          {{ t("brand.materials_sole_text") }}
        </p>
      </div>
    </section>

    <brand-cta />
  </div>
</template>
