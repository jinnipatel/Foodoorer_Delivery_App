import { combineReducers } from 'redux'
import loginReducer from './Login/reducers'
import signupReducer from './Signup/reducers'
import onboradingReducer from './Onborading/reducers'

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    onborading: onboradingReducer
})

export default rootReducer