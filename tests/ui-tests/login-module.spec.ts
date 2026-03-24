import {test, expect} from '../../fixtures/hooks-fixture'
import loginModuleData from '../../data/ui-data/login-module-data.json'

test.use({storageState:{
    cookies:[],
    origins:[]
}})

test ('[Login] verify that the user cannot log in with an invalid password',{tag:['@SMOKE','@HIGH LEVEL', '@REGRESSION'], annotation:{type: 'test case', description:'test description'}}, async({gotoUrl, loginPage, commonUtils})=>{
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrangeHrm(username, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_Error_popup);
    await expect(loginPage.userNameInput).toBeVisible();
})

test ('[Login] verify that the user cannot log in with an invalid username',{tag:['@SMOKE','@HIGH LEVEL', '@REGRESSION'], annotation:{type: 'test case', description:'test description'}}, async({gotoUrl, loginPage, commonUtils})=>{
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHrm(loginModuleData.wrong_username, password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_Error_popup);
    await expect(loginPage.userNameInput).toBeVisible();
})

test ('[Login] verify that the user cannot log in with an invalid username and password',{tag:['@SMOKE','@HIGH LEVEL', '@REGRESSION'], annotation:{type: 'test case', description:'test description'}}, async({gotoUrl, loginPage, commonUtils})=>{
    await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_Error_popup);
    await expect(loginPage.userNameInput).toBeVisible();
})