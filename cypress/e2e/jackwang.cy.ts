import * as dayjs from "dayjs";
it('19875', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/19875');
    const text : string =dayjs().add(1,'day')
        .format('DD.MM.YYYY')
    console.log(text)
    cy.get('#datefield').type(text).should('have.value',text)

    cy.contains("Good job")

})

//***************************************************************************
it('41040', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/41040');

    // Check if the button is visible

    cy.get('#buttontoclick').trigger('click')

    cy.contains("Good job")

})

//***************************************************************************
it('73588',()=> {
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/73588/');
    cy.get('#clickme').should('exist')
    cy.get('#clickme').click();


    cy.get('#randomtext').should('not.have.value', '')

    cy.get('#randomtext').invoke('val').then((val) => {
        cy.get('#selectlink').children().each(($el) => {
                if ($el.text() === val) {
                    cy.get('#selectlink').select($el.text())
                }
            }
        )
        cy.get('#submitanswer').click()
        cy.contains("Good job!")
    })
})


//***************************************************************************
it('81012', ()=> {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/81012')
        cy.get('#alerttext').invoke('text').then((text) => {
            const regex = /\$([\d.,]+)/;
            const matches = text.match(regex);
            const amount = matches ? matches[1] : null;

            console.log(amount);

            cy.get('#totalamountText').type(amount);

        });
    })


//***************************************************************************
//there are error with expect(winOpenStub).to.be.called; Can not find the new window open
it('#51130', ()=>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/51130')
    const winOpenStub = cy.stub();
    cy.on('window:open', winOpenStub);
    cy.get('#button').click().then(() => {
        expect(winOpenStub).to.be.called;
    });
    cy.contains("Good job")
})