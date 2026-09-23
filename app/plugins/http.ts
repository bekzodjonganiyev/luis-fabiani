/**
 * $http — tiif-online dagi axios wrapper bilan bir xil interfeys ($get/$post/...), lekin Nuxt $fetch ustida:
 * SSR da ichki /api yo'llariga to'g'ridan-to'g'ri murojaat qiladi, cookie/Accept-Language ni o'tkazadi.
 */
import type { LfHttp } from "~/shared/types/http"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const fetcher = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    onRequest({ options }) {
      const locale = (nuxtApp.$i18n as any)?.locale?.value || "uz"
      const headers = new Headers(options.headers as HeadersInit)
      headers.set("Accept-Language", locale)
      headers.set("Accept", "application/json")
      options.headers = headers
    }
  })

  const http: LfHttp = {
    $get: (url, opts) => fetcher(url, { method: "GET", query: opts?.params }) as Promise<any>,
    $post: (url, body) => fetcher(url, { method: "POST", body }) as Promise<any>,
    $put: (url, body) => fetcher(url, { method: "PUT", body }) as Promise<any>,
    $patch: (url, body) => fetcher(url, { method: "PATCH", body }) as Promise<any>,
    $delete: (url) => fetcher(url, { method: "DELETE" }) as Promise<any>
  }

  return { provide: { http } }
})
