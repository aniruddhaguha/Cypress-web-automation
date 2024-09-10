describe('Reset Password Test', () => {
    it('should reset the password with a valid token', () => {
      const resetToken = '596b92760ecb8552228b387a7b632a29e5ed221dcfad091be7ce479af3a437fc'
      cy.visit('https://fabrilife.com/password/reset/92760ecb8552228b387a7b632a29e5ed221dcfad091be7ce479af3a4596b37fc') 

      cy.get('input[id="email"]').type('anirudhaontik@gmail.com')
      cy.get('input[id="password"]').type('T0nm0y1234')
      cy.get('input[id="password-confirm"]').type('T0nm0y1234')  
      
      //cy.get('button[type="submit"]').click()
      cy.get('input[id="password-confirm"]').closest("form").find('button[type="submit"]').click()

    })

    
  })
  