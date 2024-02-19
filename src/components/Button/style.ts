import styled from 'styled-components'

export const StyledButton = styled.button<{ $margin?: string; $isOutlined?: boolean }>`
  height: 30px;
  min-width: 80px;
  background: ${({ $isOutlined }) => ($isOutlined ? 'white' : '#ac0000')};
  border: 2px solid #ac0000;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ $isOutlined }) => ($isOutlined ? '#333' : '#fff')};
  margin: ${({ $margin }) => $margin};

  &:hover {
    background: #a00000;
    border: 2px solid #a00000;
    color: #fff;
  }
`
