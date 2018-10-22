import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';


const initState = {
    todos: [],
    posts: []
}

const myReducer(state = initState, action){
    if (action.type == 'ADD_TODO'){
        return {
            todos: [...state.todos, action.todo]
        }
    }
}

const store = createStore(myReducer);

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };

store.dispatch(todoAction); 