<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t("stub.workshop") })
</script>

<template>
  <page-stub :title="t('stub.workshop')" />
</template>
