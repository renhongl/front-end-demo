
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from '../container/HeaderContainer';
import TodoContainer from '../container/TodoContainer';

export default class Dashboard extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <TodoContainer />
            </div>
        )
    }
}




