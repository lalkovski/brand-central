import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SortWrapper, Text } from './style'
import { useSortData } from './utils'

export const Sort = () => {
  const { sortBrands, getSortIcon } = useSortData()

  return (
    <SortWrapper onClick={sortBrands} width='52px' justifyContent='space-between'>
      <Text>Sort</Text>
      <FontAwesomeIcon icon={getSortIcon()} color='#ae0000' />
    </SortWrapper>
  )
}
