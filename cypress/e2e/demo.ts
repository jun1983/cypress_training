describe('obstacle shengjun', () => {
    xit('72954', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72954')
        cy.contains("Click Me 2x").click()
        cy.contains("Click me once more").click()
        cy.contains("Good job!")
    })

    it('81121', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/81121')

        let clickButton = () => {
            cy.get("#button").then(($element)=>{
                if($element.text() == 'Enough'){
                    $element.click()
                    return
                }
                $element.click()
                clickButton()
            })
        }

        clickButton()

        cy.contains("Good job!")
    })
})