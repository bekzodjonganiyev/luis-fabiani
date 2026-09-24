<script setup lang="ts">
const { tm, rt } = useI18n()
const events = computed(() =>
  (tm("brand.timeline") as any[]).map((e) => ({
    year: rt(e.year),
    title: rt(e.title),
    text: rt(e.text),
    photo: rt(e.photo),
    accent: Boolean(e.accent)
  }))
)
</script>

<template>
  <section class="lf-container pb-12 pt-10 lg:pb-14 lg:pt-16">
    <ol class="m-0 list-none border-b border-line p-0">
      <li
        v-for="(e, i) in events"
        :key="i"
        class="grid grid-cols-[28px_minmax(0,1fr)] items-start gap-x-3 gap-y-2 border-t border-line py-5 lg:grid-cols-[180px_40px_minmax(0,1fr)_320px] lg:gap-x-6 lg:py-[22px]"
      >
        <span
          class="serif tabular col-start-2 text-[30px] font-medium leading-none lg:col-start-1 lg:row-start-1 lg:text-[40px]"
          :class="e.accent ? 'text-accent-text' : 'text-brand'"
        >
          {{ e.year }}
        </span>
        <span
          class="col-start-1 row-span-2 row-start-1 flex justify-center pt-2.5 lg:col-start-2 lg:row-span-1 lg:pt-3"
          aria-hidden="true"
        >
          <span
            class="h-3 w-3 rounded-full"
            :class="e.accent ? 'bg-accent' : 'bg-brand'"
            :style="{
              boxShadow: `0 0 0 4px var(--lf-bg), 0 0 0 5px var(${e.accent ? '--lf-accent' : '--lf-brand'})`
            }"
          />
        </span>
        <div class="col-start-2 flex flex-col gap-1.5 lg:col-start-3 lg:row-start-1 lg:pt-1.5">
          <h2 class="serif m-0 text-2xl font-medium leading-[1.1] lg:text-[28px]">{{ e.title }}</h2>
          <p class="m-0 max-w-[60ch] text-sm leading-[1.55] text-muted">{{ e.text }}</p>
        </div>
        <ui-photo
          class="col-start-2 mt-2 h-[120px] lg:col-start-4 lg:row-start-1 lg:mt-0 lg:h-24"
          src="/images/paper.jpg"
          :caption="e.photo"
        />
      </li>
    </ol>
  </section>
</template>
