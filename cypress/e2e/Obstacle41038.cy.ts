describe("Tricentis Practice", () => {
    it("41038", () => {
        cy.visit("41038"); //BaseUrl used
        cy.get('#halfButton').click('right');
    })
})