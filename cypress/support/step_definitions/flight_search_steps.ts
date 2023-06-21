import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the flight search page", function () {
  cy.log("I am on the flight search page")
});

When("I choose use {string} to pay", choosePayMethod);

When("I click submit button", ()=>{
  cy.log("I click submit button")
});

When("I select trip type as {string}", (tripType:string)=>{
  cy.log("I select trip type as ", tripType)
})

When("I select passengers as {string}", (passengers:string)=>{
  cy.log("I select passengers as ", passengers)
})

When("I select flexible dates as {string}", (flexibleDates:string)=>{
  cy.log("I select flexible dates as ", flexibleDates)
})

When("I select airports as {string}", (airports:string)=>{
  cy.log("I select airports as ", airports)
})

When("I select travel dates in {string} days", (travelDates:string)=>{
  cy.log("I select travel dates in ", travelDates, " days")
})

When("I select travel class as {string}", (travelClass:string)=>{
  cy.log("I select travel class as ", travelClass)
})

Then("I should see empty travel date error message", ()=>{
  cy.log("I should see empty travel date error message")
});

Then("I should see empty return date error message", ()=>{
  cy.log("I should see empty return date error message")
});

Then("I should see search result reflects my selection", ()=>{
  cy.log("I should see search result reflects my selection")
});

function choosePayMethod(payMethod:string){
  cy.log("I choose use ", payMethod, " to pay")
}