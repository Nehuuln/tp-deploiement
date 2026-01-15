describe('Tests E2E - Application Flask', () => {
  
  it('should check the availability of the application', () => {
    cy.request('/health').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq('OK');
    });
  });

  it('should return 404 for a non-existent route', () => {
    cy.request({
      url: '/non-existent-route',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

});

describe('Counter functionality', () => {
  it('should increment counter when button is clicked', () => {
    cy.visit('/');
    
    cy.get('#counter').should('have.text', '0');
    
    cy.contains('+1').click();
    cy.get('#counter').should('have.text', '1');
    
    cy.contains('+1').click();
    cy.contains('+1').click();
    cy.get('#counter').should('have.text', '3');
  });

  it('should display the page title', () => {
    cy.visit('/');
    cy.contains('Compteur').should('be.visible');
  });
});
