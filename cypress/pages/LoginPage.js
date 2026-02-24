class LoginPage {

  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button'),
    errorMessage: () => cy.get('[data-test="error"]')
  }

  visit() {
    cy.visit('/')
  }

  login(username, password) {
    this.elements.usernameInput().clear().type(username)
    this.elements.passwordInput().clear().type(password)
    this.elements.loginButton().click()
  }

}

export default new LoginPage()