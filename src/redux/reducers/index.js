import { combineReducers } from 'redux'
import registerReducer from './Signup/reducer';
import commonReducer from './common/reducer';
import loginReducer from './Login/reducer';


const rootReducer = combineReducers({
    common: commonReducer,
    login: loginReducer,
    signup: registerReducer
})
export default rootReducer