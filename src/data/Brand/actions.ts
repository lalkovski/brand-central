import { IBrand, IBrandsResponse, SORT_BRANDS_TYPE } from 'models/Brand'
import { IError } from 'models/Global'
import { action, payload } from 'ts-action'

export const BrandsFetching = action('BrandsFetching', payload<boolean>())

export const GetBrands = action('GetBrands', payload<IBrandsResponse>())

export const GetSelectedBrand = action('GetSelectedBrand', payload<IBrand>())

export const AddBrand = action('AddBrand', payload<IBrand>())

export const UpdateBrand = action('UpdateBrand', payload<IBrand>())

export const DeleteBrand = action('DeleteBrand', payload<number>())

export const GetBrandsErrors = action('GetBrandsErrors', payload<IError>())

export const SortBrands = action('SortBrands', payload<SORT_BRANDS_TYPE | undefined>())

export const FilterBrands = action('FilterBrands', payload<number>())

export const RemoveFilteredBrands = action('RemoveFilteredBrands')
