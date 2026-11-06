const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../pages/SignupPage')
test('user can sign up with a new account', async ({ page }) => {
  const unique = Date.now();
  const username = `user${unique}`;
  const email = `user${unique}@example.com`;

  const signupPage = new SignupPage(page);
  await signupPage.open();

  const responsePromise = page.waitForResponse(
    r => r.url().includes('/api/users') && r.request().method() === 'POST'
  );
  await signupPage.signUp(username, email, 'test@12345')
  const response = await responsePromise;

  expect(response.status()).toBe(201);
  await expect(page.getByText(username)).toBeVisible();
});