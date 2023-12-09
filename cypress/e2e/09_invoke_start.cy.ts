import { invoke } from "cypress/types/lodash";

it('invoke', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="footer-link"]')
    .invoke('removeAttr', 'target')
    .click()
   

});