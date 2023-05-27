describe('Click Button Test', () => {

  it('41040', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41040');

    // Check if the button is visible

    cy.get('#buttontoclick').should('be.visible').click();
    cy.contains("Good job!")
  })
})