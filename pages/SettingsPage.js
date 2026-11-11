class SettingsPage {
  constructor(page) {
    this.page = page;
    this.settingsLink = page.getByRole('link', { name: /Settings/ });
    this.logoutButton = page.getByRole('button', { name: 'Or click here to logout.' });
  }

  async open() {
    await this.settingsLink.click();
  }
  async logout() {
    await this.settingsLink.click();
    await this.logoutButton.click();
  }
}

module.exports = { SettingsPage };