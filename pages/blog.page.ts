import { Page, Locator, expect } from '@playwright/test';
import HomePage from './home.page';

class BlogPage {
    private page: Page;
    recentPosts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.recentPosts = page.locator('#recent-posts-3 ul li');
    }

    async assertRecentPosts(assertionValue: number) {
        for (const el of await this.recentPosts.elementHandles()) {
            expect(((await el.textContent() as string).trim()).length).toBeGreaterThan(assertionValue);
        }
    }

    getHomePage() {
        return new HomePage(this.page);
    }
}

export default BlogPage;