import { createSelector } from 'reselect'
import { RootState } from 'store'

/**
 * @param state - the application state
 * @returns stocks - the current stocks reducer
 */
export const selectStockReducer = (state: RootState) => state.stocksReducer

/**
 * Gets the stocks array from the stocks reducer
 */
export const selectStocks = createSelector(
  selectStockReducer,
  (stocksState) => stocksState.data['Monthly Time Series']
)

/**
 * Gets the stock isFetching flag from the stocks reducer
 */
export const selectStocksIsFetching = createSelector(
  selectStockReducer,
  (stocksState) => stocksState.isFetching
)
