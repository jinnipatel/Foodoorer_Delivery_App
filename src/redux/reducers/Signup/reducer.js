import * as types from '../contants/action-types';

const initial = {
    register: {},
    // token: '',
    loading: false
};

const registerReducer = (state = initial, action) => {

    debugger
    switch (action.type) {
        case types.REGISTER_USER_SUCCESS:
            // console.log("SIGNUP Reducer ", action)
            return {
                ...state,
                register: action.payload.data,
                // token: action.payload.token,
                loading: false
            };
        case types.REGISTER_USER_FAILURE:
            return {
                ...state,
                loading: false
                // user: action.payload,
            };
        default:
            return state;
    }
}

export default registerReducer;

