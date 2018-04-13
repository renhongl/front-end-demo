

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './Store';
import { View as MessageList } from './messageList';
import './common.css';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <MessageList />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);