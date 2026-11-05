const { test, expect } = require('@playwright/test');

test('login fails with a wrong password', async ({ page }) => {
  const unique = Date.now();
  const username = `user${unique}`;
  const email = `user${unique}@example.com`;
  const password = 'Correct@1234';

  await page.goto('https://demo.realworld.show');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByText(username)).toBeVisible();

  await page.getByRole('link', { name: /Settings/ }).click();
  await page.getByRole('button', { name: 'Or click here to logout.' }).click();

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill('Wrong@9999');

  const responsePromise = page.waitForResponse(
    r => r.url().includes('/api/users/login') && r.request().method() === 'POST'
  );
  await page.getByRole('button', { name: 'Sign in' }).click();
  const response = await responsePromise;

  expect(response.status()).toBe(401);
  await expect(page.getByText(/credentials invalid/i)).toBeVisible();
});