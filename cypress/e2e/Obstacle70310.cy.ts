describe("Tricentis Practice", () => {
    it("70310", () => {
        // get website
        cy.visit("https://obstaclecourse.tricentis.com/Obstacles/70310");
        // assert first field of the last row
        cy.get("#orderTable").find('tr').last().contains('Order Value');
        // fill the value in the inputbox
        cy.get("#orderTable").find('tr').last().find('td').last().invoke('text')
            .then((text) => {
                cy.get('#ordervalue').type(text);
            });
    })
})
