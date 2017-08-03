
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }
            ]
        case TOGGLE_TODO:
            return state.map((v, k) => {
                if (v.id === action.id) {
                    return {
                        ...v,
                        completed: !v.completed
                    }
                } else {
                    return v;
                }
            });
        case REMOVE_TODO:
            return state.filter(todo => {
                return todo.id !== action.id;
            });
        default:
            return state;
    }
}
