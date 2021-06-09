import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../contants/action-types'

import { call, put } from 'redux-saga/effects'
import axios from 'axios'


export function* fetchUser(payload) {

    try {
        const apiConfig = {
            method: 'POST',
            url: "https://reqres.in/api/login",
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        };
        const response = yield call(axios, apiConfig)
        console.log("User data --------|||||||||||", response.email)
        alert("hello")
        yield put({ type: FETCH_USER_SUCCESS, payload: response })
    } catch (error) {
        console.log(error);
        yield put({ type: FETCH_USER_FAILURE, payload: error.message })
    }
}

// import { put } from '@redux-saga/core/effects';
// // import { callLogin } from '../../requests'
// import { loginFailed, loginSucceeded } from './action';

// export function* login({ email, password }) {
//     const options = {
//         email: email,
//         password: password
//     };
//     try {
//         const payload = yield call(callLogin, options);
//         const { access_token } = payload;
//         yield put(loginSucceeded(payload));
//         localStorage.setItem('token', access_token);
//     } catch (error) {
//         yield put(loginFailed(error));
//         localStorage.removeItem('token')

//     }
// }




// import { callLogin } from '../../requests'

// export function* login({email, password}) {
//   const options = {
//     email: email,
//     password: password
//   };

//   try {
//     const payload = yield call(callLogin, options);
//     const { access_token } = payload;
//     yield put(loginSucceeded(payload));
//     localStorage.setItem('token', access_token);
//   } catch (error) {
//     yield put(loginFailed(error));
//     localStorage.removeItem('token');
//   }
// }

// export default function* loginPageSaga() {
//   yield takeLatest(LOGIN_REQUEST, login);
// }

