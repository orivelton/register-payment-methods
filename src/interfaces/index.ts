import { ErrorOption, UseFormRegister } from "react-hook-form"

export type Card = {
  nameInCard: string,
  cardNumber: string,
  expiryDate: string,
  cvc: string,
  formError?: string
}

export type InputCard = { 
  name: string
  register: UseFormRegister<any>, 
  label: string,
  placeholder: string,
  maxLength?: number,
  required?: boolean,
  pattern?: RegExp,
  defaultValue?: any,
  errors: any, 
  message?: string,
  valid?: boolean,
  autofocus?: boolean
}

export type ButtonType = {
  text: string,
  type: string,
  onClick: Function,
  disabled?: boolean
}
