/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Add a new Card', () => {
    cy.get('[data-cy="Add new card"]').click()

    cy.get('[data-cy=nameInCard]').type('Integration Card')
    cy.get('[data-cy=cardNumber]').type('1234567812345678')
    cy.get('[data-cy=expiryDate]').type('11/25')
    cy.get('[data-cy=cvc]').type('123')
    cy.get('[data-cy=Confirm]').click()

    cy.get('[data-cy="Integration Card"]').should('be.visible')
    cy.get('[data-cy="5678"]').should('be.visible')
    cy.get('[data-cy="11/25"]').should('be.visible')
  })
})
