import {test as baseTest} from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRMLoginPage'
import { DashBoardPage } from '../pages/DashBoardPage';
import { UserPage } from '../pages/UserPage';
import { LeftNavigationPage } from '../pages/LeftNaviagtionPage';
import { PimPage } from '../pages/PimPage';

type PomFixturesType = {
    loginPage: OrangeHRMLoginPage;
    dashboardPage: DashBoardPage;
    userPage: UserPage;
    leftNavigationPage: LeftNavigationPage;
    pimPage: PimPage;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage: async({page},use)=>{
        await use(new OrangeHRMLoginPage(page));
    },
    dashboardPage: async({page},use)=>{
        await use(new DashBoardPage(page));
    },
    userPage: async({page},use)=>{
        await use(new UserPage(page));
    },
    leftNavigationPage: async({page},use)=>{
        await use(new LeftNavigationPage(page));
    },
    pimPage: async({page}, use)=>{
        await use(new PimPage(page));
    }

})