import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { view as TodoApp } from './app/';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
