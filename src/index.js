import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { todos, visibilityFilter } from './ToDoApp/Reducer';  
import { ToDoApp } from './ToDoApp/TodoApp.js';
import './index.css';

const todoApp = combineReducers({ todos, visibilityFilter });

ReactDOM.render(<Provider store={createStore(todoApp)}><ToDoApp /></Provider>, document.getElementById('root'));