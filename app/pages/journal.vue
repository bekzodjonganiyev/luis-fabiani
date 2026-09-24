<script setup lang="ts">
const { t } = useI18n()
useHead({ title: () => t("footer.journal") })
</script>

<template>
  <page-stub :title="t('footer.journal')" />
</template>
