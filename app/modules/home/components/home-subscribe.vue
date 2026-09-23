<script setup lang="ts">
const { t } = useI18n()
const { $http } = useNuxtApp()

const phone = ref("+998 ")
const state = ref<"idle" | "loading" | "done" | "error">("idle")

const submit = async () => {
  if (!isPhoneComplete(phone.value)) return (state.value = "error")
  state.value = "loading"
  try {
    await $http.$post("/subscribe", { phone: phone.value.replace(/\s/g, "") })
    state.value = "done"
  } catch {
    state.value = "error"
  }
}
</script>

<template>
  <section class="border-b border-line">
    <div
      class="lf-container flex flex-col gap-3.5 py-10 lg:min-h-[300px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-0"
    >
      <div class="flex flex-col gap-2">
        <h2 class="serif m-0 text-[30px] font-medium leading-[1.05] lg:text-[40px]">{{ t("home.subscribe_title") }}</h2>
        <p class="m-0 text-sm text-muted lg:text-[15px]">
          <span class="lg:hidden">{{ t("home.subscribe_text_short") }}</span>
          <span class="hidden lg:inline">{{ t("home.subscribe_text") }}</span>
        </p>
      </div>
      <form v-if="state !== 'done'" class="flex flex-col gap-2.5 lg:flex-row lg:items-end" @submit.prevent="submit">
        <ui-input
          v-model="phone"
          class="lg:w-[300px]"
          type="tel"
          inputmode="tel"
          autocomplete="tel"
          :label="t('home.subscribe_label')"
          :error="state === 'error' ? t('home.subscribe_error') : undefined"
          @update:model-value="state = 'idle'"
        />
        <ui-button type="submit" :loading="state === 'loading'">{{ t("home.subscribe_cta") }}</ui-button>
      </form>
      <p v-else class="m-0 max-w-[40ch] text-[15px] font-medium text-success" role="status">
        {{ t("home.subscribe_done") }}
      </p>
    </div>
  </section>
</template>
