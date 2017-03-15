
import { createStore } from 'redux';
import {todoListeducer} from '../reducer/todoListReducer';

export const todoList = [];
export const todoListStore = createStore(todoListeducer);



