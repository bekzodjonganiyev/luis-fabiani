import { useCheckoutApi, useCheckoutStore, type IOrderPayload } from "@/modules/checkout"
import { useCartStore } from "@/modules/cart"

export const useCheckoutService = () => {
  const api = useCheckoutApi()
  const store = useCheckoutStore()
  const cart = useCartStore()
  const { t } = useI18n()

  const form = computed(() => store.form)
  const setError = (k: string, msg?: string) => {
    if (msg) store.errors = { ...store.errors, [k]: msg }
    else store.errors = Object.fromEntries(Object.entries(store.errors).filter(([key]) => key !== k))
  }

  // 1 · Kontakt
  const sendCode = async () => {
    setError("name", form.value.name.trim() ? undefined : t("checkout.name_error"))
    setError("phone", isPhoneComplete(form.value.phone) ? undefined : t("checkout.phone_error"))
    if (store.errors.name || store.errors.phone) return
    store.loading = true
    try {
      await api.sendCode(form.value.phone)
      form.value.codeSent = true
    } catch {
      setError("phone", t("errors.generic"))
    } finally {
      store.loading = false
    }
  }

  const verifyCode = async () => {
    if (!form.value.code.trim()) return setError("code", t("checkout.code_error"))
    store.loading = true
    try {
      await api.verifyCode(form.value.phone, form.value.code.trim())
      form.value.contactConfirmed = true
      setError("code")
      store.step = 2
    } catch {
      setError("code", t("checkout.code_error"))
    } finally {
      store.loading = false
    }
  }

  const editContact = () => {
    form.value.contactConfirmed = false
    form.value.codeSent = false
    form.value.code = ""
    store.step = 1
  }

  // 2 · Yetkazish
  const toPayment = () => {
    const f = form.value
    setError("address", f.delivery !== "pickup" && !f.address.trim() ? t("checkout.address_error") : undefined)
    setError("region", f.delivery === "regions" && !f.region ? t("checkout.address_error") : undefined)
    if (store.errors.address || store.errors.region) return
    store.step = 3
  }

  // 3 · To'lov + tasdiqlash
  const applyPromo = async () => {
    store.promoError = ""
    if (!form.value.promo.trim()) return
    try {
      await api.applyPromo(form.value.promo.trim())
      form.value.promoApplied = true
    } catch {
      form.value.promoApplied = false
      store.promoError = t("checkout.promo_invalid")
    }
  }

  const submit = async () => {
    if (!form.value.contactConfirmed) return (store.step = 1)
    if (store.step < 3) return toPayment()
    const f = form.value
    const payment = f.payment
    if (!payment) return setError("payment", t("checkout.payment_error"))
    setError("payment")
    const payload: IOrderPayload = {
      contact: { name: f.name.trim(), phone: f.phone.replace(/\s/g, "") },
      delivery: {
        method: f.delivery,
        address: f.delivery !== "pickup" ? f.address : undefined,
        flat: f.delivery !== "pickup" ? f.flat : undefined,
        region: f.delivery === "regions" ? f.region || undefined : undefined,
        timeSlot: f.delivery === "courier" ? f.timeSlot || undefined : undefined,
        pickupPoint: f.delivery === "pickup" ? f.pickupPoint : undefined
      },
      payment,
      promo: f.promoApplied ? f.promo : undefined,
      items: cart.items.map((i) => ({ key: i.key, qty: i.qty }))
    }
    store.loading = true
    try {
      const { data } = await api.createOrder(payload)
      store.order = data
      cart.clear()
    } catch {
      setError("submit", t("errors.generic"))
    } finally {
      store.loading = false
    }
  }

  return { sendCode, verifyCode, editContact, toPayment, applyPromo, submit }
}
