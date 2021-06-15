import { callService } from "../../../services"
import apiUrl from "../../../services/serverEndpoints";

export const loginService = async (action) => {
    console.log("Hello Services")
    let jsonBody =
    {
        email: action.payload.param.email,
        password: action.payload.param.password
    }
    let result = await callService(apiUrl.login, "GET", jsonBody, action.payload.props,
        action.payload.cbError, action.payload.cbSuccess);
    return result;
}