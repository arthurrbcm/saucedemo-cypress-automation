// Comando customizado para encapsular login
Cypress.Commands.add('login', (username, password) => {

  // Preenche campo de usuário
  cy.get('[data-test=username]').type(username)

  // Preenche campo de senha
  cy.get('[data-test=password]').type(password)

  // Clica no botão de login
  cy.get('[data-test=login-button]').click()

})