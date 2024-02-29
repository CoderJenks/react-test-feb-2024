# Sam Jenkins - React Test February 2024

This is a React app for a basic eCommerce web based application.

The hosted version of the React app can be found here:

[![netlify](https://img.shields.io/badge/React_Test_App_February_2024-000?color=blue&style=for-the-badge&logo=netlify&logoColor=white)](https://react-test-sj-feb-2024.netlify.app/)

The GitHub respository can be found here:

[![github](https://img.shields.io/badge/React_Test_App_February_2024_Repository-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CoderJenks/react-test-feb-2024.git)

## Web app functionality

The user can:

- view a list of products on the home page with their price and info
- click a product on the home page and navigate to the product page
- add the product to the shopping basket
- navigate to a basket screen
- increase or decrease the item quantity on the basket screen

### Future improvements

With more development time, I would:
- add a Cypress end to end test for the happy path
- add a Cypress test for accessibility using the checkA11y functionality
- improve the shopping basket to show the total price
- add a checkout button which notifies the customer they have checked out and then clears the basket
- integrate getMenu API call, which has been created and unit tested, to fetch and apply the menu data into the navigation bar
- update styling to be responsive to ensure a good user experience on desktop, tablet or mobile


## Initial setup

Before running any of the below commands install dependencies:

```sh
npm i
```

### Environmental variables

To run the application locally via `npm start`, you will need to add the database url under variable `REACT_APP_API_URL` in the `.env` file

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner for all unit tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
