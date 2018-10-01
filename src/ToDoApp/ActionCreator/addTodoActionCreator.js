let nextTodoId = 0;

export const addTodoAction = text => ({
    type: 'ADD_TODO',
    text,
    id: nextTodoId++
});