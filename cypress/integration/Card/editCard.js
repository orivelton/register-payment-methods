/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="Add new card"]').click()
    cy.get('[data-cy=nameInCard]').type('Integration Card')
    cy.get('[data-cy=cardNumber]').type('1234567812345678')
    cy.get('[data-cy=expiryDate]').type('11/25')
    cy.get('[data-cy=cvc]').type('123')
    cy.get('[data-cy=Confirm]').click()
  })

  it('Edit Card', () => {
    cy.get('[data-cy="Integration Card0"]').click()
    cy.get('[data-cy=nameInCard]').clear().type('Integration Card Edited')
    cy.get('[data-cy=cardNumber]').clear().type('8765432187654321')
    cy.get('[data-cy=expiryDate]').clear().type('01/26')
    cy.get('[data-cy=cvc]').clear().type('321')
    cy.get('[data-cy=Confirm]').click()

    cy.get('[data-cy="Integration Card Edited"]').should('be.visible')
    cy.get('[data-cy="4321"]').should('be.visible')
    cy.get('[data-cy="01/26"]').should('be.visible')
  })
})
