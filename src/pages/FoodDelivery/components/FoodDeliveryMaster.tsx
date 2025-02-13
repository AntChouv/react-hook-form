import { useFormContext } from 'react-hook-form'
import { TextField } from '../../../controls/TextField'
import { FoodDeliveryMasterType } from '../../../types'

export const FoodDeliveryMaster = () => {
    const {register, formState} = useFormContext<FoodDeliveryMasterType>()
  return (
    <>
        <div className="row mb-2">
            <div className="col">
                <TextField 
                    label="#Order No."
                    disabled 
                    {...register('orderNo')}
                />
            </div>
            <div className="col">
                <TextField 
                    label="Mobile" 
                    {...register('mobile',{
                        minLength : {
                            value: 10,
                            message: "Must be at least 10 chars"
                        },
                        maxLength : {
                            value: 10,
                            message: "Must be max 10 chars"
                        },
                        required : {
                            value: true,
                            message: "Mobile is required"
                        }
                    })}
                    error={formState.errors.mobile}
                />
            </div>
        </div>
        <div className="row mb-2">
            <div className="col">
                <TextField 
                    label="Customer Name" 
                    {...register('customerName',{
                        required : "Customer name is required"
                        })
                    }
                    error={formState.errors.customerName}
                />
            </div>
            <div className="col">
                <TextField 
                    label="Email" 
                    type='email'
                    {...register('email',{
                        pattern:{
                            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message:"Incorrect email format"
                        },
                        validate: {
                            notFake:(value)=>{
                                return (
                                    value != "email@gmail.com" || "Particular email is blocked"
                                )
                            },
                            notFromBlackListed: (value,values)=>{
                                console.log(values.customerName,values.mobile)
                                return (
                                (!value.endsWith("xyz.com")) || "This domain is not supported"
                                )
                            }
                        }
                        
                    })}
                    error={formState.errors.email}
                />
            </div>
        </div>
    </>
  )
}
