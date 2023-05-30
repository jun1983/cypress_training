describe('obstacle practice', () => {
    it('72954-click twice', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72954')
        cy.contains('a', 'Click Me 2x').click()
        cy.contains('a', 'Click me once more').click()
        cy.contains('Good job!')
    })

    it('41041-input', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41041')
        cy.get('input[name="resulttext"]')
            .type('{Click}', { parseSpecialCharSequences: false })
        cy.contains('Good job!')
    })

    it('60469-drag', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/60469')
        cy.get('#toscabot').dragTo('#to')
        cy.contains('Good job!')
    })

    it('41038', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41038')
        cy.contains('Click into my right half').click('right')
        cy.contains('Good job!')
    })

    it('22505', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/22505')
        cy.contains('Click me!').click()
        cy.contains('Good job!')
    })

    it('12952', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/12952')
        cy.get('#thisoneistheright a').click()
        cy.contains('Good job!')
    })

    it.only('81012', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/81012')
        cy.contains('We charged the total amount of')
            .invoke('text')
            .then(text => {
                const regex = /\d+\.\d+/
                const match = text.match(regex)
                if (!match) {
                    throw new Error('Amount is null')
                }
                cy.get('#totalamountText').type(match[0])
                cy.contains('Good job!')
            })
    })

    it('78264', () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/78264')
        let number1, number2, result;
        cy.get('#no1')
            .invoke('text')
            .then(text => {
                number1 = parseFloat(text);
                cy.get('#no2')
                    .invoke('text')
                    .then(text => {
                        number2 = parseFloat(text);
                        result = number1 + number2;
                        cy.get("#result").type(result)
                    })
            })
        cy.contains('Good job!')
    })
})