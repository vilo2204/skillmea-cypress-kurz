it('pluginy', () => {

  cy.api('POST', '/api/boards', {
    name: "Hello world"
  })

  cy.api('PATCH', '/api/boards/1',{
    starred: true
  })
});