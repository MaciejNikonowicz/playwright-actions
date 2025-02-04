import { Page, Locator } from '@playwright/test';

class HomePage {
    private page: Page;
    public getStartedButton: Locator;
    public headingText: Locator;
    public homeText: Locator;
    public navLinks: Locator;
    public alertMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
        this.homeText = page.locator('#zak-primary-menu >> text=Home');
        this.navLinks = page.locator('#zak-primary-menu li[id*="menu"]');
        this.alertMsg = page.locator('[role="alert"]');
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    getNavLinksText() {
        return this.navLinks.allTextContents();
    }
}

export default HomePage;