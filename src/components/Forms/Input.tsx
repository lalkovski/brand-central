import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  register?: UseFormRegister<FieldValues>
}

export const Input = ({ register, name, ...rest }: IInputProps) => {
  return <input {...(register && register(name))} {...rest} />
}
