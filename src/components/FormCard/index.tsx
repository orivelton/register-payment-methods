import { ReactElement, useContext, useEffect } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import Input from '../Input'
import Modal from '../Modal'
import Button from '../Button'
import CreditCard from '../CreditCard'
import { Card } from '../../interfaces'
import { expiryDateFormat } from '../../helpers/format'
import cardsContext from '../../hooks/context/cardsContext'
import { cardsRequest } from '../../services/cardsRequest'
import styles from './FormCard.module.scss'

type FormCardType = {
  card?: Card | any, 
  handleClose?: any, 
  newCard?:boolean 
}

export default function FormCard({ card, handleClose, newCard = false }: FormCardType): ReactElement {
  const [cards, setCards] = useContext<any>(cardsContext)
  const { register, handleSubmit, reset, watch, setValue, control, formState: { errors } } = useForm<Card>({ defaultValues: card || {}})
  const { dirtyFields } = useFormState({ control });

  const expiryDateWatch = watch('expiryDate')
  const cardWatch = watch()
  
  const onSubmit = async (data: Card ) => {
    newCard ? addCard(data) : editCard(data)
  }
  
  const addCard = (data: Card) => {
    setCards((prev: any) => ([...prev, data]))
    handleClose(false)
  }
  
  const editCard = (data: Card) => {
    const updateCards = cards.map((item: Card, index: number) => index === data.id ? (item = data) : item)
    setCards(updateCards)
    handleClose(false)
  }

  const deleteCard = () => {
    const cardsUpdated = [...cards].filter((item: Card) => item.cardNumber !== card.cardNumber)
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
      <div className={styles.root}>
        <h3 className="title__secondary">
          {newCard ? 'Add your card details' : 'Edit your Card'}
        </h3>
        {
          !newCard && <CreditCard {...cardWatch} />
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...{ 
            register, 
            name: 'nameInCard', 
            label: 'Name in card', 
            placeholder: 'John Doe',
            pattern: /^.{2,}$/,
            errors,
            message: 'Please fill in your name',
            autofocus: true,
            dirtyFields
          }} />

          <Input {...{ 
            register, 
            name: 'cardNumber', 
            label: 'Card number', 
            placeholder: '0000 0000 0000 0000', 
            pattern: /^[0-9]{16}$/,  
            maxLength: 16,
            errors,
            message: 'Please enter a valid credit card number',
            dirtyFields
          }} />

          <Input {...{ 
            register, 
            name: 'expiryDate', 
            label: 'Expiry date', 
            placeholder: '00/00', 
            pattern: /([0-9]{2}[/]?){2}/,  
            maxLength: 5,
            errors,
            message: 'Please enter a valid expiry date',
            dirtyFields
          }} />
          
          <Input {...{ 
            register, 
            name: 'cvc', 
            label: 'CVC (Security code)', 
            placeholder: '000', 
            pattern: /^[0-9]{3}$/,  
            maxLength: 3,
            errors,
            message: 'Please enter a valid security code',
            dirtyFields
          }} />

          <Button type="submit" text="Confirm" />
          {errors?.formError && errors.formError.message}

          {!newCard && <Button type="submit" text="Delete card" variant="delete" onClick={deleteCard} />}
          
        </form>
      </div>
    </Modal>
  ) 
}