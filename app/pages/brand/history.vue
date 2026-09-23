<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t("stub.history") })
</script>

<template>
  <page-stub :title="t('stub.history')" />
</template>
