import {
  IconDefinition,
  faArrowDownAZ,
  faArrowDownWideShort,
  faArrowDownZA,
} from '@fortawesome/free-solid-svg-icons'
import { SortBrands } from 'data/Brand/actions'
import { selectBrandsSorted } from 'data/Brand/selectors'
import { SORT_BRANDS_TYPE } from 'models/Brand'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store'

interface IUseSortDataReturnInterface {
  sortBrands: () => void
  getSortIcon: () => IconDefinition
}

/**
 * A custom hook that handles the brand sorting
 * @returns functions for getting the sort icon and sorting the brands
 */
export const useSortData = (): IUseSortDataReturnInterface => {
  const dispatch: AppDispatch = useDispatch()
  const sortType = useSelector(selectBrandsSorted)
  const isSortedAlphabetically = sortType === SORT_BRANDS_TYPE.ALPHABETICALLY
  const isSortedReverseAlphabetically = sortType === SORT_BRANDS_TYPE.REVERSE_ALPHABETICALLY

  const getSortIcon = useCallback(() => {
    if (isSortedAlphabetically) return faArrowDownAZ
    if (isSortedReverseAlphabetically) return faArrowDownZA

    return faArrowDownWideShort
  }, [sortType])

  const sortBrands = () => {
    if (isSortedAlphabetically) {
      dispatch(SortBrands(SORT_BRANDS_TYPE.REVERSE_ALPHABETICALLY))
      return
    }

    if (isSortedReverseAlphabetically) {
      dispatch(SortBrands(undefined))
      return
    }

    dispatch(SortBrands(SORT_BRANDS_TYPE.ALPHABETICALLY))
  }

  return { sortBrands, getSortIcon }
}
