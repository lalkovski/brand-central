import { selectBrands, selectBrandsIsFetching } from 'data/Brand/selectors'
import { getBrands } from 'data/Brand/thunks'
import { selectStocks, selectStocksIsFetching } from 'data/Stock/selectors'
import { getStocks } from 'data/Stock/thunks'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store'

type TUseBrandsDataReturnType = {
  brandsIsFetching: boolean
}

export const useBrandsData = (): TUseBrandsDataReturnType => {
  const dispatch: AppDispatch = useDispatch()
  const brandsIsFetching = useSelector(selectBrandsIsFetching)
  const brands = useSelector(selectBrands)

  useEffect(() => {
    if (!brands.length) {
      dispatch(getBrands())
    }
  }, [brands.length, dispatch])

  return { brandsIsFetching }
}

type TUseStocksDataReturnType = {
  stocksIsFetching: boolean
}

export const useStocksData = (): TUseStocksDataReturnType => {
  const dispatch: AppDispatch = useDispatch()
  const stocks = useSelector(selectStocks)
  const stocksIsFetching = useSelector(selectStocksIsFetching)

  useEffect(() => {
    if (Object.keys(stocks).length === 0) {
      dispatch(getStocks())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { stocksIsFetching }
}
