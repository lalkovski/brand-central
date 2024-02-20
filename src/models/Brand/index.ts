import { IBaseReducer } from 'models/BaseReducer'
import { ICategory } from 'models/Category'

export interface IBrand {
  id: number
  name: string
  categoryId: number
  revenue: string
  picture: string
  description: string
}

export interface IGetBrandsParams {}

export interface IPostBrandParams {
  name: string
  categoryId: number
  revenue: string
  picture: string
  description: string
}

export interface IPutBrandParams {
  name: string
  categoryId: number
  revenue: string
  picture: string
  description: string
}

export interface IBrandsResponse {
  brands: IBrand[]
  categories: ICategory[]
}

export enum SORT_BRANDS_TYPE {
  ALPHABETICALLY = 'alphabetically',
  REVERSE_ALPHABETICALLY = 'reverse-alphabetically',
}

export interface IBrandReducer extends IBaseReducer<IBrandsResponse> {
  selectedBrand?: IBrand
  sorted?: SORT_BRANDS_TYPE
  filteredBrands?: IBrand[]
}
