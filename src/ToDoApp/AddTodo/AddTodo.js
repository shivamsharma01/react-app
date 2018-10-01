import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;
export let AddTodo = ({dispatch}) => {
    let input;
    return (<div>
        <input ref={node => input = node}></input>
        <button onClick={() => {
            dispatch(
                {
                    type: 'ADD_TODO',
                    text: input.value,
                    id: nextTodoId++
                });
            input.value = '';
        }}>Add</button>
    </div>);
}

AddTodo = connect()(AddTodo);