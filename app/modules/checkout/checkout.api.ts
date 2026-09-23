import type { IOrderPayload, IOrderResult } from "@/modules/checkout"

export const useCheckoutApi = () => {
  const { $http } = useNuxtApp()

  const sendCode = (phone: string): AsyncResponseContainer<{ sent: boolean }> =>
    $http.$post("/otp", { phone, action: "send" })
  const verifyCode = (phone: string, code: string): AsyncResponseContainer<{ verified: boolean }> =>
    $http.$post("/otp", { phone, code, action: "verify" })
  const applyPromo = (code: string): AsyncResponseContainer<{ discount: number }> => $http.$post("/promo", { code })
  const createOrder = (payload: IOrderPayload): AsyncResponseContainer<IOrderResult> => $http.$post("/orders", payload)

  return { sendCode, verifyCode, applyPromo, createOrder }
}
