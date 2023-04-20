/// <reference types="Cypress" />


describe('intercept with cypress', () => {

        it('test api with simple intercept', () => {
                cy.visit('/')
                cy.intercept({
                        path: '/posts'
                }).as('posts');
                cy.xpath('(//a[text()="/posts"])[1]').click()
                cy.wait('@posts').then((inter) => {
                        cy.log(JSON.stringify(inter));
                })
        })

})