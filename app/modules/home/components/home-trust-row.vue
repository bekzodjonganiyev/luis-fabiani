<script setup lang="ts">
const { t } = useI18n()
const items = computed(() => [
  t("home.trust_1"),
  t("home.trust_2"),
  t("home.trust_3"),
  t("home.trust_4"),
  t("home.trust_5")
])
const mobile = computed(() => [t("home.trust_1"), t("home.trust_3_short"), t("home.trust_4_short")])
</script>

<template>
  <section class="stitch border-b border-line">
    <!-- Desktop -->
    <div class="lf-container hidden h-20 items-center justify-between text-sm font-semibold text-brand lg:flex">
      <template v-for="(item, i) in items" :key="item">
        <span>{{ item }}</span>
        <span v-if="i < items.length - 1" class="h-6 w-px bg-line" />
      </template>
    </div>
    <!-- Mobil -->
    <div class="flex lg:hidden">
      <div
        v-for="(item, i) in mobile"
        :key="item"
        class="flex-1 px-3 py-3.5 text-xs font-semibold leading-snug text-brand"
        :class="{ 'border-r border-line': i < mobile.length - 1 }"
      >
        {{ item }}
      </div>
    </div>
  </section>
</template>
