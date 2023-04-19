class Login{
    getEmailField(){
        return cy.xpath('//input[@name="email"]')
    }
    getPasswordField(){
       return cy.xpath('//input[@name="password"]') 
    }
}
export default Login