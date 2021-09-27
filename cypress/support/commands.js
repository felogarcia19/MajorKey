import * as Locators from './xpath';


Cypress.Commands.add('login', () => { 
    cy.visit(Locators.url);
});