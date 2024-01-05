import { Then } from 'cypress/utils';

// Step definitions in this file are only relevant for `Mainpage.feature`

Then("I can start counting", () => {
  cy.get("[data-cy=counter]").should('be.visible').should('be.enabled');
});