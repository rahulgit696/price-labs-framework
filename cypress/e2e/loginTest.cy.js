// cypress/e2e/loginTest.cy.js

import LoginPage from '../pages/loginPage';
import MultiCalendarPage from '../pages/multiCalendarPage';
import PricingPage from '../pages/pricingPage';

describe('Multi Calendar Navigation Test', () => {
    const loginPage = new LoginPage();
    const pricingPage = new PricingPage();
    const multiCalendarPage = new MultiCalendarPage();
    let credentials; // Declare a variable for credentials

    // Ignore uncaught exceptions
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test on uncaught exceptions
        });

        // Load the user credentials from the fixture file
        cy.fixture('userCredentials').then((cred) => {
            credentials = cred; // Assign the credentials to the variable
        });
    });

    // Test case to login and navigate to Multi Calendar, verify toggle functionality, and quit the session
    it('should login, navigate to Multi Calendar, verify toggle functionality, and quit the session', () => {
        loginPage.visit(); // Visit the login page
        loginPage.login(credentials.username, credentials.password); // Use the loaded credentials to login
        pricingPage.navigateToMultiCalendarAndCloseModal(); // Navigate to Multi Calendar and close any modal

        // Check the initial state of the toggle
        cy.get(multiCalendarPage.toggleInput).then(($input) => {
            if ($input.is(':checked')) {
                multiCalendarPage.clickToggle(); // Uncheck the toggle
                multiCalendarPage.assertToggleState(false); // Assert it is now unchecked
            }
        });

        // Check the toggle to ensure it can be checked again
        multiCalendarPage.clickToggle(); // Check the toggle
        multiCalendarPage.assertToggleState(true); // Assert it is checked

        // Uncheck the toggle again
        multiCalendarPage.clickToggle(); // Uncheck the toggle
        multiCalendarPage.assertToggleState(false); // Assert it is unchecked

        // End the session
        cy.end();
    });

    // Test case to select checkboxes for bulk changes, save, and verify their state
    it('should select checkboxes for bulk changes, save, and verify their state', () => {
        loginPage.visit(); // Visit the login page
        loginPage.login(credentials.username, credentials.password); // Use the loaded credentials to login
        pricingPage.navigateToMultiCalendarAndCloseModal(); // Navigate to Multi Calendar and close any modal

        // Click on the three checkboxes
        multiCalendarPage.clickCheckbox(multiCalendarPage.firstCheckbox);
        multiCalendarPage.clickCheckbox(multiCalendarPage.secondCheckbox);
        multiCalendarPage.clickCheckbox(multiCalendarPage.thirdCheckbox);

        // Click Save & Refresh
        multiCalendarPage.clickSaveAndRefresh();

        // Assert that the checkboxes are checked
        multiCalendarPage.assertCheckboxState(multiCalendarPage.firstCheckbox, true);
        multiCalendarPage.assertCheckboxState(multiCalendarPage.secondCheckbox, true);
        multiCalendarPage.assertCheckboxState(multiCalendarPage.thirdCheckbox, true);

        // Uncheck the checkboxes
        cy.get(multiCalendarPage.firstCheckbox).uncheck({ force: true });
        cy.get(multiCalendarPage.secondCheckbox).uncheck({ force: true });
        cy.get(multiCalendarPage.thirdCheckbox).uncheck({ force: true });

        // Assert that the checkboxes are unchecked
        multiCalendarPage.assertCheckboxState(multiCalendarPage.firstCheckbox, false);
        multiCalendarPage.assertCheckboxState(multiCalendarPage.secondCheckbox, false);
        multiCalendarPage.assertCheckboxState(multiCalendarPage.thirdCheckbox, false);

        // End the session
        cy.end();
    });

    // Test case to login and add overrides via the three-dot icon
    it('should login, navigate to Multi Calendar, click the three-dot icon, and then click Add Overrides', () => {
        loginPage.visit(); // Visit the login page
        loginPage.login(credentials.username, credentials.password); // Use the loaded credentials to login
        pricingPage.navigateToMultiCalendarAndCloseModal(); // Navigate to Multi Calendar and close any modal
    
        // Click the three-dot icon for the specific item
        multiCalendarPage.clickThreeDotIcon(); // Specify the item
    
        // Click the Add Overrides button
        multiCalendarPage.clickAddOverrides();
    
        // Set a random price in the input field and capture it
        const randomPrice = Math.floor(Math.random() * (999 - 800 + 1)) + 800;
        multiCalendarPage.setRandomPrice(randomPrice);
    
        // Click the Add button
        multiCalendarPage.clickAddButton();
    
        // Assert that the displayed price matches the random price
        multiCalendarPage.assertDisplayedPrice(randomPrice);
    
        // End the session
        cy.end();
    });

    // Test case to edit an existing override
    it('should login, navigate to Multi Calendar, click the three-dot icon, click View Overrides, click the edit pencil icon, and then click Update', () => {
        loginPage.visit(); // Visit the login page
        loginPage.login(credentials.username, credentials.password); // Use the loaded credentials to login
        pricingPage.navigateToMultiCalendarAndCloseModal(); // Navigate to Multi Calendar and close any modal
    
        // Click the three-dot icon for the specific item
        multiCalendarPage.clickThreeDotIcon(); // Specify the item
    
        // Click the View Overrides button
        multiCalendarPage.clickViewOverrides();
    
        // Wait for 2 seconds before clicking the edit pencil icon
        cy.wait(2000); // Adjust the time as needed
    
        // Click the edit pencil icon
        multiCalendarPage.clickEditPencilIcon();
    
        // Set a random price in the input field and capture it
        const randomPrice = Math.floor(Math.random() * (999 - 800 + 1)) + 800;
        multiCalendarPage.setRandomPrice(randomPrice);
    
        // Click the Update button
        multiCalendarPage.clickUpdateButton();
    
        // Assert that the displayed price matches the random price
        multiCalendarPage.assertDisplayedPrice(randomPrice);
    
        // End the session
        cy.end();
    });

    // Test case to set a random minimum stay and delete the entry
    it('should login, navigate to Multi Calendar, click the three-dot icon, click View Overrides, click the edit pencil icon, set a random minimum stay, and then click Update', () => {
        loginPage.visit(); // Visit the login page
        loginPage.login(credentials.username, credentials.password); // Use the loaded credentials to login
        pricingPage.navigateToMultiCalendarAndCloseModal(); // Navigate to Multi Calendar and close any modal
    
        // Click the three-dot icon for the specific item
        multiCalendarPage.clickThreeDotIcon(); // Specify the item
    
        // Click the View Overrides button
        multiCalendarPage.clickViewOverrides();
    
        // Wait for 2 seconds before clicking the edit pencil icon
        cy.wait(2000); // Adjust the time as needed
    
        // Click the edit pencil icon
        multiCalendarPage.clickEditPencilIcon();
    
        // Set a random minimum stay
        const randomMinStay = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
        multiCalendarPage.setRandomMinimumStay(randomMinStay); // Assume you have this method
    
        // Click the Update button
        multiCalendarPage.clickUpdateButton();
    
        // Click the three-dot icon for the specific item
        multiCalendarPage.clickThreeDotIcon(); // Specify the item
    
        // Click the View Overrides button
        multiCalendarPage.clickViewOverrides();
     
        // Wait for 2 seconds before clicking the delete icon
        cy.wait(2000); // Adjust the time as needed
    
        // Click the delete icon
        multiCalendarPage.clickDeleteIcon();
    
        // End the session
        cy.end();
    });
});
