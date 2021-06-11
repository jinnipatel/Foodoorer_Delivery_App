// import { CREATE_USER } from "../contants/action-types";


// export const createUser = (user) =>
// ({
//     type: CREATE_USER,
//     payload: user
// })
import * as types from '../contants/action-types';

export const registerUserAction = (user) => {
    return {
        type: types.REGISTER_USER,
        payload: user,
    }
}
