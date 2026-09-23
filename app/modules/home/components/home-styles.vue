<script setup lang="ts">
const { t, tm, rt } = useI18n()
const styles = computed(() => (tm("home.styles") as any[]).map((s) => ({ type: rt(s.type), text: rt(s.text) })))
</script>

<template>
  <section class="lf-container hidden flex-col gap-8 border-t border-line pt-16 lg:flex">
    <h2 class="serif m-0 text-[40px] font-medium leading-[1.05]">{{ t("home.styles_title") }}</h2>
    <div class="grid grid-cols-4 gap-6">
      <nuxt-link
        v-for="s in styles"
        :key="s.type"
        class="flex flex-col gap-2.5 border-t border-ink pt-6 text-ink"
        :to="`/catalog?type=${s.type}`"
      >
        <span class="serif text-[34px] font-medium leading-none">{{ t(`types.${s.type}`) }}</span>
        <span class="text-sm leading-normal text-muted">{{ s.text }}</span>
      </nuxt-link>
    </div>
  </section>
</template>
