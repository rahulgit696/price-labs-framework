# Price Labs Framework

Welcome to the Price Labs Framework! This project is designed for automated testing of the Price Labs application, utilizing Cypress for end-to-end testing and API validation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)

## Features

- Automated end-to-end testing using Cypress
- API testing for validating endpoints
- Support for multi-calendar functionality
- User authentication and session management
- Easy navigation and interactions with the UI

## Technologies Used

- [Cypress](https://www.cypress.io/) - A JavaScript end-to-end testing framework
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language used for tests
- [Git](https://git-scm.com/) - Version control system
- [Node.js](https://nodejs.org/) - JavaScript runtime for executing tests

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rahulgit696/price-labs-framework.git
2. Navigate to the project directory:
   ```bash
   cd price-labs-framework
3. Install dependencies:
   ```bash
      npm install
## Project Directory Structure
   ```bash
   price-labs-framework/        # Main project directory
│
├── cypress/                 # Cypress testing framework directory
│   ├── e2e/                 # Directory for end-to-end test files
│   │   ├── apiTest.cy.js     # API testing script using Cypress
│   │   └── loginTest.cy.js   # Login test script using Cypress
│   │
│   ├── fixtures/            # Directory for test data and static resources
│   │   └── userCredentials.json  # JSON file containing user credentials for testing
│   │
│   ├── pages/               # Directory for page objects (page-related functions)
│   │   ├── loginPage.js        # Page object for login page interactions
│   │   ├── multiCalendarPage.js # Page object for multi-calendar page interactions
│   │   └── pricingPage.js      # Page object for pricing page interactions
│   │
│   ├── support/             # Directory for support utilities and custom commands
│   │   └── apiPage.js         # Utility functions for API interactions
│   │
│   └── videos/              # Directory for storing test run video recordings
│       ├── apiTest.cy.js.mp4   # Video recording of the API test run
│       └── loginTest.cy.js.mp4 # Video recording of the login test run
│
├── node_modules/            # Directory for npm packages (automatically generated)
│
├── package-lock.json        # Auto-generated file for locking dependencies versions
├── package.json             # npm configuration file for managing project dependencies
└── reporter-config.json     # Configuration file for custom test reporters

## Usage
To run the tests, use the following command:

    npx cypress open
    

## Running Tests
To run the tests, use the following command:

    npx cypress run

