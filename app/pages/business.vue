<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t("stub.business") })
</script>

<template>
  <page-stub :title="t('stub.business')" />
</template>
