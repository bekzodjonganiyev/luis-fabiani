import { OrderTrackFormDTO, type IOrderTrack } from "@/modules/order-track"

export const useOrderTrackStore = defineStore("order-track", () => {
  const form = ref({ ...new OrderTrackFormDTO() })
  const errors = ref<Record<string, string>>({})
  const loading = ref(false)
  const result = ref<IOrderTrack | null>(null)

  const reset = () => {
    errors.value = {}
    result.value = null
  }

  return { form, errors, loading, result, reset }
})
