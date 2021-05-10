import { render } from '@testing-library/react'
import Modal from '../index'
describe("Modal component", () => {
  test("Render Modal component", () => {
    const { getByText } = render(<Modal handleClose={jest.fn()} ><p>Modal</p></Modal>)
    expect(getByText(/modal/i)).toBeInTheDocument()    
  })
})
