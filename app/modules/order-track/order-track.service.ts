import { useOrderTrackApi, useOrderTrackStore } from "@/modules/order-track"

export const useOrderTrackService = () => {
  const api = useOrderTrackApi()
  const store = useOrderTrackStore()
  const { t } = useI18n()

  const validate = () => {
    const f = store.form
    const errors: Record<string, string> = {}
    if (!isPhoneComplete(f.phone)) errors.phone = t("checkout.phone_error")
    if (!f.number.trim()) errors.number = t("track.number_error")
    store.errors = errors
    return !Object.keys(errors).length
  }

  const submit = async () => {
    if (!validate()) return
    store.loading = true
    store.result = null
    try {
      const res = await api.track({ phone: store.form.phone, number: store.form.number.trim().toUpperCase() })
      store.result = res.data
    } catch (e: any) {
      store.errors = { number: e?.statusCode === 404 ? t("track.not_found") : t("errors.generic") }
    } finally {
      store.loading = false
    }
  }

  return { submit }
}
