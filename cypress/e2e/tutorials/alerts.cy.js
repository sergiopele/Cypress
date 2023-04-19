/// <reference types="Cypress" />
describe('Alert', () => {
        // 1) JavaScript Alert: it will have some text and 'OK' button

        it('JS alert', () => {
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
                cy.get('button[onclick="jsAlert()"]').click();
                //here we are ging to handle alert window by using "on" method and 'window:alert'
                // then in we specify instance as a 'alertWindow'
                cy.on('window:alert', (alertWindow) => {
                        // inmportamt ---> if we want validate something in alert window we nee to do it within {} braces;
                        expect(alertWindow).to.contains('I am a JS Alert');
                })
                cy.get('#result').should('be.visible')
                        .and('have.text', 'You successfully clicked an alert');

        })
        // 2) JavaScript Confirm Alert: it will have some text with 'OK' and 'Cancel' buttons
        //if we want skip certain test we use .skip or if we want execute only one particular TC we use .only
        it('JS Confirm Alert --- ok', () => {
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
                cy.get('button[onclick="jsConfirm()"]').click();
                // for JS confirm alerts we use 'window:confirm'
                cy.on('window:confirm', (alertPrompt) => {
                        expect(alertPrompt).to.contains('I am a JS Confirm');
                })
                // cypress automatically close JS alert window
                //cypress by default use 'OK' button on confirm alert
                cy.get('#result').should('be.visible')
                        .and('have.text', 'You clicked: Ok');
        })

        it('JS Confirm Alert --- cancel', () => {
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
                cy.get('button[onclick="jsConfirm()"]').click();
                cy.on('window:confirm', (alertPrompt) => {
                        expect(alertPrompt).to.contains('I am a JS Confirm');
                })
                // here we going to close alert window by using 'Cancel' button
                cy.on('window:confirm', () => false); 
                // false --> cancel
                // true  --> OK
                cy.get('#result').should('have.text', 'You clicked: Cancel');
        })
        // 3) JavaScript Prompt Alert: it will have some text with a text box for user input along with 'OK' 
        it('JS Prompt Alert -- ok', () => {
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
                //important --- we need provide input to prompt window before we click on prompt alert button
                cy.window().then((win) => {
                        cy.stub(win, 'prompt').returns('I was here');
                })
                cy.get('button[onclick="jsPrompt()"]').click();
                cy.get('#result').should('have.text', 'You entered: I was here');

        })

        it('JS Prompt Alert -- cancel', () => {
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
                //important --- we need provide input to prompt window before we click on prompt alert button
                
                cy.window().then((win) => {
                        cy.stub(win, 'prompt').returns();
                })
                cy.on('window:alert', () => false);
                cy.get('button[onclick="jsPrompt()"]').click();
                cy.get('#result').should('have.text', 'You entered: null');

        })
        // 4) Authenticated Alert
        it('Basic Auth', () => {
                cy.visit('https://the-internet.herokuapp.com/basic_auth', 
                        {auth: {
                                username: "admin", 
                                password: "admin"
                                }
                        });
                cy.xpath('//p[contains(text(),"Congratulations")]').should('contain', 'Congratulations! You must have the proper credentials.');

        })



})