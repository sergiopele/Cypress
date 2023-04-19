/// <reference types="Cypress"/>
describe('handle web tables', () => {
        beforeEach('login', () => {
                cy.visit('https://demo.opencart.com/admin/');
                cy.get('#input-username').type('demo');
                cy.get('#input-password').type('demo');
                cy.get('[class="btn btn-primary"]').click();
                cy.get('.btn-close').click();
                cy.get('#menu-customer > a ').click();
                cy.xpath('(//ul[@id="collapse-5"]/li)[1]').click();
        })
        it('Check Number Rows & Columns', () => {
                cy.get('table > tbody > tr').should('have.length', 10);
                cy.get('table > thead > tr > td').should('have.length', 7);
        })
        it('Check cell data from specific row & column', () => {
                cy.get('table > tbody > tr:nth-child(5) > td:nth-child(3)')
                        .contains('princytrainings4@gmail.com');
        })
        it('Read all the rows & columns data in the first page', () => {
                cy.get('table > tbody > tr > td')
                        .each(($element, index, $list) => {   //we take each and every row from table
                                cy.log($element.text());
                        })
        })
        it('get total number of pages of the table --- approach 1', () => {
                cy.get('[class="col-sm-6 text-end"]').then((text) => {
                        let pagesNumber = text.text();
                        let totalPages = pagesNumber.substring(
                                pagesNumber.indexOf('(') + 1,
                                pagesNumber.indexOf("Pages") - 1
                        );
                        cy.log('total number of pages is: ' + totalPages);
                });
        })
        it.only('get total number of pages of the table --- approach 2', () => {
                let totalPages = 5;
                for (let p = 1; p <= totalPages; p++) {
                        if (totalPages > 1) {
                                cy.log('active page is === ' + p);
                                cy.get('ul[class="pagination"] > li.page-item:nth-child(' + p + ')').click();
                                cy.wait(2000);
                                cy.get('tbody > tr > td:nth-child(3)').then(($emailRow) => {
                                        cy.log($emailRow.text());
                                })
                        }
                }
        })
})

