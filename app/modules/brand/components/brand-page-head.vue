<script setup lang="ts">
/** Brend ichki sahifalari sarlavhasi: chapda yo'l + H1, o'ngda foto (Tarix dizayni, 5fr / 7fr). */
defineProps<{
  crumb: string
  title: string
  titleEm?: string
  text: string
  photo: string
  src: string
}>()
const { t } = useI18n()
</script>

<template>
  <section class="lf-container grid grid-cols-1 gap-6 pt-6 lg:grid-cols-[5fr_7fr] lg:items-end lg:gap-x-12 lg:pt-14">
    <div class="flex flex-col gap-3 lg:gap-3.5">
      <page-breadcrumbs :items="[{ label: t('nav.home'), to: '/' }, { label: t('brand.crumb') }, { label: crumb }]" />
      <h1 class="serif m-0 text-[44px] font-medium leading-none lg:text-[72px]">
        {{ title }}
        <em v-if="titleEm" class="font-normal text-accent-text">{{ titleEm }}</em>
      </h1>
      <p class="m-0 max-w-[46ch] text-[15px] leading-relaxed text-muted lg:text-base">{{ text }}</p>
    </div>
    <ui-photo class="h-[200px] lg:h-[260px]" dark :src="src" :caption="photo" />
  </section>
</template>
