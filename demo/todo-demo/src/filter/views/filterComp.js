


import React, { Component } from 'react';
import Link from './linkCont';
import '../style.css';
import filter from '../filterTypes';

export default ({ setFilter }) => {
    return (
        <div className="todo-filter">
            <Link setFilter={setFilter}>{filter.SHOW_ALL}</Link>
            <Link setFilter={setFilter}>{filter.SHOW_COMPELETED}</Link>
            <Link setFilter={setFilter}>{filter.SHOW_UNCOMPELETED}</Link>
        </div>
    )
}