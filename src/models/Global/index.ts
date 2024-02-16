export interface IResponse {
  code: number
  message: string
}

export interface IError {
  code: number
  message: string
}

export interface IPagination {
  total: number
  count: number
  per_page: number
  current_page: number
  total_pages: number
  links: string[]
}

export interface IBaseGetParams {
  paginate?: boolean
  page?: number
  search?: string
  per_page?: number
}
