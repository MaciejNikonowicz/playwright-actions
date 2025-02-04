import { Page, Locator, expect } from '@playwright/test';
import HomePage from './home.page';

class ContactPage {
    private page: Page;
    firstName: Locator;
    email: Locator;
    phone: Locator;
    message: Locator;
    submitBtn: Locator;
    msg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('.evf-field-first-name input[type="text"]');
        this.email = page.locator('.evf-field-email input[type="email"]');
        this.phone = page.locator('.contact-phone input[type="text"]');
        this.message = page.locator('.evf-field-textarea textarea');
        this.submitBtn = page.locator('button[name="everest_forms[submit]"]');
        this.msg = page.locator('[role="alert"]');
    }

    getHomePage() {
        return new HomePage(this.page);
    }

    async submitForm(name: string, email: string, phone: string, msg: string) {
        await this.firstName.fill(name);
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.message.fill(msg);
    }

    async assertText(text: string) {
        await expect(this.msg).toHaveText(text);
    }
}

export default ContactPage;