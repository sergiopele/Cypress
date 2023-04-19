/// <reference types = "Cypress" />

describe('dropdowns', () => {
        it.skip('select dropdowns with select', () => {
                cy.visit('https://the-internet.herokuapp.com/dropdown')
                cy.get('div > #dropdown')
                        .select('Option 2')
                        .should('have.value', '2');


        })
        // we can use it.skip ---> to skip test
        it.skip('select dropdowns without select', () => {
                cy.visit('https://codenboxautomationlab.com/practice/')
                cy.get('fieldset > #autocomplete').type('Ukrai');
                cy.get('#ui-id-2').click();
                cy.get('fieldset > #autocomplete').should('have.value', 'Ukraine');
        })
        it.skip('autosuggestion dropdwon', () => {
                cy.visit('https://en.wikipedia.org/wiki/Main_Page')
                // I want select Denmark from autosuggestion
                cy.get('input[placeholder="Search Wikipedia"]').type('den')

                // assert quantity of suggestion by provided search word
                cy.get('li[role="option"]').should('have.length', 11);
                cy.get('li[role="option"]').contains('Denmark').click();
        })

        it('dynamic dropdown', () => {
                cy.visit('https://www.google.com/');
                cy.get('textarea[name="q"]').type('cypress automation');
                // sometimes contains doesn't work with dynamic dropdowns, so we use each()
                cy.get('div.wM6W7d').should('have.length', 12);
                cy.get('div.wM6W7d > span').each(($element, index, $array) => {
                        if ($element.text() == 'cypress automation tutorial') {
                                cy.wrap($element).click();
                        }
                })
                cy.wait(1000);
                cy.get('textarea[name="q"]').should('have.value', 'cypress automation tutorial');
        })



})