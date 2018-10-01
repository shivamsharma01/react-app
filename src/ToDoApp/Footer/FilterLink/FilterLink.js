import React from 'react';
import { connect } from 'react-redux';
import { visibilityFilterActionCreator } from './../../ActionCreator'

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
        dispatch(visibilityFilterActionCreator(ownProps.filter));
    }
});

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);