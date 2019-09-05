import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Redux middleware
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

// Sagas
import rootSaga from './sagas';

// Reducers
import rootReducer from './reducers/rootReducer';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['showCongratulations', 'posts', 'loggedIn', 'loginFailed']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);
// const action = type => store.dispatch({type});

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root')
);