import { call, put } from 'redux-saga/effects';
import Routes from '../../routes/routes';
import { callService } from '../../services';
import apiUrl from '../../services/serverEndpoints';
import { notifyMsg, resetNavigation } from '../../utils/commonFunctions';
import * as types from '../reducers/contants/action-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* SignupUser(action) {
    let { props } = action.payload;
    try {
        const result = yield call(callService, {
            url: apiUrl.register,
            method: 'POST',
            params: action.payload.param,
            props: props,
        });
        // console.log('SIGN-UP SAGA RESULT', result);
        if (result.isSucess) {
            let message = result.Result.message;
            let data = result.Result.data;
            // console.log(data);
            AsyncStorage.setItem('userData', JSON.stringify(data));
            AsyncStorage.setItem('token', result.Result.data.token);
            yield put({ type: types.REGISTER_USER_SUCCESS, payload: data });
            setTimeout(() => {
                notifyMsg({ message: message });
                resetNavigation(props.navigation, Routes.Authenticated);
            }, 1000);
        } else {
            yield put({ type: types.REGISTER_USER_FAILURE });
            setTimeout(() => {
                notifyMsg({ message: result?.error?.message, success: false });
            }, 100);
        }
    } catch (error) {
        notifyMsg({ message: 'Failed ! try again', success: false });
        yield put({ type: types.REGISTER_USER_FAILURE });
    }
}
