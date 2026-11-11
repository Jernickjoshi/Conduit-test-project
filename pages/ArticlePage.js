class Articlepage {
    constructor(page) {
        this.page = page;
        this.articleLink = page.getByRole('link', { name: 'New Article' });
        this.articleTitleLink = page.getByRole('textbox', { name: 'Article Title' });
        this.aboutLink = page.getByRole('textbox', { name: 'Write your article' });
        this.descriptionLink = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.publishButtonLink = page.getByRole('button', { name: 'Publish Article' });
    }
    async open() {
        await this.articleLink.click();
    }

    async details(title, description, about) {
        await this.articleTitleLink.fill(title);
        await this.descriptionLink.fill(description);
        await this.aboutLink.fill(about);
        await this.publishButtonLink.click();
    }
}

module.exports = { Articlepage };