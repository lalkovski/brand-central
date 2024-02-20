import { Portal } from 'components/Portal'
import { ReactNode, useEffect } from 'react'
import { ModalContentWrapper, ModalWrapper } from './styles'

interface IModalProps {
  children: ReactNode
  isOpen: boolean
  handleClose: () => void
}

export const Modal = ({ children, isOpen, handleClose }: IModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null)
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  if (!isOpen) return null

  return (
    <Portal wrapperId='modal'>
      <ModalWrapper
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        onClick={handleClose}
      >
        <ModalContentWrapper
          padding='20px'
          justifyContent='center'
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ModalContentWrapper>
      </ModalWrapper>
    </Portal>
  )
}
