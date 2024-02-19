import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
  register?: UseFormRegister<FieldValues>
  rows?: number
}

export const Textarea = ({ register, name, ...rest }: ITextAreaProps) => {
  return <textarea {...(register && register(name))} {...rest} />
}
