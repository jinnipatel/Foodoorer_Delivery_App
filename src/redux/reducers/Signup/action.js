import { CREATE_USER } from "../contants/action-types";


export const createUser = (user) => ({
    type: CREATE_USER,
    payload: user
})
