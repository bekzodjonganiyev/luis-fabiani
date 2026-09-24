<script setup lang="ts">
import type { IOrderTrack } from "@/modules/order-track"

const props = defineProps<{ order: IOrderTrack }>()
const { t, locale } = useI18n()

const current = computed(() => props.order.steps.findIndex((s) => s.status === props.order.status))
const formatDate = (iso: string) =>
  new Intl.DateTimeFormat(locale.value, { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }).format(
    new Date(iso)
  )
</script>

<template>
  <section class="flex flex-col gap-5 rounded-lf border border-brand bg-card p-5 lg:p-[26px]" aria-live="polite">
    <div class="flex flex-col gap-1.5 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
      <div class="flex flex-col gap-1">
        <span class="lf-label">{{ t("track.order") }}</span>
        <span class="serif text-[28px] font-medium leading-none lg:text-[34px]">{{ order.number }}</span>
      </div>
      <span class="text-[13px] text-muted">
        {{ t(`track.delivery.${order.delivery}`) }} · {{ t("common.pieces", { n: order.items_count }) }}
      </span>
    </div>

    <ol class="m-0 flex list-none flex-col p-0">
      <li
        v-for="(s, i) in order.steps"
        :key="s.status"
        class="relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-3.5 pb-5 last:pb-0"
      >
        <!-- vertikal chiziq -->
        <span
          v-if="i < order.steps.length - 1"
          class="absolute bottom-0 left-[13px] top-7 w-px"
          :class="i < current ? 'bg-brand' : 'bg-line'"
          aria-hidden="true"
        />
        <span
          class="relative z-[1] inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold"
          :class="
            i < current
              ? 'border-brand bg-brand text-on-dark'
              : i === current
                ? 'border-brand bg-accent text-brand'
                : 'border-line bg-bg text-muted'
          "
        >
          <ui-icon v-if="i < current" name="check" :size="14" :stroke-width="2.2" />
          <template v-else>{{ i + 1 }}</template>
        </span>
        <div class="flex flex-col gap-0.5 pt-0.5">
          <span class="text-[15px] font-semibold" :class="i > current ? 'text-muted' : 'text-ink'">
            {{ t(`track.statuses.${s.status}`) }}
          </span>
          <span class="text-[13px] text-muted">
            {{ s.date ? formatDate(s.date) : t("common.waiting") }}
          </span>
        </div>
      </li>
    </ol>

    <div class="flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
      <span class="text-[13px] text-muted">{{ t("track.telegram_note") }}</span>
      <ui-button variant="line" size="sm" to="/help">{{ t("nav.help") }}</ui-button>
    </div>
  </section>
</template>
