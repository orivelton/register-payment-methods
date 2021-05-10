import { useContext, useState } from 'react'
import cardsContext from '../../hooks/context/cardsContext'
import { Card } from '../../interfaces'
import FormCard from '../FormCard'
import styles from './ListCard.module.scss'

export default function ListCard() {
  const [cards] = useContext(cardsContext)
  const [editCard, setEditCard] = useState(false)
  const [card, setCard] = useState<Card | object>({})

  const handleEdit = (card: Card) => {
    setCard(card)
    setEditCard(true)
  }

  return(
    <>
      <ul>
        {
          cards?.length ? (
            cards.map(({ nameInCard, cardNumber, expiryDate, cvc} : Card, id: number ) => (
              <li key={cardNumber} className={styles.item} onClick={() => handleEdit({ nameInCard, cardNumber, expiryDate, cvc, id })}>
                <span>{nameInCard}</span>
                <span>{cardNumber?.slice(-4)}</span>
                <span>{expiryDate}</span>
              </li>
            ))
            ) : (
              <li className={styles.item__empty}>Add your first card</li>
              )
            }
      </ul>

      { editCard && <FormCard {...{ card, handleClose: setEditCard }}/> }
    </>
  )
}