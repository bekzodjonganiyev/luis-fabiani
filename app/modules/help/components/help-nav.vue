<script setup lang="ts">
import { HELP_SECTIONS, type HelpSectionId } from "../help.model"

/** Bo'limlar navigatsiyasi: desktop — chap sticky ro'yxat, mobil — gorizontal chiplar. Faol bo'lim scroll bo'yicha. */
defineProps<{ mobile?: boolean }>()
const { t } = useI18n()

const items = computed(() => HELP_SECTIONS.map((id) => ({ id, label: t(`help.nav.${id}`) })))
const active = ref<HelpSectionId>("sizes")

const targets = ref<HTMLElement[]>([])
onMounted(() => {
  targets.value = HELP_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
})
useIntersectionObserver(
  targets,
  (entries) => {
    const hit = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
    if (hit) active.value = hit.target.id as HelpSectionId
  },
  { rootMargin: "-20% 0px -65% 0px" }
)
</script>

<template>
  <nav v-if="mobile" class="lf-scroll-x px-4 py-3" :aria-label="t('help.nav_label')">
    <a
      v-for="item in items"
      :key="item.id"
      class="inline-flex h-9 shrink-0 items-center rounded-lf border px-3.5 text-[13px] font-semibold transition-colors duration-lf"
      :class="active === item.id ? 'border-brand bg-brand text-on-dark' : 'border-line bg-card text-ink'"
      :href="`#${item.id}`"
      :aria-current="active === item.id ? 'true' : undefined"
    >
      {{ item.label }}
    </a>
  </nav>
  <nav v-else class="flex flex-col" :aria-label="t('help.nav_label')">
    <a
      v-for="item in items"
      :key="item.id"
      class="flex items-center justify-between border-b border-line py-3.5 text-[15px] font-medium transition-colors duration-lf hover:text-accent-text"
      :class="active === item.id ? 'font-semibold text-brand' : 'text-muted'"
      :href="`#${item.id}`"
      :aria-current="active === item.id ? 'true' : undefined"
    >
      {{ item.label }}
      <ui-icon v-if="active === item.id" name="arrow-right" :size="14" :stroke-width="2" />
    </a>
  </nav>
</template>
