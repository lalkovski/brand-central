import { GetSelectedBrand } from 'data/Brand/actions'
import { selectSelectedBrand } from 'data/Brand/selectors'
import { IBrand } from 'models/Brand'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store'
import { BrandCellWrapper } from './style'

interface IBrandCellProps {
  brand: IBrand
}

const BrandCell = ({ brand }: IBrandCellProps) => {
  const dispatch: AppDispatch = useDispatch()
  const selectedBrand = useSelector(selectSelectedBrand)
  const isSelectedBrand = brand.id === selectedBrand?.id

  const handleClick = () => {
    dispatch(GetSelectedBrand(brand))
  }

  return (
    <BrandCellWrapper
      width='155px'
      height='93px'
      $imageUrl={brand.picture}
      onClick={handleClick}
      $isSelected={isSelectedBrand}
      $id={brand.id}
    />
  )
}

export default BrandCell
