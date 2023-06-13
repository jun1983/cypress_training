describe ('CC practice', () => {
    it('729544 click twice', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72954/')
        cy.contains('Click Me 2x').click()
        cy.contains('Click me once more').click()
        cy.contains('Good job')
    });


    it('41041 input click', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41041/')
        cy.get('[name="resulttext"]').type('{Click}', { parseSpecialCharSequences: false })
        cy.contains('Good job')
    })

    it('60469 drag', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/60469/')
        cy.get('#toscabot').dragTo('#to')
        cy.contains('Good job')
    })

    it('41038', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41038/')
        cy.get("#halfButton").click('right')
    })

    it('22505', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/22505')
        cy.get(':nth-child(3) > .text-center > #dontuseid').click()
    })

    it.only('12952', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/12952/')
        cy.get('#thisoneistheright a').click()
    })
    
})