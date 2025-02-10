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


import { useForm } from 'react-hook-form'
type FoodDeliveryFormType = {
    customerName : string,
    mobile : string
}

export const FoodDeliveryForm = () => {//SIMPLE FORM USING REACT HOOK FORM
    const { register, handleSubmit } = useForm<FoodDeliveryFormType>()
    const onSubmit = (formData:FoodDeliveryFormType) =>{
        console.log("Form data: ", formData)
    }
    // const onSubmit = (e:SyntheticEvent<HTMLFormElement>) =>{
    //     e.preventDefault()
    //     console.log(e)
    // }
    return (
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>{/*Calling the handleSubmit we will not need to preventDefault() 
                                                                    as the function handles this along with other things*/}
            <div className='form-floating mb-3'>
                <input
                    className='form-control' 
                    type="text" 
                    placeholder="Customer Name"
                    // name={customerControl.name}
                    // ref={customerControl.ref}
                    // onChange={customerControl.onChange}
                    // onBlur={customerControl.onBlur}
                    //The above 4 lines are the same with the line under this comment
                    {...register('customerName',{ value : 'Fiona' })}
                />
                <label>Customer Name</label>
            </div>
            <div className='form-floating mb-3'>
                <input
                    className='form-control' 
                    type="text" 
                    placeholder="Mobile"
                    {...register('mobile',{ value : '0000' })}
                />
                <label>Mobile</label>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
  )
}
