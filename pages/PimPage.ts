import {Locator, Page} from "@playwright/test";

export class PimPage{
    readonly page: Page;
    readonly addPimButton: Locator;
    readonly firstnameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeNameHeading: Locator;

    constructor(page: Page){
        this.page = page;
        this.addPimButton = page.getByRole('button', { name: ' Add' });
        this.firstnameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name');

    }
    /**
     * To add new employee from PIM page
     * @param firstName 
     * @param middleName 
     * @param lastName 
     */
    async addEmployee(firstName: string, middleName: string, lastName: string){
        await this.addPimButton.click();
        await this.firstnameTextBox.fill(firstName);
        await this.middleNameTextBox.fill(middleName);
        await this.lastNameTextBox.fill(lastName);
        await this.saveButton.click();
        await this.page.waitForURL(/viewPersonalDetails/);
    }


}