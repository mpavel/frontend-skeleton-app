import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When('I open the application', () => {
    cy.visit('http://localhost:5174/');
});

Then(/I see the "(.*?)" section/, (sectionName) => {
    cy.get(`[data-cy="${sectionName}"]`).should(
        "be.visible",
    );
});