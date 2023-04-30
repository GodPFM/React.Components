describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/asdasd');
  });
  it('Should render page 404', () => {
    cy.get('[data-testid="pageNotFound"]').should('exist');
  });
});
