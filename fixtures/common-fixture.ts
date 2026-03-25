import {test as baseTest} from './pom-fixture';
import CommonUtils from '../utils/commonUtils';
import CommonApiUtils from '../utils/CommonApiUtils';

type CommonFixtureType = {
    commonUtils: CommonUtils,
    commonApiUtils: CommonApiUtils
}

export const test = baseTest.extend<CommonFixtureType>({
    commonUtils: async ({}, use) =>{
        use(new CommonUtils())
    },
    commonApiUtils: async ({request}, use) =>{
        use(new CommonApiUtils(request))
    }

})