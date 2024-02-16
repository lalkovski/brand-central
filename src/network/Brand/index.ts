import { API_URL, STOCKS_URL } from 'config/envVariables'
import {
  IBrand,
  IBrandsResponse,
  IGetBrandsParams,
  IPostBrandParams,
  IPutBrandParams,
} from '../../models/Brand'
import { AxiosService } from '../config/config'

export class BrandsApi {
  constructor(private axios: AxiosService) {}

  getBrands = async (params?: IGetBrandsParams) => {
    const response = await this.axios.get<IBrandsResponse>(API_URL, params)
    return response
  }

  getStocks = async (params?: IGetBrandsParams) => {
    const response = await this.axios.get<IBrandsResponse>(STOCKS_URL, params)
    return response
  }

  postBrand = async (params: IPostBrandParams) => {
    const response = await this.axios.post<IBrand>(API_URL, params)
    return response
  }

  putBrand = async (id: number, params?: IPutBrandParams) => {
    const response = await this.axios.put<IBrand>(`${API_URL}/${id}`, params)
    return response
  }

  deleteBrand = async (id: number) => {
    const response = await this.axios.delete<{}>(`${API_URL}/${id}`)
    return response
  }
}
