/// <reference types="Cypress" />
describe('iFrames', () => {
        it('approach 1', () => {
                //in cypress we have not spec methods to handle iframes
                cy.visit('https://the-internet.herokuapp.com/iframe');
                const iFrame = cy.get('iframe#mce_0_ifr')
                        .its('0.contentDocument.body') // we specify a document that iframe contains, 0 --- means indexing
                        .should('be.visible')
                        .then(cy.wrap);
                //then if we want pass something in iframe we invoke var of frame and type text

                // here we want type text and choose Bold text type in iFrame, 
                //so we use cmd+a to select all text that we entered in field and click on Bold icon on frame
                iFrame.clear().type('Welcome {cmd+a}');
                cy.get('[aria-label="Bold"]').click();
        })

        //here we are going to use our custom method
        it('custom iFrame method', () => {
                cy.visit('https://the-internet.herokuapp.com/iframe');
                cy.getIframe('iframe#mce_0_ifr').clear().type('it`s custom command {cmd+a}');
                cy.get('[aria-label="Bold"]').click();
        })
        it('approach 2 by using iframe plagin', () => {
                cy.visit('https://the-internet.herokuapp.com/iframe');
                cy.frameLoaded('iframe#mce_0_ifr'); // this will load iframe
                //to interact with iframe we use iframe method
                cy.iframe('iframe#mce_0_ifr').clear().type('its plugin iframe {cmd+a}');
                cy.get('[aria-label="Bold"]').click();




        })



})