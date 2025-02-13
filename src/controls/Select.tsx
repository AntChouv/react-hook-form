import React, { forwardRef,ForwardedRef } from 'react'
import { FieldError } from 'react-hook-form'
import { SelectOptionType } from '../types'

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & 
{label: string,
error?: FieldError | undefined
options: SelectOptionType[]}
export const Select = forwardRef((props:SelectFieldProps,ref:ForwardedRef<HTMLSelectElement>) => {
    const { className = "",label,error,options,...other } = props
    return (
        <div className="form-floating">
            <select 
                className={`form-control ${className}`}
                ref={ref}
                {...other}
            >
                {options.map((x,indx)=>{
                   return <option key={indx} value={x.value}>{x.text}</option>
                })}
            </select>
            <label>{label}</label>
            {error && <div className='error-feedback'>{error?.message}</div>}
        </div>
    )
})
