# Project Name: Technical Task - Product Listing Web Application

## Description

This project is a web application built using **Next.js** that fetches and displays data dynamically from an external
API. The application includes features like product listing, search, filtering, sorting, and the ability to favorite
items. It is designed with **SEO optimization** and provides a responsive, user-friendly interface. The UI is styled
using **Tailwind CSS**.

## Features

### Core Features

1. **Product Listing**:

    - Fetches product data from an external API.
    - Displays data in a grid layout with key details like image, title, price, and description.

2. **Search Functionality**:

    - Users can search for products by title or description.
    - Dynamically updates the URL and results based on the search query.

3. **Filtering** (The API is external, so it is possible that some requirements are missing.):

    - Allows filtering products by category and brand.
    - Updates the product list and URL parameters.

4. **Sorting** (The API is external, so it is possible that some requirements are missing.):

    - Provides sorting options (e.g., Title Ascending, Title Descending).
    - Dynamically updates the product list based on the selected sorting method.

5. **Favorites**:

    - Users can mark products as favorites.
    - Favorites persist in local storage and are displayed on a separate favorites page.

6. **Pagination**:

    - Supports pagination for large datasets.
    - Dynamically updates results based on the current page.

### Additional Features

- **SEO Optimization**:

    - Implements meta tags, and semantic HTML.
    - Ensures pages are search-engine friendly.

- **Responsive Design**:

    - Optimized for mobile, tablet, and desktop views.

- **Skeleton Loading**:

    - Displays skeleton loaders while data is being fetched.

## Tech Stack

- **Framework**: Next.js (React framework)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **API Integration**: Fetch API
- **SEO Optimization**: Head component for meta tags
- **Testing**: Cypress (End-to-End Testing)

## Installation


1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and visit:

   ```
   http://localhost:3000
   ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Runs the production build.
- `npm run test`: Runs Cypress tests.



## Deployment

This project is deployed on **Vercel**.

Deployed app on:  **https://technical-task-sand.vercel.app/product-list**



## Testing

This project uses **Cypress** for end-to-end testing.
To run tests:

```bash
npx cypress open
```




