

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    };
} 

export function removeTodo(text) {
    return {
        type: REMOVE_TODO,
        payload: text
    }
}