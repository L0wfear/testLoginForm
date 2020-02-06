import {createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import authReducer from './authReducer';
import { watchIsAuth } from './sagas/isAuthSaga';
import { watchLogin } from './sagas/loginSaga';
import { watchLogout } from './sagas/logoutSaga';

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchIsAuth);
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchLogout);
window.store = store;


export default store;