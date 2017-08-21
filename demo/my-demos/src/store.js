

import { createStore, combineReducers } from 'redux';
import { reducer as navigationReducer } from './navigation';
import { reducer as demoFilter } from './demoFilter'

const state = {
    demo: '',
    demoFilter: ''
};

const reducer = combineReducers({
    demo: navigationReducer,
    demoFilter
});

export default  createStore(reducer, state);