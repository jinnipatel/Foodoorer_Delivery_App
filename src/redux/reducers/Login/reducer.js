import * as types from '../contants/action-types';

const initial = {
    user: {},
    token: '',
    loading: false,
};

const loginReducer = (state = initial, action) => {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            // console.log('user--', action.payload);
            // console.log('token--', action.payload.token);
            return {
                ...state,
                user: action.payload.data,
                token: action.payload.data.token,
                loading: false,
            };
        case types.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.LOGOUT:
            console.log('logout reducer')
            return {
                ...state,
                user: {},
                token: '',
            };
        default:
            return state;
    }
};

export default loginReducer;
