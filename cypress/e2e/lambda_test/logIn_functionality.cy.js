///  <reference types="Cypress" />
import Initializer from "../../support/POM/PageInitializer"

describe('Log in functionality', () => {
    before('launch lambda test website', () =>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        
    })

    it('Log in with negative credentials', () =>{
        cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span').click()
        cy.get('#input-email').type('myemail@gmail.com')
        cy.get('#input-password').type('12345678')
        cy.get('input[value="Login"]').click()
        cy.get('div[class="alert alert-danger alert-dismissible"]').should('exist')
        cy.contains('Warning: No match for E-Mail Address and/or Password.')
    })
    it('Log in with positive credentials', () => {
        cy.fixture('/log_in_positiveCredentials.json').then((logInData) => {
            Cypress.POM.homePage().getMyAccountButton().click()




        })
    })
    


})