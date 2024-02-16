import { createSelector } from 'reselect'
import { RootState } from 'store'

/**
 * @param state - the application state
 * @returns brands - the current brands reducer
 */
export const selectBrandReducer = (state: RootState) => state.brandsReducer

/**
 * Gets the brands array from the brands reducer
 */
export const selectBrands = createSelector(
  selectBrandReducer,
  (brandsState) => brandsState.data.brands
)

/**
 * Gets the brand isFetching flag from the brands reducer
 */
export const selectBrandsIsFetching = createSelector(
  selectBrandReducer,
  (brandsState) => brandsState.isFetching
)

/**
 * Gets the selectedBrand from the brands reducer
 */
export const selectSelectedBrand = createSelector(
  selectBrandReducer,
  (brandsState) => brandsState.selectedBrand
)
