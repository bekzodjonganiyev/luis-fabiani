<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t("stub.help") })
</script>

<template>
  <page-stub :title="t('stub.help')" />
</template>
