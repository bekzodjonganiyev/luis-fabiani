<script setup lang="ts">
import LangSwitcher from "./lang-switcher.vue"
import { useLayoutStore } from "@/modules/layout"

const { t } = useI18n()
const layout = useLayoutStore()
const { nav } = useSiteLinks()
const { logo } = usePalette()

const groups = computed(() => [
  {
    title: t("mega.style"),
    links: ["oksford", "derbi", "brogi", "monk", "loafer", "chelsi"].map((x) => ({
      label: t(`types.${x}`),
      to: `/catalog?type=${x}`
    }))
  },
  {
    title: t("mega.occasion"),
    links: ["office", "wedding", "casual", "winter"].map((x) => ({
      label: t(`occasions.${x}`),
      to: `/catalog?occasion=${x}`
    }))
  }
])
</script>

<template>
  <ui-drawer v-model="layout.mobileNavOpen" placement="left" width="min(360px, 90vw)" :aria-label="t('nav.menu')">
    <div class="flex items-center justify-between border-b border-line px-4 py-3">
      <img class="h-8 w-auto" :src="logo" :alt="t('nav.logo_alt')" />
      <ui-icon-button icon="close" :label="t('common.close')" :icon-size="22" @click="layout.mobileNavOpen = false" />
    </div>
    <div class="flex-1 overflow-y-auto px-5 py-4">
      <nav class="flex flex-col" :aria-label="t('nav.main')">
        <nuxt-link
          v-for="item in nav"
          :key="item.key"
          class="serif border-b border-line py-3.5 text-[26px] font-medium text-ink"
          :to="item.to"
        >
          {{ item.label }}
        </nuxt-link>
      </nav>
      <div v-for="g in groups" :key="g.title" class="mt-6 flex flex-col gap-1">
        <span class="lf-label mb-1.5">{{ g.title }}</span>
        <nuxt-link v-for="l in g.links" :key="l.to" class="py-2 text-[15px] font-medium text-brand" :to="l.to">
          {{ l.label }}
        </nuxt-link>
      </div>
      <div class="mt-6 flex flex-col gap-2 text-sm">
        <nuxt-link class="text-muted" to="/track">{{ t("utility.track") }}</nuxt-link>
        <nuxt-link class="text-muted" to="/stores">{{ t("utility.stores") }}</nuxt-link>
        <a class="font-semibold text-ink" href="tel:+998">{{ t("placeholders.phone") }}</a>
      </div>
    </div>
    <div class="border-t border-line px-5 py-4">
      <lang-switcher />
    </div>
  </ui-drawer>
</template>
