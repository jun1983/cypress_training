import * as dayjs from "dayjs"

it('19875', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/19875')
    const text : string =dayjs().add(1,'day')
        .format('DD.MM.YYYY')
    cy.get('#datefield').type(text)
    cy.contains("Good job!")
})

//***************************************************************************
it('41040', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41040')

    cy.get('#buttontoclick').trigger('click')

    cy.contains("Good job")

})

//***************************************************************************
it('73588',()=> {
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/73588/')
    cy.get('#clickme').should('exist')
    cy.get('#clickme').click()

    cy.get('#randomtext').should('not.have.value', '')

    cy.get('#randomtext').invoke('val').then((val) => {
        cy.get('#selectlink').children().each(($el) => {
                if ($el.text() === val) {
                    cy.get('#selectlink').select($el.text())
                }
            }
        )
        cy.get('#submitanswer').click()
    })
    cy.contains("Good job")
})


//***************************************************************************
it('81012', ()=> {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/81012')
        cy.get('#alerttext').invoke('text').then((text) => {
            const regex = /\$([\d.,]+)/
            const matches = text.match(regex)
            const amount = matches ? matches[1] : null

            if (amount === null){
                throw new Error('Amount is null')
            }
            cy.get('#totalamountText').type(amount)
        })
    cy.contains("Good job")
})


