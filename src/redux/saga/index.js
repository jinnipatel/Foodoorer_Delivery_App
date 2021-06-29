import { takeEvery, takeLatest } from 'redux-saga/effects'
import { loginUser } from './loginSaga'
import * as types from '../reducers/contants/action-types';
import { SignupUser } from './signupSaga';


export default function* rootSaga() {
    yield takeEvery(types.LOGIN_USER, loginUser)
    yield takeEvery(types.REGISTER_USER, SignupUser)
}







