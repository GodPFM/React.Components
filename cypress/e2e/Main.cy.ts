describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('Should render search bar', () => {
    cy.get('input[type="text"]').should('exist');
  });
  it('Should render 8 cards', () => {
    cy.get('[data-testid="card"]').should('have.length', 8);
  });
  it('Should download more cards', () => {
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="card"]').should('have.length', 16);
  });
  it('Should open modal window', () => {
    cy.get('[data-testid="card"]').first().click();
    cy.get('[data-testid="modalWindow"]').should('exist');
    cy.get('[data-testid="modalWindow"]').click(0, 0);
    cy.get('[data-testid="modalWindow"]').should('not.exist');
  });
  it('Should close modal window', () => {
    cy.get('[data-testid="card"]').first().click();
    cy.get('[data-testid="modalWindow"]').click(0, 0);
    cy.get('[data-testid="modalWindow"]').should('not.exist');
  });
  it('Should update cards after input search query', () => {
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="card"]').should('have.length', 16);
    cy.get('input[type="text"]').type('Car');
    cy.get('input[type="text"]').type('{enter}');
    cy.get('[data-testid="card"]').should('have.length', 8);
  });
  it('Should close modal window on cross', () => {
    cy.get('[data-testid="card"]').first().click();
    cy.get('[data-testid="modalWindow"]').should('exist');
    cy.get('[data-testid="modalCloseBtn"]').click();
    cy.get('[data-testid="modalWindow"]').should('not.exist');
  });
});
