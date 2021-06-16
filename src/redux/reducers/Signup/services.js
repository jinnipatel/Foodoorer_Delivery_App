import { callService } from "../../../services"
import apiUrl from "../../../services/serverEndpoints";

export const SignUpService = async (action) => {
    // console.log("Hello Services SignUp", action, '\n--------', action.payload.name)
    let jsonBody =
    {
        name: action.payload.name,
        email: action.payload.email,
        contact_no: action.payload.phoneNo,
        password: action.payload.password,
        password_confirmation: action.payload.password,
        // confirmPassword: action.payload.confirmPassword,

    }
    console.log(jsonBody)
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', action.payload.name)
    let result = await callService(apiUrl.register, "POST", jsonBody, action.payload.props,
        action.payload.cbError, action.payload.cbSuccess);
    console.log(result)
    return result;
}