import { NotificationManager } from 'helpers/NotificationsManager'
import { API } from 'network'
import { Dispatch } from 'redux'
import { GetStocks as GetStocksAction, StocksFetching } from './actions'

export type StocksActions = ReturnType<typeof GetStocksAction> | ReturnType<typeof StocksFetching>

export const getStocks = () => async (dispatch: Dispatch<StocksActions>) => {
  dispatch(StocksFetching(true))
  try {
    const response = await API.Stocks.getStocks()
    dispatch(GetStocksAction(response))
    return response
  } catch (error: any) {
    NotificationManager.error('A problem occurred while getting the Stocks.')
    throw Error(error)
  } finally {
    dispatch(StocksFetching(false))
  }
}
