<script setup lang="ts">
const { t } = useI18n()
const tiles = computed(() => [
  {
    id: "office",
    label: t("occasions.office"),
    photo: t("home.occasion_office_photo"),
    src: "/images/home-office.jpg",
    cls: "col-span-2 row-span-1 lg:row-span-2"
  },
  {
    id: "wedding",
    label: t("occasions.wedding"),
    photo: t("home.occasion_wedding_photo"),
    src: "/images/home-party.jpg",
    cls: ""
  },
  {
    id: "casual",
    label: t("occasions.casual"),
    photo: t("home.occasion_casual_photo"),
    src: "/images/home-daily.jpg",
    cls: ""
  },
  {
    id: "winter",
    label: t("occasions.winter"),
    photo: t("home.occasion_winter_photo"),
    src: "/images/home-winter.jpg",
    cls: "hidden lg:flex lg:col-span-2"
  }
])
</script>

<template>
  <section class="lf-container flex flex-col gap-5 pt-11 lg:gap-10 lg:pt-[88px]">
    <ui-section-title :title="t('home.occasions_title')">
      <template #aside>
        <p class="m-0 hidden max-w-[34ch] text-[15px] leading-[1.55] text-muted lg:block">
          {{ t("home.occasions_text") }}
        </p>
      </template>
    </ui-section-title>
    <div class="grid grid-cols-2 grid-rows-[200px_160px] gap-2.5 lg:grid-cols-4 lg:grid-rows-[260px_260px] lg:gap-5">
      <ui-photo
        v-for="tile in tiles"
        :key="tile.id"
        class="group flex items-end"
        tag="a"
        :class="tile.cls"
        :to="`/collections/${tile.id}`"
        :src="tile.src"
        :caption="tile.photo"
      >
        <span
          class="mb-3 ml-3 inline-flex items-center gap-2.5 rounded-lf bg-bg px-3 py-[9px] text-[13px] font-semibold text-ink transition-colors duration-lf group-hover:bg-brand group-hover:text-on-dark lg:mb-6 lg:ml-6 lg:px-4 lg:py-3 lg:text-[15px]"
        >
          {{ tile.label }}
          <ui-icon class="hidden lg:inline" name="arrow-right" :size="14" :stroke-width="2" />
        </span>
      </ui-photo>
    </div>
  </section>
</template>
