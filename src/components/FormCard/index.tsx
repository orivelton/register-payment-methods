import { useForm } from 'react-hook-form'
import Input from '../Input'
import { Card } from '../../interfaces'
import { useContext, useEffect } from 'react'
import cardsContext from '../../hooks/context/cardsContext'
import { cardsRequest } from '../../services/cardsRequest'
import Modal from '../Modal'
import Button from '../Button'

export default function FormCard({ card, handleClose, newCard = false, id }) {
  const [cards, setCards] = useContext(cardsContext)
  const { register, handleSubmit, setError, reset, setFocus, formState: { errors } } = useForm<Card>({ defaultValues: card || {}})

  const onSubmit = async (data: Card ) => {
    newCard ? addCard(data) : editCard(data)
  }
  
  const addCard = (data) => {
    const hasCard = cards.filter(item => item.cardNumber === data.cardNumber).length
    console.log(hasCard)
    if(hasCard && newCard) return setError('formError', { type: "manual", message: "You have the same card added"})

    setCards(prev => ([...prev, data]))
    handleClose(false)
  }
  
  const editCard = (data) => {
    const updateCards = cards.map((item, index) => index === data.id ? (item = data) : item)
    setCards(updateCards)
    handleClose(false)
  }
  
  useEffect(() => { cardsRequest({ cards }) }, [cards])
  useEffect(() => { reset(card) }, [card])

  return(
    <Modal handleClose={handleClose}>
      <h3 className="title__secondary">Add your card details</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...{ 
          register, 
          name: 'nameInCard', 
          label: 'Name in card', 
          placeholder: 'John Doe',
          errors,
          message: 'Please fill in your name',
          autofocus: true
        }} />
        

        <br />

        <Input {...{ 
          register, 
          name: 'cardNumber', 
          label: 'Card number', 
          placeholder: '0000 0000 0000 0000', 
          pattern: /^[0-9]{16}$/,  
          maxLength: 16,
          errors,
          message: 'Please enter a valid credit card number'
        }} />

        <br />

        <Input {...{ 
          register, 
          name: 'expiryDate', 
          label: 'Expiry date', 
          placeholder: '00/00', 
          pattern: /^[0-9]{5}$/,  
          maxLength: 5,
          errors,
          message: 'Please enter a valid expiry date'
        }} />

        <br />
        
        <Input {...{ 
          register, 
          name: 'cvc', 
          label: 'CVC (Security code)', 
          placeholder: '000', 
          pattern: /^[0-9]{3}$/,  
          maxLength: 3,
          errors,
          message: 'Please enter a valid security code'
        }} />
        <br />

        <Button type="submit" text="Confirm" />
        {errors?.formError && errors.formError.message}
      </form>
    </Modal>
  ) 
}