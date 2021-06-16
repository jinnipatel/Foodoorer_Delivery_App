import { SET_ONBORADING_SUCCESS, SET_ONBORADING_FAILURE } from '../contants/action-types'
import { put } from 'redux-saga/effects'



export function* fetch_Onborading(action) {
    try {
        // console.log("saga Onborading set_success", action.payload)
        yield put({ type: SET_ONBORADING_SUCCESS, payload: action.payload })
    } catch (error) {
        // console.log("Saga Onborading set_failure", action.payload)
        yield put({ type: SET_ONBORADING_FAILURE, payload: error.message })
    }
}