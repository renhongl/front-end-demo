

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

let nextId = 3;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextId++,
        text: text,
        completed: false
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    }
}