<script setup lang="ts">
import WishlistButton from "./wishlist-button.vue"
import { useProductStore } from "@/modules/product"

const store = useProductStore()
const { t } = useI18n()

const product = computed(() => store.current!)
const active = computed(
  () => product.value.images[store.activeImage] ?? product.value.images[0] ?? { src: "", view: "three_quarter" }
)
const colorName = computed(() => (store.color ? t(`colors.${store.color.id}`) : ""))
const caption = computed(() =>
  t("product.photo_caption", {
    name: t(`types.${product.value.type}`),
    no: product.value.modelNo || t("placeholders.model_no"),
    color: colorName.value
  })
)

const zoomed = ref(false)

// Mobil: svaypda rasm almashadi
const startX = ref(0)
const onTouchStart = (e: TouchEvent) => (startX.value = e.touches[0]?.clientX ?? 0)
const onTouchEnd = (e: TouchEvent) => {
  const dx = (e.changedTouches[0]?.clientX ?? 0) - startX.value
  if (Math.abs(dx) < 40) return
  const n = product.value.images.length
  store.activeImage = (store.activeImage + (dx < 0 ? 1 : -1) + n) % n
}
</script>

<template>
  <div class="grid gap-2.5 lg:grid-cols-[96px_minmax(0,1fr)] lg:gap-4">
    <!-- Thumbs (desktop chap, mobil past) -->
    <div
      class="order-2 flex gap-1.5 overflow-x-auto px-4 lg:order-1 lg:flex-col lg:gap-2.5 lg:overflow-visible lg:px-0"
      role="tablist"
      :aria-label="t('product.gallery')"
    >
      <button
        v-for="(img, i) in product.images"
        :key="i"
        class="ph h-14 w-14 shrink-0 border transition-colors duration-lf lg:h-24 lg:w-full"
        type="button"
        role="tab"
        :class="i === store.activeImage ? 'border-ink' : 'border-line hover:border-ink'"
        :aria-selected="i === store.activeImage"
        :aria-label="t(`views.${img.view}`)"
        :style="{ backgroundImage: `url(${img.src})` }"
        @click="store.activeImage = i"
      />
    </div>

    <!-- Asosiy rasm -->
    <div class="order-1 lg:order-2" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
      <ui-photo class="h-[420px] !rounded-none lg:h-[720px] lg:!rounded-lf" :src="active.src" :caption="caption">
        <ui-model-no
          class="absolute right-4 top-3.5 text-[30px] leading-none lg:right-7 lg:top-6 lg:text-[44px]"
          :value="product.modelNo"
        />
        <span
          class="bg-card/90 absolute bottom-3 right-4 rounded-lf-badge px-2 py-[5px] text-[11px] font-semibold lg:hidden"
        >
          {{ t("product.of", { i: store.activeImage + 1, n: product.images.length }) }}
        </span>
        <button
          class="bg-card/90 absolute bottom-4 right-4 hidden h-11 w-11 items-center justify-center rounded-full text-ink lg:inline-flex"
          type="button"
          :aria-label="t('product.zoom')"
          @click="zoomed = true"
        >
          <ui-icon name="zoom" :size="18" :stroke-width="1.8" />
        </button>
      </ui-photo>
      <wishlist-button class="lg:hidden" position="left" :slug="product.slug" />
    </div>

    <ui-modal v-model="zoomed" width="min(1200px, 96vw)">
      <div class="relative">
        <img class="block max-h-[90dvh] w-full object-contain" :src="active.src" :alt="caption" />
        <ui-icon-button
          class="!bg-card/90 absolute right-3 top-3"
          icon="close"
          round
          :label="t('common.close')"
          @click="zoomed = false"
        />
      </div>
    </ui-modal>
  </div>
</template>
