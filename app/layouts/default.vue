<script setup lang="ts">
import { LandingHeader, LandingFooter, TelegramFab, PaletteSwitcher } from "@/widgets/layout"
import { CartDrawer } from "@/modules/cart"
</script>

<template>
  <div class="flex min-h-dvh flex-col overflow-x-clip bg-bg text-ink">
    <landing-header />

    <main class="grow">
      <slot />
    </main>

    <landing-footer />

    <telegram-fab />
    <client-only>
      <cart-drawer />
      <palette-switcher />
    </client-only>
  </div>
</template>
