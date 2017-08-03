


import React, { Component } from 'react';

export default ({ active, children, setFilter }) => {
    if (active) {
        return (
            <a href="#" className="filter not-selected" onClick={() => setFilter(children)}>{children}</a>
        )
    } else {
        return (
            <a href="#" className="filter selected">{children}</a>
        )
    }
}