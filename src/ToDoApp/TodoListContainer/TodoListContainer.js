import { connect } from 'react-redux';
import { TodoList } from './TodoList/TodoList.js';
import { toggleActionCreator } from './../ActionCreator'

const mapStateToProps = (state) => ({
    todos: getFilteredTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleActionCreator(id));
    }
});


export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);


const getFilteredTodos = (todos, filter = 'SHOW_ALL') => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};
