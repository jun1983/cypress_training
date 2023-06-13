import dayjs from "dayjs"

it('19875', () =>{
    cy.visit('/19875')
    const text : string =dayjs().add(1,'day')
        .format('DD.MM.YYYY')
    cy.get('#datefield').type(text)
    cy.contains("Good job!")
})

//***************************************************************************
it('41040', () =>{
    cy.visit('/41040')
    cy.get('#buttontoclick').trigger('click')
    cy.contains("Good job!")
})

//***************************************************************************
it('73588', ()=> {
    cy.visit('/73588')
    cy.get('#clickme').click()
    cy.get('#randomtext').should('not.have.value', '')
    cy.get('#randomtext').invoke('val').then((val)=>{
        cy.get('#selectlink').select(val)
    })
    cy.get('#submitanswer').click()
    cy.contains("Good job!")
})

//***************************************************************************
it('81012', ()=> {
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/81012')
    cy.get('#alerttext').invoke('text').then((text) => {
        const regex = /\$([\d.,]+)/
        const matches = text.match(regex)
        const amount = matches ? matches[1] : null

        if (!matches){
            throw new Error('Amount is null')
        }
        cy.get('#totalamountText').type(amount)
        })
    cy.contains("Good job!")
})

//***************************************************************************
it('78264', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/78264')
    cy.get('#no1').invoke('text').then((text1)=>{
        let num1 = Number(text1)
        cy.get('#no2').invoke('text').then((text2)=>{
            let num2 = Number(text2)
            let sum = num1 + num2
            cy.get('#result').type(sum.toString())
        })
    })
    cy.contains("Good job!")
})

//***************************************************************************
it('70310', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/70310')
    cy.get('#orderTable tr').then((rows) =>{
        cy.wrap(rows).last().find('td').eq(1).invoke('text').then((text)=>{
            cy.get('#ordervalue').type(text)
        })
    })
    cy.contains("Good job!")
})

//***************************************************************************
it('33678', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/33678')
    cy.get('#one').click()
    const checkProgressAndClick = () => {
        cy.get('#label').then(($label) => {
            const percentage: number = parseInt($label.text(), 10)
            if (percentage !== 100) {
                cy.wait(500).then(checkProgressAndClick)
            } else {
                cy.get('#two').click()
            }
        })
    }
    checkProgressAndClick()
    cy.contains("Good job!")
})

//***************************************************************************
it('23292', () =>{
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/23292')
    let taskIDs = []
    cy.get('tbody tr.draggable-row').each(($row)=>{
        const id = parseInt($row.find('td').eq(0).text(), 10)
        taskIDs.push(id)
    }).then(() => {
        taskIDs.sort((a, b) => a - b)

        for(let i = 0; i<taskIDs.length; i++){
            cy.get(`#todo-tasks tr[task="${taskIDs[i]}"]`).trigger('mousedown', { which: 1 })
            cy.get('#completed-tasks').trigger('mousemove').trigger('mouseup', { force: true })
        }})
    cy.contains("Good job!")
})

//***************************************************************************
it('14090', ()=> {
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/14090/')
    cy.get('#generate').click()
    let chars = []
    cy.get('td.task').each(($el) => {
        const text = $el.text()
        const char = text.charAt(text.length - 1)
        chars.push(char)
    }).then(()=>{
        cy.get('#comboboxTable tr').each(($row, index) => {
            if (index > 0) {
                const taskText = $row.find('td.task').text()
                const char = taskText.charAt(taskText.length - 1)
                const $select = $row.find('td.value select')

                cy.wrap($select).find('option').each(($option) => {
                    if ($option.text().startsWith(char)) {
                        cy.wrap($select).select($option.text())
                    }
                })
            }
        })
    })
    cy.get("#submit").click()
    cy.contains("Good job!")
})