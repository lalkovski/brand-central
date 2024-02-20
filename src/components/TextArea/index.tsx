import Flex from 'components/Flex'
import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { StyledLabel, StyledTextArea } from './style'

export interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
  register?: UseFormRegister<FieldValues>
  rows?: number
  label?: string
}

export const TextArea = ({ register, name, label, ...rest }: ITextAreaProps) => {
  return (
    <Flex width='100%' alignItems='center'>
      <StyledLabel>{label || name}</StyledLabel>
      <StyledTextArea {...(register && register(name))} {...rest} />
    </Flex>
  )
}
