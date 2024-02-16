import { createSelector } from 'reselect'
import { RootState } from 'store'

/**
 * @param state - the application state
 * @returns brands - the current brands reducer
 */
export const selectBrandReducer = (state: RootState) => state.brandsReducer

/**
 * Gets the categories array from the brands reducer
 */
export const selectCategories = createSelector(
  selectBrandReducer,
  (brandsState) => brandsState.data.categories
)
