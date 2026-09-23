export interface LfHttp {
  $get<T = any>(url: string, opts?: { params?: Record<string, any> }): Promise<T>
  $post<T = any>(url: string, body?: any): Promise<T>
  $put<T = any>(url: string, body?: any): Promise<T>
  $patch<T = any>(url: string, body?: any): Promise<T>
  $delete<T = any>(url: string): Promise<T>
}

declare module "#app" {
  interface NuxtApp {
    $http: LfHttp
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $http: LfHttp
  }
}

export {}
