import { IBrandReducer, IBrand } from 'models/Brand'
import { Action } from 'redux'
import { isType } from 'ts-action'
import { updateArray, deleteFromArray } from 'helpers/helperFunctions'
import { GetBrands, BrandsFetching, UpdateBrand, DeleteBrand, GetSelectedBrand } from './actions'

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
    const { data } = state
    return {
      ...state,
      selectedBrand: payload,
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
  return state
}
