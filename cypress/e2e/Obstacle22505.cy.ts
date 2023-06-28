describe("Tricentis Practice", () => {
    it("22505", () => {
        cy.visit("22505"); //BaseUrl used
        cy.get('.text-center').contains('Click me!').click();
    })
})