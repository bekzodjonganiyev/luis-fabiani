<script setup lang="ts">
/** Savol-javob — akkordeon. Savollar ro'yxati mijozdan to'ldiriladi. */
const { tm, rt } = useI18n()
const faq = computed(() => (tm("help.faq") as any[]).map((f, i) => ({ key: `q${i}`, title: rt(f.q), answer: rt(f.a) })))
</script>

<template>
  <div class="border-t border-line">
    <ui-collapse :items="faq" :default-expanded="['q0']">
      <template v-for="f in faq" :key="f.key" #[f.key]>
        <p class="m-0 max-w-[68ch] pb-5 text-sm leading-[1.6] text-muted">{{ f.answer }}</p>
      </template>
    </ui-collapse>
  </div>
</template>
