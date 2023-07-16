class BaseComponent {
    constructor(protected rootFinder: string) {}

    rootElement(): Cypress.Chainable<JQuery<HTMLElement>>{
      return cy.get(this.rootFinder)
    }
}

export default BaseComponent;