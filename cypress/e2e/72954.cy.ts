describe('obstacle 72954', () => {
    it('72954', () => {
      cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72954')
      cy.contains("Click Me 2x").click()
      cy.contains("Click me once more").click()
      cy.contains("Good job!")
    })
  })