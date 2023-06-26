describe("Tricentis Practice", () => {
    it("41040", () => {
        //get website
        cy.visit("https://obstaclecourse.tricentis.com/Obstacles/41040");
        //get the button and click
        cy.get('#buttontoclick').click({ force: true });
    })
})