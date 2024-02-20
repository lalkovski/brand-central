import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
  width: 85%;
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
  text-transform: capitalize;
`
