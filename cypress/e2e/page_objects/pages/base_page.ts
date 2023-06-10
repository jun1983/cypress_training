class BasePage {
    pageURL:string
    
    visit(){
        cy.visit(this.pageURL)
    }
}

export default BasePage