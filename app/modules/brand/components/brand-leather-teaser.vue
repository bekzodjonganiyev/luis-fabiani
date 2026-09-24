<script setup lang="ts">
const { t } = useI18n()
const macros = computed(() => [
  { caption: t("brand.leather_macro_smooth"), src: "/images/leather_cognac.jpg", dark: true },
  { caption: t("brand.leather_macro_suede"), src: "/images/suede.jpg", dark: false },
  { caption: t("brand.leather_macro_patent"), src: "/images/patent.jpg", dark: false }
])
</script>

<template>
  <section class="mt-12 bg-soft text-ink lg:mt-20">
    <div class="lf-container grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-12 lg:gap-x-12 lg:py-[72px]">
      <div class="flex flex-col gap-[18px] lg:col-span-5">
        <h2 class="serif m-0 text-[34px] font-medium leading-[1.05] lg:text-5xl" style="text-wrap: balance">
          {{ t("brand.leather_title") }}
          <em class="font-normal text-accent-text">{{ t("brand.leather_title_em") }}</em>
        </h2>
        <p class="text-ink/85 m-0 max-w-[46ch] text-[15px] leading-relaxed">{{ t("brand.leather_text") }}</p>
        <div>
          <ui-button to="/brand/materials">{{ t("brand.leather_cta") }}</ui-button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2.5 lg:col-span-7 lg:gap-4">
        <ui-photo
          v-for="m in macros"
          :key="m.caption"
          class="h-[140px] lg:h-[220px]"
          :dark="m.dark"
          :src="m.src"
          :caption="m.caption"
        />
      </div>
    </div>
  </section>
</template>
