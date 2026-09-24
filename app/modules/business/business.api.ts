import type { IBusinessRequestPayload, IBusinessRequestResult } from "@/modules/business"

export const useBusinessApi = () => {
  const { $http } = useNuxtApp()

  const createRequest = (payload: IBusinessRequestPayload): AsyncResponseContainer<IBusinessRequestResult> =>
    $http.$post("/business-requests", payload)

  return { createRequest }
}
