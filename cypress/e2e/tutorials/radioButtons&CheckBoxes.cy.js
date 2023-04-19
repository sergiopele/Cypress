describe('radio button and checkboxes', () => {
        it('radio buttons', () => {
                cy.visit('https://itera-qa.azurewebsites.net/home/automation')
                // we going to check visibility of radiobuttons
                cy.get('input#male').should('be.visible');
                cy.get('input#female').should('be.visible');

                // selecting radiobuttons we use check() 
                // and we use assertion to check whether radio is salected
                cy.get('input#male').check().should('be.checked');
                cy.get('input#female').should('not.be.checked');
                
        })

        it('check box', () => {
                cy.visit('https://itera-qa.azurewebsites.net/home/automation')
                // check visibility of the element
                cy.get('input#monday').should('be.visible');
                
                //selecting single checkbox
                cy.get('input#monday').check().should('be.checked');

                //here we uncheck checkbox and assert wether it's unchecked
                cy.get('input#monday').uncheck().should('not.be.checked');

                //select all checkboxes
                cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked');
                

        })






})