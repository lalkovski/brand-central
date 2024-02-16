import { BrandDetails } from 'components/BrandDetails'
import BrandList from 'components/BrandList'
import Flex from 'components/Flex'
import { FullScreenLoader } from 'components/FullScreenLoader'
import { useBrandsData, useStocksData } from './utils'

const Brands = () => {
  const { brandsIsFetching } = useBrandsData()
  const { stocksIsFetching } = useStocksData()

  if (brandsIsFetching || stocksIsFetching) {
    return <FullScreenLoader />
  }

  return (
    <Flex
      backgroundColor='#F4F4F4'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='95vh'
    >
      <Flex width='80%' height='100%'>
        <Flex width='155px' height='100%'>
          <BrandList />
        </Flex>
        <Flex width='100%' height='100%' justifyContent='flex-end'>
          <BrandDetails />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Brands
