import * as types from '../contants/action-types';
import { put, call } from 'redux-saga/effects';
import { loginService } from './services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../../routes/routes';
import Snackbar from 'react-native-snackbar';
import { Alert } from 'react-native';



export function* loginUser(action) {
    try {
        console.log("Hello Saga")
        // console.log(action)
        let { props } = action.payload
        const result = yield call(loginService, action);
        debugger
        if (result?.isSucess) {
            debugger
            yield put({ type: types.LOGIN_USER_SUCCESS, payload: result.Result.data.data });
            console.log("token", result.Result.data.data.token)
            AsyncStorage.setItem("token", result.Result.data.data.token)
            AsyncStorage.setItem("userdata", JSON.stringify(result.Result.data.data))
            setTimeout(() => {
                props.navigation.navigate(Routes.Authenticated)
            }, 2000)
            Snackbar.show({
                text: "Login Successfully",
                duration: Snackbar.LENGTH_SHORT,
            });
        }
    }
    catch (e) {
        // console.log("user failure", action.payload)
        yield call(Alert.alert, "Faliure", "Enter Validate Email & Password")
        yield put({ type: types.LOGIN_USER_FAILURE, payload: e.message });
        // AsyncStorage.removeItem("token")
        Snackbar.show({
            test: "Plz Enter Validate Email & Password",
            duration: Snackbar.LENGTH_LONG
        })

    }
}
