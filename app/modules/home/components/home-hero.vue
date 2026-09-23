<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="bg-dark text-on-dark">
    <div class="mx-auto grid max-w-[1440px] grid-cols-1 lg:min-h-[720px] lg:grid-cols-12 lg:gap-x-6 lg:pl-[60px]">
      <!-- Mobil: rasm tepada -->
      <ui-photo
        class="order-1 h-[300px] !rounded-none lg:order-2 lg:col-span-6 lg:h-auto"
        dark
        src="/images/leather_dark.jpg"
        :caption="t('home.hero_photo')"
      >
        <div
          class="serif absolute bottom-4 right-4 flex flex-col gap-0.5 border px-3.5 py-2.5 text-on-dark lg:bottom-11 lg:right-12 lg:gap-1 lg:px-[22px] lg:py-[18px]"
          style="
            border-color: color-mix(in srgb, var(--lf-accent) 70%, transparent);
            background: color-mix(in srgb, var(--lf-overlay) 65%, transparent);
          "
        >
          <span class="hidden font-sans text-xs font-medium uppercase tracking-[.16em] text-accent lg:inline">
            {{ t("home.hero_model") }}
          </span>
          <span class="text-[28px] font-medium italic leading-none lg:text-[40px]">№ 673-1</span>
          <span class="font-sans text-[13px] font-medium text-on-dark-body lg:text-lg">
            {{ t("home.hero_model_line") }}
          </span>
        </div>
      </ui-photo>

      <div
        class="order-2 flex flex-col gap-[18px] px-5 pb-6 pt-7 lg:order-1 lg:col-span-6 lg:justify-center lg:gap-7 lg:px-0 lg:py-[60px]"
      >
        <h1
          class="serif m-0 text-[40px] font-medium leading-[1.04] tracking-[-.01em] lg:text-[64px] xl:text-[76px] xl:leading-[1.02]"
          style="text-wrap: balance"
        >
          {{ t("home.hero_title") }}
          <br class="hidden lg:block" />
          <em class="font-normal text-accent">{{ t("home.hero_title_em") }}</em>
        </h1>
        <p class="m-0 max-w-[52ch] text-[15px] leading-[1.55] text-on-dark-body lg:text-lg lg:leading-relaxed">
          <span class="lg:hidden">{{ t("home.hero_text_short") }}</span>
          <span class="hidden lg:inline">{{ t("home.hero_text") }}</span>
        </p>
        <div class="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:gap-3.5">
          <ui-button variant="bone" to="/catalog">{{ t("home.hero_cta") }}</ui-button>
          <ui-button variant="line-bone" to="/brand/workshop">
            {{ t("home.hero_cta_2") }}
            <ui-icon class="hidden lg:inline" name="arrow-right" :size="16" :stroke-width="1.8" />
          </ui-button>
        </div>
        <div class="mt-3 hidden items-center gap-7 text-[13px] font-medium tracking-[.02em] text-on-dark-muted lg:flex">
          <span>{{ t("home.hero_fact_1") }}</span>
          <span class="h-[3px] w-[3px] rounded-full bg-accent" />
          <span>{{ t("home.hero_fact_2") }}</span>
          <span class="h-[3px] w-[3px] rounded-full bg-accent" />
          <span>{{ t("home.hero_fact_3") }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
