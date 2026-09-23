<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t("footer.reviews") })
</script>

<template>
  <page-stub :title="t('footer.reviews')" />
</template>
