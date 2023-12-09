beforeEach(() => {

cy.session('login', () => {

  cy.visit('/login')

  cy.get('[data-cy="login-email"]')
    .type('vilsitar@gmail.com')
  
  cy.get('[data-cy="login-password"]') 
    .type('19932204.{enter}') 

    cy.location('pathname')
      .should('eq', '/')
  
   })


})



//beforeEach(() => {

//cy.request({
 // method: 'POST',
 // url: '/api/login',
 // body: {
   // email: 'vilsitar@gmail.com',
  //  password: '19932204.'
  //}
 //}).then((res) => {

//cy.setCookie('auth_token', res.body.accessToken)

 //})

//});



it('prihlasenie', () => {

  cy.visit('/')
 
  cy.get('[data-cy=board-item]')
    .should('have.length', 14)
});