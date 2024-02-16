import { IStocksResponse } from 'models/Stock'
import { action, payload } from 'ts-action'

export const StocksFetching = action('StocksFetching', payload<boolean>())

export const GetStocks = action('GetStocks', payload<IStocksResponse>())
