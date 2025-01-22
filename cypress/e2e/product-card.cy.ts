describe('Product Card Validation', () => {
    beforeEach(() => {
        cy.visit('/product-list');
    });

    it('should validate that each product card has required elements', () => {
        cy.get('[data-cy="product-card"]').each(($card) => {
            cy.wrap($card).find('img').should('be.visible').and('have.attr', 'src').and('not.be.empty');
            cy.wrap($card).find('[data-cy="product-stock"]').should('be.visible').and('not.be.empty');

            cy.wrap($card).find('[data-cy="product-title"]').should('be.visible').and('not.be.empty');

            cy.wrap($card).find('[data-cy="product-price"]').should('be.visible').and('contain.text', '$');

            cy.wrap($card).find('[data-cy="product-description"]').should('be.visible').and('not.be.empty');

            cy.wrap($card).find('[data-cy="favorite-button"]').should('be.visible').and('not.be.disabled');
        });
    });
});
