import { useFormContext } from "react-hook-form"
import { TextField } from "../../../controls/TextField"
import { DeliveryAddressFormType } from "../../../types"

export const DeliveryAddressForm = () => {
    const {register, formState} = useFormContext<{address : DeliveryAddressFormType}>()
  return (
    <>
        <div className="text-start fw-bold mt-4 mb-2">
            Delivery Address
        </div>
        <div className="row mb-3">
            <div className="col">
                <TextField 
                    label="Street Address"
                    error={formState.errors.address?.streetAddress}
                    {...register("address.streetAddress",{
                        required:"This field is Required"
                    })}
                />
            </div>
            <div className="col">
                <TextField 
                    label="City"
                    error={formState.errors.address?.city}
                    {...register("address.city",{
                        required:"This field is Required"
                    })}
                />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col">
                <TextField 
                    label="Landmark"
                    error={formState.errors.address?.landmark}
                    {...register("address.landmark",{
                        required:"This field is Required"
                    })}
                />
            </div>
            <div className="col">
                <TextField 
                    label="State"
                    error={formState.errors.address?.state}
                    {...register("address.state",{
                        required:"This field is Required"
                    })}
                />
            </div>
        </div>
    </>
  )
}
