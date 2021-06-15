import * as types from '../contants/action-types';

const initial = {
    user: [],
};

const registerReducer = (state = initial, action) => {
    console.log("SignUp Reducers--------------")
    switch (action.type) {
        case types.REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case types.REGISTER_USER_FAILURE:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}

export default registerReducer;

