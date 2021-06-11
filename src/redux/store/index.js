import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
// import loginReducer from '../reducers/Login/reducers';
import rootSaga from '../saga';
console.log("Hello Store")
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);
// console.log("-----------------------")
// store.subscribe(() => {
//     console.log(store.getState());
// })
// console.log("----------------")

export default store




