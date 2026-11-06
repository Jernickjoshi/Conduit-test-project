class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
  }

  async open() {
    await this.signInLink.click();
  }

  async logIn(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}

module.exports = { LoginPage };