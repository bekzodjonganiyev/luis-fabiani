import { useBusinessApi, useBusinessStore, type BusinessInterest } from "@/modules/business"

/** Telefon (+998 …) yoki Telegram (@username) */
const isContactValid = (v: string) => isPhoneComplete(v) || /^@?[a-zA-Z][\w]{4,31}$/.test(v.trim())

export const useBusinessService = () => {
  const api = useBusinessApi()
  const store = useBusinessStore()
  const { t } = useI18n()

  const form = computed(() => store.form)

  /** Yo'nalish kartasi / ?interest= / #pricelist dan formani oldindan to'ldirish */
  const prefill = (interest?: BusinessInterest, pricelist?: boolean) => {
    if (interest) form.value.interest = interest
    if (pricelist) form.value.pricelist = true
  }

  const validate = () => {
    const f = form.value
    const errors: Record<string, string> = {}
    if (!f.company.trim()) errors.company = t("business.form.company_error")
    if (!f.location.trim()) errors.location = t("business.form.location_error")
    if (!f.name.trim()) errors.name = t("business.form.name_error")
    if (!isContactValid(f.contact)) errors.contact = t("business.form.contact_error")
    store.errors = errors
    return !Object.keys(errors).length
  }

  const clearError = (k: string) => {
    if (store.errors[k]) store.errors = Object.fromEntries(Object.entries(store.errors).filter(([key]) => key !== k))
  }

  const submit = async () => {
    if (!validate()) return
    const f = form.value
    store.loading = true
    try {
      await api.createRequest({
        company: f.company.trim(),
        location: f.location.trim(),
        interest: f.interest,
        volume: f.volume.trim() || undefined,
        name: f.name.trim(),
        contact: isPhoneComplete(f.contact) ? f.contact.replace(/\s/g, "") : f.contact.trim(),
        message: f.message.trim() || undefined,
        pricelist: f.pricelist
      })
      store.sent = true
    } catch {
      store.errors = { ...store.errors, submit: t("errors.generic") }
    } finally {
      store.loading = false
    }
  }

  return { prefill, submit, clearError }
}
