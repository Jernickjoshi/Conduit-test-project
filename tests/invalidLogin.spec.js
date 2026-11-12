const { test, expect } = require('../fixtures');

test('login fails with a wrong password', async ({ loggedInUser, settingsPage, loginPage, page }) => {

  await settingsPage.logout();
  await loginPage.open();

  const responsePromise = page.waitForResponse(
    r => r.url().includes('/api/users/login') && r.request().method() === 'POST'
  );
  await loginPage.logIn(loggedInUser.email, 'Wrong@9999');
  const response = await responsePromise;

  expect(response.status()).toBe(401);
  await expect(page.getByText(/invalid credentials/i)).toBeVisible();
});