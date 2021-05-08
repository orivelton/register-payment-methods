import { useState } from 'react'
import FormCard from '../components/FormCard'
import ListCard from '../components/ListCard'
import Modal from '../components/Modal'
import cardsContext from '../hooks/context/cardsContext'
// import Modal from '../components/Modal'

export default function Index({ cards }) {
  const [card, setCard] = useState(cards || [])
  const [addCard, setAddCard] = useState(false)

  const handleAddCard = () => {
    setAddCard(true)
  }
  

  return(
    <>
      <h1>Your cards</h1>
      <h2>Add, edit or delete your cards any time</h2>
      <button onClick={handleAddCard}>Add card</button>

      <br />
      <cardsContext.Provider value={[card, setCard]}>
        <ListCard />
      </cardsContext.Provider>
      { addCard && <FormCard handleClose={setAddCard} /> }
      
    </>
  )
}

export async function getServerSideProps({ req }) {
  return { props: { cards: req.cookies.cards ? JSON.parse(req.cookies.cards) : [] } }
}
