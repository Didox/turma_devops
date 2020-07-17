/// <reference types="cypress" />
 
context('testar Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deveria mostrar a lista de clientes', () => {
    cy.get('li').should("to.have.length", 4)
  })

  it('Deve preencher um CPF', () => {
    cy.get('input').type('311.796.430-46')
  })
})