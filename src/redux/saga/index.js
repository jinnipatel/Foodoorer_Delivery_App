import { CREATE_USER, FETCH_USER, SET_ONBORADING, types } from '../reducers/contants/action-types'
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchUser } from '../reducers/Login/saga'
import { createUser } from '../reducers/Signup/action'
import { fetch_Onborading } from '../reducers/Onborading/saga'
import { createUsers } from '../reducers/Signup/saga'


export default function* rootSaga() {
    // yield takeEvery(FETCH_USER, fetchUser)
    // yield takeLatest(FETCH_USER, login)
    yield takeEvery(CREATE_USER, createUsers)
    yield takeEvery(SET_ONBORADING, fetch_Onborading)
}







