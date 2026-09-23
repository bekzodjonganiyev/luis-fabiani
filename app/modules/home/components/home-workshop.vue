<script setup lang="ts">
const { t, tm, rt } = useI18n()
const steps = computed(() => (tm("home.steps") as any[]).map((s) => ({ title: rt(s.title), text: rt(s.text) })))
</script>

<template>
  <section class="mt-11 bg-soft text-ink lg:mt-20">
    <div class="mx-auto grid max-w-[1440px] grid-cols-1 lg:min-h-[860px] lg:grid-cols-12 lg:gap-x-6 lg:pr-[60px]">
      <ui-photo
        class="flex h-[240px] items-center justify-center !rounded-none lg:col-span-6 lg:h-auto"
        dark
        src="/images/leather_video.jpg"
        :caption="t('home.workshop_video')"
      >
        <button
          class="inline-flex h-16 w-16 items-center justify-center rounded-full border text-on-dark transition-colors duration-lf hover:bg-[var(--lf-overlay)] lg:h-[88px] lg:w-[88px]"
          type="button"
          style="
            border-color: color-mix(in srgb, var(--lf-on-dark) 70%, transparent);
            background: color-mix(in srgb, var(--lf-overlay) 65%, transparent);
          "
          :aria-label="t('home.workshop_play')"
        >
          <ui-icon name="play" :size="28" />
        </button>
      </ui-photo>

      <div
        class="flex flex-col gap-5 px-5 pb-8 pt-7 lg:col-span-6 lg:justify-center lg:gap-9 lg:py-[60px] lg:pl-6 lg:pr-0"
      >
        <div class="flex flex-col gap-[18px]">
          <h2 class="serif m-0 text-4xl font-medium leading-[1.04] lg:text-[56px]" style="text-wrap: balance">
            {{ t("home.workshop_title") }}
            <em class="font-normal text-accent-text">{{ t("home.workshop_title_em") }}</em>
          </h2>
          <p class="text-ink/85 m-0 hidden max-w-[46ch] text-[17px] leading-relaxed lg:block">
            {{ t("home.workshop_text") }}
          </p>
        </div>
        <ol
          class="m-0 grid list-none grid-cols-3 gap-x-2.5 gap-y-3.5 border-t border-line p-0 pt-[18px] lg:gap-x-5 lg:gap-y-[22px] lg:pt-7"
        >
          <li v-for="(s, i) in steps" :key="s.title" class="flex flex-col gap-1 lg:gap-1.5">
            <span class="serif text-2xl italic leading-none text-accent-text lg:text-[30px]">{{ i + 1 }}</span>
            <span class="text-[13px] font-semibold lg:text-[15px]">{{ s.title }}</span>
            <span class="hidden text-[13px] leading-[1.45] text-muted lg:block">{{ s.text }}</span>
          </li>
        </ol>
        <div>
          <ui-button variant="bone" to="/brand/workshop">{{ t("home.workshop_cta") }}</ui-button>
        </div>
      </div>
    </div>
  </section>
</template>
