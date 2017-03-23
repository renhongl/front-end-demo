
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/reducer';
import { Router, Route, browserHistory } from 'react-router';
import Dashboard from './page/dashboard';
import TestPage from './page/test';

const state = {
    time: new Date(),
    todo: ['test1', 'test2'],
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

