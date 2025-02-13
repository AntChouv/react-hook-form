// import { useForm } from 'react-hook-form'
// type FoodDeliveryFormType = {
//     customerName : string,
//     mobile : string
// }

// export const FoodDeliveryForm = () => {//SIMPLE FORM USING REACT HOOK FORM
//     const { register, handleSubmit } = useForm<FoodDeliveryFormType>()

//     const onSubmit = (formData:FoodDeliveryFormType) =>{
//         console.log("form data",formData)
//     }

//     const onError = errors => {
//         console.log("validation errors",errors)
//     }
//   return (
//     <form onSubmit={handleSubmit(onSubmit,onError)}>
//         <div className='form-floating mb-3'>
//             <input
//                 className='form-control' 
//                 type="text" 
//                 placeholder="Customer Name"
//                 {...register('customerName',{required: "Customer name is required"})}
//              />
//             <label>Customer Name</label>
//         </div>
//         <div className='form-floating mb-3'>
//             <input
//                 className='form-control' 
//                 type="text" 
//                 placeholder="Mobile"
//                 {...register('mobile',{required: "Mobile is required"})}
//              />
//             <label>Mobile</label>
//         </div>
//         <button type='submit' className='btn btn-primary'>Submit</button>
//     </form>
//   )
// }


import { useForm,FieldErrors, UseFormReturn, FormProvider } from 'react-hook-form'
import { getRenderCount } from '../../utils/useRenderCount'
import { FoodDeliveryFormType } from '../../types'
import { CheckoutForm } from './components/CheckoutForm'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import { FoodDeliveryMaster } from './components/FoodDeliveryMaster'


const RenderCount = getRenderCount()

export const FoodDeliveryForm = () => {

    const methods : UseFormReturn<FoodDeliveryFormType> = useForm<FoodDeliveryFormType>({
        mode:'onChange',                      
        reValidateMode:'onSubmit',
        defaultValues: {
            orderNo : new Date().valueOf(),
            customerName : "",
            mobile : "",
            email : "",
            address: {
                streetAddress : "",
                landmark : "",
                city : "",
                state : "" 
            }
            
        }
    })
    const { handleSubmit } = methods
    const onSubmit = (formData:FoodDeliveryFormType) =>{
        console.log("Form data: ", formData)
    }

    const onError = (err : FieldErrors) => {
        console.log("validation errors : ", err)
    }
    return (
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit,onError)}>{/*Calling the handleSubmit we will not need to preventDefault() 
                                                                    as the function handles this along with other things*/}
            <RenderCount/>
            <FormProvider {...methods}>
                <FoodDeliveryMaster/>
                <CheckoutForm/>
                <DeliveryAddressForm/>
            </FormProvider>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
  )
}

export const FoodDeliveryFormV1 = () => {//SIMPLE FORM USING REACT HOOK FORM
    const { register, handleSubmit, formState } = useForm<FoodDeliveryFormType>({
        mode:'onChange',//mode : onChange| onBlur| onSumbit| onTouched| all='onSumbit' . Allows validation strategy 
                        // to be configured before user submits
        reValidateMode:'onSubmit',//reValidateMode : onChange| onBlur| onSubmit = 'onChange'. Allows the validation strategy
                        // to be configured when inputs with errors get re-validated after a user submits
        defaultValues: {
            orderNo : new Date().valueOf(),
            customerName : "Antons",
            mobile : "99900",
            email : "dons@don.gt"
        }
    })
    const onSubmit = (formData:FoodDeliveryFormType) =>{
        console.log("Form data: ", formData)
    }
    // const onSubmit = (e:SyntheticEvent<HTMLFormElement>) =>{
    //     e.preventDefault()
    //     console.log(e)
    // }
    const onError = (err : FieldErrors) => {
        console.log("validation errors : ", err)
    }
    return (
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit,onError)}>{/*Calling the handleSubmit we will not need to preventDefault() 
                                                                    as the function handles this along with other things*/}
            <RenderCount/>
            <div className="row mb-2">
                <div className="col">
                    <div className='form-floating'>
                        <input
                            className='form-control' 
                            type="text" 
                            placeholder="#Order No."
                            disabled
                            // name={customerControl.name}
                            // ref={customerControl.ref}
                            // onChange={customerControl.onChange}
                            // onBlur={customerControl.onBlur}
                            //The above 4 lines are the same with the line under this comment
                            {...register('orderNo')}
                        />
                        <label>Order No</label>
                    </div>
                </div>
                <div className="col">
                    <div className='form-floating'>
                        <input
                            className='form-control' 
                            type="text" 
                            placeholder="Mobile"
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
                        />
                        <label>Mobile</label>
                        {formState.errors.mobile && <div className='error-feedback'>{formState.errors.mobile?.message}</div>}
                        
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <div className='form-floating'>
                        <input
                            className='form-control' 
                            type="text" 
                            placeholder="Customer Name"
                            {...register('customerName',{
                                required : {
                                    value: true,
                                    message: "Customer name is required"
                                }
                            })}
                        />
                        <label>Customer Name</label>
                        {formState.errors.customerName && <div className='error-feedback'>{formState.errors.customerName?.message}</div>}
                    </div>
                </div>
                <div className="col">
                    <div className='form-floating'>
                        <input
                            className='form-control' 
                            type="text" 
                            placeholder="Email"
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
                        />
                        <label>Email</label>
                        {formState.errors.email && <div className='error-feedback'>{formState.errors.email?.message}</div>}
                    </div>
                </div>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
  )
}

