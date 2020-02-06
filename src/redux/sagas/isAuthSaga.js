import {takeEvery, put} from 'redux-saga/effects';
import {CHECK_IS_AUTH} from '../types/types';
import {setIsAuth} from '../authReducer';

export function* watchIsAuth () {
    yield takeEvery(CHECK_IS_AUTH, workerIsAuth)
}

function* workerIsAuth () {
    yield put(setIsAuth())
}