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
                        expect(inter.response.body).to.have.length(100);
                })
        })
        it.only('mocking with intercept test', () => {
                cy.visit('https://jsonplaceholder.typicode.com/');
                cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {totalpost: 5}).as('post');
                cy.xpath('(//a[text()="/posts"])[1]').click();
                cy.wait('@post')
 
        })
})