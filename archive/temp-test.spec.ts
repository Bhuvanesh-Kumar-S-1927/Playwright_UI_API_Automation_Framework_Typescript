import { expect } from '@playwright/test';
import {test} from '../fixtures/hooks-fixture'


// test.beforeEach('before each hook', async ({ loginPage }) =>{
//     await loginPage.gotoOrangeHrm();
// })

// test.afterEach('after each hook', async ({userPage}) =>{
//     await userPage.logout();

// })



test("Temp test 1", async({page, gotoUrl})=>{
    console.log(await page.title());
})

test("Temp test 2", async({page, gotoUrl})=>{
    console.log(await page.title());
})

test("Temp test 3", async({page, gotoUrl, logout})=>{
    await expect(page).toHaveTitle('OrangeHRM');
})