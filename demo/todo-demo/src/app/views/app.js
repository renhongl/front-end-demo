
import { view as TodoComp } from '../../todo/';
import { view as FilterComp } from '../../filter/';
import React, { Component } from 'react';

export default () => {
    return (
        <div>
            <TodoComp />
            <FilterComp />
        </div>
    )
}