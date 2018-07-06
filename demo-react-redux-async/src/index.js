


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Reducer as weatherReducer } from './component/weather';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { View as Weather, Reducer as loginReducer } from './component/weather';
import { View as Login } from './component/login';
import reduxThuck from 'redux-thunk';

const reducer = combineReducers({
    weather: weatherReducer,
    login: loginReducer,
});

const initState = {
    weather: null,
    login: null
}

let store = createStore(reducer, initState, applyMiddleware(reduxThuck));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Weather />
            <Login />
        </div>
    </Provider>,
    document.getElementById('root')
)





