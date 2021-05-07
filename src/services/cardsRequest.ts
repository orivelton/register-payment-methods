const cardsRequest = async ({ cards }) => {
  if(!cards) return
  const result = await fetch('/api/cards', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ cards: cards })
  }).catch(error => {
    console.error(error)
  })

  return result
}

export { cardsRequest }