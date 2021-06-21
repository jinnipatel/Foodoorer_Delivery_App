import * as types from '../contants/action-types';
import { put, call } from 'redux-saga/effects';
import { SignUpService } from './services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../../routes/routes';
import Snackbar from 'react-native-snackbar';


export function* registerUser(action) {
    try {
        console.log(action)
        let { props } = action.payload
        const result = yield call(SignUpService, action);
        // console.log('############', result)
        if (result?.isSucess)
            yield put({ type: types.REGISTER_USER_SUCCESS, payload: result.Result.data.data })
        console.log("SignUp token", result.Result.data.data.token)
        // console.log("token------", result)
        AsyncStorage.setItem("token", result.Result.data.data.token)
        AsyncStorage.setItem("userData", result.Result.data)
        setTimeout(() => {
            props.navigation.navigate(Routes.Authenticated)
        }, 2000)
        Snackbar.show({
            text: "SignUp Successfully",
            duration: Snackbar.LENGTH_SHORT,
        });


    }
    catch (e) {
        // console.log("user failure")
        yield call(Alert.alert, "Faliure", "SignUp Unsuccessfully ")
        yield put({ type: types.REGISTER_USER_FAILURE, payload: e.message });
        Snackbar.show({
            test: "SignUp Unsuccessfully ",
            duration: Snackbar.LENGTH_LONG
        })
        AsyncStorage.removeItem("token")
    }
}




