<script setup lang="ts">
import type { ICollection } from "@/modules/collections"

defineProps<{ item: ICollection }>()
const { t } = useI18n()
</script>

<template>
  <ui-photo
    class="group flex items-end"
    :to="`/collections/${item.slug}`"
    :src="item.src"
    :caption="t(`collections.items.${item.slug}.photo`)"
  >
    <span
      class="mb-3 ml-3 mr-3 flex flex-col gap-1.5 rounded-lf bg-bg px-3.5 py-3 text-ink transition-colors duration-lf group-hover:bg-brand group-hover:text-on-dark lg:mb-6 lg:ml-6 lg:px-5 lg:py-4"
    >
      <span class="inline-flex items-center gap-2.5 text-[15px] font-semibold lg:text-[17px]">
        {{ t(`collections.items.${item.slug}.title`) }}
        <ui-icon name="arrow-right" :size="14" :stroke-width="2" />
      </span>
      <span class="hidden max-w-[34ch] text-[13px] leading-[1.45] opacity-80 lg:block">
        {{ t(`collections.items.${item.slug}.text`) }}
      </span>
    </span>
  </ui-photo>
</template>
