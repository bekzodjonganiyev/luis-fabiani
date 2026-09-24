<script setup lang="ts">
/** Yordam bo'limi: anchor (id) + raqam + sarlavha + ixtiyoriy kirish matni. */
defineProps<{ id: string; n: number; title: string; lead?: string }>()
</script>

<template>
  <section
    :id="id"
    class="flex scroll-mt-28 flex-col gap-5 border-t border-line pt-8 lg:gap-7 lg:pt-12"
    :aria-labelledby="`${id}-title`"
  >
    <div class="flex flex-col gap-2.5">
      <span class="serif text-2xl italic leading-none text-accent-text">{{ String(n).padStart(2, "0") }}</span>
      <h2 :id="`${id}-title`" class="serif m-0 text-[30px] font-medium leading-[1.05] lg:text-[40px]">{{ title }}</h2>
      <p v-if="lead" class="m-0 max-w-[62ch] text-sm leading-[1.6] text-muted lg:text-[15px]">{{ lead }}</p>
    </div>
    <slot />
  </section>
</template>
