import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../ActionCreator'

export let AddTodo = ({dispatch}) => {
    let input;
    return (<div>
        <input ref={node => input = node}></input>
        <button onClick={() => {
            dispatch(addTodoAction(input.value));
            input.value = '';
        }}>Add</button>
    </div>);
}

AddTodo = connect()(AddTodo);