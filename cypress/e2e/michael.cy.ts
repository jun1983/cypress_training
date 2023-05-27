describe('obstacle practice', () => {
    it('click twice', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72954');
        cy.contains('a','Click Me 2x').click()
        cy.contains('a','Click me once more').click()
    });

    it('41041', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41041')
        cy.get('input[name="resulttext"]')
            .type('{Click}', { parseSpecialCharSequences: false })
    });

    it('drag', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/60469')
        cy.get('#toscabot').dragTo('#to');
    })
})