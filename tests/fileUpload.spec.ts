import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
import path from 'path';

test.describe('File Upload Tests', () => {
    let cartPage: CartPage;

    const fileName: string[] = ['a.xlsx', 'whitelabel_default.png'];

    for (const name of fileName) {
        test(`should upload a test file - ${name}`, async ({ page }) => {
            cartPage = new CartPage(page);
            await page.goto('/cart/');
            const filepath = path.join(__dirname, `../data/${name}`);
            await cartPage.uploadComponent().uploadFile(filepath);
    
            await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully1', {timeout: 50000});
        });
    }
});