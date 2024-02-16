import Flex from 'components/Flex'
import { selectSelectedBrand } from 'data/Brand/selectors'
import { useSelector } from 'react-redux'
import {
  BrandDescription,
  BrandDetailsWrapper,
  BrandTitle,
  ImageWrapper,
  NoBrandSelectedText,
} from './style'
import { LineChart } from 'components/LineChart'

export const BrandDetails = () => {
  const selectedBrand = useSelector(selectSelectedBrand)

  if (!selectedBrand?.id)
    return (
      <Flex width='100%' height='100%' justifyContent='center' alignItems='center'>
        <NoBrandSelectedText>Please select a brand</NoBrandSelectedText>
      </Flex>
    )

  return (
    <BrandDetailsWrapper
      width='100%'
      height='88%'
      margin='10px'
      padding='10px'
      flexDirection='column'
    >
      <Flex width='100%' height='max-content' justifyContent='space-between'>
        <Flex width='100%' flexDirection='column'>
          <BrandTitle>{selectedBrand?.title}</BrandTitle>
          <BrandDescription>
            <span>Revenue: </span>
            {selectedBrand?.revenue}
          </BrandDescription>
        </Flex>
        <ImageWrapper>
          <img src={selectedBrand?.picture} alt='brand-logo' height='100%' />
        </ImageWrapper>
      </Flex>
      <Flex flexDirection='column' alignItems='center'>
        <Flex width='60%'>
          <LineChart />
        </Flex>
        <Flex width='100%'>
          <BrandDescription $hasTopMargin>
            <span>Description: </span>
            {selectedBrand?.description}
          </BrandDescription>
        </Flex>
      </Flex>
    </BrandDetailsWrapper>
  )
}
