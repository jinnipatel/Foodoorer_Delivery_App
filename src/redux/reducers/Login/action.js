import * as types from '../contants/action-types'

export const loginUserAction = (param, props, cbError, cbSuccess) => {
    return {
        type: types.LOGIN_USER,
        payload: { param, props, cbError, cbSuccess }
    }
}
