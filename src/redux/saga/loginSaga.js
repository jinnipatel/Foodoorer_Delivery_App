import { call, put } from 'redux-saga/effects';
import Routes from '../../routes/routes';
import { callService } from '../../services';
import apiUrl from '../../services/serverEndpoints';
import { notifyMsg, resetNavigation } from '../../utils/commonFunctions';
import * as types from '../reducers/contants/action-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* loginUser(action) {
    let { props } = action.payload;
    debugger;
    try {
        debugger;
        const result = yield call(callService, {
            url: apiUrl.login,
            method: 'POST',
            params: action.payload.param,
            props: props,
        });
        debugger;
        console.log('LOGIN -------', result);
        if (result.isSucess) {
            debugger;
            let message = result.Result.message;
            let data = result.Result.data;
            AsyncStorage.setItem('userData', JSON.stringify(data));
            AsyncStorage.setItem('token', result.Result.data.token);
            yield put({ type: types.LOGIN_USER_SUCCESS, payload: data });
            setTimeout(() => {
                notifyMsg({ message: message });
                resetNavigation(props.navigation, Routes.Authenticated);
            }, 1000);
        } else {
            yield put({ type: types.LOGIN_USER_FAILURE });
            setTimeout(() => {
                notifyMsg({ message: result?.error?.message, success: false });
            }, 100);
        }
    } catch (error) {
        console.log(error);
        notifyMsg({ message: 'Failed ! try again', success: false });
        yield put({ type: types.LOGIN_USER_FAILURE });
    }
}
