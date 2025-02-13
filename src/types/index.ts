export type SelectOptionType = { value: string, text:string } | {value: number, text:string}
export type FoodDeliveryFormType = {
    address : DeliveryAddressFormType  
}& FoodDeliveryMasterType & CheckoutFormType
export type CheckoutFormType={
    paymentMethod : string,
    deliveryIn :  number,
}
export type DeliveryAddressFormType = {
    streetAddress :  string,
    landmark :  string,
    city : string,
    state : string
}
export type FoodDeliveryMasterType = {
    orderNo : number,
    customerName : string,
    mobile : string,
    email : string,
}