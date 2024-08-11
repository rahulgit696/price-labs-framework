// Import the API Page Object
import { apiPage } from '../support/apiPage';

describe('API Test Suite', () => {
    const listingId = '5d0a4acba5dbf000106e1b71'; // Sample listing ID for test cases

    // Test case to retrieve all listings
    it('should retrieve all listings', () => {
        apiPage.getAllListings().then((response) => {
            console.log('Response:', response); // Log the full response object for debugging
            cy.log(JSON.stringify(response.body)); // Log the response body as a JSON string

            // Assertions to verify the response
            expect(response.status).to.eq(200); // Check for successful response status
            expect(response.body).to.have.property('listings'); // Check if 'listings' property exists
            expect(response.body.listings).to.be.an('array'); // Verify that 'listings' is an array
            expect(response.body.listings.length).to.be.greaterThan(0); // Ensure the array has at least one listing
        });
    });

    // Test case to verify the response without an API key
    it('should return 403 Forbidden without API key', () => {
        apiPage.getAllListingsWithoutApiKey().then((response) => {
            console.log('Response without API Key:', response); // Log the response object
            cy.log(JSON.stringify(response.body)); // Log the response body as a JSON string

            // Assertions to verify the response
            expect(response.status).to.eq(403); // Check for Forbidden status
            expect(response.body).to.have.property('error'); // Check if 'error' property exists
            expect(response.body.error).to.have.property('message'); // Check for 'message' property in 'error'
            expect(response.body.error.message).to.include('No api_key was supplied.'); // Verify the error message
        });
    });

    // New Test Case: Attempt to retrieve a listing with an ID that exists but is inactive
    it('should return 404 for an inactive listing ID', () => {
        const inactiveListingId = '5d0a4acba5dbf000106e1b71'; // ID for an inactive listing
        apiPage.getListingById(inactiveListingId).then((response) => {
            console.log('Response for inactive listing ID:', response); // Log the response object
            cy.log(JSON.stringify(response.body)); // Log the response body as a JSON string

            // Assertions to verify the response
            expect(response.status).to.eq(404); // Expect a 404 status for inactive listing
            expect(response.body).to.have.property('error'); // Check if 'error' property exists
        });
    });
});
