import type { IAddon, ICatalogResponse, IProduct } from "@/modules/product"

export const useProductApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/products"

  const getProducts = (params?: Record<string, any>): Promise<ICatalogResponse> => $http.$get(BASE_URL, { params })
  const getProduct = (slug: string): AsyncResponseContainer<IProduct> => $http.$get(`${BASE_URL}/${slug}`)
  const getAddons = (): AsyncResponseContainer<IAddon[]> => $http.$get("/addons")

  return { getProducts, getProduct, getAddons }
}
