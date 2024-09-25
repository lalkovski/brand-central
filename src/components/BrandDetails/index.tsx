import Flex from 'components/Flex'
import { LineChart } from 'components/LineChart'
import { Surface } from 'components/Surface'
import { selectSelectedBrand } from 'data/Brand/selectors'
import { useSelector } from 'react-redux'
import { BrandDescription, BrandName, ImageWrapper, NoBrandSelectedText } from './style'
import { isMobile } from 'helpers/helperFunctions'

export const BrandDetails = () => {
  const selectedBrand = useSelector(selectSelectedBrand)

  if (!selectedBrand?.id)
    return (
      <Flex
        width='100%'
        height='100%'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
      >
        <NoBrandSelectedText>Please select a brand</NoBrandSelectedText>
      </Flex>
    )

  return (
    <Surface>
      <Flex width='100%' height='100%' justifyContent='space-between'>
        <Flex width='100%' flexDirection='column'>
          <BrandName>{selectedBrand?.name}</BrandName>
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
        <Flex width={isMobile() ? '100%' : '60%'}>
          <LineChart />
        </Flex>
        <Flex width='100%'>
          <BrandDescription $hasTopMargin>
            <span>Description: </span>
            {selectedBrand?.description}
          </BrandDescription>
        </Flex>
      </Flex>
    </Surface>
  )
}
