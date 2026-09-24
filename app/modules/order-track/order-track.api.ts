import type { IOrderTrack } from "@/modules/order-track"

export const useOrderTrackApi = () => {
  const { $http } = useNuxtApp()

  const track = (params: { phone: string; number: string }): AsyncResponseContainer<IOrderTrack> =>
    $http.$get("/orders/track", { params })

  return { track }
}
