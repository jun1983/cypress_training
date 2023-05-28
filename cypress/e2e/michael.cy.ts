describe('obstacle practice', () => {
    it('72954-click twice', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72954')
        cy.contains('a', 'Click Me 2x').click()
        cy.contains('a', 'Click me once more').click()
        cy.contains('Good job!')
    });

    it('41041-input', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41041')
        cy.get('input[name="resulttext"]')
            .type('{Click}', { parseSpecialCharSequences: false })
        cy.contains('Good job!')
    });

    it('60469-drag', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/60469')
        cy.get('#toscabot').dragTo('#to')
        cy.contains('Good job!')
    })
})