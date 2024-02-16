import Flex from 'components/Flex'
import styled from 'styled-components'

export const BrandCellWrapper = styled(Flex)<{ $imageUrl: string; $isSelected?: boolean }>`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.1);
  opacity: ${({ $isSelected }) => ($isSelected ? '1' : '0.7')};
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 94% auto;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
