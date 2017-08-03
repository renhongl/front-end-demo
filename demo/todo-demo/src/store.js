

import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './todo/';
import { reducer as filterReducer } from './filter/';

const state = {
    todoList: [
        {
            id: 0,
            text: '111',
            completed: false
        },
        {
            id: 1,
            text: '222',
            completed: true
        },
        {
            id: 2,
            text: '333',
            completed: true
        }
    ],
    filter: '全部'
};

const reducer = combineReducers({
    todoList: todoReducer,
    filter: filterReducer
});

export default  createStore(reducer, state);