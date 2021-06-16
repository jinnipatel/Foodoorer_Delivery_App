import * as types from '../contants/action-types';
const initial = {
    user: [],
    token: ''
};

const loginReducer = (state = initial, action) => {
    // console.log("loginReducer----------------- value")
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            // console.log("login-Reducer success", action.payload)
            return {
                ...state,
                user: action.payload,
            };
        case types.LOGIN_USER_FAILURE:
            // console.log("login-Reducer failure", action.payload)
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
export default loginReducer;


