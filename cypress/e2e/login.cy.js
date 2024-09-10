describe('Fabrilife login journey', () => {
  
  it('should visit a page and verify the title', () => {
    cy.visit('https://fabrilife.com/login')
    cy.wait(3000)
    cy.get('input[id="email"]').type('anirudhaontik@gmail.com')
    cy.wait(3000)
    cy.get('input[id="password"]').type('T0nm0y1234')
    cy.wait(3000)
    cy.get('input[id="password"]').closest("form").find('button[type="submit"]').click()
})

})