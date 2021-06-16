import * as types from '../contants/action-types';
import { put, call } from 'redux-saga/effects';
import { loginService } from './services';


export function* loginUser(action) {
    try {
        console.log("Hello Saga")
        // console.log(action)
        const result = yield call(loginService, action);
        if (result?.isSucess)
            yield put({ type: types.LOGIN_USER_SUCCESS, payload: result.Result.data });
    }
    catch (e) {
        // console.log("user failure", action.payload)
        yield put({ type: types.LOGIN_USER_FAILURE, payload: e.message });
    }
}
