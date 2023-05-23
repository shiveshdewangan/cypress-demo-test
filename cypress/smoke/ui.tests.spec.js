describe("Automation Test", () => {
  it("Should do the first test", () => {
    cy.visit("https://www.example.com");
    cy.title().should('eq', 'Example Domain');
    cy.url().should('eq', 'https://www.example.com/');
    cy.request('https://jsonplaceholder.typicode.com/users').then(response => cy.log(response));
    cy.visit('https://example.cypress.io/commands/location');
    cy.window().then((win) => {
      console.log(win.location);
    });
  });
});