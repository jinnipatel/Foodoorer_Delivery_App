import { SET_ONBORADING_SUCCESS, SET_ONBORADING_FAILURE, types } from '../contants/action-types'

const initialState = {
    value: ''
}

const onboradingReducer = (state = initialState, action) => {
    console.log("Reducers ", action.payload)
    switch (action.type) {
        case SET_ONBORADING_SUCCESS:
            console.log("Reducers Set_onboarding_success", action.payload)
            return {
                ...state,
                value: action.payload
            }
        case SET_ONBORADING_FAILURE:
            console.log("Reducers Set_onboarding_failure".action.payload)
            return {
                ...state,
                value: action.payload
            }
        default:
            return state
    }

}

export default onboradingReducer