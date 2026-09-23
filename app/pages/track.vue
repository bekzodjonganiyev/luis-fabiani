<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t("stub.track") })
</script>

<template>
  <page-stub :title="t('stub.track')" />
</template>
