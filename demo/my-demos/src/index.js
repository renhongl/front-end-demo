import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { view as App } from './app/';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
