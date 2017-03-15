

const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    };
} 