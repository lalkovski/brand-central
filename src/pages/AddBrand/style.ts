import { isMobile } from 'helpers/helperFunctions'
import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${() => (isMobile() ? '28px ' : '42px')};
  font-weight: 700;
  margin-bottom: ${() => (isMobile() ? '10px ' : '20px')};
`
