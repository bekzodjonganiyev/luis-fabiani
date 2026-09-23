import { CheckoutFormDTO, type IOrderResult } from "@/modules/checkout"

export const useCheckoutStore = defineStore("checkout", () => {
  const form = ref(new CheckoutFormDTO())
  /** 1 — kontakt, 2 — yetkazish, 3 — to'lov */
  const step = ref<1 | 2 | 3>(1)
  const errors = ref<Record<string, string>>({})
  const loading = ref(false)
  const promoError = ref("")
  const order = ref<IOrderResult | null>(null)

  const reset = () => {
    form.value = new CheckoutFormDTO()
    step.value = 1
    errors.value = {}
    promoError.value = ""
    order.value = null
  }

  return { form, step, errors, loading, promoError, order, reset }
})
