import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
console.log("Hello Store")
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blackList: [],
    // whiteList: "onborading",

};
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

export let persistor = persistStore(store, null, () => {
    console.log('rehydrated');
});

sagaMiddleware.run(rootSaga);
export default store




