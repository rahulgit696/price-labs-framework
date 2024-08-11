class MultiCalendarPage {
    // Locators for various elements on the Multi Calendar page
    get toggleInput() {
        // Locator for the toggle input used to sync settings
        return 'label[qa-id="mc-sync-toggle-5d0a4acaa5dbf000106e1b6a"] input.chakra-switch__input';
    }

    get closeModalButton() {
        // Locator for the close button on modal dialogs
        return 'button[aria-label="Close"]';
    }

    get saveAndRefreshButton() {
        // Locator for the "Save & Refresh" button, which contains a nested p element
        return 'button.chakra-button:has(p.css-1wevhjz:contains("Save & Refresh"))';
    }

    // Method to click the sync toggle and close the modal
    clickToggle() {
        cy.get(this.toggleInput).click({ force: true }); // Click the toggle input
        cy.get(this.closeModalButton).click(); // Close the modal
    }

    // Method to assert the state of the toggle (checked/unchecked)
    assertToggleState(shouldBeChecked) {
        if (shouldBeChecked) {
            cy.get(this.toggleInput).should('be.checked'); // Assert that the toggle is checked
        } else {
            cy.get(this.toggleInput).should('not.be.checked'); // Assert that the toggle is unchecked
        }
    }

    // Method to click the "Save & Refresh" button with an increased timeout for visibility
    clickSaveAndRefresh() {
        cy.get(this.saveAndRefreshButton, { timeout: 10000 }).should('be.visible').click(); // Wait for the button to be visible before clicking
    }

    // Locators for checkboxes used in bulk actions
    get firstCheckbox() {
        return 'label[qa-id="bulk-5d0a4acaa5dbf000106e1b6a___stays"] input.chakra-checkbox__input';
    }

    get secondCheckbox() {
        return 'label[qa-id="bulk-5d0a4acba5dbf000106e1b71___stays"] input.chakra-checkbox__input';
    }

    get thirdCheckbox() {
        return 'label[qa-id="bulk-SUNSETPROPS_OLSE___323___vrm"] input.chakra-checkbox__input';
    }

    // Method to click on a specified checkbox
    clickCheckbox(checkbox) {
        cy.get(checkbox).check({ force: true }); // Click the specified checkbox
    }

    // Method to assert the state of a checkbox (checked/unchecked)
    assertCheckboxState(checkbox, shouldBeChecked) {
        if (shouldBeChecked) {
            cy.get(checkbox).should('be.checked'); // Assert that the checkbox is checked
        } else {
            cy.get(checkbox).should('not.be.checked'); // Assert that the checkbox is unchecked
        }
    }

    get pricingCell() {
        // Locator for the pricing cell in the calendar
        return 'td.pricing-cell.css-43h9fx';
    }

    // Method to click on a specific pricing cell containing "600"
    clickPricingCell() {
        cy.contains('td.pricing-cell.css-43h9fx', '600')
            .click({ force: true }); // Click on the cell containing "600"
    }

    // Method to click on the three-dot icon in a specific row
    clickThreeDotIcon() {
        const rowText = '1101B WM - Sunset Clipper W'; // Text to identify the relevant row
        cy.get('tr') // Get all table rows
            .contains(rowText) // Find the row containing the specified text
            .parents('tr') // Navigate to the parent <tr> of the found element
            .within(() => {
                // Click on the three-dot icon button within that row
                cy.get('button.chakra-menu__menu-button').click({ force: true });
            });
    }

    // Method to click the "Add Overrides" button from the menu
    clickAddOverrides() {
        cy.get('button.chakra-menu__menuitem.mc-add-overrides-v2').click({ force: true }); // Click the button to add overrides
    }

    // Method to set a random price in the input field
    setRandomPrice(randomPrice) {
        // Clear the input field and type the random price
        cy.get('input[qa-id="dso-price"]').clear().type(randomPrice.toString());
    }

    // Method to click the "Add" button
    clickAddButton() {
        cy.get('button.chakra-button.css-z0ddwv').contains('Add').click(); // Click the button labeled "Add"
    }

    // Method to assert that the displayed price matches the entered random price
    assertDisplayedPrice(randomPrice) {
        cy.get('div.css-12xei1n p[qa-id^="dso-band-text-"]').should('contain', `Price: ${randomPrice} $`); // Assert the displayed price
    }

    get calendarInput() {
        // Locator for the calendar input field
        return 'div.chakra-input__group.css-1y0e7gb input.chakra-input.css-wrglzm';
    }

    // Method to click on the calendar input
    clickCalendarInput() {
        cy.get(this.calendarInput).click(); // Click on the calendar input
    }

    // Method to set a specific date in the calendar input
    setDateInCalendar(date) {
        cy.get(this.calendarInput).clear().type(date); // Clear the input and set the specified date
    }

    // Method to click the "View Overrides" button
    clickViewOverrides() {
        cy.get('button.chakra-menu__menuitem.mc-view-overrides-v2').click({ force: true }); // Click the button to view overrides
    }

    // Method to click the edit pencil icon for an override
    clickEditPencilIcon() {
        cy.get('div[qa-id^="edit-override-view"] svg').first().click({ force: true }); // Click the first edit pencil icon
    }

    // Method to click the "Update" button
    clickUpdateButton() {
        cy.get('button.chakra-button.css-8ny80w').contains('Update').click(); // Click the button labeled "Update"
    }

    // Method to set a random minimum stay in the input field
    setRandomMinimumStay() {
        // Generate a random number between 1 and 6
        const randomStay = Math.floor(Math.random() * 6) + 1;

        // Set the random value in the minimum stay input field
        cy.get('input[qa-id="dso-min-stay"]').clear().type(randomStay.toString());
    }

    // Method to click the delete icon for an override
    clickDeleteIcon() {
        cy.get('div[qa-id^="delete-override-view"] svg').first().click({ force: true }); // Click the first delete icon
    }
}

export default MultiCalendarPage;
