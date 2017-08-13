
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
import { Router, Route, browserHistory } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="https://renhongl.github.io/view/" component={Home}/>
            <Route path="https://renhongl.github.io/view/about" component={About}/>
            <Route path="*" component={NotFound}/>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
