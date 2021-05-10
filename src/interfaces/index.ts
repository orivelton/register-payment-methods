import { MouseEventHandler } from "react"
import { UseFormRegister } from "react-hook-form"

export type Card = {
  nameInCard: string,
  cardNumber: string,
  expiryDate: string,
  cvc: string,
  formError?: string,
  id?: number
}

export type InputCard = { 
  name: string
  register: UseFormRegister<any>, 
  label: string,
  placeholder: string,
  maxLength?: number,
  required?: boolean,
  pattern?:  RegExp,
  errors: any, 
  message?: string,
  valid?: boolean,
  autofocus?: boolean,
  dirtyFields: any
}

export type ButtonType = {
  text: string,
  type?: HTMLButtonElement | any
  onClick?: MouseEventHandler,
  disabled?: boolean,
  variant?: string
}
