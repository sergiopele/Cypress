class HomePage {
    getMyAccountButton(){
    return cy.xpath('(//span[contains(text()," My account")])[2]')
    }
}
export default HomePage