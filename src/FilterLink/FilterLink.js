import React from 'react';
import { store } from '../index.js';

export const FilterLink = ({ filter, currentFilter, children }) => {
    if (filter === currentFilter) {
        return (<span>{children}</span>);
    } else {
        return (<a href="#" onClick={
            e => {
                e.preventDefault();
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                });
            }
        }>{children}</a>);
    }
};
