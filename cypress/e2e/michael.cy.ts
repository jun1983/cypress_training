describe('drag', () => {
    xit('click twice', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72954');
        cy.get('.btn').click().click()
    });

    xit('41041', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41041')
        cy.get('input[name="resulttext"]')
            .type('{{}Click}')
    });
    it('drag', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/60469')
        cy.get('#toscabot').dragTo('#to')
    })
})