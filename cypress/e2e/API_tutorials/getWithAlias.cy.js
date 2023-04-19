/// <reference types="Cypress" />

describe('GET call with Alias', () => {
        beforeEach('before method', () => {
                cy.request('/api/unknown').as('resources');
        })
        it('validate header', () => {
                cy.get('@resources')
                        .its('headers')
                        .its('content-type')
                        .should('include', 'application/json; charset=utf-8');
        })
        it('validate status code', () => {
                cy.get('@resources')
                        .its('status')
                        .should('eq', 200);
        })
        it('body should contain "total_pages", "data", "per_page", "page", "total"', () => {
                cy.get('@resources')
                        .its('body')
                        .should('contains', {
                                'total_pages': 2,
                                'per_page': 6,
                                'total': 12,
                                'page': 1
                        });
                cy.get('@resources')
                        .its('body')
                        .should('have.nested.property', 'data');                
        })
})