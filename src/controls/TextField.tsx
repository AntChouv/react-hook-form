import React, { forwardRef,ForwardedRef } from 'react'
import { FieldError } from 'react-hook-form'

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {label: string,error?: FieldError | undefined}
export const TextField = forwardRef((props:TextFieldProps,ref:ForwardedRef<HTMLInputElement>) => {
    const { type = "text",className = "",label,error,...other } = props
    return (
        <div className='form-floating'>
            <input
                className={`form-control ${className}`} 
                type={type} 
                placeholder={label}
                ref={ref}
                {...other}
            />
            <label>{label}</label>
             {error && <div className='error-feedback'>{error?.message}</div>}
        </div>
    )
})
