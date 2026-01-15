describe('Tests E2E - Application Flask', () => {
  
  it('should check the availability of the application', () => {
    cy.request('/health').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq('OK');
    });
  });

  it('should display the home page with Hello World', () => {
    cy.visit('/');
    
    cy.contains('Hello, World!').should('be.visible');
  });

  it('should simulate a real user journey', () => {
    cy.request('/health').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq('OK');
    });

    cy.visit('/');

    cy.get('p').should('contain', 'Hello, World!');
    
    cy.get('body').should('exist');
    cy.get('p').should('have.length.at.least', 1);
  });

  it('should return 404 for a non-existent route', () => {
    cy.request({
      url: '/non-existent-route',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('should test navigation between endpoints', () => {
    cy.request('/').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include('Hello, World!');
    });

    cy.request('/health').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq('OK');
    });
  });

});
