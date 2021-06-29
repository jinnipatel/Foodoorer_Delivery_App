import * as types from '../contants/action-types'

export const loginUserAction = (param, props) => {
    return {
        type: types.LOGIN_USER,
        payload: { param, props }
    }
}

