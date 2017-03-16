import todoList from './todoReducer';
import { combineReducers } from 'redux';
import Tool from '../core/Tool';
import { defaultState } from '../store/store';

const reducer =  combineReducers({
    todoList
});

export default reducer;