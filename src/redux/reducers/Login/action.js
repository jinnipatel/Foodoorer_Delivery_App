import { FETCH_USER } from '../contants/action-types'

// import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../contants/action-types";

export const getUser = (user) => ({
    type: FETCH_USER,
    user,
})

// export function login(email, password) {
//     return {
//         type: FETCH_USER,
//         payload: { email, password }
//     }
// }

// export function loginSucceeded(payload) {
//     return {
//         type: FETCH_USER_SUCCESS,
//         payload
//     }
// }

// export function loginFailed(error) {
//     return {
//         type: FETCH_USER_FAILURE,
//         error
//     }
// }

// export function login(email, password) {
//     return {
//         type: LOGIN_REQUEST,
//         payload: { email, password }
//     }
// }
// export function loginSucceeded(payload) {
//     return {
//         type: LOGIN_SUCCEEDED,
//         payload
//     }
// }

// export function loginFailed(error) {
//     return {
//         type: LOGIN_FAILED,
//         error
//     }
// }


