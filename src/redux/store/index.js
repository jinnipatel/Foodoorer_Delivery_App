import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,

};
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

NetInfo.fetch().then(state => {
    if (state.isConnected) {
        sagaMiddleware.run(rootSaga)
    }
})


export let persistor = persistStore(store, null, () => {
    console.log('rehydrated');
});

sagaMiddleware.run(rootSaga);
export default store




