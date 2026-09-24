import { BusinessRequestFormDTO } from "@/modules/business"

/** SSR payload uchun oddiy obyekt (klass instansiyasi devalue'dan o'tmaydi) */
export const useBusinessStore = defineStore("business", () => {
  const form = ref({ ...new BusinessRequestFormDTO() })
  const errors = ref<Record<string, string>>({})
  const loading = ref(false)
  const sent = ref(false)

  const reset = () => {
    form.value = { ...new BusinessRequestFormDTO() }
    errors.value = {}
    sent.value = false
  }

  return { form, errors, loading, sent, reset }
})
