<script setup lang="ts">
import { useMessage } from "naive-ui"
import {
  ProductGallery,
  ProductBuyPanel,
  ProductDetails,
  ProductAddons,
  ProductSimilar,
  SizeModal,
  useProductApi,
  useProductService,
  useProductStore
} from "@/modules/product"

const route = useRoute()
const { t } = useI18n()
const api = useProductApi()
const store = useProductStore()
const service = useProductService()
const message = useMessage()
const config = useRuntimeConfig()

const slug = computed(() => route.params.slug as string)
const { data, error } = await useAsyncData(`product-${slug.value}`, () => api.getProduct(slug.value))
if (error.value || !data.value)
  throw createError({ statusCode: 404, statusMessage: t("product.not_found"), fatal: true })

store.setCurrent(data.value.data)
watch(data, (d) => d && store.setCurrent(d.data))
onBeforeUnmount(() => store.setCurrent(null))

const product = computed(() => store.current!)
const name = computed(() => service.productName(product.value))
useHead({ title: name })

const crumbs = computed(() => [
  { label: t("nav.home"), to: "/" },
  { label: t("nav.catalog"), to: "/catalog" },
  { label: t(`categories.${product.value.category}`), to: `/catalog?category=${product.value.category}` },
  { label: name.value }
])
const priceLabel = computed(() => `${formatPrice(product.value.price, t("placeholders.price"))} ${t("common.sum")}`)
const add = () => service.addToCart(message)
</script>

<template>
  <div v-if="store.current" class="pb-[110px] lg:pb-0">
    <div class="lf-container hidden pt-5 lg:block"><page-breadcrumbs :items="crumbs" /></div>

    <!-- Galereya + sotib olish -->
    <div class="lf-container grid grid-cols-1 lg:grid-cols-[7fr_5fr] lg:gap-x-14 lg:pt-6">
      <product-gallery />
      <div class="px-4 pt-5 lg:px-0 lg:pt-0"><product-buy-panel /></div>
    </div>

    <!-- Batafsil + Shu bilan birga -->
    <div class="lf-container grid grid-cols-1 gap-7 pt-6 lg:grid-cols-[7fr_5fr] lg:gap-x-14 lg:pt-10">
      <product-details />
      <product-addons :addons="product.addons" />
    </div>

    <!-- O'xshash -->
    <div class="lf-container pb-10 pt-7 lg:pb-10 lg:pt-12">
      <product-similar :items="product.similar" />
    </div>

    <!-- Mobil yopishqoq CTA -->
    <div class="fixed inset-x-0 bottom-0 z-20 flex gap-2 border-t border-line bg-card px-4 pb-5 pt-3 lg:hidden">
      <ui-button class="flex-1" @click="add">{{ t("product.add_to_cart_short", { price: priceLabel }) }}</ui-button>
      <ui-button
        class="!w-[52px] !px-0"
        variant="line"
        target="_blank"
        rel="noopener"
        :href="config.public.telegramUrl"
        :aria-label="t('common.order_telegram')"
      >
        <ui-icon name="telegram" :size="22" />
      </ui-button>
    </div>

    <client-only><size-modal /></client-only>
  </div>
</template>
