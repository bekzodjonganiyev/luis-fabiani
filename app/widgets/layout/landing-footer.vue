<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const { footer } = useSiteLinks()
const { logo } = usePalette()

const payments = ["Payme", "Click", "Uzum", "Uzcard", "Humo", "Visa", "Mastercard"]
const socials = computed(() => [
  { label: "Telegram", icon: "telegram", href: config.public.telegramUrl },
  { label: "Instagram", icon: "instagram", href: config.public.instagramUrl },
  { label: "YouTube", icon: "youtube", href: config.public.youtubeUrl }
] as const)
const columns = computed(() => [
  { key: "contact", title: t("footer.contact"), links: footer.value.contact },
  { key: "service", title: t("footer.service"), links: footer.value.service },
  { key: "brand", title: t("footer.brand"), links: footer.value.brand },
  { key: "business", title: t("footer.business"), links: footer.value.business }
])
</script>

<template>
  <footer class="bg-soft text-ink">
    <div class="lf-container flex flex-col gap-7 pb-7 pt-9 md:gap-10 md:pb-8 md:pt-16">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
        <div class="flex flex-col gap-4">
          <img class="block h-16 max-w-min md:h-[84px]" loading="lazy" :src="logo" :alt="t('nav.logo_alt')" />
          <p class="m-0 max-w-[30ch] text-sm leading-relaxed text-muted">{{ t("footer.tagline") }}</p>
          <div class="mt-2 flex flex-wrap gap-3">
            <ui-icon-button
              v-for="s in socials"
              :key="s.label"
              class="hover:text-accent-text"
              :icon="s.icon"
              :label="s.label"
              :href="s.href"
              bordered
              target="_blank"
              rel="noopener"
            />
          </div>
        </div>

        <div v-for="col in columns" :key="col.key" class="flex flex-col gap-3">
          <span class="lf-label mb-1.5">{{ col.title }}</span>
          <template v-for="l in col.links" :key="l.label">
            <nuxt-link
              v-if="l.to"
              class="text-sm font-medium leading-snug text-brand opacity-90 transition-colors duration-lf hover:text-accent-text hover:opacity-100"
              :to="l.to"
            >
              {{ l.label }}
            </nuxt-link>
            <a
              v-else-if="l.href"
              class="text-sm font-medium leading-snug text-brand opacity-90 transition-colors duration-lf hover:text-accent-text hover:opacity-100"
              :href="l.href"
            >
              {{ l.label }}
            </a>
            <span v-else class="text-sm font-medium leading-snug text-brand opacity-90">{{ l.label }}</span>
          </template>
        </div>
      </div>

      <div class="stitch flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
          <nuxt-link class="text-muted hover:text-ink" to="/legal/offer">{{ t("footer.offer") }}</nuxt-link>
          <nuxt-link class="text-muted hover:text-ink" to="/legal/privacy">{{ t("footer.privacy") }}</nuxt-link>
          <nuxt-link class="text-muted hover:text-ink" to="/legal/payment">
            {{ t("footer.payment_security") }}
          </nuxt-link>
          <span>{{ t("footer.copyright") }}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="p in payments"
            :key="p"
            class="rounded-lf-badge border border-[color-mix(in_srgb,var(--lf-line)_80%,var(--lf-muted))] px-2.5 py-[7px] text-[11px] font-semibold uppercase leading-none tracking-[.08em] text-muted"
          >
            {{ p }}
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
