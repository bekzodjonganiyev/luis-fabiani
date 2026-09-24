<script setup lang="ts">
/** Yetkazib berish va to'lov: usullar jadvali, to'lov turlari, Uzum Nasiya (#nasiya — promo band shu yerga). */
const { t } = useI18n()

const methods = computed(() => [
  {
    title: t("checkout.delivery_courier"),
    time: t("common.tomorrow"),
    price: t("common.free"),
    note: t("help.delivery_courier_note")
  },
  {
    title: t("checkout.delivery_regions"),
    time: t("common.days_2_4"),
    price: t("placeholders.regions_price"),
    note: t("help.delivery_regions_note")
  },
  {
    title: t("checkout.delivery_pickup"),
    time: t("help.delivery_same_day"),
    price: t("common.free"),
    note: t("checkout.delivery_pickup_note")
  }
])
const payments = computed(() => [
  { title: t("checkout.payments.payme"), text: t("help.pay_cards") },
  { title: t("checkout.payments.click"), text: t("help.pay_cards") },
  { title: t("checkout.payments.uzum"), text: t("help.pay_uzum") },
  { title: t("checkout.payments.cash"), text: t("help.pay_cash") }
])
</script>

<template>
  <div class="flex flex-col gap-6 lg:gap-8">
    <div class="overflow-x-auto">
      <table class="w-full min-w-[520px] border-collapse border border-line bg-card text-sm">
        <thead>
          <tr class="bg-photo-bg text-left">
            <th class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
              {{ t("help.col_method") }}
            </th>
            <th class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
              {{ t("help.col_time") }}
            </th>
            <th class="px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-muted">
              {{ t("help.col_price") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in methods" :key="m.title" class="border-t border-line align-top">
            <td class="px-3.5 py-3">
              <span class="block font-semibold">{{ m.title }}</span>
              <span class="mt-0.5 block text-xs leading-normal text-muted">{{ m.note }}</span>
            </td>
            <td class="px-3.5 py-3">{{ m.time }}</td>
            <td class="tabular px-3.5 py-3 font-semibold">{{ m.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex flex-col gap-3">
      <span class="lf-label">{{ t("help.payment_title") }}</span>
      <ul class="m-0 grid list-none grid-cols-2 gap-2.5 p-0 lg:grid-cols-4">
        <li v-for="p in payments" :key="p.title" class="flex flex-col gap-1 border border-line bg-card p-4">
          <span class="text-[15px] font-semibold">{{ p.title }}</span>
          <span class="text-xs leading-normal text-muted">{{ p.text }}</span>
        </li>
      </ul>
      <p class="m-0 text-xs text-muted">{{ t("checkout.payment_note") }}</p>
    </div>

    <div
      id="nasiya"
      class="flex scroll-mt-28 flex-col gap-4 bg-soft p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-7"
    >
      <div class="flex flex-col gap-2">
        <span class="lf-label">{{ t("checkout.payments.nasiya") }}</span>
        <span class="serif text-[26px] font-medium leading-[1.1] lg:text-[32px]">{{ t("help.nasiya_title") }}</span>
        <p class="m-0 max-w-[58ch] text-sm leading-[1.6] text-muted">{{ t("help.nasiya_text") }}</p>
      </div>
      <ol class="m-0 flex shrink-0 list-none flex-col gap-2 p-0 text-sm lg:w-[300px]">
        <li v-for="(s, i) in ['nasiya_step_1', 'nasiya_step_2', 'nasiya_step_3']" :key="s" class="flex gap-3">
          <span class="serif w-5 shrink-0 text-xl italic leading-none text-accent-text">{{ i + 1 }}</span>
          <span class="leading-normal">{{ t(`help.${s}`) }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>
