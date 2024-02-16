import { BrandsApi } from './Brand'
import { StocksApi } from './Stock'
import { AxiosService } from './config/config'

class Api {
  axios = new AxiosService()
  Brands = new BrandsApi(this.axios)
  Stocks = new StocksApi(this.axios)
}

export const API = new Api()
