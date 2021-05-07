import { useForm } from 'react-hook-form'
import Input from '../Input'
import { Card } from '../../interfaces'

export default function FormCard() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Card>()
  const onSubmit = (data: Card )=> {
    console.log(data)
  }

  const saveCard = async () => {
    const result = await fetch('/api/newCard', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cards: [{
          nameInCard: 'Ori',
          cardNumber: '0000000000000000',
          expiryDate: '00/00',
          cvc: 'cvc'
        }]
      })
    })
  }

  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...{ 
        register, 
        name: 'nameInCard', 
        label: 'Name in card', 
        placeholder: 'John Doe'
      }} />
      {errors.nameInCard && <p>Please fill in your name</p>}

      <br />

      <Input {...{ 
        register, 
        name: 'cardNumber', 
        label: 'Card number', 
        placeholder: '0000 0000 0000 0000', 
        pattern: /^[0-9]{16}$/,  
        maxLength: 16
      }} />
      {errors.cardNumber && <p>Please enter a valid credit card number</p>}

      <br />

      <Input {...{ 
        register, 
        name: 'expiryDate', 
        label: 'Expiry date', 
        placeholder: '00/00', 
        pattern: /^[0-9]{4}$/,  
        maxLength: 5
      }} />
      {errors.cardNumber && <p>Please enter a valid expiry date</p>}

      <br />
      
      <Input {...{ 
        register, 
        name: 'cvc', 
        label: 'CVC (Security code)', 
        placeholder: '000', 
        pattern: /^[0-9]{3}$/,  
        maxLength: 3
      }} />
      {errors.cardNumber && <p>Please enter a valid security code</p>}

      <br />

      <button>Confirm</button>
    </form>

    <button onClick={saveCard}>Cookie</button>
    </>
  ) 
}