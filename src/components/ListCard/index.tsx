import { useContext, useState } from 'react'
import cardsContext from '../../hooks/context/cardsContext'
import { Card } from '../../interfaces'
import FormCard from '../FormCard'
import styles from './ListCard.module.scss'

export default function ListCard() {
  const [cards] = useContext<any>(cardsContext)
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
              <li key={cardNumber} className={styles.item} onClick={() => handleEdit({ nameInCard, cardNumber, expiryDate, cvc, id })} data-cy={`${nameInCard + id}`}>
                <span data-cy={nameInCard}>{nameInCard}</span>
                <span data-cy={cardNumber?.slice(-4)}>{cardNumber?.slice(-4)}</span>
                <span data-cy={expiryDate}>{expiryDate}</span>
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
