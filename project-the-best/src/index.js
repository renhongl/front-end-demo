

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Home } from './component/home';
import { Login } from './component/login';
import 'antd/dist/antd.less';
import './share/style/global.less';
import './share/mr/mr.css';

let loggedIn = window.localStorage.getItem('loggedIn');

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    login = () => {
        this.setState({
            loggedIn: true
        })
    }

    logout = () => {
        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <Router>
            <div className='home'>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path="/" render={() => (
                this.state.loggedIn ? (
                    <Redirect to="/home"/>
                ) : (
                    <Login login={this.login}/>
                )
            )}/>
            </div>
        </Router>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)

