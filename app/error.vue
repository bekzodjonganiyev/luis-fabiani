<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{ error: NuxtError }>()
const { t } = useI18n()
useHead({ title: t("errors.title") })
</script>

<template>
  <div class="grid min-h-dvh place-items-center bg-bg px-4 text-ink">
    <div class="flex max-w-md flex-col items-center gap-4 text-center">
      <span class="serif text-[64px] italic leading-none text-accent-text">{{ error.statusCode }}</span>
      <h1 class="serif m-0 text-3xl font-medium">
        {{ error.statusCode === 404 ? t("errors.not_found") : t("errors.title") }}
      </h1>
      <p class="m-0 text-sm text-muted">{{ t("errors.text") }}</p>
      <ui-button variant="line" @click="clearError({ redirect: '/' })">{{ t("nav.home") }}</ui-button>
    </div>
  </div>
</template>
