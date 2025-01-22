describe('Search and Sort Functionality', () => {
    beforeEach(() => {
        cy.visit('/product-list');
    });

    it('should filter products by search query and update the URL', () => {
        const searchQuery = 'apple';

        cy.get('input#search')
            .type(searchQuery);

        cy.url().should('include', `search=${encodeURIComponent(searchQuery)}`);


        cy.get('[data-cy="product-card"]').each(($card) => {
            cy.wrap($card).then(($card) => {
                const title = $card.find('[data-cy="product-title"]').text().trim().toLowerCase();
                const description = $card.find('[data-cy="product-description"]').text().trim().toLowerCase();

                expect(title.includes(searchQuery) || description.includes(searchQuery)).to.be.true;
            });
        });
    });

    it('should sort products and validate order with updated URL', () => {
        const sortOption = 'price-asc';

        cy.get('[data-cy="sort-options"]')
            .select(sortOption);

        cy.url().should('include', `sort=${encodeURIComponent(sortOption)}`);


        cy.get('[data-cy="product-card"] [data-cy="product-price"]')
            .then(($prices) => {
                const prices = [...$prices].map((price) =>
                    parseFloat(price.textContent?.replace('$', '') || '0')
                );

                const sortedPrices = [...prices].sort((a, b) => a - b); // Adjust sort logic for the option
                expect(prices).to.deep.equal(sortedPrices);
            });
    });

    it('should combine search and sort functionality with Title Descending', () => {
        const searchQuery = 'ey';
        const sortOption = 'title-desc';

        cy.get('input#search').type(searchQuery);
        cy.url().should('include', `search=${encodeURIComponent(searchQuery)}`);

        cy.get('[data-cy="sort-options"]').select(sortOption);
        cy.url()
            .should('include', `sort=${encodeURIComponent(sortOption)}`)
            .and('include', `search=${encodeURIComponent(searchQuery)}`);

        cy.get('[data-cy="product-card"]').each(($card) => {
            cy.wrap($card).then(($card) => {
                const title = $card.find('[data-cy="product-title"]').text().trim().toLowerCase();
                const description = $card.find('[data-cy="product-description"]').text().trim().toLowerCase();

                expect(title.includes(searchQuery) || description.includes(searchQuery)).to.be.true;
            });
        });

        cy.get('[data-cy="product-card"] [data-cy="product-title"]')
            .then(($titles) => {
                const titles = [...$titles].map((title) => title.textContent?.trim() || '');

                const sortedTitles = [...titles].sort((a, b) => b.localeCompare(a));
                expect(titles).to.deep.equal(sortedTitles);
            });
    });

});
