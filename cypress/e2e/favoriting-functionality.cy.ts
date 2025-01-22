
describe('Favorite Products Functionality', () => {
    it('should add a product to favorites and verify it on the favorites page', () => {
        cy.visit('/product-list');

        cy.get('[data-cy="product-card"]').first().as('firstProduct');

        cy.get('@firstProduct')
            .find('[data-cy="product-title"]')
            .invoke('text')
            .as('productName');

        cy.get('@firstProduct')
            .find('[data-cy="favorite-button"]')
            .click();

        cy.get('[data-cy="go-to-favorites"]').click();


        cy.get('@productName').then((productName) => {
            cy.get('[data-cy="product-card"]')
                .should('contain.text', productName);
        });
    });
});
