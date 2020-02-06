import {takeEvery, put} from 'redux-saga/effects';
import {LOGOUT} from '../types/types';
import {logoutSucces} from '../authReducer';

function* workerLogout () {
    yield put(logoutSucces())
}

export function* watchLogout () {
    yield takeEvery(LOGOUT, workerLogout)
}