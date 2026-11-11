const { test, expect } = require('../fixtures');

test('user can publish a new article', async ({ loggedInUser, articlePage, page }) => {
  const title = `Test article ${Date.now()}`;

  await articlePage.open();

  const responsePromise = page.waitForResponse(
    r => r.url().includes('/api/articles') && r.request().method() === 'POST'
  );
  await articlePage.details(title, 'A short description', 'The body text of the article.');
  const response = await responsePromise;
  
  expect(response.status()).toBe(201);
  await expect(page.getByRole('heading', { name: title })).toBeVisible();
});