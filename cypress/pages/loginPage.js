class LoginPage {
    // Method to visit the login page
    visit() {
        cy.visit('https://pricelabs.co/signin');
    }

    // Method to get the email input field
    getEmailInput() {
        return cy.get('#user_email'); 
    }

    // Method to get the password input field
    getPasswordInput() {
        return cy.get('#user_password'); 
    }

    // Method to get the 'Remember Me' checkbox
    getRememberMeCheckbox() {
        return cy.get('#user_remember_me');
    }

    // Method to get the Sign-In button
    getSignInButton() {
        return cy.get('input[name="commit"]'); 
    }

    // Method to perform login action
    login(email, password, rememberMe = false) {
        this.getEmailInput().type(email); 
        this.getPasswordInput().type(password); 
        
        // Check the 'Remember Me' checkbox if the parameter is true
        if (rememberMe) {
            this.getRememberMeCheckbox().check(); 
        }

        this.getSignInButton().click(); 
    }
}

export default LoginPage; 
