import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'

const todos = (state = [], action) => {

    console.log('called addTodo', state);
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false
            }];
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id !== action.id ? todo : { ...todo, completed: !todo.completed });
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {

    console.log('called visi', state);
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({ todos, visibilityFilter });

export const store = createStore(todoApp);

const render = () => {
    ReactDOM.render(<App {...store.getState()} />, document.getElementById('root'));
};
store.subscribe(render);
render();