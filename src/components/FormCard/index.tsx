import { ReactElement, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import { Card } from '../../interfaces'
import cardsContext from '../../hooks/context/cardsContext'
import { cardsRequest } from '../../services/cardsRequest'
import Modal from '../Modal'
import Button from '../Button'
import { expiryDateFormat } from '../../helpers/format'

type FormCardType = {
  card: Card, 
  handleClose: Function, 
  newCard:boolean 
}

export default function FormCard({ card, handleClose, newCard = false }: FormCardType): ReactElement {
  const [cards, setCards] = useContext(cardsContext)
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<Card>({ defaultValues: card || {}})
  const expiryDateWatch = watch('expiryDate')

  const onSubmit = async (data: Card ) => {
    newCard ? addCard(data) : editCard(data)
  }
  
  const addCard = (data: Card) => {
    const hasCard = cards.filter(item => item.cardNumber === data.cardNumber).length

    setCards(prev => ([...prev, data]))
    handleClose(false)
  }
  
  const editCard = (data: Card) => {
    const updateCards = cards.map((item, index) => index === data.id ? (item = data) : item)
    setCards(updateCards)
    handleClose(false)
  }

  const deleteCard = () => {
    const cardsUpdated = [...cards].filter(card => card.cardNumber !== card.cardNumber)
    setCards(cardsUpdated)
    cardsRequest({ cards: cardsUpdated})
  }
  
  useEffect(() => { cardsRequest({ cards }) }, [cards])
  useEffect(() => { reset(card) }, [card])
  useEffect(() => {
    expiryDateWatch && setValue('expiryDate', `${expiryDateFormat(expiryDateWatch)}`)
   }, [expiryDateWatch])


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

        <Input {...{ 
          register, 
          name: 'expiryDate', 
          label: 'Expiry date', 
          placeholder: '00/00', 
          pattern: /([0-9]{2}[/]?){2}/,  
          maxLength: 5,
          errors,
          message: 'Please enter a valid expiry date'
        }} />
        
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

        <Button type="submit" text="Confirm" />
        {errors?.formError && errors.formError.message}

        {!newCard && <button onClick={deleteCard}>Delete card</button>}
        
      </form>
    </Modal>
  ) 
}