it("vyvorenie karty", () => {

cy.visit("/")

cy.get('[data-cy="create-board"] > h1')
 .click()
 cy.get('[data-cy="new-board-input"]')
 .type("new board{enter}")

 cy.get('[data-cy="add-list-input"]')
  .type("new list")

cy.contains("Add list")
  .click()

  cy.get('[data-cy="new-card"]')
  .type("new card{enter}")
})

it.only("bookmarknutie boardu", () => {

  cy.visit("/")

  cy.get('[data-cy="star"]')
  .eq(0)
   .click({force: true})

})