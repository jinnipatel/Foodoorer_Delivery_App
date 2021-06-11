// import { CREATE_USER, CREATE_USER_FAILURE, CREATE_USER_SUCCESS } from '../contants/action-types';

// const inital = {
//     signResponse: {},
//     loader: false
// }

// const signupReducer = (state = inital, action) => {
//     switch (action.type) {
//         case CREATE_USER:
//             console.log("Signup data Reducers--", action.payload.signResponse)
//             return {
//                 ...state,
//                 loader: true,
//                 signResponse: action.payload
//             }
//         case CREATE_USER_SUCCESS:
//             console.log("Signup data user_success", action.payload)
//             return {
//                 ...state,
//                 loader: false,
//                 signResponse: action.payload,
//             };
//         case CREATE_USER_FAILURE:
//             return {
//                 ...state,
//                 loader: false,
//                 signResponse: action.payload
//             }
//         default:
//             return state

//     }
// }

// export default signupReducer


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

