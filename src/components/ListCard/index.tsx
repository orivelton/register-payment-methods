import { useContext, useState } from "react"
import cardsContext from "../../hooks/context/cardsContext"
import { cardsRequest } from "../../services/cardsRequest"
import FormCard from "../FormCard"

export default function ListCard() {
  const [cards, setCards] = useContext(cardsContext)
  const [editCard, setEditCard] = useState(false)
  const [card, setCard] = useState({})


  const deleteCard = async id => {
    const cardsUpdated = [...cards].filter(card => card.cardNumber !== id)
    setCards(cardsUpdated)
    cardsRequest({ cards: cardsUpdated})
  }

  const handleEdit = card => {
    setEditCard(false)
    setCard(card)
    setEditCard(true)
  }

  return(
    <>
      <ul>
        {
          cards.length ? (
            cards.map(({ nameInCard, cardNumber, expiryDate, cvc}) => (
              <li key={cardNumber}>
                {nameInCard} | {cardNumber} | {expiryDate} | {cvc}
                <button onClick={() => handleEdit({ nameInCard, cardNumber, expiryDate, cvc})}>edit</button>
                <button onClick={() => deleteCard(cardNumber)}>delete</button>
              </li>
            ))
            ) : (
              <li>No Cards to show yet, add your first card</li>
              )
            }
      </ul>

      { editCard && <FormCard {...card}/> }
    </>
  )
}