import * as types from '../contants/action-types';
import { put, call } from 'redux-saga/effects';
import { SignUpService } from './services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../../routes/routes';
import Snackbar from 'react-native-snackbar';
import { Alert } from 'react-native';


export function* registerUser(action) {
    try {

        let { props } = action
        // console.log('\n\n', props, "propsss\n\n")
        const result = yield call(SignUpService, action);
        if (result?.isSucess)
            yield put({ type: types.REGISTER_USER_SUCCESS, payload: result.Result.data.data })
        console.log("SignUp token", result.Result.data.data.token)
        console.log("token------", result)
        AsyncStorage.setItem("token", result.Result.data.data.token)
        AsyncStorage.setItem("userdata", JSON.stringify(result.Result.data.data))
        setTimeout(() => {
            props.navigation.navigate(Routes.Authenticated)
        }, 2000)
    }
    catch (e) {
        // console.log("user failure")
        // yield call(Alert.alert, "Faliure", "SignUp Unsuccessfully ")
        yield put({ type: types.REGISTER_USER_FAILURE, payload: e.message });
        Snackbar.show({
            test: "SignUp Unsuccessfully ",
            duration: Snackbar.LENGTH_LONG
        })
        // AsyncStorage.removeItem("token")
    }
}




