

import { createStore, combineReducers } from 'redux';
import { reducer as navigationReducer } from './navigation';

const state = {
    demo: 'https://renhongl.github.io/view/project/plane/'
};

const reducer = combineReducers({
    demo: navigationReducer
});

export default  createStore(reducer, state);