import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

function* newPostSaga(data) {
    yield put({type: 'NEW_POST', data: data.data});
}

function* deletePostSaga(data) {
    yield put({type: 'DELETE_POST', id: data.id});
}

function* watchNewPost(){
    yield takeEvery('NEW_POST_REQUEST', newPostSaga);
}

function* watchDeletePost(){
    yield takeEvery('DELETE_POST_REQUEST', deletePostSaga);
}

export default function* rootSaga() {
    yield all([
        watchDeletePost(),
        watchNewPost(),
    ])
  }
