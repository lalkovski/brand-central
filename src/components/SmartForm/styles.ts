import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  width: 50%;
  height: 100%;

  & > div {
    color: #ac0000;
  }

  & > input,
  textarea,
  select {
    border: 2px solid #ac0000;
    padding: 12px;
    border-radius: 4px;
  }

  & > input:focus-visible {
    outline: 0;
  }
  & > textarea:focus-visible {
    outline: 0;
  }
  & > textarea {
    resize: vertical;
  }
`
