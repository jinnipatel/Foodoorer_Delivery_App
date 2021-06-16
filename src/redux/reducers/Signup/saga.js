import * as types from '../contants/action-types';
import { put, call } from 'redux-saga/effects';
import { SignUpService } from './services';


export function* registerUser(action) {
    try {
        // console.log(action)
        const result = yield call(SignUpService, action);
        // console.log('############', result)
        if (result?.isSucess)
            yield put({ type: types.REGISTER_USER_SUCCESS, payload: result.Result.data });
    }
    catch (e) {
        // console.log("user failure")
        yield put({ type: types.REGISTER_USER_FAILURE, payload: e.message });
    }
}




