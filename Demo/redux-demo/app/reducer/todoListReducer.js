import {todoList} from '../store/todoListStore';

export function todoListeducer(state = todoList, action) {
    switch (action.type) {
        case 'ADD_TODO':
            let newState = [];
            Object.assign(newState, state);
            newState.push(action.payload);
            return newState;
        default:
            return state;
    }
}