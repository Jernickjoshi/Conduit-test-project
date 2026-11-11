const base = require('@playwright/test');
const { SignupPage } = require('../pages/SignupPage');
const { LoginPage } = require('../pages/LoginPage');
const { SettingsPage } = require('../pages/SettingsPage');
const { Articlepage } = require('../pages/ArticlePage')
const test = base.test.extend({
    signupPage: async ({ page }, use) => {
        await use(new SignupPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    settingsPage: async ({ page }, use) => {
        await use(new SettingsPage(page));
    },
    loggedInUser: async ({ page, signupPage}, use) => {
        const unique = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
        const user = {
            username: `user${unique}`,
            email: `user${unique}@example.com`,
            password: 'Correct@1234'
        };

        await signupPage.open();
        await signupPage.signUp(user.username, user.email, user.password);
        await base.expect(page.getByText(user.username)).toBeVisible();

        await use(user);
    },
    articlePage: async({page}, use) => {
        await use(new Articlepage(page));
    },
});

module.exports = { test , expect: base.expect}