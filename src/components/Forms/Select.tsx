import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string
  options: { id: number; name: string }[]
  register?: UseFormRegister<FieldValues>
}

export const Select = ({ register, options, name, ...rest }: ISelectProps) => {
  return (
    <select {...(register && register(name))} {...rest}>
      {options.map((option: { id: number; name: string }) => (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
