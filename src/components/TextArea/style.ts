import { isMobile } from 'helpers/helperFunctions'
import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
  width: ${() => (isMobile() ? '70%' : '85%')};
  border: 2px solid #ac0000;
  padding: 12px;
  border-radius: 4px;
  resize: vertical;

  & :focus-visible {
    outline: 0;
  }
`

export const StyledLabel = styled.label`
  width: 15%;
  height: auto;
  text-transform: capitalize;
  word-break: break-all;
`
