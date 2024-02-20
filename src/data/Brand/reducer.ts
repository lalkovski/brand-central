import {
  addToArray,
  deleteFromArray,
  getSortedBrandsArray,
  updateArray,
} from 'helpers/helperFunctions'
import { IBrand, IBrandReducer } from 'models/Brand'
import { Action } from 'redux'
import { isType } from 'ts-action'
import {
  AddBrand,
  BrandsFetching,
  DeleteBrand,
  FilterBrands,
  GetBrands,
  GetSelectedBrand,
  RemoveFilteredBrands,
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
    const { data, filteredBrands } = state
    const sortedBrands = getSortedBrandsArray(data.brands, payload)
    let sortedFilteredBrands
    if (filteredBrands) {
      sortedFilteredBrands = getSortedBrandsArray(filteredBrands, payload)
    }
    return {
      ...state,
      data: {
        ...data,
        brands: sortedBrands,
      },
      sorted: payload,
      filteredBrands: sortedFilteredBrands,
    }
  }

  if (isType(action, FilterBrands)) {
    const { payload } = action
    const { data } = state
    const brands = data.brands
    let filteredBrands: IBrand[] = brands.filter((brand) => brand.categoryId === payload)
    return {
      ...state,
      filteredBrands: filteredBrands,
    }
  }

  if (isType(action, RemoveFilteredBrands)) {
    return {
      ...state,
      filteredBrands: undefined,
    }
  }

  return state
}
