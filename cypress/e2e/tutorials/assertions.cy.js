describe('assertions demo', () => {

        it('implicit assertions', () => {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
                //THIS IS IMPLICIT ASSERTIONS
                //should    and
                //'include' - if var inclde some spec part
                cy.url().should('include', 'index.php/auth/login')
                        //we can chain should() functions
                        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                        .should('contain', '/web');

                cy.url().should('include', 'index.php/auth/login')
                        //we can chain and() functions
                        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                        .and('contain', '/web')
                        //negative assertion 'not.contain'
                        .and('not.contain', '1234556');

                //capture title of page
                cy.title().should('include', 'Orange')
                        .and('eq', 'OrangeHRM')
                        .and('contain', 'HRM');


                //check if logo is present 'be.visible'
                cy.get('.orangehrm-login-branding > img').should('be.visible')
                        //same we can use 'exist'
                        .and('exist');


                //check how many links are present on page we use xpath 
                cy.xpath('//a').should('have.length', '5'); //NO of links

                cy.xpath('//input[@name="username"]').type('Admin');
                cy.xpath('//input[@name="username"]').should('have.value', 'Admin');


        })
        it('explicit assertions', () => {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
                cy.xpath('//input[@name="username"]').type('Admin');
                cy.xpath('//input[@name="password"]').type('admin123');
                cy.get('.oxd-button').click();

                let expName = 'xyz';
                cy.get('.oxd-userdropdown-name').then((x) => {
                        let actName = x.text();
                        //BDD approach
                        expect(actName).to.eq(expName);
                        expect(actName).to.not.eq(expName);

                        //TDD approach
                        assert.eq(actName,expName);
                        assert.not.eq(actName,expName);
                })


        })




})