import {takeEvery, put, call} from 'redux-saga/effects';
import {LOGIN} from '../types/types';
import {loginSucces} from '../authReducer';

const serverRequest = () => {
    return {jwt: '86fasfgfsogHGad'}
}


function* workerLogin () {
    const token = yield call(serverRequest);
    yield put(loginSucces(token))
}

export function* watchLogin () {
    yield takeEvery(LOGIN, workerLogin)
}