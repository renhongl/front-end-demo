import todoList from './todoList';
import time from './time';
import detail from './detail';
import { combineReducers } from 'redux';
import Tool from '../core/Tool';

const reducer =  combineReducers({
    todoList,
    time,
    detail
});

export default reducer;