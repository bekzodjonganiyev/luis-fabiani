interface IPagination {
  current_page: number
  per_page: number
  total: number
  last_page: number
}

interface IResponse<T> {
  status: string
  message?: string
  data: T
  pagination?: IPagination
}

type ResponseContainer<T = any> = IResponse<T>
type AsyncResponseContainer<T = any> = Promise<IResponse<T>>
