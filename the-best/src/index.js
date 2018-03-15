

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './component/home';
import 'antd/dist/antd.less';
import './share/style/global.less';

const App = () => (
    <Router>
        <Route exact path='/' component={Home}></Route>
    </Router>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

