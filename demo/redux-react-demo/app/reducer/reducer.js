

import timeReducer from './timeReducer';
import todoReducer from './todoReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers(
    {
        time: timeReducer,
        todo: todoReducer
    }
);

export default reducer;