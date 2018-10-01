import React from 'react';

export const Todo = ({ text, completed, onClick }) => {
    return (<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</li>);
};
