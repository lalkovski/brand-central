import { ReactNode } from 'react'
import { StyledButton } from './style'

interface IButtonProps {
  children: ReactNode
  onClick?: any
  type?: 'button' | 'submit' | 'reset'
  margin?: string
  isOutlined?: boolean
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  margin,
  isOutlined,
}: IButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type} $margin={margin} $isOutlined={isOutlined}>
      {children}
    </StyledButton>
  )
}
