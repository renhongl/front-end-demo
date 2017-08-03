
import { SET_FILTER } from './actionTypes';

export default (state = '', action) => {
    switch(action.type) {
        case SET_FILTER: 
            return action.filter;
        default:
            return state;
    }
}