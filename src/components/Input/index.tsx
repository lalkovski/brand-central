import Flex from 'components/Flex'
import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { StyledInput, StyledLabel } from './style'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  register?: UseFormRegister<FieldValues>
  label?: string
}

export const Input = ({ register, name, label, ...rest }: IInputProps) => {
  return (
    <Flex width='100%' alignItems='center'>
      <StyledLabel>{label || name}</StyledLabel>
      <StyledInput {...(register && register(name))} {...rest} />
    </Flex>
  )
}
