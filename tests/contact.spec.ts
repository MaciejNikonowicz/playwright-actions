import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ContactPage from '../pages/contact.page';

test.describe('Contact form tests', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
    });

    test('Go to Contact page and fill form and submit, assert success message', async () => {
        await contactPage.getHomePage().navigate('/contact/');

        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.sentence());
        // soft assertion does not fail the whole test
        // await expect.soft(page.locator('.contact-message textarea')).toHaveText('fail');

        await contactPage.submitBtn.click();

        await contactPage.assertText('Thanks for contacting us! We will be in touch with you shortly');
    });
});