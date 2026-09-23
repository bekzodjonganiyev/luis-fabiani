import { CatalogParamsDTO } from "@/modules/catalog"
import type { ICatalogFacets, IProductList } from "@/modules/product"

export const useCatalogStore = defineStore("catalog", () => {
  const listState = createListState<IProductList>()
  const params = ref<CatalogParamsDTO>({ ...new CatalogParamsDTO() })
  const facets = ref<ICatalogFacets | null>(null)
  const pagination = ref<IPagination>({ current_page: 1, per_page: 12, total: 0, last_page: 1 })

  return { ...listState, params, facets, pagination }
})
