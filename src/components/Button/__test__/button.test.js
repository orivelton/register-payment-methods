import { render, fireEvent } from '@testing-library/react'
import Button from '../index'

describe("Button component", () => {
  test("Render Button component", () => {
    const { getByRole } = render(<Button text="Confirm"/>)
    expect(getByRole('button', { name: /confirm/i })).toBeInTheDocument()
  });

  test("Render Button component with variant delete", () => {
    const { getByRole } = render(<Button text="Delete" variant="delete" />)
    expect(getByRole('button', { name: /delete/i })).toBeInTheDocument()
    expect(getByRole('button', { name: /delete/i })).toHaveClass('btn__delete')  
  });

  test("Component handle Click", () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<Button text="Click" onClick={handleClick} />)
    expect(getByRole('button', { name: /click/i })).toBeInTheDocument()
    fireEvent.click(getByRole('button', { name: /click/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

})
