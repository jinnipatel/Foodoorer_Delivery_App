import * as types from '../contants/action-types';

export const registerUserAction = (user, props) => {
    return {
        type: types.REGISTER_USER,
        payload: user, props
    }
}
