import { Locator, Page } from "@playwright/test";

export class UserPage{
    readonly page: Page;
    readonly userMenuDropdown: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.userMenuDropdown = page.locator('.oxd-userdropdown-tab');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });

    }

    async logout(){
        await this.userMenuDropdown.click();
        await this.logoutButton.click();
    }



} 