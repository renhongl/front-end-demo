

import { createStore, combineReducers } from 'redux';
import { reducer as demoListReducer } from './demoList';
import { reducer as demoFilterReducer } from './demoFilter';
import { reducer as carouselReducer } from './carousel';

const state = {
    demoList: [
        {
            id: 0,
            title: '贪吃蛇',
            url: '/project/snake/'
        },
        {
            id: 1,
            title: '打飞机',
            url: '/project/plane/'
        },
        {
            id: 2,
            title: '五子棋',
            url: '/project/chess/'
        },
        {
            id: 3,
            title: '收集星星',
            url: '/project/collect-star/'
        }
    ],
    demoFilter: '',
    carouselList: [
        {
            className: 'img-1',
            src: '/assets/demoImages/snake.png',
            link: '/project/snake/'
        },
        {
            className: 'img-2',
            src: '/assets/demoImages/plane.png',
            link: '/project/plane/'
        },
        {
            className: 'img-3',
            src: '/assets/demoImages/chess.png',
            link: '/project/chess/'
        },
        {
            className: 'img-4',
            src: '/assets/demoImages/collectStar.png',
            link: '/project/collect-star/'
        },
        {
            className: 'img-5',
            src: '/assets/demoImages/collectStar.png',
            link: '/project/collect-star/'
        }
    ]
};

const reducer = combineReducers({
    demoList: demoListReducer,
    demoFilter: demoFilterReducer,
    carouselList: carouselReducer
});

export default  createStore(reducer, state);