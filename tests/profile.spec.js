const { test, expect } = require('../fixtures');

test (' logged-in user can access settings page', async({ settingsPage, loggedInUser, page}) => {
    await expect(page.getByRole('link', { name: loggedInUser.username})).toBeVisible();

    await settingsPage.open();

    await expect(page.getByRole('heading', { name: 'Your Settings', exact: true })).toBeVisible();
});