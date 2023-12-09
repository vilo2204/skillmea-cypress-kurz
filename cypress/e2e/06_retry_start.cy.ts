it('retry', { defaultCommandTimeout: 10000 }, () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .eq(5, { timeout:1000 })
    .should('contain.text', 'juice')

  cy.get('[data-cy=due-date]')
  .eq(5)
  .should('have.text', 'Dec 09 2023')

});
