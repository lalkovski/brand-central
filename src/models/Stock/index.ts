import { IBaseReducer } from 'models/BaseReducer'

export type TStockKeyTypes = '1. open' | '2. high' | '3. low' | '4. close' | '5. volume'

export interface IStock {
  ['1. open']: string
  ['2. high']: string
  ['3. low']: string
  ['4. close']: string
  ['5. volume']: string
}

export interface IStockMetaData {
  [key: string]: string
}

export interface IStocksResponse {
  ['Meta Data']: IStockMetaData
  ['Monthly Time Series']: { [key: string]: IStock }
}

export interface IStockReducer extends IBaseReducer<IStocksResponse> {
  selectedStock?: IStock
}
