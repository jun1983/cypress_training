import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("I am on the flight search page", function () {
//   cy.log("I am on the flight search page")
// });

// When("I select trip type as {string}", (tripType:string)=>{
//     cy.log("I select trip type as ", tripType)
//   })

When("I click When button", () => {
    cy.log("I click When button")
})

When("I click an available date in the calendar", () => {
    cy.log("I click an available date in the calendar")
})

Then("CONFIRM button should be displayed in the bottom right corner", ()=>{
    cy.log("CONFIRM button should be displayed in the bottom right corner.")
})