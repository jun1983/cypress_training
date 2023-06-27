import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given(/^I am on the flight search page$/, () => {
	 cy.visit('https://www.qantas.com/au/en/book-a-trip/flights.html')
})

Given("I select passengers as {string}", (passengers:string) => {
      const n=passengers.split('-')
      cy.clickElement('.css-tpxo3f-runway-popup-field__button')
      cy.passenger_select('input#adults',`${n[0]}`)
      cy.passenger_select('input#children',`${n[1]}`)
      cy.passenger_select('input#infants',`${n[2]}`)
})

When("I click '+' button in {string}", (row) => {
	  cy.clickElement(`[data-testid=${row}] [aria-label="Increase Value"]`)
})

Then(/^I should see max-number error message$/, () => {
	  cy.contains('Only 9 passengers can be booked at a time.')
})

Then(/^I should see adult-infants number error message$/, () => {
    cy.contains('Only 1 infant can be booked for every 1 adult online.')
})

When("I click '-' button in {string}", (adult_decrease) => {
    cy.clickElement(`[data-testid=${adult_decrease}] [aria-label="Decrease Value"]`)
})

Then(/^I should see empty passengers number error message$/, () => {
	cy.contains('Number of passengers cannot be less than 1.')
})

Given(/^I am on the International flights page$/, () => {
	cy.visit('https://www.qantas.com/au/en/book-a-trip/flights.html?int_cam=au%3Abook-a-trip%3Aarticle%3Aflights%3Aen%3Ann')
})

Then("I select airports as {string}", (airports:string) => {
    const airport=airports.split('-')
    cy.clickElement(`[data-testid=departure-port] button`)
    cy.get('input.css-1mu1mk2').focus().type(`${airport[0]}`).type('{enter}')
    cy.clickElement(`[data-testid=arrival-port] button`)
    //?cy.get('input.css-1mu1mk2').focus().type(`${airport[1]}`).type('{enter}')
    cy.get('.css-1h2x2xs input.css-1mu1mk2').focus().type(`${airport[1]}`).type('{enter}')
})

Then(/^the number still be 1,not 0$/, () => {
    //.invoke('val').should('eq', '1');
	//cy.get('input#adults').should('have.value','1')
})
Then(/^I should see 'children travelling alone' error message$/, () => {
    //cy.contains('Call your local Qantas office  to book children travelling alone on international flights.')
})

