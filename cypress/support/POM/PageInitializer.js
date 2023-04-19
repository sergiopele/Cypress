import RegisterAccount from "/Users/sergiopele/Documents/cypressTest/cypress/support/POM/RegisterAccount.js";
import HomePage from "/Users/sergiopele/Documents/cypressTest/cypress/support/POM/HomePage.js"
import MyAccount from "/Users/sergiopele/Documents/cypressTest/cypress/support/POM/MyAccount.js"
import Login from "/Users/sergiopele/Documents/cypressTest/cypress/support/POM/LogIn.js"

class Initializer{
    homePage(){
    return new HomePage()
    }
    myAccount(){
    return new MyAccount();
    }
    registerAccount(){
    return new RegisterAccount();
    }
    logIn(){
    return new Login();
    }
}

const pom = new Initializer();
Cypress.POM = pom;
export default Initializer