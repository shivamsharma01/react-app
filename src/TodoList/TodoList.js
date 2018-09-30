import React from 'react';
import { Todo } from './Todo/Todo.js';

export const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}></Todo>);
                })
            }
        </ul>
    );
};
