import { isMobile } from 'helpers/helperFunctions'
import styled from 'styled-components'

export const StyledInput = styled.input`
  width: ${() => (isMobile() ? '70%' : '85%')};
  border: 2px solid #ac0000;
  padding: 12px;
  border-radius: 4px;

  & :focus-visible {
    outline: 0;
  }
`

export const StyledLabel = styled.label`
  width: 15%;
  text-transform: capitalize;
`
