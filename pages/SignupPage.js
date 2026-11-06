class SignupPage {
    constructor(page){
        this.page = page;

        this.signUpLink = page.getByRole('link', { name: 'Sign Up' });
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.submitButton = page.getByRole('button', { name: 'Sign up' });
    }

    async open(){
        await this.page.goto('https://demo.realworld.show');
        await this.signUpLink.click();
    }

    async signUp(username, email, password){
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click(); 
    }
}

module.exports = { SignupPage };