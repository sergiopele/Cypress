// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-downloadfile/lib/downloadFileCommand')
require('cypress-iframe');
Cypress.Commands.add('getIframe', (iframeLocator) => {
        return cy.get('iframe#mce_0_ifr')
                .its('0.contentDocument.body') // we specify a document that iframe contains, 0 --- means indexing
                .should('be.visible')
                .then(cy.wrap)
})
