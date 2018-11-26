import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

// Sagas
import rootSaga from "./sagas";

// Reducers
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
const action = type => store.dispatch({type});

ReactDOM.render(
    <Provider store={store}>
        <App action={(type) => action(type)} />
    </Provider>, document.getElementById('root')
);