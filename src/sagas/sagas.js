import axios from 'axios';
import { delay } from 'redux-saga'
import { put, takeEvery, all, call, take, fork } from 'redux-saga/effects'

// API Call
function fetchImages(planet) {
    return axios.get(`https://images-api.nasa.gov/search?q=${planet}&media_type=image`)
}

// Sagas
function* newPostSaga(data) {
    yield put({type: 'NEW_POST', data: data.data});
}

function* deletePostSaga(data) {
    yield put({type: 'DELETE_POST', id: data.id});
}

function* callNasaApi(data) {
    const planet = data.planet.planetName;
    try {
        const response = yield call(fetchImages, planet)
        let data = [...response.data.collection.items];

        let planet_images = [], nasa_id = '', image_data = '';
        for (let index = 0; index < 10; index++) {
            image_data = data[index].data[0];
            nasa_id = image_data.nasa_id;

            planet_images.push({
                id: nasa_id,
                uri: `https://images-assets.nasa.gov/image/${nasa_id}/${nasa_id}~orig.jpg`,
                title: image_data.title,
                date: image_data.date_created.substr(0,10),
                desc: image_data.description_508
            });
        }

        yield put({type: 'NASA_IMAGES_SUCCESS', images: [...planet_images]})
     } catch (error) {
        yield put({type: 'NASA_IMAGES_FAILED', error})
     }
}

function* incrementSaga() {
    yield delay(1000);
    yield put({type: 'INCREMENT_COUNTER'});
}

function* decrementSaga() {
    yield delay(1000);
    yield put({type: 'DECREMENT_COUNTER'});
}

function* authorize(password) {
    try {
        if(password === 'Qwertyu') {
            yield put({type: 'LOGIN_SUCCESS'});
        } else {
            throw new Error('Incorrect password!');
        }
    } catch(error) {
        yield put({type: 'LOGIN_FAILED', error});
    }
}


// Watches for the Sagas
function* watchNewPost() {
    yield takeEvery('NEW_POST_REQUEST', newPostSaga);
}

function* watchDeletePost() {
    yield takeEvery('DELETE_POST_REQUEST', deletePostSaga);
}

function* watchFirstThreePosts() {
    for (let i=0; i<3; i += 1) {
        yield take('NEW_POST_REQUEST');
    }
    yield put({type: 'SHOW_CONGRATULATIONS'})
}

function * watchNasaApi() {
    yield takeEvery('NASA_IMAGES_REQUEST', callNasaApi);
}

function* watchIncrement() {
    yield takeEvery('INCREMENT_COUNTER_ASYNC', incrementSaga);
}

function* watchDecrement() {
    yield takeEvery('DECREMENT_COUNTER_ASYNC', decrementSaga);
}

function* loginFlow() {
    while (true) {
        const { data } = yield take('LOGIN_REQUEST');
        const { password } = data;

        yield fork(authorize, password);
        yield take(['LOGOUT_REQUEST', 'LOGOUT_ERROR']);
        yield put({type: 'LOGOUT'});
    }
}


export default function* rootSaga() {
    yield all([
        watchDeletePost(),
        watchNewPost(),
        watchFirstThreePosts(),
        watchNasaApi(),
        loginFlow(),
        watchIncrement(),
        watchDecrement(),
    ])
  }
