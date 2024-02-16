import { STOCKS_URL } from 'config/envVariables'
import { IStocksResponse } from 'models/Stock'
import { AxiosService } from '../config/config'

export class StocksApi {
  constructor(private axios: AxiosService) {}

  getStocks = async () => {
    const response = await this.axios.get<IStocksResponse>(STOCKS_URL)
    return response
  }
}
