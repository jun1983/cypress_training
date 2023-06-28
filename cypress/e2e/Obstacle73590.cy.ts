describe("Tricentis Practice", () => {
    it("73590", () => {
        cy.visit("73590"); //BaseUrl used
        cy.get('[placeholder="User"]').type('optional');
        cy
        .get('#pass').click()
        .get('#actual').type('ABC');
        cy
        .contains('Click Me').click();
    })
})