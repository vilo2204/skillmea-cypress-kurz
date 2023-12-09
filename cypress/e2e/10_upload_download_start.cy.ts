it('upload a download', () => {

  cy.visit('/board/1?card=4')

       

 cy.contains('Download')
   .click()

   cy.readFile('cypress/downloads/4_skillmea_logo.svg')

})