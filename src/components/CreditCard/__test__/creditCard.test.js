import { render } from '@testing-library/react'
import CreditCard from '../index'

const props = { nameInCard: 'Mock name card', cardNumber: '1234567812345678', expiryDate: '11/25', cvc: '123'}

describe("CreditCard component", () => {
  test("Render CreditCard component", () => {
    const { getByText } = render(<CreditCard {...props}/>)
    
    expect(getByText(/mock name card/i)).toBeInTheDocument()
    expect(getByText(/1234567812345678/i)).toBeInTheDocument()
  });
})
