import { isMobile } from 'helpers/helperFunctions'
import styled from 'styled-components'

export const StyledSelect = styled.select`
  width: 85.6%;
  width: ${() => (isMobile() ? '100%' : '85.6%')};
  border: 2px solid #ac0000;
  padding: 12px;
  border-radius: 4px;

  & :focus-visible {
    outline: 0;
  }
`

export const StyledLabel = styled.label`
  width: ${() => (isMobile() ? '27.5%' : '14.4%')};
  text-transform: capitalize;
  height: auto;
  word-break: break-all;
`
