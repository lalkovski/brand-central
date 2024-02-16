import { IBaseReducer } from 'models/BaseReducer'
import { ICategory } from 'models/Category'

export interface IBrand {
  id: number
  title: string
  categoryId: number
  revenue: string
  picture: string
  description: string
}

export interface IGetBrandsParams {}

export interface IPostBrandParams {
  title: string
  categoryId: number
  revenue: string
  picture: string
  description: string
}

export interface IPutBrandParams {
  title?: string
  categoryId?: number
  revenue?: string
  picture?: string
  description?: string
}

export interface IBrandsResponse {
  brands: IBrand[]
  categories: ICategory[]
}

export interface IBrandReducer extends IBaseReducer<IBrandsResponse> {
  selectedBrand?: IBrand
}
