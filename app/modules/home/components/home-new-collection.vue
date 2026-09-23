<script setup lang="ts">
import { ProductCard, type IProductList } from "@/modules/product"

const props = defineProps<{ items: IProductList[] }>()
const { t } = useI18n()

const chips = computed(() => [
  { value: "all", label: t("common.all") },
  ...["oksford", "derbi", "loafer", "chelsi"].map((x) => ({ value: x, label: t(`types.${x}`) }))
])
const chip = ref("all")
const visible = computed(() => (chip.value === "all" ? props.items : props.items.filter((p) => p.type === chip.value)))

const scroller = useTemplateRef<HTMLElement>("scroller")
const scrollBy = (dir: 1 | -1) =>
  scroller.value?.scrollBy({ left: dir * (scroller.value.clientWidth * 0.8), behavior: "smooth" })
</script>

<template>
  <section class="flex flex-col gap-[18px] pt-11 lg:gap-9 lg:pt-20">
    <div class="lf-container">
      <ui-section-title :title="t('home.new_title')">
        <template #sub>
          <p class="serif m-0 hidden text-[22px] italic text-muted lg:block">{{ t("home.new_sub") }}</p>
        </template>
        <template #aside>
          <div class="flex items-center gap-3">
            <nuxt-link class="lf-link text-[13px] lg:text-[15px]" to="/catalog?badge=new">
              <span class="lg:hidden">{{ t("common.all") }}</span>
              <span class="hidden lg:inline">{{ t("common.show_all") }}</span>
            </nuxt-link>
            <ui-icon-button
              class="hidden lg:inline-flex"
              icon="arrow-left"
              bordered
              :label="t('common.prev')"
              :icon-size="18"
              @click="scrollBy(-1)"
            />
            <ui-icon-button
              class="hidden !border-ink lg:inline-flex"
              icon="arrow-right"
              bordered
              :label="t('common.next')"
              :icon-size="18"
              @click="scrollBy(1)"
            />
          </div>
        </template>
      </ui-section-title>
    </div>

    <!-- Mobil chiplar -->
    <div class="lf-scroll-x px-4 lg:hidden">
      <button
        v-for="c in chips"
        :key="c.value"
        class="h-10 shrink-0 rounded-lf border px-3.5 text-[13px] font-semibold transition-colors duration-lf"
        type="button"
        :class="chip === c.value ? 'border-brand bg-brand text-on-dark' : 'border-ink bg-card text-ink'"
        :aria-pressed="chip === c.value"
        @click="chip = c.value"
      >
        {{ c.label }}
      </button>
    </div>

    <div class="lf-container">
      <div class="grid grid-cols-2 gap-x-2.5 gap-y-5 lg:hidden">
        <product-card v-for="p in visible.slice(0, 4)" :key="p.slug" image-height="h-[220px]" compact :product="p" />
      </div>
      <div ref="scroller" class="lf-scroll-x hidden snap-x lg:grid lg:grid-cols-4 lg:gap-6">
        <product-card v-for="p in items.slice(0, 4)" :key="p.slug" class="snap-start" :product="p" />
      </div>
    </div>
  </section>
</template>
