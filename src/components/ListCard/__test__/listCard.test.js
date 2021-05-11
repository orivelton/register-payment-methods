import { render } from '@testing-library/react'
import ListCard from '../index'

describe("ListCard component", () => {
  test("Render empty ListCard component", () => {
    const { getByText } = render(<ListCard />)
    expect(getByText(/Add your first card/i)).toBeInTheDocument()    
  })
})
