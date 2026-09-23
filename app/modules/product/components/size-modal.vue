<script setup lang="ts">
import { useProductStore, useProductService, SIZE_RANGE } from "@/modules/product"

/** O'lcham jadvali (SizeModal.html): 3 qadam + jadval + tanlash. sm qiymatlari — mijozdan ([sm]). */
const store = useProductStore()
const service = useProductService()
const config = useRuntimeConfig()
const { t, tm, rt } = useI18n()

const product = computed(() => store.current)
const picked = ref<number | null>(null)
watch(
  () => store.sizeModalOpen,
  (open) => open && (picked.value = store.size ?? 42)
)

const rows = computed(() =>
  SIZE_RANGE.map((eu) => {
    const s = product.value?.sizes.find((x) => x.eu === eu)
    const cm = s?.cm ?? null
    const length = cm === null ? t("placeholders.cm") : store.sizeUnit === "cm" ? String(cm) : (cm / 2.54).toFixed(1)
    return { eu, available: s?.available ?? false, length }
  })
)
const units = computed(() => [
  { value: "cm", label: t("size_modal.cm") },
  { value: "inch", label: t("size_modal.inch") }
])
const steps = computed(() => (tm("size_modal.steps") as any[]).map((s) => rt(s)))

const confirm = () => {
  if (picked.value) service.selectSize(picked.value)
  store.sizeModalOpen = false
}
</script>

<template>
  <ui-modal v-model="store.sizeModalOpen" aria-labelledby="sz-title" :width="880">
    <div class="grid lg:grid-cols-[340px_minmax(0,1fr)]">
      <div class="flex flex-col gap-5 bg-dark px-6 py-7 text-on-dark lg:px-8 lg:py-9">
        <h2 id="sz-title" class="serif m-0 text-[30px] font-medium leading-[1.04] lg:text-[38px]">
          {{ t("size_modal.title") }}
          <em class="font-normal text-accent">{{ t("size_modal.title_em") }}</em>
          {{ t("size_modal.title_end") }}
        </h2>
        <ol class="m-0 flex list-none flex-col gap-4 p-0">
          <li v-for="(s, i) in steps" :key="i" class="flex gap-3.5">
            <span class="serif w-6 shrink-0 text-[30px] italic leading-none text-accent">{{ i + 1 }}</span>
            <span class="text-sm leading-normal text-on-dark-body">{{ s }}</span>
          </li>
        </ol>
        <ui-photo class="hidden h-[150px] lg:block" dark src="/images/paper.jpg" :caption="t('size_modal.photo')" />
      </div>

      <div class="flex flex-col gap-5 px-5 py-6 lg:px-9 lg:py-8">
        <div class="flex items-start justify-between">
          <div class="flex flex-col gap-1.5">
            <span v-if="product" class="lf-label">
              {{
                t("size_modal.eyebrow", {
                  name: t(`types.${product.type}`),
                  no: product.modelNo || t("placeholders.model_no")
                })
              }}
            </span>
            <span class="serif text-[28px] font-medium leading-none">{{ t("size_modal.table_title") }}</span>
          </div>
          <ui-icon-button
            icon="close"
            :label="t('common.close')"
            :icon-size="22"
            @click="store.sizeModalOpen = false"
          />
        </div>

        <ui-chip-group
          v-model="store.sizeUnit"
          :options="units"
          :height="40"
          :aria-label="t('size_modal.table_title')"
        />

        <table class="w-full border-collapse border border-line bg-card text-sm">
          <thead>
            <tr class="bg-photo-bg text-left">
              <th class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
                {{ t("size_modal.col_eu") }}
              </th>
              <th class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
                {{ store.sizeUnit === "cm" ? t("size_modal.col_length_cm") : t("size_modal.col_length_in") }}
              </th>
              <th class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
                {{ t("size_modal.col_stock") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="r in rows"
              :key="r.eu"
              class="cursor-pointer border-t border-line transition-colors duration-lf"
              :class="picked === r.eu ? 'bg-[var(--lf-selected-bg)]' : 'hover:bg-bg'"
              @click="r.available && (picked = r.eu)"
            >
              <td class="tabular px-3.5 py-2.5 font-bold">{{ r.eu }}</td>
              <td class="tabular px-3.5 py-2.5">{{ r.length }}</td>
              <td
                class="px-3.5 py-2.5 font-semibold"
                :class="!r.available ? 'text-muted-2' : picked === r.eu ? 'text-brand' : 'text-success'"
              >
                {{
                  !r.available
                    ? t("common.unavailable_notify")
                    : picked === r.eu
                      ? t("size_modal.available_selected")
                      : t("common.available")
                }}
              </td>
            </tr>
          </tbody>
        </table>

        <p class="m-0 text-xs leading-normal text-muted">{{ t("size_modal.note") }}</p>

        <div class="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ui-button :disabled="!picked" @click="confirm">{{ t("size_modal.select", { n: picked ?? "" }) }}</ui-button>
          <a
            class="text-sm font-semibold text-accent-text"
            target="_blank"
            rel="noopener"
            :href="config.public.telegramUrl"
          >
            {{ t("size_modal.telegram_advice") }}
          </a>
        </div>
      </div>
    </div>
  </ui-modal>
</template>
