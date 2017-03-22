
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from './container/HeaderContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/reducer';
import TodoContainer from './container/TodoContainer';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Dashboard from './page/dashboard';
import TestPage from './page/test';

const state = {
    time: new Date(),
    todo: ['test1', 'test2']
};

const store = createStore(reducer, state);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Dashboard} />
            <Route path="/test" component={TestPage} />
        </Router>
    </Provider>,
    document.querySelector('#app')
)

