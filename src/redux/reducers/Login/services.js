import { callService } from "../../../services"
import apiUrl from "../../../services/serverEndpoints";

export const loginService = async (action) => {
    console.log("Hello Services")
    // console.log("***************", action.payload)
    let jsonBody =
    {
        Email: action.payload.param.email,
        Password: action.payload.param.password
    }
    let result = await callService(apiUrl.login, "POST", jsonBody, action.payload.props,
        action.payload.cbError, action.payload.cbSuccess);
    // console.log("result------------", result)
    return result;
}