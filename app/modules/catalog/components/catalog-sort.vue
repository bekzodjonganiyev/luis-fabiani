<script setup lang="ts">
import { SORT_KEYS, useCatalogService, useCatalogStore } from "@/modules/catalog"

withDefaults(defineProps<{ mobile?: boolean }>(), { mobile: false })
const store = useCatalogStore()
const { setSort } = useCatalogService()
const { t } = useI18n()
const options = computed(() => SORT_KEYS.map((k) => ({ value: k, label: t(`catalog.sort_options.${k}`) })))
</script>

<template>
  <ui-select
    :model-value="store.params.sort"
    :options="options"
    :label="mobile ? undefined : t('catalog.sort')"
    size="sm"
    :block="mobile"
    @update:model-value="setSort($event)"
  />
</template>
