import Flex from 'components/Flex'
import styled from 'styled-components'

export const StyledList = styled(Flex)`
  & > div {
    margin-bottom: 10px;
  }

  & > div:first-child {
    margin-top: 10px;
    background-color: black;
  }

  & > div:last-child {
    margin-bottom: 0;
  }
`
