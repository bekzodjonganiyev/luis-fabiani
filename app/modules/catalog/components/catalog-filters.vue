<script setup lang="ts">
import { useCatalogService, useCatalogStore } from "@/modules/catalog"
import { COLOR_HEX, SIZE_RANGE } from "@/modules/product"

/**
 * Filtr guruhlari (Catalog.html / FilterSheet.html): Turi · O'lcham · To'liqlik · Rang · Material · Narx · Holat/Mavsum.
 * Har guruh yig'iladigan; o'zgarish darhol URL ga yoziladi.
 */
withDefaults(defineProps<{ sheet?: boolean }>(), { sheet: false })

const store = useCatalogStore()
const service = useCatalogService()
const { t } = useI18n()

const open = reactive<Record<string, boolean>>({
  type: true,
  size: true,
  fit: true,
  color: true,
  material: true,
  price: true,
  more: false
})
const toggle = (k: string) => (open[k] = !open[k])

const typeFacets = computed(() =>
  (store.facets?.type || []).filter((f) => f.count || store.params.type.includes(f.value))
)
const materialFacets = computed(() =>
  (store.facets?.material || []).filter((f) => f.count || store.params.material.includes(f.value))
)
const colorFacets = computed(() => {
  return (store.facets?.color || []).map((f) => ({
    id: f.value,
    name: t(`colors.${f.value}`),
    hex: COLOR_HEX[f.value] || COLOR_HEX.black!,
    count: f.count
  }))
})
const sizeOptions = computed(() =>
  SIZE_RANGE.map((eu) => ({
    eu,
    available: (store.facets?.size.find((s) => s.value === eu)?.count ?? 1) > 0 || store.params.size.includes(eu)
  }))
)
const fitOptions = computed(() => ["narrow", "standard", "wide"].map((v) => ({ value: v, label: t(`fits.${v}`) })))
const badgeOptions = computed(() => ["new", "bestseller", "sale"].map((v) => ({ value: v, label: t(`badges.${v}`) })))
const occasionOptions = computed(() =>
  ["office", "wedding", "casual", "winter"].map((v) => ({ value: v, label: t(`occasions.${v}`) }))
)

const priceFrom = ref(store.params.price_from)
const priceTo = ref(store.params.price_to)
watch(
  () => [store.params.price_from, store.params.price_to],
  (vals) => {
    priceFrom.value = vals[0] || ""
    priceTo.value = vals[1] || ""
  }
)
const onPrice = () => service.setPrice(priceFrom.value, priceTo.value)
const priceMin = computed(() => (store.facets ? formatNumber(store.facets.price.min) : ""))
const priceMax = computed(() => (store.facets ? formatNumber(store.facets.price.max) : ""))
</script>

<template>
  <div class="flex flex-col" :class="{ 'px-5': sheet }">
    <!-- Turi -->
    <section class="flex flex-col gap-3 border-t border-line py-4 lg:py-5">
      <button
        class="flex w-full items-center justify-between text-[13px] font-bold uppercase tracking-[.06em] text-ink"
        type="button"
        :aria-expanded="open.type"
        @click="toggle('type')"
      >
        <span>{{ t("catalog.f_type") }}</span>
        <ui-icon :name="open.type ? 'chevron-up' : 'chevron-down'" :size="14" :stroke-width="2" />
      </button>
      <div v-show="open.type" class="flex flex-col" :class="sheet ? 'gap-0' : 'gap-1'">
        <ui-checkbox
          v-for="f in typeFacets"
          :key="f.value"
          :model-value="store.params.type.includes(f.value)"
          :label="t(`types.${f.value}`)"
          :count="f.count"
          :size="sheet ? 'lg' : 'md'"
          :class="{ 'min-h-11': sheet }"
          @update:model-value="service.toggleIn('type', f.value)"
        />
      </div>
    </section>

    <!-- O'lcham -->
    <section class="flex flex-col gap-3 border-t border-line py-4 lg:py-5">
      <button
        class="flex w-full items-center justify-between text-[13px] font-bold uppercase tracking-[.06em] text-ink"
        type="button"
        :aria-expanded="open.size"
        @click="toggle('size')"
      >
        <span>{{ t("catalog.f_size") }}</span>
        <ui-icon :name="open.size ? 'chevron-up' : 'chevron-down'" :size="14" :stroke-width="2" />
      </button>
      <ui-size-picker
        v-show="open.size"
        multiple
        :model-value="store.params.size"
        :sizes="sizeOptions"
        :cols="4"
        :height="sheet ? 44 : 40"
        :aria-label="t('catalog.f_size')"
        @update:model-value="service.setSizes($event)"
      />
    </section>

    <!-- To'liqlik -->
    <section class="flex flex-col gap-3 border-t border-line py-4 lg:py-5">
      <button
        class="flex w-full items-center justify-between text-[13px] font-bold uppercase tracking-[.06em] text-ink"
        type="button"
        :aria-expanded="open.fit"
        @click="toggle('fit')"
      >
        <span>{{ t("catalog.f_fit") }}</span>
        <ui-icon :name="open.fit ? 'chevron-up' : 'chevron-down'" :size="14" :stroke-width="2" />
      </button>
      <div v-show="open.fit" class="flex flex-col gap-3">
        <ui-chip-group
          grow
          :model-value="store.params.fit"
          :options="fitOptions"
          :height="sheet ? 44 : 40"
          :aria-label="t('catalog.f_fit')"
          @update:model-value="service.setFit($event)"
        />
        <span class="text-xs leading-snug text-muted">{{ t("catalog.f_fit_hint") }}</span>
      </div>
    </section>

    <!-- Rang -->
    <section class="flex flex-col gap-3 border-t border-line py-4 lg:py-5">
      <button
        class="flex w-full items-center justify-between text-[13px] font-bold uppercase tracking-[.06em] text-ink"
        type="button"
        :aria-expanded="open.color"
        @click="toggle('color')"
      >
        <span>{{ t("catalog.f_color") }}</span>
        <ui-icon :name="open.color ? 'chevron-up' : 'chevron-down'" :size="14" :stroke-width="2" />
      </button>
      <ui-swatches
        v-show="open.color"
        selectable
        :model-value="store.params.color"
        :colors="colorFacets"
        :size="sheet ? 40 : 32"
        @update:model-value="service.toggleIn('color', $event)"
      />
    </section>

    <!-- Material -->
    <section class="flex flex-col gap-3 border-t border-line py-4 lg:py-5">
      <button
        class="flex w-full items-center justify-between text-[13px] font-bold uppercase tracking-[.06em] text-ink"
        type="button"
        :aria-expanded="open.material"
        @click="toggle('material')"
      >
        <span>{{ t("catalog.f_material") }}</span>
        <ui-icon :name="open.material ? 'chevron-up' : 'chevron-down'" :size="14" :stroke-width="2" />
      </button>
      <div v-show="open.material" class="flex flex-col gap-1">
        <ui-checkbox
          v-for="f in materialFacets"
          :key="f.value"
          :model-value="store.params.material.includes(f.value)"
          :label="t(`materials.${f.value}`)"
          :count="f.count"
          :size="sheet ? 'lg' : 'md'"
          @update:model-value="service.toggleIn('material', f.value)"
        />
      </div>
    </section>

    <!-- Narx -->
    <section class="flex flex-col gap-3 border-t border-line py-4 lg:py-5">
      <button
        class="flex w-full items-center justify-between text-[13px] font-bold uppercase tracking-[.06em] text-ink"
        type="button"
        :aria-expanded="open.price"
        @click="toggle('price')"
      >
        <span>{{ t("catalog.f_price") }}</span>
        <ui-icon :name="open.price ? 'chevron-up' : 'chevron-down'" :size="14" :stroke-width="2" />
      </button>
      <div v-show="open.price" class="flex items-center gap-2.5">
        <ui-input
          v-model="priceFrom"
          class="flex-1"
          size="xs"
          inputmode="numeric"
          :placeholder="priceMin"
          :aria-label="t('catalog.f_price_from')"
          @update:model-value="onPrice"
        />
        <span class="text-muted">—</span>
        <ui-input
          v-model="priceTo"
          class="flex-1"
          size="xs"
          inputmode="numeric"
          :placeholder="priceMax"
          :aria-label="t('catalog.f_price_to')"
          @update:model-value="onPrice"
        />
      </div>
    </section>

    <!-- Holat · Mavsum -->
    <section class="flex flex-col gap-3 border-y border-line py-4 lg:py-5">
      <button
        class="flex w-full items-center justify-between text-[13px] font-bold uppercase tracking-[.06em] text-ink"
        type="button"
        :aria-expanded="open.more"
        @click="toggle('more')"
      >
        <span>{{ t("catalog.f_more") }}</span>
        <ui-icon :name="open.more ? 'chevron-up' : 'chevron-right'" :size="14" :stroke-width="2" />
      </button>
      <div v-show="open.more" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <span class="text-xs font-semibold text-muted">{{ t("catalog.f_badge") }}</span>
          <ui-checkbox
            v-for="o in badgeOptions"
            :key="o.value"
            :model-value="store.params.badge.includes(o.value)"
            :label="o.label"
            @update:model-value="service.toggleIn('badge', o.value)"
          />
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-xs font-semibold text-muted">{{ t("catalog.f_occasion") }}</span>
          <ui-checkbox
            v-for="o in occasionOptions"
            :key="o.value"
            :model-value="store.params.occasion.includes(o.value)"
            :label="o.label"
            @update:model-value="service.toggleIn('occasion', o.value)"
          />
        </div>
      </div>
    </section>
  </div>
</template>
