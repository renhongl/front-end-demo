

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Background} from './component/background';

import './share/style/global.less';

const Home = () => (
    <Background />
)

const App = () => (
    <Router>
        <Route exact path='/' component={Home}></Route>
    </Router>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

