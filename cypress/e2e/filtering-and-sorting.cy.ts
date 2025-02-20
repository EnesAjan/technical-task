describe('Filters and Sorting Tests', () => {
    beforeEach(() => {
        cy.visit('/product-list');
    });

    it('should filter products by category and update the product list and URL', () => {
        const category = 'Beauty';

        cy.get('#category-filter').select(category);

        cy.url().should('include', `category=${encodeURIComponent(category)}`);

        cy.get('[data-cy="product-card"]').each(($card) => {
            cy.wrap($card)
                .find('[data-cy="product-category"]')
                .should('contain.text', category.toLowerCase());
        });
    });

    it('should filter products by category and apply sorting', () => {
        const category = 'Groceries';
        const sortOption = 'price-desc';

        cy.get('#category-filter').select(category);

        cy.url().should('include', `category=${encodeURIComponent(category)}`);

        cy.get('[data-cy="sort-options"]').select(sortOption);

        cy.url()
            .should('include', `category=${encodeURIComponent(category)}`)
            .and('include', `sort=${encodeURIComponent(sortOption)}`);

        cy.get('[data-cy="product-card"]').then(($cards) => {
            const prices = [...$cards]
                .map((card) => parseFloat(card.querySelector('[data-cy="product-card"]')?.textContent?.replace('$', '') || '0'));

            const sortedPrices = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sortedPrices);

            cy.wrap($cards).each(($card) => {
                cy.wrap($card)
                    .find('[data-cy="product-category"]')
                    .should('contain.text', category.toLowerCase());
            });
        });
    });

    it('should filter products by brand without sorting', () => {
        const brand = 'Apple';

        cy.get('#brand-filter').select(brand);

        cy.url().should('include', `brand=${encodeURIComponent(brand)}`);

        cy.get('[data-cy="product-card"]').each(($card) => {
            cy.wrap($card)
                .find('[data-cy="product-brand"]')
                .should('contain.text', brand);
        });
    });
});
