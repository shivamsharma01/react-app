import React, { Component } from 'react';
import './App.css';
import { store } from './index.js';
import { FilterLink } from './FilterLink/FilterLink.js';
import { TodoList } from './TodoList/TodoList.js';

let nextTodoId = 0;

const getFilteredTodos = (todos, filter = 'SHOW_ALL') => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ALL':
      return todos;
  };
};

class App extends Component {

  render() {
    const { todos, visibilityFilter } = this.props;
    const filteredTodos = getFilteredTodos(todos, visibilityFilter);
    return (
      <div className="App">
        <h2>Welcome to the todo app</h2>
        <hr></hr>
        <h3>Add Todo</h3>
        <input ref={node => this.input = node}></input>
        <button onClick={() => {
          store.dispatch(
            {
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++
            }
          );
          this.input.value = '';
        }}>Add</button>
        <TodoList todos={filteredTodos} onTodoClick={id => store.dispatch({ type: 'TOGGLE_TODO', id })}></TodoList>
        <p>
          Show:
          {'  '}<FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
          {'  '}<FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>Active</FilterLink>
          {'  '}<FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>Completed</FilterLink>
        </p>
      </div>
    );
  }
}

export default App;
