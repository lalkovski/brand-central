import Flex from 'components/Flex'
import { isMobile } from 'helpers/helperFunctions'
import styled from 'styled-components'

export const ModalWrapper = styled(Flex)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: ${() => (isMobile() ? 0 : '40px 20px 20px;')};
`

export const ModalContentWrapper = styled(Flex)`
  width: ${() => (isMobile() ? '100%' : '30%')};
  height: ${() => (isMobile() ? '100%' : 'auto')};
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  border-radius: ${() => (isMobile() ? 0 : '10px')};
`
