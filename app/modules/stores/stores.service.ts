import { TASHKENT_UTC_OFFSET, type StoreSchedule } from "./stores.model"

export const isOpenAt = (schedule: StoreSchedule, date: Date) => {
  const local = new Date(date.getTime() + TASHKENT_UTC_OFFSET * 3600_000)
  const hour = local.getUTCHours() + local.getUTCMinutes() / 60
  return schedule.days.includes(local.getUTCDay()) && hour >= schedule.open && hour < schedule.close
}

/** «Hozir ochiq» — faqat klientda hisoblanadi (SSR va keshda eskirmasin); serverda `null`. */
export const useOpenNow = (schedule: StoreSchedule) => {
  const open = ref<boolean | null>(null)
  const update = () => (open.value = isOpenAt(schedule, new Date()))
  onMounted(update)
  useIntervalFn(update, 60_000)
  return open
}
