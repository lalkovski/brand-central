import { yupResolver } from '@hookform/resolvers/yup'
import { TAddEditBrandFormValues } from 'components/AddEditBrandForm/utils'
import { ISelectProps } from 'components/Select'
import { ITextAreaProps } from 'components/TextArea'
import React, { FormHTMLAttributes, ReactElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IInputProps } from '../Input'
import { ErrorMessage, StyledForm } from './styles'

interface ISmartFormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children:
    | ReactElement<IInputProps | ISelectProps | ITextAreaProps>
    | ReactElement<IInputProps | ISelectProps | ITextAreaProps>[]
  onSubmit: SubmitHandler<TAddEditBrandFormValues>
  validationSchema: any
}

export const SmartForm = ({ children, onSubmit, validationSchema }: ISmartFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TAddEditBrandFormValues>({
    resolver: yupResolver(validationSchema),
  })

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(
            (child: ReactElement<IInputProps | ISelectProps | ITextAreaProps>, index) => {
              return child.props.name ? (
                <React.Fragment key={index}>
                  {React.createElement(child.type, {
                    ...{
                      ...child.props,
                      register,
                      key: child.props.name,
                    },
                  })}
                  {child.props.name &&
                    errors[child.props.name as keyof TAddEditBrandFormValues] && (
                      <ErrorMessage>
                        {
                          errors[child.props.name as keyof TAddEditBrandFormValues]
                            ?.message as string
                        }
                      </ErrorMessage>
                    )}
                </React.Fragment>
              ) : (
                child
              )
            }
          )
        : children}
    </StyledForm>
  )
}
