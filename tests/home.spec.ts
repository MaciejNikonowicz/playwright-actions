import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home page', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
    });

    test('Open HomePage and verify title', async ({ page }) => {
        await homePage.navigate('/');
        await expect(page).toHaveTitle(
            'Practice E-Commerce Site – SDET Unicorns'
        );
    });

    test('About page', async ({ page }) => {
        await homePage.navigate('/about/');
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    });

    test('Click get started button using css selector', async ({ page }) => {
        await homePage.navigate('/');

        await homePage.getStartedButton.click();

        await expect(page).toHaveURL('/#get-started');
    });

    test('Select heading text on the main page and make sure it visible', async ({ page }) => {
        await homePage.navigate('/');

        await expect(homePage.headingText).toBeVisible();
    });

    test('Verify home link is enabled', async ({ page }) => {
        await homePage.navigate('/');

        await expect(homePage.homeText).toBeEnabled();
    });

    test('Verify the text for all nav links (multiple)', async ({ page }) => {
        const expectedLinks = [
            'Home',
            'About',
            'Shop',
            'Blog',
            'Contact',
            'My account'
        ];

        await homePage.navigate('/');

        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    });


});