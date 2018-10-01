import React from 'react';
import './TodoApp.css';
import { AddTodo } from './AddTodo/AddTodo';
import { TodoListContainer } from './TodoListContainer/TodoListContainer';
import { Footer } from './Footer/Footer.js';

export const ToDoApp = () => (
    <div className="App">
        <h2>Welcome to the todo app</h2>
        <hr></hr>
        <h3>Add Todo</h3>
        <AddTodo />
        <hr></hr>
        <TodoListContainer />
        <hr></hr>
        <Footer />
    </div>);

