<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
/** Mobil mahsulot sahifasida yopishqoq CTA ichida Telegram tugmasi bor — FAB yashiriladi */
const hideOnMobile = computed(() => route.path.startsWith("/product/"))
</script>

<template>
  <a
    :class="hideOnMobile ? 'hidden lg:inline-flex' : 'inline-flex'"
    class="fixed bottom-6 right-4 z-30 h-14 w-14 items-center justify-center rounded-full bg-brand text-accent shadow-[0_1px_3px_var(--lf-shadow)] transition-colors duration-lf hover:bg-brand-hover md:bottom-9 md:right-9 md:h-[60px] md:w-[60px]"
    target="_blank"
    rel="noopener"
    :href="config.public.telegramUrl"
    :aria-label="$t('common.write_telegram')"
  >
    <ui-icon name="telegram" :size="26" />
  </a>
</template>
