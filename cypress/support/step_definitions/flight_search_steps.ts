import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BookFlightsPage from "../../e2e/page_objects/pages/book_flights_page";

let bookFlightsPage = new BookFlightsPage()

Given("I am on the flight search page", function () {
  bookFlightsPage.visit()
});

When("I choose use {string} to pay", choosePayMethod);

When("I click submit button", ()=>{
  bookFlightsPage.flightSearchWidget().clickSearchFlightButton()
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
  let fromPort = airports.split(",")[0]
  let toPort = airports.split(",")[1]
  bookFlightsPage.flightSearchWidget().departurePort().setValue(fromPort)
  bookFlightsPage.flightSearchWidget().arrivalPort().setValue(toPort)
})

When("I select travel dates in {string} days", (travelDates:string)=>{
  cy.log("I select travel dates in ", travelDates, " days")
})

When("I select travel class as {string}", (travelClass:string)=>{
  cy.log("I select travel class as ", travelClass)
})

Then("I should see empty travel date error message", ()=>{
  bookFlightsPage.flightSearchWidget().travelDate()
  .verifyErrorMessage("Please select a departure date")
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