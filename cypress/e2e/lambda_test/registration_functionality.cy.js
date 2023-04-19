///  <reference types="Cypress" />
import Initializer from "../../support/POM/PageInitializer"


describe('registration functionality', () => {
    before('before visit website', () =>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })
    
    it('registration with valid credentials', () => {
       
       cy.fixture('/registration_testdata.json').then((testdata) => {
            Cypress.POM.homePage().getMyAccountButton().click()
            Cypress.POM.myAccount().getNewCustomer_Option().click()
            Cypress.POM.registerAccount().getFirstNameField().type(testdata.firstname)
            Cypress.POM.registerAccount().getLastNameField().type(testdata.lastname)
            Cypress.POM.registerAccount().getEmailField().type(testdata.email)
            Cypress.POM.registerAccount().getTelephoneField().type(testdata.telephone)
            Cypress.POM.registerAccount().getPasswordField().type(testdata.password)
            Cypress.POM.registerAccount().getConfirmPasswordField().type(testdata.confirmpassword)
            Cypress.POM.registerAccount().subscribeOption(testdata.subscribe)
            Cypress.POM.registerAccount().getAgreePrivatePolicy(testdata.agreePrivatePolicy)
            Cypress.POM.registerAccount().getConfirmButton().click()
            Cypress.POM.registerAccount().getYourAccountHasBeenCreated().should('be.visible')
            Cypress.POM.registerAccount().getTextYourAccountCreated().invoke('text').should('contains', ' Your Account Has Been Created!')
       })
    })


})
