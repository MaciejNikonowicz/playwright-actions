import { Page, Locator } from '@playwright/test';

class UploadComponent {
    private page: Page;
    uploadInput: string;
    submitBtn: Locator;
    successTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadInput = 'input#upfile_1';
        this.submitBtn = page.locator('#upload_1');
        this.successTxt = page.locator('#wfu_messageblock_header_1_label_1');
    }

    async uploadFile(filePath: string) {
        await this.page.setInputFiles(this.uploadInput, filePath);
        await this.page.evaluate(() => {
            const selector = document.querySelector(this.uploadInput) as HTMLInputElement;
            if (selector) {
                selector.className = '';
            }
        });
        await this.submitBtn.click();
    }
}

export default UploadComponent;