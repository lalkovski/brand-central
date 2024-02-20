import { useState } from 'react'

/**
 * A custom hook that takes care of basic Modal functionality. Exposes isOpen, toggleModal and closeModal.
 */
export const useModal = (): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return [isOpen, toggleModal, closeModal]
}
