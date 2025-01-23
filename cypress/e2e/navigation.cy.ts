describe('Navigation Tests', () => {
    it('should navigate through the app and validate functionality', () => {

        cy.visit('/product-list');
        cy.url().should('include', '/product-list');
        cy.get('h1').contains('Product List');

        cy.get('[data-cy="product-card"]')
            .should('have.length.greaterThan', 0)
            .then((cards) => {
                cy.log(`Found ${cards.length} products on the page.`);
            });

        cy.scrollTo('bottom');
        cy.wait(500);
        cy.scrollTo('top');

        cy.get('[data-cy="pagination-next"]').click();
        cy.url().should('include', 'page=2');
        cy.get('[data-cy="product-card"]').should('have.length', 18);
        cy.get('[data-cy="pagination-prev"]').click();
        cy.url().should('include', 'page=1');
        cy.get('[data-cy="product-card"]').should('have.length', 18);


        cy.get('[data-cy="go-to-favorites"]').click();
        cy.url().should('include', '/favorite-products');
        cy.get('h1').contains('Favorite Products');
        cy.get('[data-cy="go-to-products"]').click();
        cy.get('h1').contains('Product List');
    });
});