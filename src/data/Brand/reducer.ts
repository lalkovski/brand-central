import { addToArray, deleteFromArray, updateArray } from 'helpers/helperFunctions'
import { IBrand, IBrandReducer, SORT_BRANDS_TYPE } from 'models/Brand'
import { Action } from 'redux'
import { isType } from 'ts-action'
import {
  AddBrand,
  BrandsFetching,
  DeleteBrand,
  GetBrands,
  GetSelectedBrand,
  SortBrands,
  UpdateBrand,
} from './actions'

const initialState: IBrandReducer = {
  isFetching: false,
  data: { brands: [], categories: [] },
}

export const brandsReducer = (state = initialState, action: Action): IBrandReducer => {
  if (isType(action, GetBrands)) {
    const { payload } = action
    return {
      ...state,
      data: {
        brands: payload.brands,
        categories: payload.categories,
      },
    }
  }

  if (isType(action, GetSelectedBrand)) {
    const { payload } = action
    return {
      ...state,
      selectedBrand: payload,
    }
  }

  if (isType(action, AddBrand)) {
    const { payload } = action
    const { data } = state
    const formattedArray = addToArray<IBrand>(payload, data.brands)
    return {
      ...state,
      data: { brands: formattedArray, categories: data.categories },
    }
  }

  if (isType(action, UpdateBrand)) {
    const { payload } = action
    const { data } = state
    const formattedArray = updateArray<IBrand>(data.brands, payload)
    return {
      ...state,
      data: { brands: formattedArray, categories: data.categories },
    }
  }

  if (isType(action, DeleteBrand)) {
    const { payload } = action
    const { data } = state
    const formattedArray = deleteFromArray<IBrand>(data.brands, payload)
    return {
      ...state,
      data: { brands: formattedArray, categories: data.categories },
    }
  }

  if (isType(action, BrandsFetching)) {
    const { payload } = action
    return {
      ...state,
      isFetching: payload,
    }
  }

  if (isType(action, SortBrands)) {
    const { payload } = action
    const { data } = state
    const brands = data.brands
    let sortedBrands: IBrand[] = []
    if (payload === SORT_BRANDS_TYPE.ALPHABETICALLY) {
      sortedBrands = brands.map((el) => el).sort((a, b) => a.name.localeCompare(b.name))
    }
    if (payload === SORT_BRANDS_TYPE.REVERSE_ALPHABETICALLY) {
      sortedBrands = brands.map((el) => el).sort((a, b) => b.name.localeCompare(a.name))
    }
    if (!payload) {
      sortedBrands = brands.map((el) => el).sort((a, b) => a.id - b.id)
    }

    return {
      ...state,
      data: {
        ...data,
        brands: sortedBrands,
      },
      sorted: payload,
    }
  }

  return state
}
