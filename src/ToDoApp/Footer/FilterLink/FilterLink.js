import React from 'react';
import { connect } from 'react-redux';

const Link = ({ active, onClick, children }) => {
    if (active) {
        return (<span>{children}</span>);
    }
    return (<a href="#" onClick={
        e => {
            e.preventDefault();
            onClick();
        }
    }>{children}</a>);
};

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter
        });
    }
});

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);