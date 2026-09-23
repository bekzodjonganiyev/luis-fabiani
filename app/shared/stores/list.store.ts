export const createListParams = <T = Record<string, any>>(params: T) => {
  return ref({
    page: 1,
    per_page: 12,
    total: 0,
    ...params
  })
}

export const createListState = <T>() => {
  const loading = ref(false)
  const items = ref<T[]>([]) as Ref<T[]>

  return { loading, items }
}
