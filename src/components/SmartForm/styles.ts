import { isMobile } from 'helpers/helperFunctions'
import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  width: ${() => (isMobile() ? '100%' : '50%')};
  height: 100%;

  & > div {
    color: #ac0000;
  }
`

export const ErrorMessage = styled.p`
  color: #f00;
  margin-left: 15%;
`
