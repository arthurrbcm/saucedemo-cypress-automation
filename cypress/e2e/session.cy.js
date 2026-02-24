describe('Session Optimization', () => {

  beforeEach(() => {

    cy.session('standard_user', () => {

      cy.visit('/')

      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()

      cy.url().should('include', 'inventory')

    })

  })

  it('Should reuse session correctly', () => {

    // Apenas visita a home
    cy.visit('/')

    // Executa o login novamente (sem digitar)
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Agora valida inventário
    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible')

  })

})