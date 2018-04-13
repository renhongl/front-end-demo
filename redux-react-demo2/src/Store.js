

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Reducer as messageListReducer } from './messageList';

const reducer = combineReducers({
    messageList: messageListReducer,
});

const initState = {
    messageList: [
        {
            name: 'Ren Hong',
            title: 'I have a dream',
            src: 'https://www.material-ui.com/images/kolage-128.jpg',
            date: '2018-03-12 23:12:04'
        },
        {
            name: 'Gui Xia',
            title: 'There have something need to say',
            src: 'https://www.material-ui.com/images/chexee-128.jpg',
            date: '2018-03-13 12:54:21'
        }
    ]
};

export default createStore(reducer, initState);

