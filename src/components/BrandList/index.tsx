import BrandCell from 'components/BrandCell'
import { selectBrands } from 'data/Brand/selectors'
import { useSelector } from 'react-redux'
import { StyledList } from './style'

const BrandList = () => {
  const brands = useSelector(selectBrands)

  return (
    <StyledList flexDirection='column' width='155px'>
      {brands.map((brand) => (
        <BrandCell brand={brand} key={brand.id} />
      ))}
    </StyledList>
  )
}

export default BrandList
