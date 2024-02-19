import { StyledIcon } from './style'
import { useSortData } from './utils'

export const Sort = () => {
  const { sortBrands, getSortIcon } = useSortData()

  return <StyledIcon icon={getSortIcon()} color='#ae0000' onClick={sortBrands} />
}
