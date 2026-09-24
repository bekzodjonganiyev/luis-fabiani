export type BusinessInterest = "wholesale" | "dealers" | "private-label"
export const BUSINESS_INTERESTS: BusinessInterest[] = ["wholesale", "dealers", "private-label"]

export const isBusinessInterest = (v: unknown): v is BusinessInterest =>
  typeof v === "string" && (BUSINESS_INTERESTS as string[]).includes(v)

export class BusinessRequestFormDTO {
  company = ""
  location = ""
  interest: BusinessInterest = "wholesale"
  volume = ""
  name = ""
  contact = "+998 "
  message = ""
  pricelist = false
}

export interface IBusinessRequestPayload {
  company: string
  location: string
  interest: BusinessInterest
  volume?: string
  name: string
  contact: string
  message?: string
  pricelist: boolean
}

export interface IBusinessRequestResult {
  id: number
  status: string
}
