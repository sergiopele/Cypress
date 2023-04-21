/// <reference types="Cypress" />

describe('custom commands', () => {
        it('handlink link', () => {
                cy.visit('https://demo.nopcommerce.com/')
                cy.viewport('macbook-15')
                
                //cy.xpath('//a[text()="Apple MacBook Pro 13-inch"]').click()
                cy.clickLink('Apple MacBook Pro 13-inch');
                cy.xpath('//h1[text()="Apple MacBook Pro 13-inch"]').should('have.text', 'Apple MacBook Pro 13-inch');
        })
        it.only('overwriting existing command', () => {
                cy.visit('https://demo.nopcommerce.com/')
                cy.viewport('macbook-15')
                cy.clickLink('APPLE MACKBOOK PRO 13-inch')
                cy.xpath('//h1[text()="Apple MacBook Pro 13-inch"]').should('have.text', 'Apple MacBook Pro 13-inch');
        })



})