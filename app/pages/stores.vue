<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t("stub.stores") })
</script>

<template>
  <page-stub :title="t('stub.stores')" />
</template>
