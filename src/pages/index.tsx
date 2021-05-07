import FormCard from '../components/FormCard'
import ListCard from '../components/ListCard'
// import Modal from '../components/Modal'

export default function Index({ cards }) {
  console.log(cards)
  return(
    <>
      <h1>Your cards</h1>
      <h2>Add, edit or delete your cards any time</h2>
      <button>Add card</button>
      <ListCard />
      <FormCard />
    </>
  )
}

export async function getServerSideProps({ req }) {
  return { props: { cards: JSON.parse(req.cookies.cards) || "" } }
}
