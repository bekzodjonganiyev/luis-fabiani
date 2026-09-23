<script setup lang="ts">
/** Bo'lim sarlavhasi: H2 Cormorant 40–56px + ixtiyoriy o'ng tomonda havola/izoh. */
withDefaults(defineProps<{ title: string; tag?: string; size?: "md" | "lg" }>(), { tag: "h2", size: "lg" })
</script>

<template>
  <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div class="flex flex-col gap-2">
      <component
        :is="tag"
        class="serif m-0 font-medium leading-[1.05]"
        :class="size === 'lg' ? 'text-[34px] md:text-[44px] xl:text-[52px]' : 'text-[30px] md:text-[40px]'"
      >
        {{ title }}
      </component>
      <slot name="sub" />
    </div>
    <slot name="aside" />
  </div>
</template>
