<script setup lang="ts">
import { COLOR_HEX, useProductStore } from "@/modules/product"

/** Hover (mouseenter/mouseleave) faqat panelga bog'lanadi — overlay ustida menyu yopiladi */
defineOptions({ inheritAttrs: false })
defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: "close"): void }>()

const { t } = useI18n()
const product = useProductStore()

const styles = computed(() => [
  { label: t("types.oksford"), to: "/catalog?type=oksford" },
  { label: t("types.derbi"), to: "/catalog?type=derbi" },
  { label: t("types.brogi"), to: "/catalog?type=brogi" },
  { label: t("types.monk"), to: "/catalog?type=monk" },
  { label: t("mega.loafer_moccasin"), to: "/catalog?type=loafer" },
  { label: t("mega.chelsea_boots"), to: "/catalog?type=chelsi" },
  { label: t("mega.sneaker"), to: "/catalog?type=sneaker" }
])
const occasions = computed(() =>
  ["office", "wedding", "casual", "winter"].map((o) => ({ label: t(`occasions.${o}`), to: `/collections/${o}` }))
)
const accessories = computed(() => [
  { label: t("mega.belts"), to: "/catalog?category=accessories&kind=belt" },
  { label: t("mega.creams"), to: "/catalog?category=accessories&kind=care" },
  { label: t("mega.laces"), to: "/catalog?category=accessories&kind=laces" }
])
const sizes = [39, 40, 41, 42, 43, 44, 45, 46]
const colors = computed(() =>
  ["black", "brown", "cognac", "navy"].map((id) => ({
    id,
    hex: COLOR_HEX[id],
    label: t(`colors.${id}`),
    to: `/catalog?color=${id}`
  }))
)
const materials = computed(() =>
  ["leather", "suede", "nubuck", "patent"].map((m) => ({ label: t(`materials.${m}`), to: `/catalog?material=${m}` }))
)
const statuses = computed(() => [
  { label: t("mega.new_arrivals"), to: "/catalog?badge=new" },
  { label: t("mega.bestsellers"), to: "/catalog?sort=popular" },
  { label: t("mega.sales"), to: "/catalog?badge=sale", sale: true }
])

const featured = computed(() => product.featured)
const linkClass = "py-[7px] text-[15px] font-medium text-brand transition-colors duration-lf hover:text-accent-text"
</script>

<template>
  <transition name="fade">
    <div v-show="open" id="lf-megamenu" class="absolute inset-x-0 top-full z-40 hidden lg:block">
      <div
        v-bind="$attrs"
        class="border-b border-line bg-bg shadow-[0_1px_3px_var(--lf-shadow)]"
        role="region"
        :aria-label="t('nav.catalog')"
        @keydown.esc="emit('close')"
      >
        <div class="lf-container grid grid-cols-[1fr_1fr_1.1fr_1fr_1.5fr] gap-x-10 pb-10 pt-9">
          <!-- Uslub -->
          <div class="flex flex-col gap-1">
            <span class="lf-label mb-2.5">{{ t("mega.style") }}</span>
            <nuxt-link v-for="l in styles" :key="l.to" :class="linkClass" :to="l.to">{{ l.label }}</nuxt-link>
            <nuxt-link class="pt-3 text-sm font-semibold text-accent-text" to="/catalog">
              {{ t("mega.all_models") }}
            </nuxt-link>
          </div>
          <!-- Vaziyat + Aksessuar -->
          <div class="flex flex-col gap-1">
            <span class="lf-label mb-2.5">{{ t("mega.occasion") }}</span>
            <nuxt-link v-for="l in occasions" :key="l.to" :class="linkClass" :to="l.to">{{ l.label }}</nuxt-link>
            <span class="lf-label mb-2.5 mt-[22px]">{{ t("mega.accessories") }}</span>
            <nuxt-link v-for="l in accessories" :key="l.to" :class="linkClass" :to="l.to">{{ l.label }}</nuxt-link>
          </div>
          <!-- O'lcham + Rang -->
          <div class="flex flex-col gap-3.5">
            <span class="lf-label">{{ t("mega.by_size") }}</span>
            <div class="grid grid-cols-4 gap-2">
              <nuxt-link
                v-for="s in sizes"
                :key="s"
                class="inline-flex h-11 items-center justify-center rounded-lf border border-line bg-card text-sm font-semibold text-ink transition-colors duration-lf hover:border-ink"
                :to="`/catalog?size=${s}`"
              >
                {{ s }}
              </nuxt-link>
            </div>
            <nuxt-link class="lf-link-accent self-start text-[13px]" to="/help#sizes">
              {{ t("mega.my_size") }}
            </nuxt-link>
            <span class="lf-label mt-2.5">{{ t("mega.by_color") }}</span>
            <div class="flex flex-col gap-1.5">
              <nuxt-link
                v-for="c in colors"
                :key="c.id"
                class="flex items-center gap-2.5 py-[5px] text-[15px] font-medium text-brand transition-colors duration-lf hover:text-accent-text"
                :to="c.to"
              >
                <span class="h-4 w-4 rounded-full" :style="{ background: c.hex }" />
                {{ c.label }}
              </nuxt-link>
            </div>
          </div>
          <!-- Material + Holat -->
          <div class="flex flex-col gap-1">
            <span class="lf-label mb-2.5">{{ t("mega.material") }}</span>
            <nuxt-link v-for="l in materials" :key="l.to" :class="linkClass" :to="l.to">{{ l.label }}</nuxt-link>
            <span class="lf-label mb-2.5 mt-[22px]">{{ t("mega.status") }}</span>
            <nuxt-link v-for="l in statuses" :key="l.to" :class="[linkClass, { '!text-sale': l.sale }]" :to="l.to">
              {{ l.label }}
            </nuxt-link>
          </div>
          <!-- Tavsiya -->
          <nuxt-link v-if="featured" class="flex flex-col gap-3.5 text-ink" :to="`/product/${featured.slug}`">
            <ui-photo
              class="h-[300px]"
              :src="featured.image.src"
              :caption="`${t('common.photo')} · ${t(`types.${featured.type}`)} № ${featured.modelNo || t('placeholders.model_no')}`"
            >
              <ui-badge v-if="featured.badge" :variant="featured.badge" />
            </ui-photo>
            <span class="flex items-baseline justify-between">
              <span class="serif text-[26px] font-medium">{{ t(`types.${featured.type}`) }}</span>
              <ui-model-no class="text-xl" :value="featured.modelNo" />
            </span>
            <span class="-mt-2 text-sm font-bold">
              <ui-price size="sm" :value="featured.price" />
              <span v-if="installmentOf(featured.price)" class="font-medium text-muted">
                · {{ t("mega.featured_nasiya", { n: formatNumber(installmentOf(featured.price)!) }) }}
              </span>
            </span>
          </nuxt-link>
        </div>
      </div>
      <!-- Sahifa ostida xira (panel ostidan boshlanadi, header ochiq qoladi) -->
      <button
        class="absolute inset-x-0 top-full h-[100vh] cursor-default bg-[var(--lf-overlay)]"
        type="button"
        tabindex="-1"
        :aria-label="t('common.close')"
        @click="emit('close')"
      />
    </div>
  </transition>
</template>
