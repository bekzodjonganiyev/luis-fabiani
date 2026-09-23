<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const titles: Record<string, string> = {
  offer: "footer.offer",
  privacy: "footer.privacy",
  payment: "footer.payment_security"
}
const key = titles[route.params.slug as string]
if (!key) throw createError({ statusCode: 404, fatal: true })
useHead({ title: t(key) })
</script>

<template>
  <page-stub :title="t(key)" />
</template>
