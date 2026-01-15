describe('Tests E2E - Application Flask', () => {
  
    it('checking health endpoint', () => {
    cy.request('/health').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq('OK');
    });
  });

  it('testing counter', () => {
    cy.visit('/');
    
    cy.get('#counter').should('have.text', '0');
    
    cy.contains('+1').click();
    cy.get('#counter').should('have.text', '1');
    
    cy.contains('+1').click();
    cy.contains('+1').click();
    cy.get('#counter').should('have.text', '3');
  });

  it('checking page display', () => {
    cy.visit('/');
    
    cy.contains('Compteur').should('be.visible');
    
    cy.contains('+1').should('be.visible');
  });

  it('should return 404 for a non-existent route', () => {
    cy.request({
      url: '/route-inexistante',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

});
