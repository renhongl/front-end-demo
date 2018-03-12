

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Menu } from './component/menu';
import { Home } from './page/home';
import { About } from './page/about';


const App = () => (
    <Router>
        <div>
            <Menu />
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
        </div>
    </Router>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

