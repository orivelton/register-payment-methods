import { expiryDateFormat } from '../format'

describe("expiryDateFormat function", () => {
  test("expiryDateFormat options", () => {
    expect(expiryDateFormat()).toBeUndefined()
    expect(expiryDateFormat('2')).toEqual('02')
    expect(expiryDateFormat('ab')).toEqual('')
    expect(expiryDateFormat('[]')).toEqual('')
    expect(expiryDateFormat('112')).toEqual('11/2')
    expect(expiryDateFormat('13')).toEqual('01/3')
  })
})
