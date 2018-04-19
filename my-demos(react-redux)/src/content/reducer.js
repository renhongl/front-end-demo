
import { CHANGE_DEMO } from './actionTypes';

export default (state = '', action) => {
    switch(action.type) {
        case CHANGE_DEMO:
            return action.url;
        default:
            return state;
    }
}