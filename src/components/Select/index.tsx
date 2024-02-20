import Flex from 'components/Flex'
import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { StyledSelect, StyledLabel } from './style'

export interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string
  options: { id: number; name: string }[]
  register?: UseFormRegister<FieldValues>
  label?: string
}

export const Select = ({ register, name, options, label, ...rest }: ISelectProps) => {
  return (
    <Flex width='100%' alignItems='center'>
      <StyledLabel>{label || name}</StyledLabel>
      <StyledSelect {...(register && register(name))} {...rest}>
        {options.map((option: { id: number; name: string }) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </StyledSelect>
    </Flex>
  )
}
