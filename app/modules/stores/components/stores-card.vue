<script setup lang="ts">
import { useOpenNow } from "../stores.service"
import type { StorePoint } from "../stores.model"

/** Do'kon / Ustaxona kartasi (Stores.html): nom + holat, manzil, ish vaqti, telefon, tugmalar. */
const props = defineProps<{ point: StorePoint }>()

const { t } = useI18n()
const config = useRuntimeConfig()
const open = useOpenNow(props.point.schedule)

const isStore = computed(() => props.point.id === "store")
const address = computed(() => t(`stores.${props.point.id}_address`))
const directions = computed(() => `https://yandex.uz/maps/?text=${encodeURIComponent(address.value)}`)
const rows = computed(() =>
  isStore.value
    ? [
        { label: t("stores.hours"), value: t("footer.hours") },
        { label: t("stores.phone"), value: t("placeholders.phone"), href: "tel:+998" },
        {
          label: t("stores.metro"),
          value: t("stores.metro_value", { station: t("placeholders.station"), n: t("placeholders.number") })
        }
      ]
    : [
        { label: t("stores.hours"), value: t("stores.workshop_hours") },
        { label: t("stores.wholesale_phone"), value: t("placeholders.phone"), href: "tel:+998" }
      ]
)
</script>

<template>
  <article
    class="flex flex-col gap-3.5 border bg-card p-5 lg:p-6"
    :class="isStore ? 'border-brand' : 'border-line'"
    :aria-labelledby="`store-${point.id}`"
  >
    <div class="flex items-baseline justify-between gap-3">
      <h2 :id="`store-${point.id}`" class="serif m-0 text-[26px] font-medium leading-none lg:text-[28px]">
        {{ t(`stores.${point.id}`) }}
      </h2>
      <span v-if="!isStore" class="lf-label">{{ t("stores.workshop_tag") }}</span>
      <span
        v-else-if="open !== null"
        class="text-xs font-bold uppercase tracking-[.1em]"
        :class="open ? 'text-success' : 'text-muted'"
      >
        {{ open ? t("stores.open_now") : t("stores.closed_now") }}
      </span>
    </div>
    <span class="text-[15px] font-medium">{{ address }}</span>
    <dl class="m-0 grid grid-cols-[minmax(0,.8fr)_minmax(0,1fr)] gap-x-4 gap-y-1.5 text-sm sm:grid-cols-2">
      <template v-for="r in rows" :key="r.label">
        <dt class="text-muted">{{ r.label }}</dt>
        <dd class="m-0">
          <a v-if="r.href" class="font-semibold text-ink" :href="r.href">{{ r.value }}</a>
          <span v-else>{{ r.value }}</span>
        </dd>
      </template>
    </dl>
    <div class="flex flex-wrap gap-2.5">
      <ui-button size="sm" :variant="isStore ? 'ink' : 'line'" :href="directions" target="_blank" rel="noopener">
        {{ t("stores.directions") }}
      </ui-button>
      <ui-button
        v-if="isStore"
        size="sm"
        variant="line"
        :href="config.public.telegramUrl"
        target="_blank"
        rel="noopener"
      >
        Telegram
      </ui-button>
    </div>
  </article>
</template>
