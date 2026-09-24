<script setup lang="ts">
import { STORE_POINTS } from "../stores.model"

/** Xarita joyi: hozircha statik rasm + 2 ta belgi. Keyin Yandex / Google Maps iframe bilan almashadi. */
const { t } = useI18n()
</script>

<template>
  <ui-photo
    class="flex min-h-[300px] items-center justify-center lg:min-h-full"
    src="/images/map.jpg"
    :caption="t('stores.map_photo')"
  >
    <div
      v-for="p in STORE_POINTS"
      :key="p.id"
      class="absolute flex -translate-x-1/2 flex-col items-center gap-1.5"
      :style="{ left: p.pin.left, top: p.pin.top }"
    >
      <span
        class="h-7 w-7 -rotate-45 rounded-[50%_50%_50%_0] border-2 border-accent bg-brand lg:h-9 lg:w-9"
        aria-hidden="true"
      />
      <span class="rounded-[2px] border border-line bg-card px-2 py-[5px] text-xs font-bold text-ink">
        {{ t(`stores.${p.id}`) }}
      </span>
    </div>
  </ui-photo>
</template>
