it('overovanie', () => {

cy.visit('/board/1')


cy.get('[data-cy="card-checkbox"]')
      .eq(0)
      .click()
      .check()

     cy.get('[data-cy="card-checkbox"]')
     .eq(0)
     .should('be.checked')
     cy.get('[data-cy="due-date"]')
       .should('have.class', 'completed')
 
       cy.get('[data-cy="list-name"]')
       .should('have.value', 'new list')
    })