describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/about');
  });
  it('Should render about page', () => {
    cy.get('[data-testid="loremPlaceholder"]').should('exist');
  });
});
