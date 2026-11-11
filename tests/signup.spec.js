const { test, expect } = require('../fixtures');

test('user can sign up with a new account', async ({ signupPage, page }) => {
      const unique = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
      const username = `user${unique}`;
      const email = `user${unique}@example.com`;

      await signupPage.open();
  const responsePromise = page.waitForResponse(
    r => r.url().includes('/api/users') && r.request().method() === 'POST'
  );
  await signupPage.signUp(username, email, 'Test@1234')
  const response = await responsePromise;

  expect(response.status()).toBe(201);
  await expect(page.getByText(username)).toBeVisible();
});