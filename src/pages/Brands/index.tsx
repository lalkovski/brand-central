import { BrandDetails } from 'components/BrandDetails'
import BrandList from 'components/BrandList'
import { Button } from 'components/Button'
import { Filter } from 'components/Filter'
import Flex from 'components/Flex'
import { FullScreenLoader } from 'components/FullScreenLoader'
import { Sort } from 'components/Sort'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routing/routes'
import { BrandsPageWrapper, BrandsWrapper } from './styles'
import { useBrandsData, useStocksData } from './utils'

const Brands = () => {
  const { brandsIsFetching } = useBrandsData()
  const { stocksIsFetching } = useStocksData()
  const navigate = useNavigate()

  if (brandsIsFetching || stocksIsFetching) {
    return <FullScreenLoader />
  }

  return (
    <BrandsPageWrapper
      backgroundColor='#F4F4F4'
      justifyContent='center'
      alignItems='center'
      width='100%'
    >
      <BrandsPageWrapper width='80%' flexDirection='column'>
        <Flex width='100%' justifyContent='space-between' alignItems='center' margin='10px 0 0 0'>
          <Flex width='10%' justifyContent='space-evenly'>
            <Sort />
            <Filter />
          </Flex>
          <Button onClick={() => navigate(ROUTES.BRAND_ADD)} margin='0 0 0 10px' isOutlined>
            Add Brand
          </Button>
        </Flex>
        <BrandsWrapper width='100%'>
          <Flex width='155px'>
            <BrandList />
          </Flex>
          <Flex width='100%' justifyContent='flex-end'>
            <BrandDetails />
          </Flex>
        </BrandsWrapper>
      </BrandsPageWrapper>
    </BrandsPageWrapper>
  )
}

export default Brands
