import { CREATE_USER_FAILURE, CREATE_USER_SUCCESS } from '../contants/action-types'
import { put, call } from 'redux-saga/effects'
import axios from 'axios'


export function* createUsers(action) {
    console.log("hfhgfgcgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
    try {
        const apiConfig = {
            method: 'POST',
            url: "https://reqres.in/api/register",
            data: {
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                contact_no: action.payload.phoneNo,
                // email: action.payload.email,
            }
        }
        const response = yield call(axios, apiConfig);
        console.log("SignUp User Data-------------", response)
        alert("Hello")
        yield put({ type: CREATE_USER_SUCCESS, payload: response })
    } catch (error) {
        console.log("svsvxvaxvavxavxhas", error);
        yield put({ type: CREATE_USER_FAILURE, payload: error.message })
    }
}




