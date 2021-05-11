import { ReactElement, useState } from 'react'
import Button from '../components/Button'
import FormCard from '../components/FormCard'
import ListCard from '../components/ListCard'
import cardsContext from '../hooks/context/cardsContext'
import { Card } from '../interfaces'

type IndexType = {
  cards: Card[]
}

export default function Index({ cards }: IndexType): ReactElement {
  const [card, setCard] = useState(cards)
  const [addCard, setAddCard] = useState(false)

  const handleAddCard = () => {
    setAddCard(true)
  }
  
  return(
    <div className="container">
      <h1 className="title">Your cards</h1>
      <h2 className="subtitle">Add, edit or delete your cards any time</h2>

      <br />
      <cardsContext.Provider value={[card, setCard]}>
        <ListCard />
        { addCard && <FormCard newCard handleClose={setAddCard} /> }
      </cardsContext.Provider>
      
      <Button text="Add new card" onClick={handleAddCard}/>
    </div>
  )
}

export async function getServerSideProps({ req }: any) {
  return { props: { cards: req.cookies.cards ? JSON.parse(req.cookies.cards) : [] } }
}
