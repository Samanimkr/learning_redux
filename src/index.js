import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// Sagas
import { helloSaga } from "./sagas";

// Reducers
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(helloSaga);

const action = type => store.dispatch({type});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));