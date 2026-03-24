import { test, expect } from '../../fixtures/hooks-fixture';
import pimData from '../../data/ui-data/pim-module-data.json'

test.describe("PIM Module Tests", () => {
    test('[PIM]verify that a new employee is successfully created under the PIM module', {
        tag: ['@SMOKE', '@HIGH LEVEL', '@REGRESSION'],
        annotation: {
            type: 'test case', description: 'test description'

        }
    }, async ({ gotoUrl, leftNavigationPage, pimPage }) => {
        await test.step("Open PIM Module", async () => {
            await leftNavigationPage.openPIMModule();
        })
        await test.step("Add Employee in PIM Module", async () => {
            await pimPage.addEmployee(pimData.first_name, pimData.middle_name, pimData.last_name);
            await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
        })
    })
})
