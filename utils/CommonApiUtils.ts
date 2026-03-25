import { APIRequestContext } from "@playwright/test";
import apiPathData from '../data/api-data/api-path-data.json';
import CommonUtils from "./commonUtils";

export default class CommonApiUtils{
    private request : APIRequestContext;

    constructor(request: APIRequestContext){
        this.request = request;
    }

    public async createToken(){
        const CommonUtilsObj = new CommonUtils();
        console.log(process.env.API_USERNAME!);
        console.log(process.env.API_PASSWORD!);
        //const encryptedUsername = CommonUtilsObj.encryptData("admin");
        //const encryptedPassword = CommonUtilsObj.encryptData("password123");
        const apiusername = await CommonUtilsObj.decryptData(process.env.API_USERNAME!)
        const apipassword = await CommonUtilsObj.decryptData(process.env.API_PASSWORD!)
        console.log(apiusername);
        console.log(apipassword);
        const TokenResponse = await this.request.post(apiPathData.auth_path, {
            data: {
                "username" : apiusername,
                "password" : apipassword
            }
        })
        const TokenJsonResp = await TokenResponse.json();
        return TokenJsonResp.token;
    }
}