import { SET_ONBORADING_SUCCESS, SET_ONBORADING_FAILURE } from '../contants/action-types'
import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { loginService } from './services';


export function* fetch_Onborading(action) {
    try {
        // console.log("Hello Saga")
        // const result = yield call(loginService, action);
        // if (result?.isSucess)
        //     yield put({ type: types.LOGIN_USER_SUCCESS, payload: result.Result.data });
        console.log("saga Onborading set_success", action.payload)
        yield put({ type: SET_ONBORADING_SUCCESS, payload: action.payload })
    } catch (error) {
        console.log("Saga Onborading set_failure", action.payload)
        yield put({ type: SET_ONBORADING_FAILURE, payload: error.message })
    }
}