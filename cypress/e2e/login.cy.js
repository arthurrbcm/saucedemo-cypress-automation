describe('Login Flow - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Teste de login com sucesso', () => {

    cy.login('standard_user', 'secret_sauce')

    // Valida redirecionamento para inventory
    cy.url().should('include', '/inventory.html')

    // Valida que lista de produtos está visível
    cy.get('.inventory_list').should('be.visible')

  })


  it('Teste exibe erro de login', () => {

    cy.login('invalid_user', 'wrong_password')

    cy.get('[data-test=error]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')

  })

})