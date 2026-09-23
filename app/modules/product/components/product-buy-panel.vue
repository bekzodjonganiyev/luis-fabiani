<script setup lang="ts">
import { useMessage } from "naive-ui"
import { useProductStore, useProductService, SIZE_RANGE } from "@/modules/product"

const store = useProductStore()
const service = useProductService()
const message = useMessage()
const config = useRuntimeConfig()
const { t } = useI18n()

const product = computed(() => store.current!)
const colors = computed(() => product.value.colors.map((c) => ({ ...c, name: t(`colors.${c.id}`) })))
const sizes = computed(() =>
  SIZE_RANGE.map((eu) => product.value.sizes.find((s) => s.eu === eu) || { eu, available: false, cm: null })
)
const installment = computed(() => installmentOf(product.value.price))
const priceLabel = computed(() => `${formatPrice(product.value.price, t("placeholders.price"))} ${t("common.sum")}`)

const add = () => service.addToCart(message)
defineExpose({ add })
</script>

<template>
  <div class="flex flex-col gap-4 lg:gap-[22px] lg:pt-1.5">
    <div class="flex flex-col gap-1.5 lg:gap-2">
      <span class="text-xs font-semibold text-muted lg:text-[13px]">
        {{
          t("product.subtitle", {
            category: t(`categories.${product.category}`),
            material: t(`materials.${product.material}`)
          })
        }}
      </span>
      <h1 class="serif m-0 text-[38px] font-medium leading-[1.02] lg:text-[52px]">
        {{ t(`types.${product.type}`) }}
        <em class="font-normal not-italic text-accent-text lg:italic">
          № {{ product.modelNo || t("placeholders.model_no") }}
        </em>
      </h1>
      <div class="flex items-center gap-2.5 text-xs text-muted lg:text-[13px]">
        <ui-stars :size="13" />
        <nuxt-link class="border-b border-line text-muted" to="/reviews">
          {{
            product.reviewsCount === null
              ? t("placeholders.reviews_count")
              : t("product.reviews_count").replace("[N]", String(product.reviewsCount))
          }}
        </nuxt-link>
      </div>
    </div>

    <div class="flex flex-col gap-1.5 border-y border-line py-3.5 lg:py-[18px]">
      <ui-price size="xl" :value="product.price" :old-value="product.oldPrice" />
      <span v-if="installment" class="text-[13px] font-medium text-brand lg:text-sm">
        <i18n-t keypath="common.nasiya_line" tag="span">
          <template #installment>
            <strong>{{ t("common.nasiya_installment", { n: formatNumber(installment) }) }}</strong>
          </template>
        </i18n-t>
      </span>
    </div>

    <!-- Rang -->
    <div class="flex flex-col gap-2.5 lg:gap-3">
      <span class="text-[13px] font-semibold lg:text-sm">
        {{ t("product.color") }}
        <span class="font-medium text-muted">{{ store.color ? t(`colors.${store.color.id}`) : "" }}</span>
      </span>
      <ui-swatches v-model="store.colorId" selectable :colors="colors" :size="40" />
    </div>

    <!-- O'lcham -->
    <div class="flex flex-col gap-2.5 lg:gap-3">
      <div class="flex items-center justify-between">
        <span class="text-[13px] font-semibold lg:text-sm" :class="{ 'text-sale': store.sizeError }">
          {{ t("product.size") }}
          <span class="font-medium" :class="store.sizeError ? 'text-sale' : 'text-muted'">
            {{ store.size ? t("product.size_eu", { n: store.size }) : t("product.size_unselected") }}
          </span>
        </span>
        <button class="lf-link-accent text-xs lg:text-[13px]" type="button" @click="store.sizeModalOpen = true">
          {{ t("product.my_size") }}
        </button>
      </div>
      <ui-size-picker
        class="lg:!grid-cols-8"
        :model-value="store.size"
        :sizes="sizes"
        :cols="4"
        :height="48"
        :aria-label="t('product.size')"
        @update:model-value="service.selectSize($event)"
      />
      <span class="text-xs leading-snug" :class="store.sizeError ? 'font-medium text-sale' : 'text-muted'">
        <template v-if="store.sizeError">{{ t("product.choose_size_first") }}</template>
        <template v-else>
          <span class="lg:hidden">{{ t("product.fit_note_short") }}</span>
          <span class="hidden lg:inline">{{ t("product.fit_note") }}</span>
        </template>
      </span>
    </div>

    <!-- CTA (desktop; mobilda yopishqoq panel) -->
    <div class="hidden flex-col gap-2.5 lg:flex">
      <ui-button size="lg" block @click="add">{{ t("product.add_to_cart", { price: priceLabel }) }}</ui-button>
      <ui-button variant="line" size="lg" block target="_blank" rel="noopener" :href="config.public.telegramUrl">
        <template #icon><ui-icon name="telegram" :size="18" /></template>
        {{ t("common.order_telegram") }}
      </ui-button>
    </div>

    <!-- Yetkazish -->
    <div
      class="flex flex-col gap-2.5 rounded-lf border border-line bg-card px-4 py-3.5 text-[13px] lg:px-[18px] lg:py-4 lg:text-sm"
    >
      <div class="flex justify-between">
        <span class="font-semibold">{{ t("product.delivery_tashkent") }}</span>
        <span>
          {{ t("common.tomorrow") }} ·
          <strong class="text-success">{{ t("common.free") }}</strong>
        </span>
      </div>
      <div class="flex justify-between">
        <span class="font-semibold">{{ t("product.delivery_regions") }}</span>
        <span>{{ t("common.days_2_4") }} · {{ t("placeholders.regions_price") }}</span>
      </div>
      <nuxt-link class="hidden text-[13px] font-semibold text-accent-text lg:inline" to="/help#delivery">
        {{ t("product.delivery_choose_region") }}
      </nuxt-link>
    </div>

    <div class="flex flex-wrap gap-3.5 text-xs font-semibold text-brand lg:gap-5 lg:text-[13px]">
      <span>{{ t("product.guarantee_1") }}</span>
      <span class="text-line">|</span>
      <span>{{ t("product.guarantee_2") }}</span>
      <span class="text-line">|</span>
      <span>{{ t("product.guarantee_3") }}</span>
    </div>
  </div>
</template>
