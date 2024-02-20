import Flex from 'components/Flex'
import styled from 'styled-components'

export const ModalWrapper = styled(Flex)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
`

export const ModalContentWrapper = styled(Flex)`
  width: 30%;
  height: auto;
  background-color: #fff;
  color: #333;
  border-radius: 10px;
`
