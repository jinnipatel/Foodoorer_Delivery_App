import * as types from '../contants/action-types';

export const registerUserAction = (param, props) => {

    return {
        type: types.REGISTER_USER,
        payload: { param, props }
    }
}
