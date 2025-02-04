import { test, expect } from '@playwright/test';

test.describe('Account Tests', () => {

    test('Access orders', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator(`li a[href*='orders']`).click();
        await expect(page).toHaveURL(/.*orders/);
    });

    test('Access downloads', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator(`li a[href*='downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
    });
});

test.describe('Login Page', () => {
    test.use({ storageState: 'notLoggedInState.json' });
    test('Verify login button', async ({ page }) => {
        await page.goto('/my-account');
        await expect(page.locator('form[class*="login"]')).toBeVisible();
        await expect(page.locator('form[class*="register"]')).toBeVisible();
    });
});