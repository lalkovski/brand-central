import { NotificationManager } from 'helpers/NotificationsManager'
import { IGetBrandsParams, IPostBrandParams, IPutBrandParams } from 'models/Brand'
import { API } from 'network'
import { Dispatch } from 'redux'
import {
  AddBrand as AddBrandAction,
  BrandsFetching,
  DeleteBrand as DeleteBrandAction,
  GetBrands as GetBrandsAction,
  GetBrandsErrors,
  UpdateBrand as UpdateBrandAction,
} from './actions'

export type BrandsActions =
  | ReturnType<typeof GetBrandsAction>
  | ReturnType<typeof GetBrandsErrors>
  | ReturnType<typeof BrandsFetching>
  | ReturnType<typeof AddBrandAction>
  | ReturnType<typeof UpdateBrandAction>
  | ReturnType<typeof DeleteBrandAction>

export const getBrands =
  (params?: IGetBrandsParams) => async (dispatch: Dispatch<BrandsActions>) => {
    dispatch(BrandsFetching(true))
    try {
      const response = await API.Brands.getBrands(params)
      dispatch(GetBrandsAction(response))
      return response
    } catch (error: any) {
      dispatch(
        GetBrandsErrors({
          code: error.code,
          message: error.message,
        })
      )
      NotificationManager.error('A problem occurred while getting the Brands.')
      throw Error(error)
    } finally {
      dispatch(BrandsFetching(false))
    }
  }

export const addBrand = (params: IPostBrandParams) => async (dispatch: Dispatch<BrandsActions>) => {
  dispatch(BrandsFetching(true))
  try {
    // const response = await API.Brands.postBrand(params)
    // Since this is a placeholder, the API doesn't support POST requests
    dispatch(AddBrandAction({ ...params, id: Math.floor(Math.random() * 123456789) }))
    NotificationManager.success('Brand created successfully.')
    // return response
  } catch (error: any) {
    dispatch(GetBrandsErrors({ code: error.code, message: error.message }))
    NotificationManager.error('A problem occurred while creating the Brand.')
    throw Error(error)
  } finally {
    dispatch(BrandsFetching(false))
  }
}

export const updateBrand =
  (id: number, params: IPutBrandParams) => async (dispatch: Dispatch<BrandsActions>) => {
    dispatch(BrandsFetching(true))
    try {
      const response = await API.Brands.putBrand(id, params)
      dispatch(UpdateBrandAction(response))
      NotificationManager.success('Brand updated successfully.')
      return response
    } catch (error: any) {
      dispatch(
        GetBrandsErrors({
          code: error.code,
          message: error.message,
        })
      )
      NotificationManager.error(`A problem occurred while updating Brand ID: ${id}`)
      throw Error(error)
    } finally {
      dispatch(BrandsFetching(false))
    }
  }

export const deleteBrand = (id: number) => async (dispatch: Dispatch<BrandsActions>) => {
  try {
    const response = await API.Brands.deleteBrand(id)
    dispatch(DeleteBrandAction(id))
    NotificationManager.success('Brand deleted successfully.')
    return response
  } catch (error: any) {
    dispatch(
      GetBrandsErrors({
        code: error.code,
        message: error.message,
      })
    )
    NotificationManager.error(`A problem occurred while deleting Brand with ID: ${id}`)
    throw new Error(error)
  }
}
