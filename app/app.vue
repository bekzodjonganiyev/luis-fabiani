<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from "naive-ui"

const { palette } = usePalette()
const { overrides } = useNaiveTheme()
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    "lang": () => locale.value,
    "data-palette": () => palette.value,
    "data-photo-captions": () => (import.meta.dev ? "" : undefined)
  }
})
</script>

<template>
  <n-config-provider inline-theme-disabled :theme-overrides="overrides">
    <n-message-provider placement="bottom-right" :max="3" :duration="3500">
      <nuxt-loading-indicator color="var(--lf-brand)" :height="2" />
      <nuxt-route-announcer />
      <nuxt-layout>
        <nuxt-page />
      </nuxt-layout>
    </n-message-provider>
  </n-config-provider>
</template>
