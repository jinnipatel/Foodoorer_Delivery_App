import { takeEvery, takeLatest } from 'redux-saga/effects'
import { loginUser } from '../reducers/Login/saga'
import { fetch_Onborading } from '../reducers/Onborading/saga'
import * as types from '../reducers/contants/action-types';
import { registerUser } from '../reducers/Signup/saga'

export default function* rootSaga() {
    yield takeEvery(types.LOGIN_USER, loginUser)
    yield takeEvery(types.REGISTER_USER, registerUser)
    yield takeEvery(types.SET_ONBORADING, fetch_Onborading)
}







