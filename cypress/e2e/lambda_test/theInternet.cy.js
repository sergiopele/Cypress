///  <reference types="Cypress" />
describe('practice test', () => {
        beforeEach('visit a website', () => {
                cy.visit('https://the-internet.herokuapp.com/')
        })

        it('dropdown', () => {
                cy.get('a[href="/dropdown"').click();
                cy.get('select#dropdown').select('Option 2');
        })
        it('dropdown#2', () => {
                cy.get('a[href="/dropdown"').click();
                cy.get('select#dropdown').select('Option 1');
        })

        it('entry ad', () => {
                cy.get('a[href="/entry_ad"').click();
                cy.get('.modal-footer>p').click();
        })
        it('exit intent', () => {
                cy.get('a[href="/exit_intent').click();
                cy.get('.example >h3').trigger('mouseleave', { clientX: 300, clientY: -100 });
                cy.wait(500);
                cy.get('.modal-title >h3').invoke('text').should('contains', 'This is a modal window')
                cy.get('.modal-footer>p').click();
        })

        it('drag and drop', () => {
                cy.get('a[href="/drag_and_drop"]').click();
                const dataTransfer = new DataTransfer();
                cy.get('div[draggable="true"]').first().then((element) => {
                        cy.wrap(element.text())
                                .should('be.eq', 'A');
                });
                cy.get('div[draggable="true"]').eq(1).then((element) => {
                        cy.wrap(element.text())
                                .should('be.eq', 'B');
                });
                cy.get('#column-a').trigger('dragstart', { dataTransfer });
                cy.get('#column-b').trigger('drop', { dataTransfer });
                cy.get('div[draggable="true"]').first().then((element) => {
                        cy.wrap(element.text())
                                .should('be.eq', 'B');
                })
                cy.get('div[draggable="true"]').eq(1).then((element) => {
                        cy.wrap(element.text())
                                .should('be.eq', 'A');
                })
        })
        /*it('download file', () => {
                cy.get('a[href="/download"]').click();
                //download Test.txt
                cy.wait(1000)
                cy.get('a[href="download/Test.txt"]').click();
                cy.readFile('/Users/sergiopele/Documents/cypressTest/cypress/downloads/Test.txt').should('contain', 'This is the Producer File');
        })
        */

        it('broken images', () => {
                cy.get('a[href="/broken_images"]').click();
                cy.get('.example > img').each(($img) => {
                        cy.wrap($img).scrollIntoView().should('be.visible');
                        expect($img[0].naturalWidth).to.be.greaterThan(0, 'if == 0, image is broken');
                        expect($img[0].naturalHeight).to.be.greaterThan(0, 'if == 0, image is broken');
                })
        })

        it('Horizontal Slider', () => {
                cy.contains('a', 'Horizontal Slider').should('be.visible').click();
                cy.get('input[type="range"]').invoke('val', 1).trigger('input');
        })
        it('JS alert, click for JS Alert', () => {
                cy.contains('a', 'JavaScript Alerts').should('be.visible').click();
                cy.contains('button', 'Click for JS Alert').click();
                cy.on('window:alert', (str) => {
                        expect(str).to.equal('I am a JS Alert');
                })
                cy.on('window:confirm', () => true);
                cy.get('#result').should('have.text', 'You successfully clicked an alert');

        })
        it('JS Alert, click for JS Confirm -> press OK', () => {
                cy.contains('a', 'JavaScript Alerts').should('be.visible').click();
                cy.contains('button', 'Click for JS Confirm').click();
                cy.on('window:alert', (str) => {
                        expect(str).to.equal('I am a JS Confirm');
                        cy.on('window:confirm', () => true);
                })
                cy.get('#result').should('have.text', 'You clicked: Ok');

        })
        

        it('JS Alert, click for JS Confirm -> press Dismiss', () => {
                cy.contains('a', 'JavaScript Alerts').should('be.visible').click();
                cy.contains('button', 'Click for JS Confirm').click();
                cy.on('window:confirm', () => false)
                cy.get('#result').should('have.text', 'You clicked: Cancel');
                
        })
        
        it('JS Alert, click for JS Prompt -> enter I was here', () => {
                cy.contains('a', 'JavaScript Alerts').should('be.visible').click();
                cy.window().then(($win) => {
                        cy.contains('button', 'Click for JS Prompt').click();
                        cy.stub($win, 'prompt').returns('I was here');
                })
                cy.get('#result').should('have.text', 'You entered: I was here');
                
        })

        it('typos', () => {
                cy.contains('Typos').click();
                cy.get('.example > p').eq(1)
                .should('have.text', "\n Sometimes you'll see a typo, other times you won't.\n")
        })






})