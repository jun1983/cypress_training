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
    });

    it('41038', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41038')
        cy.contains('Click into my right half').click('right', { force: true })
        cy.contains('Good job!')
    });

    it('41037', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41037')
        cy.get('tbody > :nth-child(3) > :nth-child(5)').invoke('text').then((text) => {
            cy.get('input[name=resulttext]')
                .type(text)
            cy.contains('Good job!')

        })
    });

    it('22505', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/22505')
        cy.contains('Click me!').click()
        cy.contains('Good job!')
    });
    
})