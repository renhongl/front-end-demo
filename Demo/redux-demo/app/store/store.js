
import { createStore } from 'redux';
import reducer from '../reducer/reducer';
import todoData from '../mock/todo.json';

export const state = {
    todoList: todoData.list,
    time: new Date()
};

export const store = createStore(reducer, state);



