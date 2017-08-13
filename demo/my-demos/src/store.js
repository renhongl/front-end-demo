

import { createStore, combineReducers } from 'redux';
import { reducer as demoListReducer } from './demoList';
import { reducer as demoFilterReducer } from './demoFilter';

const state = {
    demoList: [
        {
            id: 0,
            title: '贪吃蛇',
            url: '/view/project/snake/'
        },
        {
            id: 1,
            title: '打飞机',
            url: '/view/project/plane/'
        },
        {
            id: 2,
            title: '五子棋',
            url: '/view/project/chess/'
        },
        {
            id: 3,
            title: '收集星星',
            url: '/view/project/collect-star/'
        }
    ],
    demoFilter: ''
};

const reducer = combineReducers({
    demoList: demoListReducer,
    demoFilter: demoFilterReducer
});

export default  createStore(reducer, state);