describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/add-item');
  });
  it('Should render search bar', () => {
    cy.get('[data-testid="addItemForm"]').should('exist');
  });
  it('Should show error on submit', () => {
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="errorMessage"]').should('have.length', 7);
  });
  it('Should hide error message after input', () => {
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="errorMessage"]').should('have.length', 7);
    cy.get('input[type=text]').first().type('Test');
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="errorMessage"]').should('have.length', 6);
  });
  it('Should create card', () => {
    cy.get('input[type=text]').first().type('Test');
    cy.get('input[type=text]').last().type('Test');
    cy.get('input[type=date]').type('2023-01-01');
    cy.get('select').select('other');
    cy.get('[type="radio"]').first().check();
    cy.get('input[type=file]').selectFile({
      contents: Cypress.Buffer.from('data:image/jpg;base64'),
      fileName: 'file.jpg',
      mimeType: 'image/jpeg',
      lastModified: Date.now(),
    });
    cy.get('[data-testid="checkboxInput"]').first().click();
    cy.get('[data-testid="checkboxInput"]').last().click();
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="modalWindow"]').should('exist');
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="modalWindow"]').should('not.exist');
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="errorMessage"]').should('have.length', 7);
    cy.get('[data-testid="cardAdded"]').should('exist');
    cy.get('[data-testid="notifAgree"]').should('exist');
  });
  it('Should show error on length < 3', () => {
    cy.get('input[type=text]').first().type('Te');
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="errorMessage"]').first().should('contain', 'Length < 3');
  });
  it('Should show error on first letter lowercase', () => {
    cy.get('input[type=text]').first().type('test');
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="errorMessage"]')
      .first()
      .should('contain', 'First letter must be uppercase');
  });
  it('Should error on future date', () => {
    cy.get('input[type=date]').type('2024-01-01');
    cy.get('[data-testid="submitBtn"]').last().click();
    cy.get('[data-testid="errorMessage"]').contains('The date not has passed').should('exist');
  });
});
