import { render } from '@testing-library/react'
import Input from '../index'

describe("Input component", () => {
  test("Render Input component", () => {
    const { getByText, getByRole } = render(<Input register={jest.fn()} label="Input mock"/>)

    expect(getByText(/input mock/i)).toBeInTheDocument()    
    expect(getByRole('textbox')).toBeInTheDocument()
  })
})
