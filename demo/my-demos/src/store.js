

import { createStore, combineReducers } from 'redux';
import { reducer as contentReducer } from './content';
import { reducer as demoFilter } from './demoFilter'
import { reducer as breadReducer } from './breadcrumb';

const state = {
    demo: '',
    demoFilter: '',
    bread: ''
};

const reducer = combineReducers({
    demo: contentReducer,
    demoFilter,
    bread: breadReducer,
});

export default  createStore(reducer, state);