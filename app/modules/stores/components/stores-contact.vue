<script setup lang="ts">
import { NuxtLink } from "#components"

/** Kontakt (tuzilmadagi «Kontakt»): telefon, messenjerlar, optom bo'lim — /stores#contact. */
const { t } = useI18n()
const config = useRuntimeConfig()

const items = computed(() => [
  { title: t("stores.contact_phone"), value: t("placeholders.phone"), note: t("footer.hours"), href: "tel:+998" },
  {
    title: "Telegram",
    value: t("stores.contact_telegram"),
    note: t("stores.contact_telegram_note"),
    href: config.public.telegramUrl,
    external: true
  },
  {
    title: t("stores.contact_social"),
    value: "Instagram · YouTube",
    note: t("stores.contact_social_note"),
    href: config.public.instagramUrl,
    external: true
  },
  {
    title: t("stores.contact_business"),
    value: t("footer.partnership"),
    note: t("stores.contact_business_note"),
    to: "/business#request"
  }
])
</script>

<template>
  <section id="contact" class="scroll-mt-24 border-t border-line bg-soft" :aria-label="t('stores.contact_title')">
    <div class="lf-container flex flex-col gap-6 py-10 lg:gap-9 lg:py-16">
      <ui-section-title :title="t('stores.contact_title')" size="md">
        <template #aside>
          <p class="m-0 max-w-[40ch] text-sm leading-[1.55] text-muted lg:text-[15px]">
            {{ t("stores.contact_text") }}
          </p>
        </template>
      </ui-section-title>
      <ul class="m-0 grid list-none grid-cols-1 gap-px border border-line bg-line p-0 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="item in items" :key="item.title" class="bg-bg">
          <component
            :is="item.to ? NuxtLink : 'a'"
            class="group flex h-full flex-col gap-2 p-5 text-ink transition-colors duration-lf hover:bg-card lg:p-6"
            :to="item.to"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener' : undefined"
          >
            <span class="lf-label">{{ item.title }}</span>
            <span class="serif text-2xl font-medium leading-tight group-hover:text-accent-text">{{ item.value }}</span>
            <span class="text-[13px] leading-normal text-muted">{{ item.note }}</span>
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>
