class RegisterAccount{
    getFirstNameField(){
        return cy.xpath('//input[@name="firstname"]')
    }
    getLastNameField(){
        return cy.xpath('//input[@name="lastname"]')
    }
    getEmailField(){
        return cy.xpath('//input[@name="email"]')
    }
    getTelephoneField(){
        return cy.xpath('//input[@name="telephone"]')
    }
    getPasswordField(){
        return cy.xpath('//input[@name="password"]')
    }
    getConfirmPasswordField(){
        return cy.xpath('//input[@name="confirm"]')
    }
    subscribeOption(text){
        switch (text){
            case 'Yes' : {
                cy.xpath('//label[@for="input-newsletter-yes"]').click()
                break;
            }
            case 'No' : {
                cy.xpath('//label[@for="input-newsletter-no"]').click()
            }
        }
    }
    getAgreePrivatePolicy(text){
        if(text === 'Check') {
            cy.xpath('//label[@for="input-agree"]').click()
        }
    }
    getConfirmButton(){
        return cy.xpath('//input[@type="submit"]')
    }
    getTextYourAccountCreated(){
        return cy.xpath('//i[@class="fas fa-check-circle text-success"]/following-sibling::text()')
    }
    getYourAccountHasBeenCreated(){
        return cy.xpath('//h1[@class="page-title my-3"]')
    }

}
export default RegisterAccount