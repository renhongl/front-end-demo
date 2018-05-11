
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';
import todoData from '../mock/todo.json';

export const state = {
    todoList: todoData.list,
    time: new Date(),
    detail: {}
};

export const store = createStore(reducer, state, applyMiddleware(thunk));



