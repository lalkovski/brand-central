import Flex from 'components/Flex'
import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { StyledLabel, StyledTextArea } from './style'
import { isMobile } from 'helpers/helperFunctions'

export interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
  register?: UseFormRegister<FieldValues>
  rows?: number
  label?: string
}

export const TextArea = ({ register, name, label, ...rest }: ITextAreaProps) => {
  return (
    <Flex
      width='100%'
      alignItems='center'
      justifyContent={isMobile() ? 'space-between' : 'flex-start'}
    >
      <StyledLabel>{label || name}</StyledLabel>
      <StyledTextArea {...(register && register(name))} {...rest} />
    </Flex>
  )
}
