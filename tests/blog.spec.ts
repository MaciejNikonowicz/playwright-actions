import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('Home page', () => {
    let blogPage: BlogPage;

    test.beforeEach(async ({ page }) => {
        blogPage = new BlogPage(page);
    });

    test('Verify blog posts', async ({ page }) => {
        await blogPage.getHomePage().navigate('/blog/');

        await blogPage.assertRecentPosts(10);

        expect(await blogPage.recentPosts.count()).toEqual(5);
    });
});