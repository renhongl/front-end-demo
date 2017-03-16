
import { createStore } from 'redux';
import reducer from '../reducer/reducer';
import todoData from '../mock/todo.json';

export const defaultState = {
    todoList: []
};

export const store = createStore(reducer);



