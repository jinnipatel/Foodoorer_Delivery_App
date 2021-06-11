// import * as types from '../contants/action-types'

// const initial = {
//     user: [],
//     error: false
// }

// const loginReducer = (state = initial, action) => {
//     console.log("loginReducer value", action.payload)
//     switch (action.type) {
//         case types.FETCH_USER_SUCCESS:
//             console.log("login-Reducer success", action.payload)
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         case types.FETCH_USER_FAILURE:
//             console.log("login-Reducer failure", action.payload)
//             return {
//                 ...state,
//                 error: true,
//                 user: action.payload
//             }
//         default:
//             return state
//     }
// };
// export default loginReducer


// // const initState = {
// //     token: localStorage.getItem('token'),
// //     user: {},
// //     error: false

// // }

// // const loginReducer = (state = initState, action) => {
// //     switch (action.type) {
// //         case LOGIN_SUCCEEDED:
// //             return {
// //                 ...state,
// //                 token: action.payload.access_token,
// //                 user: action.payload.user
// //             }
// //         case LOGIN_FAILED: {
// //             return {
// //                 ...state,
// //                 error: true,
// //                 user: {}
// //             }
// //         }
// //     }
// // }

// // export default loginReducer


import * as types from '../contants/action-types';
const initial = {
    user: [],
    token: ''
};

const loginReducer = (state = initial, action) => {
    console.log("loginReducer----------------- value")
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            console.log("login-Reducer success", action.payload)
            return {
                ...state,
                user: action.payload,
            };
        case types.LOGIN_USER_FAILURE:
            console.log("login-Reducer failure", action.payload)
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
export default loginReducer;


