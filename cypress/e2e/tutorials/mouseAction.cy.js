/// <reference types ="Cypress" />
describe('Mouse Operations', () => {
        it('Mouse Hover', () => {
                cy.visit('https://demo.opencart.com/');
                cy.xpath('(//a[contains(text(),"Mac")])[1]').should('not.be.visible');
                cy.get('[class="nav-item dropdown"]:nth-child(1) > a')
                        .trigger('mouseover').click();
                cy.xpath('(//a[contains(text(),"Mac")])[1]').should('be.be.visible').click();
        })
        it.only('Right click', () => {
                cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
                cy.xpath('//span[text()="right click me"]').trigger('contextmenu');
                cy.xpath('//span[text()="Edit"]').trigger('contextmenu');
                cy.on('window:alert', (alert) => {
                        expect(alert).to.include('clicked: edit');
                })
        })
        it('Double click', () => {
                //we use trigger('dbclick');
                //or .dbclick() --- method;
        })
        it('Drag and Drop using plugin', () => {
                
        })
        it('Scrolling Page', () => {

        })



})