import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the obstacle {string} page", (obstacle_id: string) => {
  cy.visit("/" + obstacle_id);
});

When("I click {string} link", (link_text: string)=>{
    cy.get("a").contains(link_text).click()
})

When("I click button until its text is enough", ()=>{
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
})

When("I click on {string} of the button with text {string}", (pos:Cypress.PositionType, text:string)=>{
  cy.contains(text).click(pos)
})

Then("I should see Good Job result", () => {
    cy.contains("Good job!")
});