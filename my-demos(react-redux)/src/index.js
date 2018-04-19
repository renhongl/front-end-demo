
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Download from './pages/Download';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={Home} />
                <Route path='/view/' component={Home}/>
                <Route path='/view/about/' component={About}/>
                <Route path='/view/download/' component={Download}/>
                <Route path='/view/*' component={NotFound}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
