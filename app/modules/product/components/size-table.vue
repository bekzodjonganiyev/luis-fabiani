<script setup lang="ts">
/**
 * O'lcham jadvali (EU · oyoq uzunligi · sotuvda). Modal (mahsulot bo'yicha, tanlash bilan) va
 * Yordam sahifasi (umumiy, `stock` siz) ikkalasi ishlatadi.
 */
export interface SizeTableRow {
  eu: number
  length: string
  available?: boolean
}

withDefaults(
  defineProps<{
    rows: SizeTableRow[]
    unit: "cm" | "inch"
    picked?: number | null
    stock?: boolean
  }>(),
  { picked: null, stock: true }
)
const emit = defineEmits<{ (e: "pick", eu: number): void }>()
const { t } = useI18n()
</script>

<template>
  <table class="w-full border-collapse border border-line bg-card text-sm">
    <thead>
      <tr class="bg-photo-bg text-left">
        <th class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
          {{ t("size_modal.col_eu") }}
        </th>
        <th class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
          {{ unit === "cm" ? t("size_modal.col_length_cm") : t("size_modal.col_length_in") }}
        </th>
        <th v-if="stock" class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
          {{ t("size_modal.col_stock") }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="r in rows"
        :key="r.eu"
        class="border-t border-line transition-colors duration-lf"
        :class="[stock ? 'cursor-pointer' : '', picked === r.eu ? 'bg-[var(--lf-selected-bg)]' : 'hover:bg-bg']"
        @click="stock && r.available && emit('pick', r.eu)"
      >
        <td class="tabular px-3.5 py-2.5 font-bold">{{ r.eu }}</td>
        <td class="tabular px-3.5 py-2.5">{{ r.length }}</td>
        <td
          v-if="stock"
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
</template>
