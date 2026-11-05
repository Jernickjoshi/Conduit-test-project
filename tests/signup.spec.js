const { test, expect } = require('@playwright/test');

test('user can sign up with a new account', async ({ page }) => {
  const unique = Date.now();
  const username = `user${unique}`;
  const email = `user${unique}@example.com`;

  await page.goto('https://demo.realworld.show');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12345');

  const responsePromise = page.waitForResponse(
    r => r.url().includes('/api/users') && r.request().method() === 'POST'
  );
  await page.getByRole('button', { name: 'Sign up' }).click();
  const response = await responsePromise;

  expect(response.status()).toBe(201);
  await expect(page.getByText(username)).toBeVisible();
});