

import { CHANGE_DEMO_FILTER } from './actionTypes';

export default (state = '', action) => {
    switch(action.type) {
        case CHANGE_DEMO_FILTER:
            return action.filter;
        default:
            return state;
    }
}