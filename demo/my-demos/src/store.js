

import { createStore, combineReducers } from 'redux';
import { reducer as navigationReducer } from './navigation';

const state = {
    demo: 'https://renhongl.github.io/view/project/snake/'
};

const reducer = combineReducers({
    demo: navigationReducer
});

export default  createStore(reducer, state);