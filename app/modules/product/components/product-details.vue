<script setup lang="ts">
import { useProductStore } from "@/modules/product"

const store = useProductStore()
const { t } = useI18n()
const product = computed(() => store.current!)

const items = computed(() => [
  { key: "description", title: t("product.acc_description") },
  { key: "care", title: t("product.acc_care") },
  { key: "delivery", title: t("product.acc_delivery") }
])

const specs = computed(() => [
  { k: t("product.spec_upper"), v: t("product.spec_upper_value") },
  { k: t("product.spec_lining"), v: t("product.spec_lining_value") },
  { k: t("product.spec_sole"), v: t("placeholders.sole") },
  { k: t("product.spec_heel"), v: t("placeholders.heel") },
  { k: t("product.spec_fit"), v: t(`fits.${product.value.fit}`) },
  { k: t("product.spec_made"), v: t("common.made_in") }
])
</script>

<template>
  <ui-collapse :items="items" :default-expanded="['description']">
    <template #description>
      <div class="grid gap-4 lg:grid-cols-2 lg:gap-6">
        <p class="m-0 text-sm leading-[1.65] text-brand lg:text-[15px]">{{ t("placeholders.description") }}</p>
        <dl
          class="m-0 grid grid-cols-[120px_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-[13px] leading-normal lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-x-4 lg:gap-y-2 lg:text-sm"
        >
          <template v-for="s in specs" :key="s.k">
            <dt class="m-0 text-muted">{{ s.k }}</dt>
            <dd class="m-0 font-medium">{{ s.v }}</dd>
          </template>
        </dl>
      </div>
    </template>
    <template #care>
      <p class="m-0 text-sm leading-relaxed text-brand">{{ t("product.care_text") }}</p>
    </template>
    <template #delivery>
      <p class="m-0 text-sm leading-relaxed text-brand">{{ t("product.delivery_text") }}</p>
    </template>
  </ui-collapse>
</template>
