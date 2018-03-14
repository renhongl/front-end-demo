

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Background } from './component/background';

import { Footer } from './component/footer';

import 'antd/dist/antd.less';
import './share/style/global.less';


const Home = () => (
    <div className='home'>
        <Background />
        <Footer />
    </div>
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

