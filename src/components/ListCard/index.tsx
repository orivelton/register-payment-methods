import { useContext } from "react"
import cardsContext from "../../hooks/context/cardsContext"
import { cardsRequest } from "../../services/cardsRequest"

export default function ListCard() {
  const [cards, setCards] = useContext(cardsContext)

  const deleteCard = async id => {
    const cardsUpdated = [...cards].filter(card => card.cardNumber !== id)
    setCards(cardsUpdated)
    cardsRequest({ cards: cardsUpdated})
  }

  return(
    <ul>
      {
        cards.length ? (
          cards.map(({ nameInCard, cardNumber, expiryDate, cvc}) =>(
            <li key={cardNumber}>
              {nameInCard} | {cardNumber} | {expiryDate} | {cvc}
              <button>edit</button>
              <button onClick={() => deleteCard(cardNumber)}>delete</button>
            </li>
          ))
        ) : (
          <li>No Cards to show yet, add your first card</li>
        )
      }
    </ul>
  )
}