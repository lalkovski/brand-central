import { IStockReducer } from 'models/Stock'
import { Action } from 'redux'
import { isType } from 'ts-action'
import { GetStocks, StocksFetching } from './actions'

const initialState: IStockReducer = {
  isFetching: false,
  data: {
    ['Meta Data']: {},
    ['Monthly Time Series']: {},
  },
}

export const stocksReducer = (state = initialState, action: Action): IStockReducer => {
  if (isType(action, GetStocks)) {
    const { payload } = action
    return {
      ...state,
      data: payload,
    }
  }

  if (isType(action, StocksFetching)) {
    const { payload } = action
    return {
      ...state,
      isFetching: payload,
    }
  }
  return state
}
