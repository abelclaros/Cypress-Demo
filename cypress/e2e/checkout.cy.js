describe('Checkout workflow', () => {
    //Login before each test case
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html'); 
        cy.get('[data-test="title"]').should('have.text', 'Products');     
  });
    it('Should add Item to the cart, Checkout, and return to the Products Page', () => {
        // Add item to cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        // Verify cart badge shows 1 item
        cy.get('.shopping_cart_badge').should('have.text', '1');
        // Go to cart
        cy.get('.shopping_cart_link').click();
        // Verify cart page is displayed
        cy.url().should('include', '/cart.html');
        cy.get('[data-test="title"]').should('have.text', 'Your Cart');
        // Proceed to checkout
        cy.get('[data-test="checkout"]').click();
        // Fill in checkout information
        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Doe');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
        // Verify overview page is displayed
        cy.url().should('include', '/checkout-step-two.html');
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview');
        // Finish checkout
        cy.get('[data-test="finish"]').click();
        // Verify checkout complete page is displayed
        cy.url().should('include', '/checkout-complete.html');
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!');
        // Return to Products page
        cy.get('[data-test="back-to-products"]').click();
        cy.url().should('include', '/inventory.html');
        cy.get('[data-test="title"]').should('have.text', 'Products');
  });
})