import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

// Sagas
function* newPostSaga(data) {
    yield put({type: 'NEW_POST', data: data.data});
}

function* deletePostSaga(data) {
    yield put({type: 'DELETE_POST', id: data.id});
}

function* incrementSaga() {
    yield delay(1000);
    yield put ({type: 'INCREMENT_COUNTER'});
}

function* decrementSaga() {
    yield delay(1000);
    yield put ({type: 'DECREMENT_COUNTER'});
}


// Watches for the Sagas
function* watchNewPost() {
    yield takeEvery('NEW_POST_REQUEST', newPostSaga);
}

function* watchDeletePost() {
    yield takeEvery('DELETE_POST_REQUEST', deletePostSaga);
}

function* watchIncrement() {
    yield takeEvery('INCREMENT_COUNTER_ASYNC', incrementSaga);
}

function* watchDecrement() {
    yield takeEvery('DECREMENT_COUNTER_ASYNC', decrementSaga);
}


export default function* rootSaga() {
    yield all([
        watchDeletePost(),
        watchNewPost(),
        watchIncrement(),
        watchDecrement(),
    ])
  }
