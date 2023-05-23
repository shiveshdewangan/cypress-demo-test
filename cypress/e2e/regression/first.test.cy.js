describe("Automation Test", () => {
  it("Should do the first test", () => {
    cy.visit("https://www.example.com");
    cy.title().should('eq', 'Example Domain');
    cy.url().should('eq', 'https://www.example.com/');
  });
});