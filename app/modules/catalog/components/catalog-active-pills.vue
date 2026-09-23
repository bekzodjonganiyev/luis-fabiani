<script setup lang="ts">
import { useCatalogService } from "@/modules/catalog"

withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
const { activePills, clear } = useCatalogService()
</script>

<template>
  <div v-if="activePills.length" class="flex flex-wrap items-center gap-2">
    <button
      v-for="pill in activePills"
      :key="pill.key"
      class="inline-flex items-center gap-2 rounded-lf border border-ink bg-card px-3 text-[13px] font-semibold text-ink transition-colors duration-lf hover:bg-soft-hover"
      type="button"
      :class="compact ? 'h-[34px] text-xs' : 'h-[34px]'"
      :aria-label="`${$t('common.remove')}: ${pill.label}`"
      @click="pill.remove()"
    >
      {{ pill.label }}
      <ui-icon name="close" :size="12" :stroke-width="2.2" />
    </button>
    <button class="ml-1 self-center text-[13px] font-semibold text-muted hover:text-ink" type="button" @click="clear">
      {{ $t("common.clear") }}
    </button>
  </div>
</template>
