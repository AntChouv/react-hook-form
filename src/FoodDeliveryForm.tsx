import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
type FoodDeliveryFormType = {
    customerName : string,
    mobile : string
}

type FoodDeliveryFormErrorType = {
    customerName : string,
    mobile : string
}

export const FoodDeliveryForm = () => {
    const [values, setValues] = useState<FoodDeliveryFormType>({
        customerName : '',
        mobile : ''
    })
    const [errors, setErrors] = useState<FoodDeliveryFormErrorType>({
        customerName : '',
        mobile : ''
    })
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setValues({...values, [name]:value})
    }
    const validateFormData = () =>{
        const tempErrors: FoodDeliveryFormErrorType = {
            customerName : '',
            mobile : ''
        }
        if(values.customerName == "" )
            tempErrors.customerName = "Customer Name is Required"
        if(values.mobile == "" )
            tempErrors.mobile = "Mobile is Required"
        setErrors(tempErrors)

        return Object.values(tempErrors).every(x=>x=='')
    }
    const onSubmit = (e:SyntheticEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if (validateFormData())
            console.log('form data', values)
        else
            console.log("Form is invalid")
    }
  return (
    <form onSubmit={onSubmit}>
        <div className='form-floating mb-3'>
            <input
                className='form-control' 
                type="text" 
                name='customerName'
                placeholder="Customer Name"
                value={values.customerName}
                onChange={handleInputChange}
             />
            <label>Customer Name</label>
        </div>
        <div className='form-floating mb-3'>
            <input
                className='form-control' 
                type="text" 
                name='mobile'
                placeholder="Mobile"
                value={values.mobile}
                onChange={handleInputChange}
             />
            <label>Mobile</label>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}
