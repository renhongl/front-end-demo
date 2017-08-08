

import { SHOW_CAROUSEL } from './actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case SHOW_CAROUSEL:
            return state;
        default:
            return state;
    }
}