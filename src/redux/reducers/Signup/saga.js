// import { CREATE_USER_FAILURE, CREATE_USER_SUCCESS } from '../contants/action-types'
// import { put, call } from 'redux-saga/effects'
// import axios from 'axios'


// export function* createUsers(action) {
//     console.log("hfhgfgcgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", action)
//     try {
//         const apiConfig = {
//             method: 'POST',
//             url: "http://foodooerdashboard.project-demo.info/api/register",
//             data: {
//                 name: action.payload.name,
//                 email: action.payload.email,
//                 password: action.payload.password,
//                 contact_no: action.payload.phoneNo,
//                 email: action.payload.email,
//             }
//         }
//         const response = yield call(axios, apiConfig);
//         console.log("SignUp User Data-------------", response.data)
//         alert("Hello")
//         yield put({ type: CREATE_USER_SUCCESS, payload: response })
//     } catch (error) {
//         console.log("svsvxvaxvavxavxhas", error);
//         yield put({ type: CREATE_USER_FAILURE, payload: error.message })
//     }
// }

// import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../contants/action-types'

// import { call, put } from 'redux-saga/effects'
// import axios from 'axios'


// export function* fetchUser(payload) {

//     try {
//         const apiConfig = {
//             method: 'POST',
//             url: "https://reqres.in/api/login",
//             data: {
//                 "email": "eve.holt@reqres.in",
//                 "password": "cityslicka"
//             }
//         };
//         const response = yield call(axios, apiConfig)
//         console.log("User data --------|||||||||||", response.email)
//         alert("hello")
//         yield put({ type: FETCH_USER_SUCCESS, payload: response })
//     } catch (error) {
//         console.log(error);
//         yield put({ type: FETCH_USER_FAILURE, payload: error.message })
//     }
// }

// // import { put } from '@redux-saga/core/effects';
// // // import { callLogin } from '../../requests'
// // import { loginFailed, loginSucceeded } from './action';

// // export function* login({ email, password }) {
// //     const options = {
// //         email: email,
// //         password: password
// //     };
// //     try {
// //         const payload = yield call(callLogin, options);
// //         const { access_token } = payload;
// //         yield put(loginSucceeded(payload));
// //         localStorage.setItem('token', access_token);
// //     } catch (error) {
// //         yield put(loginFailed(error));
// //         localStorage.removeItem('token')

// //     }
// // }




// // import { callLogin } from '../../requests'

// // export function* login({email, password}) {
// //   const options = {
// //     email: email,
// //     password: password
// //   };

// //   try {
// //     const payload = yield call(callLogin, options);
// //     const { access_token } = payload;
// //     yield put(loginSucceeded(payload));
// //     localStorage.setItem('token', access_token);
// //   } catch (error) {
// //     yield put(loginFailed(error));
// //     localStorage.removeItem('token');
// //   }
// // }

// // export default function* loginPageSaga() {
// //   yield takeLatest(LOGIN_REQUEST, login);
// // }
import * as types from '../contants/action-types';
import { put, call } from 'redux-saga/effects';
import { loginService, SignUpService } from './services';


export function* registerUser(action) {
    try {
        console.log("Hello Saga Signup")
        const result = yield call(SignUpService, action);
        console.log('############', result)
        if (result?.isSucess)
            yield put({ type: types.REGISTER_USER_SUCCESS, payload: result.Result.data });
    }
    catch (e) {
        console.log("user failure")
        yield put({ type: types.REGISTER_USER_FAILURE, payload: e.message });
    }
}




