

import { createStore, combineReducers } from 'redux';
import { reducer as demoListReducer } from './demoList';
import { reducer as demoFilterReducer } from './demoFilter';
import { reducer as carouselReducer } from './carousel';

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
    demoFilter: '',
    carouselList: [
        {
            className: 'img-1',
            src: '/view/assets/demoImages/snake.png',
            link: '/view/project/snake/'
        },
        {
            className: 'img-2',
            src: '/view/assets/demoImages/plane.png',
            link: '/view/project/plane/'
        },
        {
            className: 'img-3',
            src: '/view/assets/demoImages/chess.png',
            link: '/view/project/chess/'
        },
        {
            className: 'img-4',
            src: '/view/assets/demoImages/collectStar.png',
            link: '/view/project/collect-star/'
        },
        {
            className: 'img-5',
            src: '/view/assets/demoImages/collectStar.png',
            link: '/view/project/collect-star/'
        }
    ]
};

const reducer = combineReducers({
    demoList: demoListReducer,
    demoFilter: demoFilterReducer,
    carouselList: carouselReducer
});

export default  createStore(reducer, state);