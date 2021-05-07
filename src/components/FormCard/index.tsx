import { useForm } from 'react-hook-form'
import Input from '../Input'
import { Card } from '../../interfaces'
import { useContext, useEffect } from 'react'
import cardsContext from '../../hooks/context/cardsContext'
import { cardsRequest } from '../../services/cardsRequest'

export default function FormCard({
  nameInCard = '',
  cardNumber = '',
  expiryDate = '',
  cvc = ''
}) {
  const[cards, setCards] = useContext(cardsContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Card>()


  const onSubmit = async (data: Card ) => {
    setCards(prev => ([...prev, data]))
  }
  
  useEffect(() => {
    cardsRequest({ cards })
  }, [cards])

  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...{ 
        register, 
        name: 'nameInCard', 
        label: 'Name in card', 
        placeholder: 'John Doe',
        defaultValue: nameInCard
      }} />
      {errors.nameInCard && <p>Please fill in your name</p>}

      <br />

      <Input {...{ 
        register, 
        name: 'cardNumber', 
        label: 'Card number', 
        placeholder: '0000 0000 0000 0000', 
        pattern: /^[0-9]{16}$/,  
        maxLength: 16,
        defaultValue: cardNumber
      }} />
      {errors.cardNumber && <p>Please enter a valid credit card number</p>}

      <br />

      <Input {...{ 
        register, 
        name: 'expiryDate', 
        label: 'Expiry date', 
        placeholder: '00/00', 
        pattern: /^[0-9]{5}$/,  
        maxLength: 5,
        defaultValue: expiryDate
      }} />
      {errors.cardNumber && <p>Please enter a valid expiry date</p>}

      <br />
      
      <Input {...{ 
        register, 
        name: 'cvc', 
        label: 'CVC (Security code)', 
        placeholder: '000', 
        pattern: /^[0-9]{3}$/,  
        maxLength: 3,
        defaultValue: cvc
      }} />
      {errors.cardNumber && <p>Please enter a valid security code</p>}

      <br />

      <button>Confirm</button>
    </form>
    </>
  ) 
}