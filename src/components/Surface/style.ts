import Flex from 'components/Flex'
import styled from 'styled-components'

export const StyledFlex = styled(Flex)<{
  $hasLeftMargin?: boolean
  $hasRightMargin?: boolean
  $widthProp?: string
  $heightProp?: string
  $marginProp?: string
  $paddingProp?: string
}>`
  width: ${({ $widthProp }) => $widthProp || '100%'};
  height: ${({ $heightProp }) => $heightProp || '88%'};
  margin: ${({ $marginProp }) => $marginProp || '10px'};
  padding: ${({ $paddingProp }) => $paddingProp || '10px'};
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.1);
  margin-right: ${({ $hasRightMargin }) => !$hasRightMargin && 0};
  margin-left: ${({ $hasLeftMargin }) => !$hasLeftMargin && 0};
  overflow-y: scroll;
`
