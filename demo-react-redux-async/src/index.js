


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Reducer as weatherReducer } from './component/weather';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { View as Weather } from './component/weather';
import reduxThuck from 'redux-thunk';

const reducer = combineReducers({
    weather: weatherReducer,
});

const initState = {
    weather: null
}

let store = createStore(reducer, initState, applyMiddleware(reduxThuck));

ReactDOM.render(
    <Provider store={store}>
        <Weather />
    </Provider>,
    document.getElementById('root')
)





