describe('Forgot Password Test', () => {
  
    it('should send a password reset email', () => {
      cy.visit('https://fabrilife.com/login')
      
      // Click on the "Forgot Password" link
      cy.contains('Forgot Your Password?').click()
      cy.get('input[id="email"]').type('anirudhaontik@gmail.com')
      cy.contains('Send Password Reset Link').should('be.visible')
      cy.get('input[id="email"]').closest("form").find('button[type="submit"]').click()


    })

    })