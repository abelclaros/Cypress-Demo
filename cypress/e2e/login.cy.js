describe('Login Page Functionality', () => {
  
  // This runs before EACH test case to ensure a clean state
  beforeEach(() => {
    // 1. Visit the application login URL
    cy.visit('https://www.saucedemo.com/'); 
  });

  it('Should login successfully with valid credentials', () => {
    // 2. Find username field and type the username
    cy.get('#user-name').type('standard_user');

    // 3. Find password field and type the password
    cy.get('#password').type('secret_sauce');

    // 4. Find the login button and click it
    cy.get('#login-button').click();

    // 5. Assertions: Verify the login was successful
    // Check if the URL changed to the dashboard
    cy.url().should('include', '/inventory.html'); 
    // Check if Products page is displayed
    cy.get('[data-test="title"]').should('have.text', 'Products');
  });
});