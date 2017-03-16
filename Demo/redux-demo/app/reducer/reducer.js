import todoList from './todoList';
import time from './time';
import { combineReducers } from 'redux';
import Tool from '../core/Tool';

const reducer =  combineReducers({
    todoList,
    time
});

export default reducer;