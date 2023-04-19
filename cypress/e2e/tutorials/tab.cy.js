/// <reference types="Cypress" />
describe('tabs', () => {
      it('approach 1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        // by default we can not handle new windows in cypress so we have to remove 
        //'target' attribute from DOM by using 'invoke('removeAttr')' ---> it allows us to open window in the same tab
        cy.get('div.example  > a').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
        cy.get('div.example > h3').should('be.visible')
                .and('have.text', 'New Window');
        cy.go('back');

      })  
      it.only('approach 2 by using href attr and open it as cy.visit', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        //we are using jQuerry function here to extract href attr from element by prop() method
        cy.get('div.example  > a').then((hrefElement) => {
                let url = hrefElement.prop('href');
                cy.visit(url);
        })
      })
})
