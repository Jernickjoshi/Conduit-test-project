const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../pages/SignupPage');
const { LoginPage } = require('../pages/LoginPage');
const { SettingsPage } = require('../pages/SettingsPage');

test('login fails with a wrong password', async ({ page }) => {
  const unique = Date.now();
  const username = `user${unique}`;
  const email = `user${unique}@example.com`;
  const password = 'Correct@1234';

  const signupPage = new SignupPage(page);
  const settingsPage = new SettingsPage(page);
  const loginPage = new LoginPage(page);

  await signupPage.open();
  await signupPage.signUp(username, email, password);
  await expect(page.getByText(username)).toBeVisible();

  await settingsPage.logout();
  await loginPage.open();

  const responsePromise = page.waitForResponse(
    r => r.url().includes('/api/users/login') && r.request().method() === 'POST'
  );
  await loginPage.logIn(email, 'Wrong@9999');
  const response = await responsePromise;

  expect(response.status()).toBe(401);
  await expect(page.getByText(/credentials invalid/i)).toBeVisible();   // match the real text
});