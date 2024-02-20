import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from 'components/Flex'
import styled from 'styled-components'

export const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`

export const SelectWrapper = styled.div`
  width: 100%;
`

export const Text = styled.p`
  margin: 0;
  user-select: none;
`

export const FilterWrapper = styled(Flex)`
  cursor: pointer;
`
