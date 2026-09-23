<script setup lang="ts">
import { useWishlistStore } from "@/modules/wishlist"

const props = withDefaults(defineProps<{ slug: string; size?: number; position?: "right" | "left" }>(), {
  size: 40,
  position: "right"
})
const wishlist = useWishlistStore()
const active = computed(() => wishlist.has(props.slug))
</script>

<template>
  <button
    class="bg-card/90 absolute top-3 z-[2] inline-flex items-center justify-center rounded-full text-ink transition-colors duration-lf hover:bg-card"
    type="button"
    :class="position === 'right' ? 'right-3' : 'left-3'"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :aria-pressed="active"
    :aria-label="active ? $t('catalog.remove_from_wishlist') : $t('catalog.add_to_wishlist')"
    @click.prevent.stop="wishlist.toggle(slug)"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linejoin="round"
      :fill="active ? 'currentColor' : 'none'"
    >
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </svg>
  </button>
</template>
