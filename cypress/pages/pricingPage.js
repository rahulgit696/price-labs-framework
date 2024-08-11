class PricingPage {
    // Method to click on the "Dynamic Pricing" link in the navigation
    clickDynamicPricing() {
        cy.get('a[qa-id="nav-item-title"]')
          .contains('Dynamic Pricing')
          .click(); // Clicks on the "Dynamic Pricing" link
    }

    // Method to click on the "Multi Calendar" link from the dropdown menu
    clickMultiCalendar() {
        cy.get('ul.dropdown-menu.show') // Locate the visible dropdown menu
          .find('a.dropdown-item[href="https://app.pricelabs.co/multicalendar"]')
          .click(); // Clicks on the "Multi Calendar" link
    }

    // Method to close the side modal (commented out for now)
    // closeSideModal() {
    //     cy.get('button[aria-label="Close"]')
    //       .click(); // Clicks the cross icon to close the side modal
    // }

    // Method to navigate to the Multi Calendar page and close the side modal
    navigateToMultiCalendarAndCloseModal() {
        this.clickDynamicPricing(); // Click on "Dynamic Pricing"
        this.clickMultiCalendar(); // Click on "Multi Calendar"
        // this.closeSideModal(); // Close the side modal (currently commented out)
    }
}

export default PricingPage;
