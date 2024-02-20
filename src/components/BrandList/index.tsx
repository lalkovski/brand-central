import BrandCell from 'components/BrandCell'
import { selectBrands, selectFilteredBrands } from 'data/Brand/selectors'
import { useSelector } from 'react-redux'
import { StyledList } from './style'

const BrandList = () => {
  const filteredBrands = useSelector(selectFilteredBrands)
  const brands = useSelector(selectBrands)

  return (
    <StyledList flexDirection='column' width='155px'>
      {filteredBrands?.length
        ? filteredBrands.map((brand) => <BrandCell brand={brand} key={brand.id} />)
        : brands.map((brand) => <BrandCell brand={brand} key={brand.id} />)}
    </StyledList>
  )
}

export default BrandList
