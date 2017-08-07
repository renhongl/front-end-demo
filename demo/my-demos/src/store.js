

import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './todo/';
import { reducer as filterReducer } from './filter/';

const state = {
    todoList: [
        {
            id: 0,
            text: '探索vis topology',
            completed: false
        },
        {
            id: 1,
            text: '将keyline topology换成vis topology',
            completed: true
        },
        {
            id: 2,
            text: '学习新技术',
            completed: true
        }
    ],
    filter: '全部',
    demoList: [
        {
            id: 0,
            title: 'demo1'
        },
        {
            id: 1,
            title: 'demo1'
        },
        {
            id: 2,
            title: 'demo1'
        }
    ]
};

const reducer = combineReducers({
    todoList: todoReducer,
    filter: filterReducer
});

export default  createStore(reducer, state);