describe("Tricentis Practice", () => {
    it("24499", () => {
        //get website
        cy.visit("https://obstaclecourse.tricentis.com/Obstacles/24499");
        //get element and extract text
        cy.get('#typeThis').invoke('text').then((value) => {
            //type text into the box
            cy.get('#s2id_autogen1').type(value).then(() => {
                //get the length of the autocomleted list
                cy.get('.select2-results').find('li').its('length').then((value) => {
                    //remove the whole page coverage
                    cy.get('#entryCount').click({ force: true });
                    //input the length value
                    cy.get('#entryCount').type(value.toString());
                })
            });
        })
    })
})