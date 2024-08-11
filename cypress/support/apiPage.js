class ApiPage {
    constructor() {
        // API URL for the listings
        this.apiUrl = 'https://api.pricelabs.co/v1/listings';
        // API Key for authentication
        this.apiKey = 'VeCVpk4I3tHCjE4gjqIhhw8gGil8ZHmFa5siv4yD';
    }

    // Method to get all listings with specific query parameters
    getAllListings() {
        return cy.request({
            method: 'GET', // HTTP method
            url: `${this.apiUrl}?skip_hidden=true&only_syncing_listings=true`, // Constructed URL with query parameters
            headers: {
                'accept': 'application/json', // Set Accept header for JSON response
                'X-API-Key': this.apiKey, // Include the API Key in the request headers
            },
        });
    }

    // Method to get a specific listing by ID, with an optional PMS parameter
    getListingById(listingId, pms = 'airbnb') {
        return cy.request({
            method: 'GET', // HTTP method
            url: `${this.apiUrl}/${listingId}/overrides?pms=${pms}`, // Constructed URL for the specific listing
            headers: {
                'accept': 'application/json', // Set Accept header for JSON response
                'X-API-Key': this.apiKey, // Include the API Key in the request headers
            },
            failOnStatusCode: false, // Prevent Cypress from failing on error status codes
        });
    }

    // Method to get all listings without providing an API Key
    getAllListingsWithoutApiKey() {
        return cy.request({
            method: 'GET', // HTTP method
            url: `${this.apiUrl}?skip_hidden=true&only_syncing_listings=true`, // Constructed URL with query parameters
            headers: {
                'accept': 'application/json', // Set Accept header for JSON response
                'X-API-Key': '', // No API Key provided
            },
            failOnStatusCode: false, // Prevent Cypress from failing on error status codes
        });
    }
}

// Create an instance of the ApiPage class for use in tests
export const apiPage = new ApiPage();
