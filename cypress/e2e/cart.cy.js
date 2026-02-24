describe('Carrinho', () => {

  beforeEach(() => {

    cy.visit('/')

    cy.get('#user-name').should('be.visible').type('standard_user')
    cy.get('#password').should('be.visible').type('secret_sauce')
    cy.get('#login-button').click()

    // Garante que realmente foi para inventory
    cy.url().should('include', 'inventory')
    cy.get('.inventory_list').should('be.visible')

  })

  it('Adicionando e validando produto no carrinho', () => {

    cy.get('[data-test^="add-to-cart"]').first().click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')

  })

  it('Valida preço do produto no carrinho', () => {

    cy.get('[data-test^="add-to-cart"]').first().click()

    cy.get('.shopping_cart_link').click()

    cy.get('.inventory_item_price')
      .first()
      .invoke('text')
      .then((price) => {

        expect(price).to.match(/\$\d+\.\d{2}/)

      })

  })

})