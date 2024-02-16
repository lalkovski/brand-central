import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import './SmartForm.scss';

export function SmartForm({ children, onSubmit, validationSchema }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form className="smart-form" onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            return child.props.name ? (
              <React.Fragment key={index}>
                {React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })}
                {errors[child.props.name] && (
                  <div className="error-message">
                    {errors[child.props.name]?.message as string}
                  </div>
                )}
              </React.Fragment>
            ) : (
              child
            );
          })
        : children}
    </form>
  );
}
