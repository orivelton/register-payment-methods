import { render } from '@testing-library/react'
import FormCard from '../index'

describe("FormCard component", () => {
  test("Render FormCard component", () => {
    const { getByRole } = render(<FormCard />)
    expect(getByRole('heading', { name: /edit your card/i })).toBeInTheDocument()    
  })

  test("Render FormCard component", () => {
    const { getByRole } = render(<FormCard newCard />)
    expect(getByRole('heading', { name: /add your card details/i })).toBeInTheDocument()
  })
})
